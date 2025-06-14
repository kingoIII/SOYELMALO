import React from 'react';

interface FeaturedItemCardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional for now, can use placeholder
}

const FeaturedItemCard: React.FC<FeaturedItemCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60"> {/* min-w-60 from mockup */}
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        style={{
          backgroundImage: imageUrl ? `url("${imageUrl}")` : undefined,
          backgroundColor: imageUrl ? undefined : '#283039' // Placeholder background if no image
        }}
      >
        {/* Content inside image can go here if needed, e.g., play button overlay */}
      </div>
      <div>
        <p className="text-white text-base font-medium leading-normal">{title}</p>
        <p className="text-[#9cabba] text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedItemCard;
