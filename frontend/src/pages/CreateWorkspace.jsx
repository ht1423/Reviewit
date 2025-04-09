import React from 'react'
import Navbar from '../components/landing/Navbar'
import Card from '../components/createWorkspace/Card'

function CreateWorkspace() {

  return (
    <div>
        <Navbar showButton={true}/>
        <div className='flex justify-center items-center h-screen w-full'>
            <Card/>
        </div>
    </div>
  )
}

export default CreateWorkspace