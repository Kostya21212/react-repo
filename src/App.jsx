

import HeaderFunction from './components/Header/Header';
import LeftSideNavigation from './components/LeftSide/LeftSideNavigation';
import MiddleContainer from './components/MiddleContainer/MiddleContainer';
import Footer from './components/footer/Footer';
import './App';
import './index.css';
function App() {
  return (
   <div className='bg vh-100 img-fluid'>
    <HeaderFunction />
      <LeftSideNavigation />
      <MiddleContainer />
      
      <Footer />
   </div>
  );
}

export default App;
