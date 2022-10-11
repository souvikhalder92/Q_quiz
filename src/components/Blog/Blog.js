import React from 'react';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <div className='App'>
            <h1 className='font-bold text-4xl'>Frequently Asked Questions(FAQ)</h1>
            <div className='mt-5'>
            <h4 className='font-semibold text-2xl'>1. What is the purpose of react router?</h4>
            <p><strong>Answer:</strong> React Router is a standard library for routing in React. It enables the navigation  among views of various components  <br /> in a React  Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            <h4 className='font-semibold text-2xl'>2. How does Context API works?</h4>
            <p><strong>Answer:</strong> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the  alternative to "prop drilling" <br /> or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
         
            
            <Footer></Footer>
        </div>
    );
};

export default Blog;