import React, { useMemo } from 'react';
import Chart from 'react-apexcharts';
import _ from 'lodash';

export const DisplayHeatChart = ({ dataHeat }) => {
  // Data cho Heat chart
  const seriesDataHeat = useMemo(() => (
    _.map(dataHeat, (dt) => ({
      name: dt.day,
      data: _.map(dt.hours, (hour) => ({ x: hour.time, y: hour.value }))
    }))), [dataHeat]);

  // Data cho Bar chart
  const seriesDataBar = useMemo(() => ({
    data: _.map(seriesDataHeat, (dt) =>  _.sumBy(dt.data, (o) => o.y)),
    category: _.map(seriesDataHeat, (dt) => dt.name)
  }), [seriesDataHeat]);

  // Sample data cho Heat chart
  const sampleDataHeat = {
    series: seriesDataHeat,
    options: {
      chart: {
        height: 300,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#925de2"],
      stroke: {
        width: 1
      },
      yaxis: {
        show: false
      }
    }
  };

  // Sample data cho Bar chart
  const sampleDataBar = {      
    series: [{
      data: seriesDataBar.data
    }],
    options: {
      chart: {
        type: 'bar',
        height: 300
      },
      colors: ['#48c0b0'],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '90%',
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: seriesDataBar.category
      }
    }
  };

  // data cho thanh bar color
  const dataBar = _.map(_.range(0,51), (d) => {
    return {
      x: d,
      y: d
    }
  });
  const bar = {     
    series: [{
      name: 'value',
      data: dataBar
    }],
    options: {
      plotOptions: {
        heatmap: {
          radius: 0
        }
      },
      chart: {
        height: 10,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#925de2"],
      stroke: {
        width: 0
      },
      yaxis: {
        show: false
      }
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      padding: '0 20px'
    }}>
      <div style={{ width: '70%' }}>
        <Chart
          options={sampleDataHeat.options}
          series={sampleDataHeat.series}
          type='heatmap'
          height={300}
        />
      </div>
      <div style={{ width: '30%'}}>
        <Chart
          options={sampleDataBar.options}
          series={sampleDataBar.series}
          type='bar'
          height={300}
          />
      </div>
      <div style={{ width: '70%'}}>
        <Chart
          options={bar.options}
          series={bar.series}
          type='heatmap'
          height={80}
        />
      </div>
    </div>
  );
};
