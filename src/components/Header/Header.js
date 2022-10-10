import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='bg-gray-300'>
             <div className='block md:flex lg:flex justify-between w-10/12 mx-auto py-4 text-center lg:text-center' >
            <div>
               <h1 className='text-3xl font-bold text-orange-500 text-center lg:text-center'>Q-Quiz</h1>
            </div>
            <div className=''>
                <Link  className="text-1xl font-bold hover:text-yellow-600" to='/'>Home</Link>
                <Link  className="ml-4 text-1xl font-bold  hover:text-yellow-600" to='/statistics'>Statistics</Link>
                 <Link className="ml-4  text-1xl font-bold  hover:text-yellow-600" to='/blog'>Blog</Link> 
            </div>
             </div>
            </nav>
        </div>
    );
};

export default Header;