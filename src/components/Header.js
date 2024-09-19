import { useDispatch, useSelector } from "react-redux";
import NETFLIX_LOGO from "../utils/Netflix_Logo_PMS.png"
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleShowGptSearch } from "../utils/gptSearchSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
  const showGptSearch = useSelector((store)=>store.gptSearchPage.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = ()=>{

signOut(auth).then(() => {
  // Sign-out successful.
  
}).catch((error) => {
  // An error happened.
  navigate("/error");
});

  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid ,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    // Clean up of on auth state after the component unmounts
    return ()=>{
      unsubscribe();
    }
  },[]);
  
  const handleGptSearchPage = ()=>{
    dispatch(toggleShowGptSearch())
  }
  const handleLanguageChange = (e)=>{
      dispatch(changeLanguage(e.target.value));
      
  }
  const user = useSelector((store)=>store.user);
  
  return (
    <div className=" absolute w-screen bg-gradient-to-b from-black z-50 flex justify-between">
      <div>
      <img className="w-44 p-2 m-2" alt="netflix-logo" src={NETFLIX_LOGO}/>
      </div>
      { user &&
      <div  className="flex p-4 mx-6">
        {showGptSearch && 
        <select onChange={(e)=>handleLanguageChange(e)} className="px-2 py-1 mx-2 my-4 bg-gray-600 text-white rounded-lg text-md"> 
          {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.type}</option>)}
        </select>
         }
        <button onClick={handleGptSearchPage} className="px-4 py-1 mx-2 my-3 text-white rounded-lg bg-purple-800 hover:bg-purple-950">{showGptSearch ?"Homepage":"Search"}</button>
         
        <img className="w-12 h-12 m-2" alt="user-icon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className="text-white font-bold">Sign Out</button>
      
      </div>
       }
    </div>
  )
}

export default Header
