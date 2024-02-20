import React from 'react';
import Avatar from './avatar';

interface Profile {
  name?: string;
  imageSrc?: string;
  color?: string;
}

interface AvatarsProps {
  size?: number;
  overlap?: number;
  borderRadius?: string;
  profiles: Profile[];
}

const Avatars: React.FC<AvatarsProps> = ({
  size = 40,
  overlap = 0.7,
  borderRadius = '50%',
  profiles,
}: AvatarsProps) => {
  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: size,
    position: 'relative',
    alignItems: 'center',
  };

  const baseImageStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: borderRadius,
  };

  return (
    <div style={containerStyle}>
      {profiles.map((profile, index) => {
        const overlayStyle: React.CSSProperties = {
          ...baseImageStyle,
          position: 'absolute',
          transform: `translateX(${index * (overlap * size)}px)`,
          zIndex: index + 3,
        };

        return (
          <div key={index} style={overlayStyle}>
            <Avatar
              size={size}
              borderRadius={borderRadius}
              profile={profile}
              index={index} 
              overlap={overlap} 
            />
          </div>
        );
      })}
    </div>
  );
};

export default Avatars;
