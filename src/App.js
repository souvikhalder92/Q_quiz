import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Statistics from './components/Statistics/Statistics';
import Alert from './components/Alert/Alert';
import Topics from './components/Topics/Topics';
import Topic from './components/Topic/Topic';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
     path: '/',
     element: <Main></Main>,
     children: [
      {
        path:'/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Home></Home>

      },
       {
         path:'/home',
         loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
         element:<Home></Home>
 
       },
       {
        path:'/topic',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Topic></Topic>

      },
     
       {
        path:'/quiz/:quizId',
        loader: async({params}) => {
         return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
        },
        element:<Quiz></Quiz>
       },
     
     
       {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      
       {
         path:'/blog',
         element:<Blog></Blog>
       }
 
     ]
 
    },
    {
    path:'*',
    element: <Alert></Alert>
    }
   ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
