import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import App from "../App";
import Signup from "../pages/signup/signup";
import Home from "../pages/home/home";
import Explore from "../pages/explore/explore";
import Notification from "../pages/notification/notification";
import Message from "../pages/message/message";
import Bookmarks from "../pages/bookmark/bookmark";

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
      },
      { 
        path: "/explore",
        element: <Explore/>
      },
      { 
        path: "/notifications",
        element: <Notification/>
      },
      { 
        path: "/bookmarks",
        element: <Bookmarks/>
      },
      { 
        path: "/message",
        element: <Message/>
      },
      { 
        path: "/profile",
        element: <Message/>
      },
    ],
  },
]);
