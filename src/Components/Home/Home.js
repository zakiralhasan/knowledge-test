import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../../images/header-logo.jpg';
import QuizTopics from '../QuizTopics/QuizTopics';

const Home = () => {
    const quizTopics = useLoaderData();
    const topics = quizTopics.data;
    return (
        <div className=''>
            <div className='bg-gray-100 m-4 md:flex flex-none items-center rounded shadow-lg md:w-11/12 md:mx-auto mx-2'>
                <div className=' p-2'>
                    <img className='md:w-60 rounded ' src={logo} alt="" />
                </div>
                <div className='mx-2 md:ml-4 pb-2'>
                    <h1 className='text-red-500 text-2xl md:text-3xl mb-4'>Hey, are you a web-developer?</h1>
                    <h3 className='font-semibold' >If your answer is yes.</h3>
                    <small>Let's test your knowledge by participating quiz.</small>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:w-1/2 mx-2 md:mx-auto my-12'>
                {
                    topics.map(topic => <QuizTopics
                        key={topic.id}
                        topic={topic}
                    ></QuizTopics>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;