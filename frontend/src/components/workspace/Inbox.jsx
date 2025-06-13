import React from 'react';
import InboxElements from './InboxElements';

function Inbox() {
  return (
    <div className="text-center mt-20 sm:mt-24">
      <div className="text-[26px] font-semibold text-zinc-300 mb-12">Inbox</div>
      <div className="flex justify-center items-center flex-wrap gap-10">
        {['All', 'Text', 'Image', 'Video', 'Liked'].map((type) => (
          <InboxElements key={type} type={type} />
        ))}
      </div>
    </div>
  );
}

export default Inbox;
