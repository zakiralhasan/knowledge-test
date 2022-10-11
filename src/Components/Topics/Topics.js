import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizPage from './QuizPage';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Topics = () => {
    const singleTopic = useLoaderData();
    const {data} = singleTopic;
    const quiz = data.questions;


    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);

    const checkCorrectAnswer = (answer, rightAnswer) => {
        if(answer === rightAnswer){
            setCorrectCount(correctCount + 1);
            toast.success('Correct')
        }else{
            setWrongCount(wrongCount + 1);
            toast.warning('Wrong')
        }
    }

    return (
        <div>
            <div className=" ">
                <div className="text-center my-4">
                    <h1 className=' text-4xl text-amber-500'>Test of {data.name} knowledge</h1>
                    <div>
                        <h4>Number of test: {quiz.length}</h4>
                        <small className='block text-green-600'>Right answer: {correctCount}</small>
                        <small className='text-red-600'>Wrong answer: {wrongCount}</small>
                    </div>
                </div>
                {
                    quiz.map((singleQuiz, index) => <QuizPage
                        key={singleQuiz.id}
                        singleQuiz={singleQuiz}
                        index={index}
                        checkCorrectAnswer={checkCorrectAnswer}                
                    ></QuizPage>)
                }
            </div>
        </div>
    );
};

export default Topics;