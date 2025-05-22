import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Bookshelf from './routes/Books.jsx';
import Book from './routes/Book.jsx';
import Quotes from './routes/Quotes.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Bookshelf />
      },
      {
        path: '/quotes',
        element: <Quotes />
      },
      {
        path: '/book/:id',
        element: <Book />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
