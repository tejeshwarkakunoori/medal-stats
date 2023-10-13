import React from 'react'
import { 
  Line, 
  LineChart, 
  XAxis, 
  YAxis,
  CartesianGrid, 
  Tooltip, 
  Label, 
  ResponsiveContainer 
} from 'recharts'


const Chart = ({medalData}) => {
	return (
		<div className='chart-container'>
      <h4>Medals won by India in Olympics</h4>
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
      <LineChart width={600} height={400} data={medalData} margin={{ top: 15, right: 30, bottom: 30, left: 0 }}>
        <Line type="linear" dataKey="Medals" stroke="#8884d8" />
        <XAxis dataKey="Year">
            <Label value="Year" offset={-10} position="insideBottom" />
        </XAxis>
        <YAxis type='number' includeHidden>
            <Label value="Medals" offset={30} angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <CartesianGrid vertical={false} />
      </LineChart>
      </ResponsiveContainer>
    </div>
	)
}

export default Chart