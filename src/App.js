import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Header } from './components/Header';
import { Body } from './components/Body';
import { About } from './components/About';
import { PageNotFound } from './common/PageNotFound';

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />
  },
  {
    path: "/about",
    element: <About />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)