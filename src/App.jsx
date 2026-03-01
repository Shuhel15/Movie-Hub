import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";
import { MoviesDetails } from "./components/UI/MoviesDetails";
import { getMoviesDetails } from "./api/GetMovieDetails";


 export const App =()=>{
  const router = createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
             {
       path:"/",
       element:<Home/>
    },
    {
       path:"/about",
       element:<About/>
    },
    {
       path:"/movies",
       element:<Movie/>,
       loader:getMoviesData,
    },
    {
       path:"/movies/:movieID",
       element:<MoviesDetails/>,
       loader:getMoviesDetails,
    },
    {
       path:"/contact",
       element:<Contact/>,
       action:contactData,
    },
      ] 
   }

  ])

  return<RouterProvider router={router}/>

}

