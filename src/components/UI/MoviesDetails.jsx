import { useLoaderData } from "react-router-dom"

export const MoviesDetails =()=>{ 
  const movieData = useLoaderData();
  console.log(movieData)

  const {Actors, Poster, Title, Type, Released, Plot, imdbRating, imdbVotes, Language, Runtime, Director} = movieData;

  const totalMinuts = Runtime.replace("min", "")
  const hours = Math.floor(totalMinuts / 60)
  const minuts =totalMinuts % 60;
  const formattedTime = `${hours}hr ${minuts}min`
  return(
  <>
  <div className="movie-container">
    <div className="image-cont">
      <img src={Poster}  className="movie-img2" alt={Title} />
    </div>
    <div className="movie-details">
      <h1>Title: {Title}</h1>
      <p>Rating: {imdbRating}/10 | Votes: {imdbVotes}</p>
      <p>Language: {Language}</p>
      <p>Time: {formattedTime}</p>
      <p>Date: {Released}</p>
      <p>Actors: {Actors}</p>
      <p>Director: {Director}</p>
      <p>Type: {Type}</p>
      <p>About: {Plot}</p>
      <button className="ticket-btn">Watch Now</button>
    </div>
  </div>
  </>
  )
}