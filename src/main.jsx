import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import Hero from './Components/HeroSection/Hero';
import Books from './Components/Book/Books';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import BookDetails from './Components/Book/BookDetails';
import Readlist from './Components/Booklist/Readlist';
import Wishlist from './Components/Booklist/Wishlist';
import ListedBook from './Components/Book/ListedBook';
import Chart from './Components/Chart/Chart';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../public/bookData.json')
      },
      {
        path: '/listedBook',
        element: <ListedBook></ListedBook>,
        children: [
          {
            index: true,
            element: <Readlist />,
            loader: () => fetch('../public/bookData.json')
          },
          {
            path: 'wishListedBook',
            element: <Wishlist />,
            loader: () => fetch('../public/bookData.json')
          }
        ]
      },
      {
        path: '/book/:bookID',
        element: <BookDetails></BookDetails>,
        loader: () => fetch(`../public/bookData.json`)
      },
      {
        path: '/pagesToRead',
        element: <Chart></Chart>
      }

    ]

  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
