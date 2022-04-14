import React from 'react';
import { Pie } from 'rechart';
import { Line, LineChart, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import { VictoryPie } from 'victory-pie';
const Charts = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];



    const dataV = [
        { x: "Mar", y: 10401 },
        { x: "Apr", y: 24500 },
        {
            x: "May",

            y: 67010
        },
        {
            x: "Jun",

            y: 40405
        },
        {
            x: "Jul",

            y: 50900
        },
        {
            x: "Aug",

            y: 61000
        }
    ];

    return (
        <div className='flex flex-col justify-center items-center my-20'>
            <div>
                <h2 className='text-center'>Month Vs Sell(books)</h2>
                <LineChart width={800} height={400} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d1" />
                    {/* <Line type="monotone" dataKey="amt" stroke="#8884d8" /> */}
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis dataKey={'sell'}></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>


            <div>
                <h2 className='text-center mt-24 mb-10'>Monthly selling PI Graph</h2>

                <VictoryPie
                    data={dataV}
                    colorScale={["yellow", "red", "gray", "purple", "maroon", "navy"]}
                    radius={200}
                />
            </div>
        </div>

    );
};

export default Charts;

//  <LineChart width={800} height={400} data={data}>
//     <Line type="monotone" dataKey="sell" stroke="#8884d1" />
//     {/* <Line type="monotone" dataKey="amt" stroke="#8884d8" /> */}
//     <XAxis dataKey={'x'}></XAxis>
//     <YAxis></YAxis>
//     <Tooltip></Tooltip>
// </LineChart >


