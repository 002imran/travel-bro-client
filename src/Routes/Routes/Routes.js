import {createBrowserRouter} from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import ServicesAll from "../../Pages/Home/Services/ServicesAll";
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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <ServicesAll></ServicesAll>,
      },
      
      {
        path: "/servicesDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://travel-server-002imran.vercel.app/services/${params.id}`),
      },

      {
        path:'/blog',
        element: <Blog></Blog>
      }
    ],
  },
]);