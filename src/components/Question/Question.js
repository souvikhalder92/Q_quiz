import React, { useState } from 'react';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({questions,index}) => {
   
   const {question,correctAnswer,options} = questions;
   const [answer,setAnswer] = useState();
    const message = () => toast(`${correctAnswer}`);
    const message1 = () => toast("Wow!!!Right Answer!");
    const message2 = () => toast("Shit !!! Your Answer is Wrong ! " + ` Correct Answer: ${correctAnswer}`);
 
    
 
    const onChange = (e) =>{
        setAnswer(e.target.value);
        if(e.target.value === correctAnswer)
        {
         
            message1();
            if(correctAnswer)
            return;
          
            
        }
        else{
            message2();
            if(!correctAnswer)
           return;
        }
    
        
        
    }
    
  
    let len = question.length - 4;
    const que = question.slice(3,len);

    return (
        <div className='mt-5'>
            <div className='border w-1/2 mx-auto p-5 bg-slate-200'>
                <div className='flex justify-evenly'>
                <h1 className='text-1xl lg:text-2xl font-bold'>{index + 1}. {que}</h1>
                <button onClick={message}><FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon></button>
                <ToastContainer/>
                </div>
               
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5'>
            {
                options.map(op => <div><input type="radio" name="{op.id}" value={op} onChange={onChange}></input> {op}
              
               </div>)   
              
            }
            
          
            
            </div>
            </div>
           

        </div>
    );
};

export default Question;