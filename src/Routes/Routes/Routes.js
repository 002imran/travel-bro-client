import {createBrowserRouter} from "react-router-dom";
import Main from "../../layout/Main";
import Slider from "../../Pages/Slider/Slider";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "",
        element: <Slider></Slider>,
      },
    ],
  },
]);