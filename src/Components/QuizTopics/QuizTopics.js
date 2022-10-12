import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopics = ({topic}) => {
    const {id, logo, name, total} = topic;
    return (
        <div className=''>
            <div className='border p-2 w-full shadow-md rounded '>
                <img className='bg-gray-200 md:w-fit w-full' src={logo} alt="" />
                <div className='mb-3'>
                    <p className='text-2xl'>{name}</p>
                    <small className='text-xl'>Total quiz: {total}</small>
                </div>
                <Link to={`/topics/${id}`}>
                    <button className='w-full bg-blue-400 text-white py-2 rounded'>go to quiz</button>
                </Link>
            </div>
        </div>
    );
};

export default QuizTopics;