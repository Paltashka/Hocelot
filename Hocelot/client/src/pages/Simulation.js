import React from 'react';
import ContentTop from '../components/ContentTop';
import Navbar from '../components/Navbar';

const Simulation = () => {
  return (
    <div className="content">
      <ContentTop
        layout={<h1 className="content__heading">Project number 1</h1>}
      />
      <Navbar />

      <div className="simulation">
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

        <div className="simulation__container">
          <div className="simulation__box">
              <div className="enrichment__header" style={{ justifyContent: 'space-between' }}>
                <div style={{ display: 'flex' }}>
                  <h2 className="enrichment__title">Score explanation for a sample</h2>
                  <img className="enrichment__icon" src="/icons/info-icon.svg" alt="info icon" />
                </div>
                <div>
                  <div style={{ display: 'flex' }}>
                    <img className="" src="/icons/icon-arrow-red.svg" alt="arrow right"/>
                    <h3 className="simulation__label">Higher</h3>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <img className="" src="/icons/icon-arrow-blue.svg" alt="arrow left"/>
                    <h3 className="simulation__label">Lower</h3>
                  </div>
                </div>
              </div>

              <div className="simulation__graph">
                <div></div>
                <div>
                  <div className="simulation__red"></div>
                </div>
                <div>
                  <div className="simulation__dark-blue"></div>
                </div>
                <div>
                  <div className="simulation__blue"></div>
                </div>
                <div>
                  <div className="simulation__light-blue"></div>
                  <div className="simulation__aqua-blue"></div>
                </div>
                <div>
                  <div className="simulation__aqua"></div>
                  <div className="simulation__light-aqua"></div>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Simulation;