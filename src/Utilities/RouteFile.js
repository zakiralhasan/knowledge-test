import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import RootComponent from "../Components/RootComponent/RootComponent";
import Topics from '../Components/Topics/Topics';
import Statistics from '../Components/Statistics/Statistics';
import Blog from '../Components/Blog/Blog';
import ErrorPage from "../Components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {path:'/', element: <RootComponent></RootComponent>, errorElement:<ErrorPage></ErrorPage>,
     children: [
        {path:'/', element: <Home></Home>},
        {path:'home', element: <Home></Home>},
        {path:'topics', element: <Topics></Topics>},
        {path:'statistics', element: <Statistics></Statistics>},
        {path:'blog', element: <Blog></Blog>},
    ]}
])