import React from 'react'
import { Line, LineChart, XAxis, YAxis,CartesianGrid, Tooltip, Label } from 'recharts'


const Chart = ({medalData}) => {
	return (
		<div>
      <LineChart width={600} height={600} data={medalData} margin={{ top: 150, right: 50, left: 100, bottom: 50 }}>
        <Line type="linear" dataKey="Medals" stroke="#8884d8" />
        <XAxis dataKey="Year">
            <Label value="Year" offset={-10} position="insideBottom" />
        </XAxis>
        <YAxis>
            <Label value="Medals Won" angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <CartesianGrid vertical={false} />
      </LineChart>
    </div>
	)
}

export default Chart