import React, { useEffect } from 'react'
import Skeleton from '../components/Workspace/Skeleton'
import Navbar from '../components/Landing/Navbar'
import useAuthStore from '../store/authStore'
import { useNavigate, useParams } from 'react-router-dom'
function Workspace() {

  const { workspaceId } = useParams()
  const { get } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      await get(workspaceId, navigate)
    }

    fetchData()
    
  },[workspaceId])

  return (
    <div className='overflow-x-hidden mb-20'>
      <Navbar black={true} button={true}/>
      <Skeleton/>
    </div>
  )
}

export default Workspace