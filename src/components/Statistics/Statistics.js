import React from 'react';
import Footer from '../Footer/Footer';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const data = useLoaderData();
    const data2 = [];
    data.data.map(datas => data2.push(datas));
    
    return (
        <div className='App'>
          <h1 className='text-center mt-16 font-bold text-3xl'>Comparison of Total Quizzes</h1>
          <div className='mx-0 lg:mx-32 pl-0 lg:pl-96 mb-20 mt-9 text-center'>
            
          <BarChart
          width={420}
          height={350}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 50,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
        
        </BarChart>
          </div>
       
     
            <Footer></Footer>
        </div>
    );
};

export default Statistics;