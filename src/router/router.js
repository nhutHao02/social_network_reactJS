import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import App from "../App";
import Signup from "../pages/signup/signup";
import Home from "../pages/home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      { 
        path: "/signup",
        element: <Signup/>
      }
      
    ],
  },
]);
