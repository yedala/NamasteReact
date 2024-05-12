import React from 'react'
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { LOGO, USERLOGO } from '../utils/constants';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse")

            } else {
                dispatch(removeUser());
                navigate("/")

            }
        });
        return ()=> unsubscribe();
    }, []);

    return (
        <><div className=" flex justify-between absolute w-screen   bg-gradient-to-b from-black z-10">
            <img className="w-44 " src={LOGO} alt="logo" />

            {user && <div className="flex px-3">
                <img className="w-13 h-12 m-3" alt="usericon" src={USERLOGO} />
                <p className='m-2 p-3 text-white '>Hi {user?.displayName}</p>
                <button onClick={handleSignOut} className="font-bold text-white p-2 m-2">sign Out</button>
            </div>}
        </div>
        </>
    )
}

export default Header