import React from "react";
import { NavLink } from "react-router-dom";
import ContentTop from "../components/ContentTop";
import Navbar from "../components/Navbar";

const Quality = () => {
  return (
    <div className="content drag__drop__content">
      <ContentTop
        layout={<h1 className="content__heading">Project number 1</h1>}
      />
      <Navbar />

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

      <div className="records">
        <div className="tables">

          <div className="area">
            <h2>34.452</h2>
            <p>Treated records</p>
          </div>




          {/* <div className="histogramms">
            <div className="histogramma">
              <h2>Histograma</h2>
            </div>

            <div className="distribucion">
              <h2>Distribución de densidad</h2>
            </div>
          </div> */}
        </div>

        {/* <div className="porcen">
          <h2>Distribución de densidad</h2>
        </div> */}
      </div>
    </div>
  );
};

export default Quality;
