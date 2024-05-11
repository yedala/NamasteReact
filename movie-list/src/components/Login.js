import { useRef, useState } from "react"
import Header from "./Header"
import validation from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignIn, setisSignIn] = useState(true);
    const [errmsg, seterrmsg] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleSignInForm = () => {
        setisSignIn(!isSignIn);
    }
    const handleClick = () => {
        const msg = validation(email.current.value, password.current.value);
        seterrmsg(msg);
        if (msg) return;
        if (!isSignIn) {
            //sign up the user
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                        const {uid,email,displayName} = auth.currentUser;
                         dispatch(addUser({uid:uid,email:email,displayName: displayName}))
                        // ...
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                    navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrmsg(errorCode + '' +errorMessage);
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("/browse")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrmsg(errorCode + '' +errorMessage);
                });
        }
    }
    return (
        <><Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />

            </div>
            <form onClick={(e) => e.preventDefault()} className="w-3/12 absolute p-12  bg-black my-56 mx-auto right-0 left-0 bg-opacity-65 ">
                <h2 className="font-bold text-3xl p-2 text-white">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
                <input ref={email} type="Email" placeholder="Enter your Email id" className="p-3 my-4 w-full bg-gray-600" />
                {!isSignIn && <input ref={name} type="text" placeholder="Full Name" className="p-3 my-4 w-full bg-gray-600" />}
                {!isSignIn && <input type="password" placeholder="Create a  Password" className="p-3 my-4 w-full bg-gray-600" />}
                <input ref={password} type="password" placeholder="Enter your  Password" className="p-3 my-4 w-full bg-gray-600" />
                <button onClick={handleClick} className="p-3 my-6 w-full rounded-lg bg-red-600">{isSignIn ? 'SignIn' : 'SignUp'} </button>
                <p className="text-red-400 p-3 my-1 font-bold">
                    {errmsg}
                </p>
                <p className="text-white cursor-pointer p-3" onClick={toggleSignInForm}>
                    {isSignIn ? 'New to app pls SignUp Now' : 'Sign In'}
                </p>
            </form>
        </>
    )
}
export default Login