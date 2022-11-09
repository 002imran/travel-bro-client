import {createBrowserRouter} from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ServicesAll from "../../Pages/Home/Services/ServicesAll";
// import ServicesAllCard from "../../Pages/Home/Services/ServicesAllCard";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path: '/servicesAll',
        element: <ServicesAll></ServicesAll>
      }
    ],
  },
]);