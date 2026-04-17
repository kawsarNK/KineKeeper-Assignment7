import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/Route';
import FriendContextProvider from './context/FriendContextProvider';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendContextProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />

    </FriendContextProvider>
  </StrictMode>,
)
