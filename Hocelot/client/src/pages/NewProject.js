import React from 'react';
import ContentTop from '../components/ContentTop';
import NewProjectTable from '../components/NewProjectTable'
import Navbar from '../components/Navbar'
import {NavLink} from 'react-router-dom'

const newProject = () => {
  
  return (
<div className="content">
      <ContentTop layout={<h1 className="content__heading">Project number 1</h1>}/>
      <Navbar />
      <div className="projects newproject">
      

        <div className="projects__helpers">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            
            <NavLink to="/dragdrop">
            <button className="shorttable__button newprojectbutton" type="button">Upload dataset
            <img src="/icons/proccessor.svg" alt="proccess icon" />
            </button>
            </NavLink>
          </div>
        </div>
      </div>
      
    <NewProjectTable/>
    </div>


  );
};

export default newProject;