import React from 'react';
import ContentTop from '../components/ContentTop';
import Navbar from '../components/Navbar';
import Radar from '../components/RadarChart';
import Density from '../components/Density';
import Map from '../components/Map';
import FamilyDistribution from '../components/FamilyDistribution';
import GroupedBars from '../components/GroupedBars';
import PreHeader from '../components/PreHeader';

const Enrichment = () => {
  const series = [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }];

  return (
    <div className="content">
      <ContentTop
        layout={<h1 className="content__heading">Project number 1</h1>}
      />
      <Navbar />

      <div className="enrichment">
        <div className="select_dataset">
          <div className="header">
            <p>Select dataset:</p>
            <button>
              <span>Dataset Lorem Ipsum 01</span>
            </button>
            <button>
              <span>Dataset Lorem Ipsum 02</span>
            </button>
            <button>
              <span>Dataset Lorem Ipsum 03</span>
            </button>
          </div>
        </div>
        <PreHeader />
        <div className="enrichment__container">
          <div className="enrichment__data-quality">
            <div className="enrichment__header">
              <h2 className="enrichment__title">data quality</h2>
              <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
            </div>

            <Radar />

            <div className="enrichment__bottom">
              Porcentaje del total de registros
            </div>

          </div>

          <div className="enrichment__density">
            <div className="enrichment__header">
              <h2 className="enrichment__title">Density distribution of the percentage of nulls in variables</h2>
              <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
            </div>
            <Density width={850} series={series} />
          </div>

          <div className="enrichment__map">
            <div className="enrichment__header">
              <h2 className="enrichment__title">Number of records map</h2>
              <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
            </div>
            <Map />
          </div>

          <div className="enrichment__distribution-wrapper">
            <div className="enrichment__distribution">
              <div className="enrichment__header">
                <h2 className="enrichment__title">Family distribution</h2>
                <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
              </div>
              <FamilyDistribution />
            </div>

            <div className="enrichment__distribution">
              <div className="enrichment__header">
                <h2 className="enrichment__title">Family distribution</h2>
                <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
              </div>
              <GroupedBars />
            </div>

            <div className="enrichment__distribution">
              <div className="enrichment__header">
                <h2 className="enrichment__title">Family distribution</h2>
                <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
              </div>
              <FamilyDistribution isVertical={true} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default Enrichment;