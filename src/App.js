import ReactDOM from 'react-dom/client';

import React from 'react'
import { Header } from './components/Header';
import { Body } from './components/Body';

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)