import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData();
    

 
    
    return (
        <div>
            <img className="mx-auto w-36" src="logo.png" alt="" />
            <h1 className='font-bold text-2xl text-center'>Welcome To <a href="/"><span className='text-orange-500 font-bold text-2xl'>Q-Quiz</span></a></h1>
            <p className='1xl font-semibold text-center'><a href="/"><span className='text-orange-500 font-bold'>Q-Quiz</span></a> is a programming quiz website.In this site, people can practice the quiz of different programming languages.</p>
            <div className='mx-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2'>
            {
                topics.data.map(topic => <Topics 
                    key={topic.id}
                    topic={topic}
                    ></Topics>)
            }
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;