import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const QuizPage = ({singleQuiz, index, checkCorrectAnswer}) => {
    const {question, options, correctAnswer} = singleQuiz;

    const seeRightAnswer = () => {
        toast.info(correctAnswer)
    }

    const quizOptions = options.map((option, index) =>
     <button onClick={(e) => checkCorrectAnswer(e.target.innerText, correctAnswer)} className='bg-blue-200 hover:bg-blue-500 hover:text-white rounded border m-2 shadow p-2 text-center' key={index}>
        {option}
     </button>);
    
    return (
        <div> 
            <div className='bg-gray-100 border m-6'>
                <div className='flex justify-between m-2'>
                    <h1 className='font-semibold'>Quiz No. {index} {question}</h1>
                    <FontAwesomeIcon onClick={seeRightAnswer} className='cursor-pointer ' icon={faEye}></FontAwesomeIcon>
                </div>
                <div className='grid sm:grid-cols-2 gap-2'>
                    {quizOptions}
                </div>
            </div>
            
        </div>
    );
};

export default QuizPage;