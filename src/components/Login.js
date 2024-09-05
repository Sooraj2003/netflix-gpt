import { useState } from "react"
import { BACKGROUND_URL } from "../utils/constants"
import Header from "./Header"


const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true);
  const handleSignInToggle = ()=>{
    setIsSignIn(!isSignIn);
  }
  return (
    
    <div >
        <Header/>
        <div className="absolute ">
        <img src={BACKGROUND_URL} alt="background-image"/>
        </div>
      <form className="p-10 absolute w-3/12 bg-black my-52 mx-auto right-0 left-0 bg-opacity-80 rounded-lg">
        <h1 className="text-white font-bold text-3xl p-4">{isSignIn?"Sign In":"Sign Up"}</h1>
        { !isSignIn && <input className="p-4 my-3 w-full bg-gray-700" type="text" placeholder="Enter your Full name"/>}
        <input className="p-4 my-3 w-full bg-gray-700 text-white" type="text" placeholder="Enter your email"/>
        <input className="p-4 my-3 w-full  bg-gray-700  text-white" type="password" placeholder="Enter your password"/>
        <button className="p-4 my-3 w-full bg-red-700 text-white rounded-lg hover:bg-red-500 text-lg font-semibold">{isSignIn ?"Sign In":"Sign Up"}</button>
         <div>
        <span className="text-gray-500 py-4">{isSignIn?"New to Netlix?":"Already registered?"}</span><span onClick={handleSignInToggle} className="text-white cursor-pointer">{isSignIn ?" Sign Up Now":" Sign In"}</span>
        </div>
        
        
      </form>
      
    </div>
  )
}

export default Login
