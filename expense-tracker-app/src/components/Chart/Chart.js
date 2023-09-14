import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css';

const Chart = (props) => {
    const datapointValues = props.datapoints.map(datapoint => datapoint.value ); 
    const MaxCount = Math.max(...datapointValues); 

  return (
    <div className='chart'>
        {
            props.datapoints.map((datapoint) => {
                return <ChartBar 
                    key={datapoint.label}
                    value={datapoint.value}
                    label={datapoint.label}
                    maxValue={MaxCount}
                />
            })
        }
      
    </div>
  )
}

export default Chart
