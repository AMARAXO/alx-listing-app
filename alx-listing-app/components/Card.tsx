import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="border rounded shadow-lg p-4">
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded mb-2" />
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default Card;
