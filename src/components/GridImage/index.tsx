// GridImage.tsx
import React from 'react';

interface GridImageProps {
  image: string; // Specify that 'image' should be a string (URL of the image)
  layout?: string; // Optional 'layout' prop for styling
}

const GridImage: React.FC<GridImageProps> = ({ image, layout = '' }) => {
  return (
    <div className={`w-[850px] h-[800px] ${layout}`}>
      <img src={image} alt="Project" className="w-full h-full object-cover" />
    </div>
  );
};

export default GridImage;
