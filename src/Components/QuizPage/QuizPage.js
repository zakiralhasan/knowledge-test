import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import { useState } from 'react';

const QuizPage = ({singleQuiz, index, checkCorrectAnswer}) => {
    const {question, options, correctAnswer} = singleQuiz;

    const [disable, setDisable] = useState(false); //Have used this state for disabling the button after clicking.

   const sliceQuestion = question.slice(3, -4); //sliced unnecessary parts of the question.

   //below function have used for showing the correct answer on the eye icon clicked.
    const seeRightAnswer = () => {
        toast.info(correctAnswer)
    }

    //looping the questions option by using 'map()' and setting it in a button.
    const quizOptions = options.map((option, index) =>
     <button disabled={disable} onClick={(e) => {checkCorrectAnswer(e.target.innerText, correctAnswer); setDisable(true)}} className='bg-blue-400 enabled:hover:bg-blue-500 enabled:hover:text-white rounded border m-2 shadow p-2 text-center disabled:opacity-70' key={index}>
        {option}
     </button>);
    
    return (
        <div> 
            <div className='bg-gray-100 border m-6'>
                <div className='flex justify-between m-2'>
                    <h1 className='font-semibold'>Quiz No.<span className='text-red-500'>{index}</span> {sliceQuestion}</h1>
                    <FontAwesomeIcon onClick={seeRightAnswer} className='cursor-pointer ' icon={faEyeSlash}></FontAwesomeIcon>
                </div>
                <div className='grid sm:grid-cols-2 gap-2'>
                    {quizOptions}
                </div>
            </div>
            
        </div>
    );
};

export default QuizPage;