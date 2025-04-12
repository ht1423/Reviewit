import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

function EmbedCode() {
  const { workspaceId } = useParams();
  const [copied, setCopied] = useState(false)

  const embedCode = `<iframe src="http://localhost:5173/workspace/${workspaceId}/wall-of-love" width="100%" style="border:none; height:100vh"></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode).then(() => {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 2000);
    })
  }

  return (
    <div className="bg-black/5 mx-6 p-5  rounded-lg border border-zinc-800 text-white/80">
      <div className="flex items-center justify-between mb-8">
        <p className="font-semibold text-lg sm:text-xl">Embed this code in your website:</p>
        <div onClick={handleCopy} className='text-xl cursor-pointer hover:opacity-70'>
          {copied ? <span className='text-xl text-green-500'><FaCheck />
            </span> :
          <MdContentCopy />}
        </div>       
      </div>
      <textarea
        value={embedCode}
        readOnly
        className="w-full h-44 sm:h-36 lg:h-28 p-4 tracking-wider bg-zinc-800 border border-zinc-700 rounded-md text-white/70 text-sm sm:text-base"
      />
    </div>
  );
}

export default EmbedCode;
