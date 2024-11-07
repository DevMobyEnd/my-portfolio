import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import SkillItem from './SkillItem';

const SkillsSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>My Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <SkillItem skill="React" />
          <SkillItem skill="Node.js" />
          <SkillItem skill="Python" />
          <SkillItem skill="SQL" />
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;