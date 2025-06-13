import React from 'react';
import Heading from '../workspace/Heading';
import authStore from '../../store/authStore';
import WorkspaceList from './WorkspaceList';
import TestimonialButton from '../workspace/TestimonialButton';
import { useNavigate } from 'react-router-dom';

function Skeleton() {
  const { user } = authStore();
  const workspaces = user?.workspaces
  const navigate = useNavigate()

  return (
    <div className=''>
      <Heading text= {user?.name}/>
      <div className='flex justify-center'>
        <TestimonialButton text='+ Create Workspace' nav={() => navigate('/create')}/>
      </div>
      <div className='text-center text-3xl sm:text-4xl mb-8 mt-16 sm:mt-28 font-medium ' style={{
        wordSpacing: '6px'
      }}>Your Workspaces</div>
      <WorkspaceList workspaces={workspaces}/>
    </div>
  );
}

export default Skeleton;
