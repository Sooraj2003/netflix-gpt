import { useRef, useState } from "react"
import { BACKGROUND_URL } from "../utils/constants"
import Header from "./Header"
import { checkValidation } from "../utils/validate"
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { PHOTO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn,setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null)
 //useRef is used to persist the data across the re-renders and it doesnt re-render whenever its value change and it is also used for dom manipuation or to access the attributes of html elements
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignInToggle = ()=>{
    setIsSignIn(!isSignIn);
  }
  const handleClick = ()=>{
    const message = checkValidation(email.current.value,password.current.value);
    setErrorMessage(message);
     if(message) return;
     //sign in or sign up logic
     if(!isSignIn){
   
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName:name.current.value , photoURL: PHOTO_URL
        }).then(() => {
          // Profile updated!
           const {uid,email,displayName,photoURL} = auth.currentUser;
           dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
           navigate("/browse");
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error.message);
        });
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setErrorMessage(errorCode+"-"+errorMessage);
      });
    }else{
     

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          // const user = userCredential.user;
          navigate("/browse")
          
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        });
    }}
    
  return (
    
    <div >
        <Header/>
        <div className="absolute ">
        <img src={BACKGROUND_URL} alt="background-image"/>
        </div>
      <form onSubmit={(e)=>e.preventDefault()} className="p-10 absolute w-3/12 bg-black my-52 mx-auto right-0 left-0 bg-opacity-80 rounded-lg">
        <h1 className="text-white font-bold text-3xl p-4">{isSignIn?"Sign In":"Sign Up"}</h1>
        { !isSignIn && <input ref={name} className="p-4 my-3 w-full bg-gray-700 text-white" type="text" placeholder="Enter your Full name"/>}
        <input 
        className="p-4 my-3 w-full bg-gray-700 text-white" 
        type="text" 
        placeholder="Enter your email"
        ref={email}
        />
        <input 
        className="p-4 my-3 w-full  bg-gray-700  text-white" 
        type="password" 
        placeholder="Enter your password"
        ref={password}
        />
        <p className="text-red-600 font-medium">{errorMessage}</p>
        <button className="p-4 my-3 w-full bg-red-700 text-white rounded-lg hover:bg-red-500 text-lg font-semibold" onClick={handleClick}>{isSignIn ?"Sign In":"Sign Up"}</button>
         <div>
        <span className="text-gray-500 py-4">{isSignIn?"New to Netlix?":"Already registered?"}</span><span onClick={handleSignInToggle} className="text-white cursor-pointer">{isSignIn ?" Sign Up Now":" Sign In"}</span>
        </div>
        
        
      </form>
      
    </div>
  )
}


export default Login;
