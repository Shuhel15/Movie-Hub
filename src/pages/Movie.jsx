import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
    <>
      <ul className="container">
        {moviesData && moviesData.Search.map((curMovies) => {
          return <Card key={curMovies.imdbID} curMovies={curMovies} />;
        })}
      </ul>
    </>
  );
};
