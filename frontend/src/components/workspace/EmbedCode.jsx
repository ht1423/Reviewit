import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

function EmbedCode() {
  const { workspaceId } = useParams();
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const embedCode = `<iframe src="https://my-reviewit.vercel.app/workspace/${workspaceId}/wall-of-love" width="100%" style="border:none; height:100vh"></iframe>`;
  const linkUser = `https://my-reviewit.vercel.app/workspace/${workspaceId}/testimonial?type=text`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(embedCode).then(() => {
      setCopiedCode(true);
      setTimeout(() => {
        setCopiedCode(false);
      }, 2000);
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(linkUser).then(() => {
      setCopiedLink(true);
      setTimeout(() => {
        setCopiedLink(false);
      }, 2000);
    });
  };

  return (
    <div className="bg-zinc-900/5 mx-6 p-5 rounded-lg border border-zinc-800 text-white/80">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold text-lg sm:text-xl">Embed this code in your website:</p>
          <div onClick={handleCopyCode} className='text-xl cursor-pointer hover:opacity-70'>
            {copiedCode ? <span className='text-xl text-green-500'><FaCheck /></span> : <MdContentCopy />}
          </div>       
        </div>
        <textarea
          value={embedCode}
          readOnly
          className="w-full h-44 sm:h-36 lg:h-28 p-4 tracking-wider bg-zinc-800 border border-zinc-700 rounded-md text-white/70 text-sm sm:text-base"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold text-lg sm:text-xl">Copy this link to let users review your website:</p>
          <div onClick={handleCopyLink} className='text-xl cursor-pointer hover:opacity-70'>
            {copiedLink ? <span className='text-xl text-green-500'><FaCheck /></span> : <MdContentCopy />}
          </div>
        </div>
        <textarea
          value={linkUser}
          readOnly
          className="w-full h-44 sm:h-36 lg:h-28 p-4 tracking-wider bg-zinc-800 border border-zinc-700 rounded-md text-white/70 text-sm sm:text-base"
        />
      </div>
    </div>
  );
}

export default EmbedCode;
