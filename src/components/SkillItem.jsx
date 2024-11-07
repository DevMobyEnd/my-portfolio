import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const SkillItem = ({ skill }) => {
  return (
    <li className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-md p-4 flex items-center justify-between">
      <span className="font-medium">{skill}</span>
      <div className="flex items-center space-x-2">
        <FaCheckCircle className="text-green-500" />
      </div>
    </li>
  );
};

export default SkillItem;