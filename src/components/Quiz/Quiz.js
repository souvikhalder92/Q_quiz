import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData(); 
    return (
        <div className='App'>
            <h1 className='mt-10 font-bold text-3xl text-cyan-700'>Quiz Of {quiz.data.name}</h1>
            {
            quiz.data.questions.map(questions => <Question
            key={questions.id}
            questions={questions}></Question>)
           }
           <Footer></Footer>

        </div>
    );
};

export default Quiz;