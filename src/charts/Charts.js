import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Fetchdata from '../Fetchdata/Fetchdata';

const pdata = [
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8
  },
];

const Charts = () =>{
    return(
        <>
            <h1 className="chart-heading">Activites</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} width={500} height={300} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid />
          <XAxis dataKey="name" interval={'preserveStartEnd'} />
          <YAxis />
          <Legend/>
          <Line type="monotone" dataKey="student" stroke="red"  />
          <Line type="monotone" dataKey="fees" stroke="green" />

        </LineChart>
      </ResponsiveContainer>

     

      <h1 className="chart-heading">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={200}
          height={100}
          data={pdata}
          margin={{
            top: 5,
            right: 500,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <Fetchdata/>
        </>
    )
}

export default Charts;