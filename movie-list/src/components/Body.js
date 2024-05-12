import {RouterProvider, createBrowserRouter, useNavigate} from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"

import {useDispatch}  from "react-redux"


const Body = () => {
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
    
  return (
    <RouterProvider router={appRoutes} />
  )
}

export default Body