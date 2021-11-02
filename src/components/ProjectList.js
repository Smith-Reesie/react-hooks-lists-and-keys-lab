import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const mappedProjects = projects.map(project => 
  <ProjectItem 
  key={project.id}
  about={project.about}
  name={project.name} 
  technologies={project.technologies} />
  )
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {mappedProjects}
      </div>
    </div>
  );
}

export default ProjectList;
