export const getConvertedMovies = (allApiMovies) => {
  return allApiMovies.map(m => {
    return {
      country: m.country ? m.country : 'Страна неизвестна',
      director: m.director ? m.director : 'Режиссер неизвестен',
      duration: m.duration ? m.duration : 0,
      year: m.year ? Number(m.year) : 0,
      description: m.description ? m.description : 'Нет описания',
      image: m.image.url ? `https://api.nomoreparties.co${m.image.url}` : 'https://www.inform.kz/thumbs/radmin_news_2021_04_16_210416142953024e_w320_h240.jpg',
      trailerLink: m.trailerLink ? m.trailerLink : 'https://youtu.be/g-44-c0l-IY',
      thumbnail: m.image.formats.thumbnail.url ? `https://api.nomoreparties.co${m.image.formats.thumbnail.url}` : 'https://www.inform.kz/thumbs/radmin_news_2021_04_16_210416142953024e_w320_h240.jpg',
      movieId: m.id ? m.id : 0,
      nameRU: m.nameRU ? m.nameRU : 'Название фильма не указано',
      nameEN: m.nameEN ? m.nameEN : 'The name of the film is not specified',
    }
  })
};

export const getCountToLoad = () => {
  const windowSize = window.innerWidth;
  if (windowSize > 1190) return 16
  else if (windowSize > 619) return 8
  else return 5
};

export const searchMovies = (searchValue, isShortFilm, movies) => {
  return movies.filter(m => {
    if (isShortFilm) {
      if (m.duration <= 40 && (m.nameRU.includes(searchValue) || m.nameEN.includes(searchValue))) return m;
    } else {
      if (m.nameRU.includes(searchValue) || m.nameEN.includes(searchValue)) return m;
    }
  })
}