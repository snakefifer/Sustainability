import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SolutionItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const SolutionItem: React.FC<SolutionItemProps> = ({
  title,
  description,
  icon: Icon,
  index,
}) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="bg-light-blue p-3 rounded-full">
        <Icon className="w-8 h-8 text-ocean-blue" />
      </div>
      <div>
        <h3 className="font-heading font-bold text-lg text-navy mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default SolutionItem;