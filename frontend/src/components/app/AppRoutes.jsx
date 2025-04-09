import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './Routes'

function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />
      })}
    </Routes>
  )
}

export default AppRoutes
