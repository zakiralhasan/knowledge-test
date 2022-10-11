import React from 'react';

const QuizPage = ({singleQuiz, index, checkCorrectAnswer}) => {
    const { question, options, correctAnswer} = singleQuiz;

    const quizOptions = options.map((option, index) =>
     <button onClick={(e) => checkCorrectAnswer(e.target.innerText, correctAnswer) } className='bg-blue-200 hover:bg-blue-500 hover:text-white rounded border m-2 shadow p-2 text-center' key={index}>
        {option}
     </button>);
    
    return (
        <div> 
            <div className='bg-gray-100 border m-6'>
                <h1 className='m-2 font-semibold'>Quiz No. {index} {question}</h1>
                <div className='grid sm:grid-cols-2 gap-2'>
                    {quizOptions}
                </div>
            </div>
            
        </div>
    );
};

export default QuizPage;