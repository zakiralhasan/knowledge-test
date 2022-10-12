import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics'

const TopicsPage = () => {
    const quizTopics = useLoaderData();
    const topics = quizTopics.data;
    return (
        <div>
            <h1>inside topic page</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:w-1/2 mx-2 md:mx-auto my-12'>
                {
                    topics.map(topic => <QuizTopics
                        key={topic.id}
                        topic={topic}
                    ></QuizTopics>)
                }
            </div>
        </div>
    );
};

export default TopicsPage;