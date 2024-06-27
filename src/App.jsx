import React from 'react';
import HeaderFunction from './components/Header/Header';
import LeftSideNavigation from './components/LeftSide/LeftSideNavigation';
import Footer from './components/footer/Footer';

import './App.css';
import './index.css';

function App() {
  return (
    <div className='bg vh-100 img-fluid'>
      <HeaderFunction />
      <LeftSideNavigation />
      
      <Footer />
    </div>
  );
}

export default App;
