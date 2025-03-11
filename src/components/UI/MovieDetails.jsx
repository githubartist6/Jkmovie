/* eslint-disable react/prop-types */
import { NavLink, useLoaderData } from "react-router-dom";
import "../css/movieDetails.css";

export const MovieDetails = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  const {
    Actor,
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    imdbID,
    Awards,
    imdbRating,
  } = movieData;

  // 192min
  const totalMinutes = Runtime.replace("min", "");
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  console.log(hours, minutes);

  const formattedTime = `${hours}hr ${minutes}min`;
  console.log(formattedTime);

  return (
    <li className="movie-details-hero-container movie-details-hero-movie-container">
      <div className="movie-details-main-container">
        <figure className="movie-details-movie">
          <div className="movie-details-movie__hero">
            <img src={Poster} alt="Rambo" className="movie-details-movie__img" />
          </div>
          <div className="movie-details-movie__content">
            <div className="movie-details-movie__title">
              <h1 className="movie-details-heading__primary">
                {Title} <i className="fas fa-fire"></i>
              </h1>
              <div className="movie-details-movie__tag movie__tag--1">{`#${Type}`}</div>
              <div className="movie-details-movie__tag movie__tag--2">Year: {Year}</div>
            </div>
            <p className="movie-details-movie__description">{Plot}</p>
            <br />
            <p className="movie-details-movie__description">Awards: {Awards}</p>
            <div className="movie-details-movie__details">
              <p className="movie-details-movie__detail">
                <span className="movie-details-icons icons-red">
                  <i className="fas fa-camera-retro"></i>
                </span>
                Rating: {imdbRating}
              </p>
              <p className="movie-details-movie__detail">
                <span className="movie-details-icons icons-grey">
                  <i className="fas fa-clock"></i>
                </span>
                {formattedTime}
              </p>
              <p className="movie-details-movie__detail">
                <span className="movie-details-icons icons-yellow">
                  <i className="fas fa-file-invoice-dollar"></i>
                </span>
                {BoxOffice}
              </p>
            </div>
            <div>
              <NavLink
                to="/movie"
                className="movie-details-movie__tag movie__tag--2"
                style={{ textAlign: "center", fontSize: "1.6rem" }}
              >
                Go Back
              </NavLink>
            </div>
          </div>
        </figure>
      </div>
    </li>
  );
};
