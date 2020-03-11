import React from 'react';
import Chart from 'react-apexcharts';

class Plot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Likes',
        data: [4, 3, 10, 9, 29, 19, 22]
      }],
      options: {
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          labels: {
            colors: '#ffffff33',
          },
          markers: {
            fillColors: ['#FDD226', '#8CF4EA'],
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            colorStops: [
              [{
                offset: 0,
                color: "#FDD226",
                opacity: 0
              },
              {
                offset: 50,
                color: "transparent",
                opacity: 0
              }
            ],
          ]
          } 
        },
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2,
          curve: this.props.curve || 'smooth',
          colors: ['#FDD226', '#8CF4EA'],
          dashArray: this.props.isDashed && [0, 8] 
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
    };
  }

  render() {
    return (
      <Chart options={this.state.options} series={this.state.series} type="area" width={500} height={320} />
    );
  }
}

export default Plot;
