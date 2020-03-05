import React from "react";
import ContentTop from "../components/ContentTop";
import Navbar from "../components/Navbar";
import Vector32 from "../images/Vector32.png";
import HorizontalCharts from "./HorizontalCharts";

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
      <div className="table_blocks">
        <div className="records">
          <div className="tables">
            <div className="area">
              <h2>34.452</h2>
              <p>Treated records</p>
            </div>

            <div className="blocks">
              <div className="bar-chart-block sblock">
                <div className="titular_hist">
                  <div className="titular">
                    <span>Histograma</span>
                  </div>
                  <div className="titular_header">Cobrol12M</div>
                </div>
                <div className="grafico bar-chart">
                  <ul className="eje-y">
                    <li data-ejeY="6.000"></li>
                    <li data-ejeY="5.000"></li>
                    <li data-ejeY="4.000"></li>
                    <li data-ejeY="3.000"></li>
                    <li data-ejeY="2.000"></li>
                    <li data-ejeY="1.000"></li>
                    <li data-ejeY="0"></li>
                  </ul>
                  <ul className="eje-x">
                    <li data="37">
                      <i>-1</i>
                    </li>
                    <li data="56">
                      <i>0</i>
                    </li>
                    <li data="25">
                      <i>1</i>
                    </li>
                    <li data-ejeX="18">
                      <i>2</i>
                    </li>
                    <li data-ejeX="45">
                      <i>3</i>
                    </li>
                    <li data-ejeX="50">
                      <i>4</i>
                    </li>
                    <li data-ejeX="33">
                      <i>5</i>
                    </li>
                    <li data-ejeX="33">
                      <i>6</i>
                    </li>
                    <li data-ejeX="33">
                      <i>7</i>
                    </li>
                    <li data-ejeX="33">
                      <i>8</i>
                    </li>
                    <li data-ejeX="33">
                      <i>9</i>
                    </li>
                    <li data-ejeX="33">
                      <i>10</i>
                    </li>
                    <li data-ejeX="33">
                      <i>11</i>
                    </li>
                    <li data-ejeX="33">
                      <i>12</i>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bar-chart-block sblock">
                <img className="graph" src={Vector32} alt="" />

                <div className="titular_hist">
                  <div className="titular">
                    <span>Distribución de densidad</span>{" "}
                  </div>
                  <div className="titular_header">Total Cobro</div>
                </div>
                <div className="grafico bar-chart disbar">
                  <ul className="eje-y dis">
                    <li data-ejeY="0.010"></li>
                    <li data-ejeY="0.008"></li>
                    <li data-ejeY="0.006"></li>
                    <li data-ejeY="0.004"></li>
                    <li data-ejeY="0.002"></li>
                    <li data-ejeY="0.000"></li>
                  </ul>
                  <ul className="eje_table">
                    <li>
                      <i>0</i>
                    </li>
                    <li>
                      <i>200</i>
                    </li>
                    <li>
                      <i>400</i>
                    </li>
                    <li>
                      <i>600</i>
                    </li>
                    <li>
                      <i>800</i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rblock">
          <HorizontalCharts />
        </div>
      </div>
    </div>
  );
};

export default Quality;
