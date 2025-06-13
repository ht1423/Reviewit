import React from 'react';

function Heading({text}) {

  const displayText = typeof text === 'string' && text.length > 0
    ? text.charAt(0).toUpperCase() + text.slice(1)
    : 'Untitled';

  return (
    <div className='flex items-center justify-center mt-12 sm:mt-20 mb-12 sm:mb-20'>
      <div className="text-3xl sm:text-5xl p-2 font-semibold  text-white truncate max-w-[7em] sm:max-w-[9em] md:max-w-[11em] lg:max-w-[13em] xl:max-w-[18em]">
      Hi, {displayText}
    </div>
    </div>
  );
}

export default Heading;
