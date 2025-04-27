import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ProblemCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
  index: number;
  id: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  title,
  description,
  icon: Icon,
  imageSrc,
  index,
  id,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/problems/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card 
        hoverable 
        className="h-full cursor-pointer" 
        onClick={handleClick}
      >
        <Card.Image
          src={imageSrc}
          alt={title}
          className="h-48"
        />
        <Card.Content>
          <div className="flex items-center space-x-2 mb-2">
            <Icon className="w-6 h-6 text-ocean-blue" />
            <Card.Title>{title}</Card.Title>
          </div>
          <p className="text-gray-700">{description}</p>
        </Card.Content>
      </Card>
    </motion.div>
  );
};

export default ProblemCard;