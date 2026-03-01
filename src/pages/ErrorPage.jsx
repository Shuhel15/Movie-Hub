import { useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage =()=>{
  const error = useRouteError()
  console.log(error)
  const navigate = useNavigate();
  const handleBack =()=>{
    navigate(-1)
  }
  return(
    <>
    <div className="error">
      <h1>Oops!</h1>
    <h1 className="error">{error.data}</h1>
    <img src="./404.png"/>
    <button className="back" onClick={handleBack}><i class="fa-solid fa-arrow-left"></i> Go Back</button>
    </div>
    </>
  )
}