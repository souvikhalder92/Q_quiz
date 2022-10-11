import React from 'react';

const Question = ({questions}) => {
    
    const {question,correctAnswer,options} = questions;
    return (
        <div>
            <p>{question}</p>
            <p>{options}</p>
            
        </div>
    );
};

export default Question;