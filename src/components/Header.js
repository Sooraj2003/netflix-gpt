import { useSelector } from "react-redux";
import NETFLIX_LOGO from "../utils/Netflix_Logo_PMS.png"
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = ()=>{

signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/error");
});

  }
  
  const user = useSelector((store)=>store.user);
  console.log(user);
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-30 flex justify-between">
      <div>
      <img className="w-44 p-2 m-2" alt="netflix-logo" src={NETFLIX_LOGO}/>
      </div>
      { user &&
      <div  className="flex p-4">
        <img className="w-12 h-12 m-2" alt="user-icon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className="text-white font-bold">Sign Out</button>
      
      </div>
       }
    </div>
  )
}

export default Header
