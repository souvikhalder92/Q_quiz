import React from 'react';

const Topics = ({topic}) => {
const {name,logo,total} = topic;
    
    return (
        <div className='mt-10'>
            <div className='border m-4'>
                <div>
                <img className='w-1/2 mx-auto my-0 mt-2' src={logo} alt="" />
                </div>
          
            <div className='flex p-5 text-center'>
            <h1 className=''>{name}</h1>
            <p className='ml-28'>Quiz:{total}</p>
            <button className='bg-sky-500 p-3 mx-auto'>Start Practice</button>
            </div>
            
            </div>
          
            
        </div>
    );
};

export default Topics;