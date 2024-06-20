// react-simple/src/components/Header/Header.jsx

import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Header/header.css';
import  Navigation  from '../pages/navigation'
import { Routes, Route } from 'react-router-dom';
import { NAV_ITEMS } from '../../config/navigation_config'; 
function HeaderFunction() {
    return (
        <div сдфі>
            <div className="text-center  text-primary-emphasis bg-transparent position-relative z-index-1  rounded-3 flex column-gap-3 p-0" style={{padding:'0'}}>
                <Navigation />
                <Routes>
                    {NAV_ITEMS.map((item) => (
                        <Route key={item.path} path={item.path} element={item.element} />
                    ))}
                </Routes>
            </div>
        </div>
    );
}

export default HeaderFunction;
