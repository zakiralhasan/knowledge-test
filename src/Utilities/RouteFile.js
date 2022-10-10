import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import RootComponent from "../Components/RootComponent/RootComponent";

export const router = createBrowserRouter([
    {path:'/', element: <RootComponent></RootComponent>, children: [
        {path:'/', element: <Home></Home>},
        {path:'home', element: <Home></Home>},
    ]}
])