import React from 'react'
import workspaceStore from '../../store/workspaceStore'

function Heading() {
  const workspace = workspaceStore(state => state.workspace)

  return (
    <div className='text-4xl font-bold text-center'>{workspace?.name}</div>
  )
}

export default Heading