import ReactDOM from 'react-dom/client';

import React from 'react'
import { Header } from './components/Header';
import { Card } from './components/Card';

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <Card name="Pushpender" time="30-40 mins" cusines="North Indian, Biryani" area="Sector 47" />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)