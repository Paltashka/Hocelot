import React from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

const Radar = () => {
  const data = [
    {
      data: {
        idCheck: 0.7,
        geoCheck: .8,
        emailValidation: 0.9,
        phoneValidation: 0.67,
        phoneVerification: 0.8
      },
      meta: { color: 'orange' }
    },
  ];

  const captions = {
    idCheck: 'Id check',
    geoCheck: 'Geo check',
    emailValidation: 'EmailValidation',
    phoneValidation: 'Phone Validation',
    phoneVerification: 'Phone Verification'
  };

  const options = {
    zoomDistance: 1.5,
    scales: 1,
    axes: true,
    dots: true
  };

  return (
    <div className="enrichment__radar">
        <RadarChart
          options={options}
          captions={captions}
          data={data}
          size={320}
      />
    </div>
  );
};

export default Radar;