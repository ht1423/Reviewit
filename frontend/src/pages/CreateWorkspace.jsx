import React from 'react';
import Navbar from '../components/landing/Navbar';
import Card from '../components/createWorkspace/Card';

function CreateWorkspace() {
  return (
    <div className="bg-black h-screen flex flex-col overflow-hidden">
      <Navbar showButton={true} />
      <div className="flex justify-center items-center h-screen ">
        <Card />
      </div>
    </div>
  );
}

export default CreateWorkspace;
