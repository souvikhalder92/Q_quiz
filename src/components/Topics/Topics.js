import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Topics = ({topic}) => {
const {name,logo,total} = topic;
    
    return (
        <div className='mt-10'>
            <div className='border m-6 w-10/12 bg-gray-100'>
                <div>
                <img className='w-1/2 mx-auto my-0 mt-2' src={logo} alt="" />
                </div>
          
            <div className='block p-5 text-center justify-evenly lg:flex'>
            <h1 className='font-bold text-2xl'>{name}</h1>
            <p className='font-semibold text-2xl'>Quiz:{total}</p>
            <button className='bg-sky-500 p-2 ml-5'>Start Practice<FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
            
            </div>
          
            
        </div>
    );
};

export default Topics;