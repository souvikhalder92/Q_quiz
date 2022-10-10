import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData();
    
    return (
        <div>
            <img className="mx-auto w-36" src="logo.png" alt="" />
            <h1 className='font-bold text-2xl text-center'>Welcome To <span className='text-orange-500 font-bold text-2xl'>Q-Quiz</span></h1>
            <p className='1xl font-semibold text-center'><span className='text-orange-500 font-bold'>Q-Quiz</span> is a programming quiz website.In this site, people can practice the quiz of different programming languages.</p>
            <p className='text-center'>{topics.data.length}</p>
            <div className='mx-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2'>
            {
                topics.data.map(topic => <Topics 
                    key={topic.id}
                    topic={topic}></Topics>)
            }
            </div>
            
        </div>
    );
};

export default Home;