import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isSignIn, setisSignIn] = useState(true);
    const toggleSignInForm=() => {
        setisSignIn(!isSignIn);
    }
    return (
        <><Header />
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="background" />

        </div>
            <form className="w-3/12 absolute p-12  bg-black my-56 mx-auto right-0 left-0 bg-opacity-65 ">
                <h2 className="font-bold text-3xl p-2 text-white">{isSignIn ? 'Sign In': 'Sign Up'}</h2>
                <input type="Email" placeholder="Enter your Email id" className="p-3 my-4 w-full bg-gray-600"/>
                {!isSignIn && <input type="text" placeholder="Full Name" className="p-3 my-4 w-full bg-gray-600"/>}
                {!isSignIn && <input type="password" placeholder="Create a  Password" className="p-3 my-4 w-full bg-gray-600"/>}
                <input type="password" placeholder="Enter your  Password"className="p-3 my-4 w-full bg-gray-600"/>
                <button className="p-3 my-6 w-full rounded-lg bg-red-600">{isSignIn ? 'SignIn': 'SignUp'}</button>
                <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
                {isSignIn ? 'New to app pls SignUp Now': 'Sign In'}
                </p>
            </form>
        </>
    )
}
export default Login