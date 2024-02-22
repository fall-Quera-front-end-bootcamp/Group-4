import React from 'react';
import Avatar from '../avatar/avatar';

interface Profile {
  name: string;
  imageSrc: string;
  color: string;
}

interface Names {
  fontWeight: number;
  fontSize: string;
}

const ShowUser: React.FC = () => {
  const profile: Profile = {
    name: 'محمد',
    imageSrc: '',
    color: '#007bff'
  };

  const names: Names = {
    fontWeight: 500,
    fontSize: "16px"
  };

  return (
    <div className='w-[144px] h-[33px] flex items-center'>
      <h1 style={names} className='pr-[10px]'>{profile.name}</h1>
      <Avatar
        size={33}
        borderRadius="50%"
        profile={profile}
        index={0}
        overlap={0}
      />
    </div>
  );
}

export default ShowUser;
