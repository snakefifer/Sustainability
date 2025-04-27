import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ResourceLinkProps {
  title: string;
  description: string;
  url: string;
  index: number;
}

const ResourceLink: React.FC<ResourceLinkProps> = ({ 
  title, 
  description, 
  url,
  index
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h3 className="font-heading font-bold text-xl text-navy mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-5 py-2 bg-[#0077B6] text-white font-bold rounded transition-all hover:bg-blue-700 uppercase text-sm"
      >
        Visit Resource <ExternalLink className="ml-2 w-4 h-4" />
      </a>
    </motion.div>
  );
};

export default ResourceLink;