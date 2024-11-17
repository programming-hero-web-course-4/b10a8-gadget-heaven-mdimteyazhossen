import React from 'react'
import { Helmet } from 'react-helmet';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
  {
    name: "Computer",
    Sell: 2000,
    Stock: 5000,
    amt: 2400
  },
  {
    name: "Laptop",
    Sell: 3490,
    Stock: 3300,
    amt: 2210
  },
  {
    name: "Phone",
    Sell: 3690,
    Stock: 1000,
    amt: 2290
  },
  {
    name: "Charger",
    Sell: 100,
    Stock: 4300,
    amt: 2000
  },
  {
    name: "Smart Watch",
    Sell: 3000,
    Stock: 4600,
    amt: 2181
  },
  {
    name: "Headphone",
    Sell: 2500,
    Stock: 7000,
    amt: 2500
  },
  {
    name: "Others",
    Sell: 300,
    Stock: 4300,
    amt: 2100
  }
];
const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <div className='text-center grid gap-5 banner-background p-10 lg:p-20 my-10'>
        <h1 className='text-6xl font-bold text-white'>Statistics</h1>
        <p className='text-xl font-base text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
      </div>
      <h1 className="text-5xl font-bold p-10">Statistics :</h1>
      <div className='text-align justify-center mx-auto lg:w-[90%]'>
    <ResponsiveContainer width="100%" height={600}>
  <BarChart
    data={data}
    margin={{
      top: 20,
      right: 0,
      left: 0,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
    <Tooltip />
    <Legend />
    <Bar yAxisId="left" dataKey="Sell" fill="#8884d8" />
    <Bar yAxisId="right" dataKey="Stock" fill="#82ca9d" />
  </BarChart>
</ResponsiveContainer>

    </div>
    <h1 className='text-3xl text-center font-bold mb-10'>Our Sells in last year(2023)</h1>
  </div>
  )
}

export default Statistics
