import './MoviesCardList.css';

function MoviesCardList({ children }) {

  return (
    <section className="movies-list">
      {children}
    </section>
  );
}

export default MoviesCardList;
