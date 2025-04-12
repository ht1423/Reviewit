import React, { useEffect } from 'react';
import Navbar from '../components/landing/Navbar';
import Skeleton from '../components/workspace/Skeleton';
import workspaceStore from '../store/workspaceStore';
import { useNavigate, useParams } from 'react-router-dom';

function Workspace() {
  const { get } = workspaceStore();
  const { workspaceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkspace = async () => {
      await get({ workspaceId, navigate });
    };

    fetchWorkspace();
  }, [workspaceId, navigate]);

  return (
    <div className="bg-black/90 min-h-screen text-white">
      <Navbar showButton={true} />
      <div className="px-4 md:px-10 lg:px-24 xl:px-40 mt-12">
        <Skeleton />
      </div>
    </div>
  );
}

export default Workspace;
