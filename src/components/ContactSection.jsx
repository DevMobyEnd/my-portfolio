import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-4">
          <a href="mailto:example@email.com" className="text-blue-500 hover:text-blue-700">
            <FaEnvelope size={24} />
          </a>
          <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FaGithub size={24} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSection;