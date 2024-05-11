import {RouterProvider, createBrowserRouter, useNavigate} from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import {useDispatch}  from "react-redux"
import { addUser,removeUser } from "../utils/userSlice";
import {onAuthStateChanged } from "firebase/auth";

const Body = () => {
    const dispatch = useDispatch();
    const appRoutes = createBrowserRouter([
        {
            path:'/',
            element: <Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ]);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName: displayName}));
             
            } else {
             dispatch(removeUser());
            
            }
          });
    },[]);

  return (
    <RouterProvider router={appRoutes} />
  )
}

export default Body