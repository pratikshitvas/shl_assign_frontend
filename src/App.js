import React, { useState, useEffect } from 'react';
import ProjectCard from './components/projectCard';
import Sidebar from './components/Sidebar';
import "./App.css"
function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(10);
  

  useEffect(() => {
    fetch('https://shl-asign-backend.onrender.com/project/getAll')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const openSidebar = (project) => {
    setSelectedProject(project);

  };

  const closeSidebar = () => {
    setSelectedProject(null);

  };

  const loadMoreProjects = () => {
    setVisibleProjects(visibleProjects + 10);
  };

console.log('project',projects)
  return (
    <div className="App">
       
      <h1 className='p-5 font-medium antialiased text-base'>Projects</h1>

      <div className=" project-list p-2 grid grid-flow-row grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onKnowMore={openSidebar}
          />
        ))}
      </div>
      {visibleProjects < projects.length && (
        <button className="load-more-button bg-red-100 m-8 p-3 text-red-600 rounded-md " onClick={loadMoreProjects}>
          Load More
        </button>
      )}
      {selectedProject && (
        <Sidebar project={selectedProject} onClose={closeSidebar} />
      )}
    </div>
  );
}

export default App;