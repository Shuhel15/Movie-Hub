import { NavLink } from "react-router-dom"
import "./Card.css"
export const Card =({curMovies})=>{
  const {Poster, imdbID, Title}= curMovies
  // console.log(curMovies)
  return<>
  <li className="card-container">
    <div className="movie-img">
      <img src={Poster} className="image" alt={imdbID}/>
    </div>
    <div className="ticket-container">
      <NavLink to={`/movies/${imdbID}`} className="navlink">
      <p>Title: {Title}</p>
      <button className="ticket-btn">Watch Now</button>
      </NavLink>
    </div>
  </li>
  </>
}