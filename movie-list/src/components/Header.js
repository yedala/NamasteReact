import React from 'react'
import { auth } from "../utils/firebase";
import { signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    console.log(user);
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
        };
    return (
        <><div className=" flex justify-between absolute w-screen   bg-gradient-to-b from-black z-10">
            <img className="w-44 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
          
           {user && <div  className="flex px-3">
                <img className="w-13 h-12 m-3" alt="usericon" src="https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" />
                <p className='m-4 p-3'>Hi {user?.displayName}</p>
                <button onClick={handleSignOut} className= "font-bold text-white">sign Out</button>
            </div>}
        </div>
        </>
    )
}

export default Header