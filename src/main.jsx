import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import banner from './assets/banner.jpg'
import modalImg from './assets/Group.png'
import ProductDetails from './components/ProductsDetails/ProductDetails';
import Statistics from './components/Statistics/Statistics';
import Feedback from './components/CustomerFeedback/Feedback';
// import Cart from './components/Cart/Cart';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element:<Home banner={banner}/>
      },
      {
        path:'products/:product_id',
        element: <ProductDetails toast={toast}/>,
        loader: ()=> fetch('/items.json')
      },
      {
        path:'dashboard',
        element:<Dashboard modalImg={modalImg} toast={toast}/>,
        loader: ()=> fetch('/items.json')
      },
      {
        path:'statistics',
        element:<Statistics/>,
        loader: ()=> fetch('/items.json')
      },
      {
        path: "feedback",
        element: <Feedback />,
        loader: async () => {
          const response = await fetch('/feedbackData.json');
          if (!response.ok) {
            throw new Error('Failed to load feedback data');
          }
          return response.json();  // Ensure we parse the JSON data
        },
      },      
      {
        path: '*', 
        element: <ErrorPage />
      }
    ]
  },
  {
      path: '*',
      element: <ErrorPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
        <ToastContainer />
  </StrictMode>,
)
