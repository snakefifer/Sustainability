import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  hoverable = false
}) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 
      ${hoverable ? 'hover:shadow-lg hover:-translate-y-1' : ''}
      ${onClick ? 'cursor-pointer' : ''} 
      ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
    </div>
  );
};

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
};

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return (
    <h3 className={`font-heading font-bold text-xl text-navy mb-2 ${className}`}>
      {children}
    </h3>
  );
};

Card.Image = CardImage;
Card.Content = CardContent;
Card.Title = CardTitle;

export default Card;