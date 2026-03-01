import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loader } from "../UI/loader";

export const AppLayout =()=>{
  const navig = useNavigation();
  console.log(navig.state)

  if(navig.state ==="loading") 
    {return <Loader/>
    }
  return( 
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
  )
}