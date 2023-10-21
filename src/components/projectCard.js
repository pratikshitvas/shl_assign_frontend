// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ project,onKnowMore }) => {
  return (
    <div className="project-card rounded-md m-2 p-5 shadow-md bg-slate-50 ">
      <h2>Title</h2>
      <p>{project['Project.Title']}</p>
      <h2>Project_Technologies</h2>
      <p>{project['Project.Technologies']}</p>
      <h2>Project_Skillet.Frontend</h2>
      <p>{project['Technical_Skillset.Frontend']}</p>
      <h2>Project_Skillet.Backend</h2>
      <p>{project['Technical_Skillset.Backend']}</p>
      <h2>Technical_Skillset.Database</h2>
      <p>{project['Technical_Skillset.Databases']}</p>
      <h2>Technical_Skillset.Infrastructre</h2>
      <p>{project['Technical_Skillset.Infrastructre']}</p>

      <button className="know-more-button p-2 bg-red-100 mt-5 rounded-md text-red-600 text-sm " onClick={() => onKnowMore(project)}>
        Know More
      </button>
    </div>
  );
};

export default ProjectCard;
