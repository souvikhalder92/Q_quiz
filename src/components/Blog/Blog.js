import React from 'react';
import Footer from '../Footer/Footer';

const Blog = () => {
    return (
        <div className='App'>
            <h1 className='font-bold text-4xl mt-28'>Frequently Asked Questions(FAQ)</h1>
            <div className='mt-11 mb-24'>
            <h4 className='font-semibold text-2xl text-cyan-800'>1. What is the purpose of react router?</h4>
            <p><strong>Answer:</strong> React Router is a standard library for routing in React. It enables the navigation  among views of various components  <br /> in a React  Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            <h4 className='font-semibold text-2xl text-cyan-800'>2. How does Context API works?</h4>
            <p><strong>Answer:</strong> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is <br/> the  alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.<br/> Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h4 className='font-semibold text-2xl text-cyan-800'>3. What does useRef means in react?</h4>
            <p><strong>Answer:</strong> Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar  with refs  <br />   primarily as a  way to access  the DOM. If you pass a ref object to React with myRef, React will set its .current property to the <br /> corresponding DOM node whenever that node changes.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;