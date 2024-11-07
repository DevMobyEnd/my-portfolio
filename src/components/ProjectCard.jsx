import React from 'react';
import { Card, CardContent } from './ui/card';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, githubUrl }) => {
  return (
    <Card className="bg-gray-100 hover:bg-gray-200 transition-colors">
      <CardContent>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-500 hover:text-blue-700">
          <FaGithub className="mr-2" />
          View on GitHub
        </a>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;