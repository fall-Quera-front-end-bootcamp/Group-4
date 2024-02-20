import React from 'react';
// @ts-ignore
import tinycolor from 'tinycolor2';

interface Profile {
  name?: string;
  imageSrc?: string;
  color?: string;
}

interface AvatarProps {
  size: number;
  borderRadius: string;
  profile: Profile;
  index: number; 
  overlap: number; 
}

const Avatar: React.FC<AvatarProps> = ({ size, borderRadius, profile, index, overlap }: AvatarProps) => {
  const baseImageStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius,
    cursor: 'pointer',
    zIndex: 2,
  };


  const textColor = profile.color;
  const bgColor = profile.color ? tinycolor(profile.color).lighten(35).toString() : 'lightgray';

  return profile.imageSrc ? (
    <img
      src={profile.imageSrc}
      alt={`Avatar for ${profile.name}`}
      style={baseImageStyle}
      onError={(event) => {
        console.error('Image failed to load:', profile.imageSrc);
      }}
    />
  ) : (
    <div
      style={{
        ...baseImageStyle,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        color: textColor,
        backgroundColor: bgColor,
      }}
    >
      <div
        style={{
          fontSize: size * 0.3,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius,
        }}
      >
        {profile.name?.split(' ').map((part: string) => part.charAt(0).toUpperCase()).join('').slice(0, 2)}
      </div>
    </div>
  );
};

export default Avatar;
export{}