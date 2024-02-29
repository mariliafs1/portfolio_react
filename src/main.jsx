import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

//paginas

import AboutMe from './routes/AboutMe.jsx';
import Portfolio from './routes/Portfolio.jsx';
import Contato from './routes/Contato.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <AboutMe />,
      },
      {
        path:"/portfolio",
        element: <Portfolio />
      },
      {
        path:"/contato",
        element: <Contato />
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
