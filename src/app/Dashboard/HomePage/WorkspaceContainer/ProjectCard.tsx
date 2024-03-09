import React from 'react';

interface ProjectCardProps {
  id: number;
  name: string;
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, color }) => {
  return (
    <div className={`flex justify-center items-center bg-gradient-to-br from-${color} to-${color}Light bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer`}>
      <p className="text-xl text-white font-bold mt-3">{name}</p>
      {/* <div className= 'flex justify-center items-center bg-gradient-to-br from-cornflowerBlue to-cornflowerBlueLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div>
      <div className= 'flex justify-center items-center bg-gradient-to-br from-ceruleanBlue to-ceruleanBlueLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div>
      <div className= 'flex justify-center items-center bg-gradient-to-br from-skyBlue to-skyBlueLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div>
      <div className= 'flex justify-center items-center bg-gradient-to-br from-teal to-tealLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div>
      <div className= 'flex justify-center items-center bg-gradient-to-br from-darkCyan to-darkCyanLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div>
      <div className= 'flex justify-center items-center bg-gradient-to-br from-limeGreen to-limeGreenLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div>
      <div className= 'flex justify-center items-center bg-gradient-to-br from-electricLime to-electricLimeLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div>
      <div className= 'flex justify-center items-center bg-gradient-to-br from-goldenYellow to-goldenYellowLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div>
      <div className= 'flex justify-center items-center bg-gradient-to-br from-orange to-orangeLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div>
      <div className= 'flex justify-center items-center bg-gradient-to-br from-redOrange to-redOrangeLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div>
      <div className= 'flex justify-center items-center bg-gradient-to-br from-hotPink to-hotPinkLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div>
      <div className= 'flex justify-center items-center bg-gradient-to-br from-purple to-purpleLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div>
      <div className= 'flex justify-center items-center bg-gradient-to-br from-blueViolet to-blueVioletLight bg-opacity-50 p-4 rounded-lg w-[200px] h-[80px] cursor cursor-pointer'></div> */}
    </div>
  );
};

export default ProjectCard;


//bg-gradient-to-r from-${color}-200 to-${color}-500