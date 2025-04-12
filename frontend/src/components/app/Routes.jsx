import React from "react"
import Auth from "../../pages/Auth"
import CreateWorkspace from "../../pages/CreateWorkspace"
import Landing from "../../pages/Landing"
import Testimonial from "../../pages/Testimonial"
import Workspace from "../../pages/Workspace"
import WallOfLove from "../../pages/WallOfLove"
import Dashboard from "../../pages/Dashboard"

export const routes = [
    { path: '/', element: <Landing /> },
    { path: '/auth', element: <Auth /> },
    { path: '/create', element: <CreateWorkspace /> },
    { path: '/workspace/:workspaceId', element: <Workspace /> },
    { path: '/workspace/:workspaceId/testimonial', element: <Testimonial /> },
    { path: '/workspace/:workspaceId/wall-of-love', element: <WallOfLove /> },
    { path: '/dashboard', element: <Dashboard /> },
]
  