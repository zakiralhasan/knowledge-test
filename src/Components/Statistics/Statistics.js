import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const statisticsDatas = useLoaderData();
    const statisticsData = statisticsDatas.data;

    console.log(statisticsData)

    return (
        <div>
            <h1 className='text-center font-semibold my-6 text-amber-500 text-2xl'>This is a graph chart about topics' names and questions.</h1>

            <div className='w-1/2 mx-auto mt-8'>
                <ResponsiveContainer width="100%" height={400}>
                <LineChart data={statisticsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total"/>
                    <Tooltip />
                    <Line type="monotone" dataKey="id" stroke="#8884d8" />
                </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Statistics;