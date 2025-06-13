function DisplayType({ displayType, onClick, activeType }) {
  const isActive = displayType === activeType;

  return (
      <div 
          onClick={onClick} 
          className={` w-20 flex items-center justify-center h-8 text-sm sm:text-base transition duration-150 text-white ease-in-out cursor-pointer 
          ${isActive ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-gray-500' : 'hover:opacity-70'}`}
      >
          {displayType.charAt(0).toUpperCase() + displayType.slice(1)}
      </div>
  );
}

export default DisplayType