'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ Icon, title, description }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className="bg-teal-50 p-4 rounded-full mb-6">
        <Icon className="w-6 h-6 text-teal-600" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

export default Card;