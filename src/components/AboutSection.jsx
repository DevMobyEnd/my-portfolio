import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';


const AboutSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Introduce yourself and provide a brief overview of your background and skills.</p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;