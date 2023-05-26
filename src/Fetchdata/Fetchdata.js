import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React, { useEffect, useState } from 'react';

const Fetchdata = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=FRYC6HR5YVJQFLP4'
          );
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data && (
            <LineChart width={800} height={400} data={formatChartData(data)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="open" name="Open" stroke="#8884d8" />
              <Line type="monotone" dataKey="close" name="Close" stroke="#82ca9d" />
            </LineChart>
          )
        )}
      </div>
    );
  };
  
  const formatChartData = (data) => {
    const timeSeries = data['Time Series (5min)'];
  
    return Object.keys(timeSeries).map((timestamp) => ({
      timestamp,
      open: parseFloat(timeSeries[timestamp]['1. open']),
      close: parseFloat(timeSeries[timestamp]['4. close']),
    }));
  };
export default Fetchdata;
