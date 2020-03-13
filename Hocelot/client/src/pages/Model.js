import React from 'react';
import Navbar from '../components/Navbar';
import ContentTop from '../components/ContentTop';
import Density from '../components/Density';
import Histogram from '../components/Histogram';
import Matrix from '../components/Matrix';
import Plot from '../components/Plot';
import PreHeader from '../components/PreHeader';

const Model = () => {
  const series1 = [{
    name: 'series1',
    data: [110, 110, 20, 15, 10, 5, 1]
  }];

  const series2 = [{
    name: 'series2',
    data: [10, 29, 65, 50, 80, 105, 120]
  }, {
    name: 'series3',
    data: [0, 20, 40 ,60, 80 ,100 ,120]
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
          <div className="enrichment__density" style={{ marginRight: '20px'}}>
            <div className="enrichment__header">
              <h2 className="enrichment__title">Score density distinction</h2>
              <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
            </div>

            <Density width={750} series={series1} />

          </div>

          <div className="enrichment__density">
            <div className="enrichment__header">
              <h2 className="enrichment__title">Roc curve</h2>
              <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
            </div>

            <Density width={500} series={series2} curve={'straight'} isDashed={true} />

          </div>

          <div className="enrichment__histogram">
            <div className="enrichment__header">
              <h2 className="enrichment__title">Score histogram by class</h2>
              <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
            </div>

            <Histogram />
          </div>

          <div className="enrichment__matrix">
            <div className="enrichment__header">
              <h2 className="enrichment__title">Score histogram by class</h2>
              <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
            </div>

            <Matrix />
          </div>
          
          <div className="enrichment__plot">
            <div>
              <div className="enrichment__header">
                <h2 className="enrichment__title">Learning curve in K-Fold CV</h2>
                <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
              </div>

              <Plot />
            </div>
            <div>
              <div className="enrichment__header">
                <h2 className="enrichment__title">Learning curve in K-Fold averaged</h2>
                <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
              </div>

              <Plot />
            </div>
          </div>

          <div className="enrichment__density">
            <div className="enrichment__header">
              <h2 className="enrichment__title">Importance Density</h2>
              <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
            </div>
            <Density width={450} series={series1} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Model;