import React from 'react';
import Footer from '../Footer/Footer';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const Statistics = () => {
    const data = [{id:1,"name":"React",logo:"https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",total:8},
    {id:2,name:"JavaScript",logo:"https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",total:9},
    {id:4,name:"CSS",logo:"https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",total:8},
    {id:5,name:"Git",logo:"https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",total:11}];

    
    return (
        <div className='App'>
          <h1 className='text-center mt-16 font-bold text-3xl'>Comparison of Total Quizzes</h1>
          <div className='mx-0 lg:mx-32 pl-0 lg:pl-96 mb-20 mt-11 text-center'>
            
          <BarChart
          width={450}
          height={350}
          data={data}
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