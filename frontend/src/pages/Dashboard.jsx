import React from 'react';
import Navbar from '../components/landing/Navbar';
import Skeleton from '../components/dashboard/Skeleton';
import authStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const authenticated = authStore(state => state.authenticated);
  const navigate = useNavigate()

  if (!authenticated) {
    return (
      <div className="bg-black/90 h-screen overflow-hidden text-white">
        <Navbar />
        <div className="flex items-center justify-center h-screen px-10">
          <div className="w-full max-w-xl text-black py-10 px-6 sm:px-10 text-center bg-zinc-900 rounded-2xl shadow-xl border border-zinc-800 -mt-28">
            <h2 className="text-2xl sm:text-4xl text-white font-semibold mb-10 sm:mb-16">You're not logged in</h2>
            <p className="text-base sm:text-lg text-gray-400">
              To access your personalized dashboard, please sign in with your account credentials.
            </p>
            <button 
              onClick={() => navigate('/auth?action=signin')} 
              className="text-white mt-10 bg-indigo-800 py-2 px-8 text-lg font-semibold transition-all rounded-lg duration-300 transform hover:opacity-70 shadow-lg cursor-pointer">
              Log in
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/90 min-h-screen text-white">
      <Navbar showButton={true} />
      <div className="px-4 md:px-10 lg:px-24 xl:px-40 pb-10">
        <Skeleton />
      </div>
    </div>
  );
}

export default Dashboard;
