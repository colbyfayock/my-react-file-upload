import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route } from 'wouter';

import Home from '@/pages/index';
import Contact from '@/pages/contact';

import '@/styles/global.css'

const Router = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
