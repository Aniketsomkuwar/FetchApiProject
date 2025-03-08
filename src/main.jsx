import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AboutUs from './pages/AboutUs.jsx'
import App from './App.jsx'
import ContactUs from './pages/ContactUs.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Body from './components/Body.jsx'
import Cart from "./pages/CartPage.jsx"
import RestaurantMenu from './pages/RestaurantMenu.jsx'


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Body />
    },
    {
      path: "/about",
      element: <AboutUs />
    },
    {
      path: "/contact",
      element: <ContactUs />
    }, {
      path: "/cart",
      element: <Cart />
    }, {
      path: "/restaurant/:resId",
      element: <RestaurantMenu />
    }
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
