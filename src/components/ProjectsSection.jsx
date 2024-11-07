import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const ProjectCard = ({ title, description, githubUrl }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub /> View on GitHub
        </a>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      githubUrl: "https://github.com/tuusuario/proyecto1"
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2",
      githubUrl: "https://github.com/tuusuario/proyecto2"
    },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <section id="projects">
      <h2>Mis Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;