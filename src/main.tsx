import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Chat from './routes/Chat'
import SandBox from './routes/Sandbox'
import './styles/index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/chat',
    element: <Chat />
  },
  {
    path: '/sandbox',
    element: <SandBox />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
