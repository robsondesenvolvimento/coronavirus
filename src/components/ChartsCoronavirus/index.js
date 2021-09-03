import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: '2021', pv: 2400, uv: 2400, xv: 500, amt: 2400 },
    { name: '2021', pv: 1398, uv: 2210, xv: 900, amt: 2400 },
    { name: '2021', pv: 9800, uv: 2290, xv: 2400, amt: 2400 },
    { name: '2021', pv: 3908, uv: 2000, xv: 2400, amt: 2400 },
    { name: '2021', pv: 4800, uv: 2181, xv: 2000, amt: 2400 },
    { name: '2021', pv: 3800, uv: 2500, xv: 2400, amt: 2400 },
    { name: '2021', pv: 4300, uv: 2100, xv: 2000, amt: 2400 },
    { name: '2021', pv: 4300, uv: 2100, xv: 6000, amt: 2400 },
];

function ChatsCoronavirus() {

    const [largura, Setlargura] = useState(window.innerWidth)

    return (
        <div>
            <AreaChart width={largura - 50} height={250} data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorXv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ff6347" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#ff6347" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="6 6" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                <Area type="monotone" dataKey="xv" stroke="#ff6347" fillOpacity={1} fill="url(#colorXv)" />
            </AreaChart>

            <Chart
                width={'1000px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['City', '2010 Population', '2000 Population'],
                    ['New York City, NY', 8175000, 8008000],
                    ['Los Angeles, CA', 3792000, 3694000],
                    ['Chicago, IL', 2695000, 2896000],
                    ['Houston, TX', 2099000, 1953000],
                    ['Philadelphia, PA', 1526000, 1517000],
                ]}
                options={{
                    title: 'Population of Largest U.S. Cities',
                    chartArea: { width: '50%' },
                    hAxis: {
                        title: 'Total Population',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'City',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )

}

export default ChatsCoronavirus