import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import RootComponent from "../Components/RootComponent/RootComponent";
import Topics from '../Components/Topics/Topics';
import Statistics from '../Components/Statistics/Statistics';
import Blog from '../Components/Blog/Blog';
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import TopicsPage from "../Components/TopicsPage/TopicsPage";

export const router = createBrowserRouter([
    {path:'/', element: <RootComponent></RootComponent>, errorElement:<ErrorPage></ErrorPage>,
     children: [
        {path:'/', element: <Home></Home>,
        loader:() => fetch('https://openapi.programming-hero.com/api/quiz') },

        {path:'home', element: <Home></Home>,
        loader:() => fetch('https://openapi.programming-hero.com/api/quiz')},

        {path:'topics', element: <TopicsPage></TopicsPage>,
        loader:() => fetch('https://openapi.programming-hero.com/api/quiz')},

        {path:'topics/:topicsID', element: <Topics></Topics>,
        loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsID}`);
         },
        },

        {path:'statistics', element: <Statistics></Statistics>,
        loader:() => fetch('https://openapi.programming-hero.com/api/quiz')},
        
        {path:'blog', element: <Blog></Blog>},
    ]}
])