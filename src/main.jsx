import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CardDetails from './components/CardDetails.jsx';
import SingIn from './components/SingIn.jsx';
import SingUp from './components/SingUp.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import users from './components/users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("https://coffees-store-server-eight.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "addcoffee",
        Component: AddCoffee,
      },
      {
        path: "updatecoffee/:id",
        loader: ({ params }) => fetch(`https://coffees-store-server-eight.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "coffee/:id",
        loader: () => fetch("https://coffees-store-server-eight.vercel.app/coffees"),
        Component: CardDetails,
      }
    ]

  },
  {
    path: "singin",
    Component: SingIn,
  },
  {
    path: "singup",
    Component: SingUp,
  },
  {
    path: "users",
    loader: () => fetch('https://coffees-store-server-eight.vercel.app/users'),
    Component: users,

  }


]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
