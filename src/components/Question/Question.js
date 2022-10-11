import React from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({questions,index}) => {
    
    const {question,correctAnswer,options} = questions;
    const message = () => toast(`${correctAnswer}`);
    return (
        <div className='mt-5'>
            <div className='border w-1/2 mx-auto p-5'>
                <div className='flex justify-evenly'>
                <h1 className='text-2xl font-bold'>{index + 1}. {question}</h1>
                <button onClick={message}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                <ToastContainer/>
                </div>
            <div className='grid grid-cols-2 gap-2'>
            {
                options.map(op => <div><input type="radio" ></input>{op}</div>)
                
            }
            </div>
            
            </div>

        </div>
    );
};

export default Question;