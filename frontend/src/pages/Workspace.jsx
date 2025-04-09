import React, { useEffect } from 'react'
import Navbar from '../components/landing/Navbar'
import Skeleton from '../components/workspace/Skeleton'
import workspaceStore from '../store/workspaceStore'
import { useNavigate, useParams } from 'react-router-dom'

function Workspace() {

    const { get } = workspaceStore()
    const { workspaceId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchWorkspace = async () => {
            await get({ workspaceId, navigate })
        }

        fetchWorkspace()
    },[workspaceId,navigate])

  return (
    <div className=''>
        <Navbar showButton={true}/>
        <Skeleton/>
    </div>
  )
}

export default Workspace