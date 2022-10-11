import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizPage from './QuizPage';

const Topics = () => {
    const singleTopic = useLoaderData();
    const {data} = singleTopic;
    const quiz = data.questions;
    console.log(data)
    return (
        <div>
            <div className=" ">
                <div className="text-center text-4xl text-amber-500 my-4">
                    <h1>Test of {data.name} knowledge</h1>
                </div>
                {
                    quiz.map((singleQuiz, index) => <QuizPage
                        key={singleQuiz.id}
                        singleQuiz={singleQuiz}
                        index={index}                
                    ></QuizPage>)
                }
            </div>
        </div>
    );
};

export default Topics;