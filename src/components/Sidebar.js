// src/components/Sidebar.js
import React from 'react';
import "./sideBar.css"
import sideicon from "../assets/command-line.png"
const Sidebar = ({ project, onClose }) => {
  return (
    <div className="sidebar open">
      <div>
      <button className="close-button bg-red-200 p-2 rounded-xl text-red-600" onClick={onClose}>
        Close
      </button>
      </div>
      <div className='mt-12 p-5'>
      <h2 className='flex'><img src={sideicon} className='w-5 mr-2'></img>Title</h2>
      <p>{project['Project.Title']}</p>
      <h2 className='flex'><img src={sideicon} className='w-5 mr-2'></img>Project_Technologies</h2>
      <p>{project['Project.Technologies']}</p>
      <h2 className='flex'><img src={sideicon} className='w-5 mr-2'></img>Project_Skillet.Frontend</h2>
      <p>{project['Technical_Skillset.Frontend']}</p>
      <h2 className='flex'><img src={sideicon} className='w-5 mr-2'></img>Project_Skillet.Backend</h2>
      <p>{project['Technical_Skillset.Backend']}</p>
      <h2 className='flex'><img src={sideicon} className='w-5 mr-2'></img>Technical_Skillset.Database</h2>
      <p>{project['Technical_Skillset.Databases']}</p>
      <h2 className='flex'><img src={sideicon} className='w-5 mr-2'></img>Technical_Skillset.Infrastructre</h2>
      <p>{project['Technical_Skillset.Infrastructre']}</p>  
      </div>
      
    </div>
  );
};

export default Sidebar;
