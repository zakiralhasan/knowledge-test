import React from 'react';
import logo from '../../images/context-API.png';
const Blog = () => {
    return (
        <div>
            <div className='mx-2 md:mx-4 my-6 bg-gray-200 p-2 shadow-lg rounded'>
                <h1 className='text-2xl mb-2'>What is the purpose of react-router?</h1>
                <p><span className='font-bold'>Ans: </span> Routing is a process that a user can access different pages based on their action or request. <b>ReactJS Router</b> is mainly used for developing Single Page Web Applications. React Router is used to access multiple routes in the application. When a user types a specific <i className='text-blue-400'>URL</i> into the web browser, and if this <i className='text-blue-400'>URL</i> path matches any 'route' inside the router file, then the user will be able to access that particular route.</p>
            </div>
            <div className='mx-2 md:mx-4 my-6 bg-gray-200 p-2 shadow-lg rounded'>
                <h1 className='text-2xl mb-2'>How does context API work?</h1>
                <p><span className='font-bold'>Ans: </span> The <b>React Context API</b> is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to <i>"prop drilling"</i> or moving props from grandparent to child to parent, and so on.</p>
                <img className='my-4 mx-auto md:w-1/2' src={logo} alt="" />
            </div>
            <div className='mx-2 md:mx-4 my-6 bg-gray-200 p-2 shadow-lg rounded'>
                <h1 className='text-2xl mb-2'>useRef hook in ReactJS.</h1>
                <p><span className='font-bold'>About: </span> The <b>useRef</b> is a hook that allows users to directly create a reference to the DOM element in the functional component. It can be used to store a mutable value that does not cause a re-render when updated.</p>
            </div>
        </div>
    );
};

export default Blog;