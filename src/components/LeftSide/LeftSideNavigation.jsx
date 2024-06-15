import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../App.css';

function LeftSideNavigation() {
    const containerStyle = {
        borderTopRightRadius: '120px',
        borderBottomRightRadius: '120px',
        backgroundColor: '#f0f0f0',
        padding: '20px',
    };
    return (
        <div className="d-flex position-absolute top-0 start-0" id="wrapper">
            <div className="bg-warning border-end min-vh-100 pb-3 d-flex align-items-center z-index-3 " style={containerStyle} id="sidebar-wrapper">
                <div className="list-group list-group-flush d-flex align-items-center px-3">
                    <a href="https://www.viber.com" className='mb-5'> <i className="bi bi-whatsapp fs-3 "></i></a>
                    <a href="https://www.instagram.com" className='mb-5'> <i className="bi bi-instagram fs-3 "></i></a>
                    <a href="https://www.facebook.com" className='mb-5'><i className="bi bi-facebook fs-3 "></i></a>
                    <a href="https://www.google.com" className='mb-5'><i className="bi bi-google fs-3 "></i></a>
                </div>
            </div>
        </div>
    );
}

export default LeftSideNavigation;
