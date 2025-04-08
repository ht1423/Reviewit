import React from 'react'
import { useParams } from 'react-router-dom'

function EmbedCode() {

    const { workspaceId } = useParams();  

  const embedCode = `<iframe src="https://localhost.5173/workspace/${workspaceId}/wall-of-love" width="100%" height="500px" style="border:none;"></iframe>`

  return (
    <div className="bg-gray-100 p-4 rounded">
      <p className="mb-2 font-semibold">Embed this code in your website:</p>
      <textarea
        value={embedCode}
        readOnly
        className="w-full h-24 p-2 bg-white border border-gray-300 rounded"
      />
    </div>
  )
}

export default EmbedCode
