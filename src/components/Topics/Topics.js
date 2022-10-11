import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link, useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = ({topic}) => {
   
    

const {name,logo,total,id} = topic;
    
    return (
        <div className='mt-8'>
            <div className='border m-6 w-10/12 bg-gray-300'>
                <div>
                <img className='w-1/2 mx-auto my-0 mt-2' src={logo} alt="" />
                </div>
            <div className='block p-5 text-center justify-evenly lg:flex'>
            <h1 className='font-bold text-2xl'>{name}</h1>
            <p className='font-semibold text-2xl ml-6'>Quiz:{total}</p>
            <button className='bg-sky-500 p-2 ml-5'> <Link to={`/quiz/${id}`}>Start Practice<FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon></Link></button>
         
            </div>
            
            </div>
          
            
        </div>
    );
};

export default Topics;