import React from 'react';
import Chart from 'react-apexcharts';

class Matrix extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Metric1',
        data: [18, 70],
      },
      {
        name: 'Metric2',
        data: [10, 17]
      }],
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: true,
          style: {
            fontFamily: 'Montserrat',
            fontWeight: 600,
          }
        },
        colors: ["#FF5753"],
        xaxis: {
          labels: {
            style: {
              colors: '#eeeeee33'
            }
          },
          axisTicks: {
            show: false,
            floating: true,
            offsetX: 20
          },
          tickAmount: 1,
          tickPlacement: 'on',
        },
        yaxis: {
          labels: {
            style: {
              colors: '#eeeeee33'
            }
          },
        }
      },
      
    };
  }



  render() {
    return (
      <div className="enrichment__heatmap">
        <Chart options={this.state.options} series={this.state.series} width={450} height={320} type="heatmap" />
      </div>
    );
  }
}

export default Matrix;