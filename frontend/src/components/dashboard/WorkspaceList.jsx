import React from 'react'
import WorkspaceCard from './WorkspaceCard'

function WorkspaceList({workspaces}) {
  return (
    <div className='flex flex-col justify-center items-center gap-10 mx-4 sm:max-0'>
        {workspaces?.length > 0 ? (
          workspaces.map((w) => (
            <WorkspaceCard workspace={w} key={w.id}/>
          ))
        ) : <div>No workspaces found 😭😭</div>}
      </div>
  )
}

export default WorkspaceList