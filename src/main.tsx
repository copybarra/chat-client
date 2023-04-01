import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.scss'

const Login = React.lazy(() => import("./routes/Login"));
const Chat = React.lazy(() => import("./routes/Chat"));
const SandBox = React.lazy(() => import("./routes/Sandbox"));

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
