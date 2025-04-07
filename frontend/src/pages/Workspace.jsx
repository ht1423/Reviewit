import React, { useEffect } from 'react'
import Navbar from '../components/landing/Navbar'
import Skeleton from '../components/workspace/Skeleton'
import workspaceStore from '../store/workspaceStore'
import { useParams } from 'react-router-dom'

function Workspace() {

    const { get } = workspaceStore()
    const { workspaceId } = useParams()

    useEffect(() => {
        const fetchWorkspace = async () => {
            await get({ workspaceId })
        }

        fetchWorkspace()
    },[workspaceId])

  return (
    <div className=''>
        <Navbar showButton={true}/>
        <Skeleton/>
    </div>
  )
}

export default Workspace