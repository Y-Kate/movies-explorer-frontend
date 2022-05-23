import { useCallback, useState } from "react";
import validator from 'validator';

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [requiredFields, setRequiredFields] = useState({});
  const [isValid, setIsValid] = useState(false);

  const initRequiredFields = useCallback((inputNamesObj) => {
    setRequiredFields(inputNamesObj);
    setValues(inputNamesObj);
  }, [])

  function emailValidateMessage(value) {
    const isValid = validator.isEmail(value);
    if (isValid) return '';
    return 'Не корректный E-mail'
  }

  function nameValidateMessage(value, target) {
    const regex = /[^a-zа-я\-ёЁ\s]/i;
    const isValid = !regex.test(value) && target.minLength <= value.length && target.maxLength >= value.length;
    if (isValid) return '';
    return `Имя может содержать только латиницу, кириллицу, пробел или дефис. От ${target.minLength ? target.minLength : '0'}${target.maxLength && ` до ${target.maxLength}`} символов.`
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});

    let validateMessage = target.validationMessage;
    if (name === 'email') {
      validateMessage = emailValidateMessage(value);
    } else if (name === 'name') {
      validateMessage = nameValidateMessage(value, target);
    }
    
    const newErrors = {...errors, [name]: validateMessage };
    setIsValid(Object.values(newErrors).every(err => err.length === 0) && Object.keys(requiredFields).every(name => values[name].length > 0));
    setErrors(newErrors);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, initRequiredFields };
}