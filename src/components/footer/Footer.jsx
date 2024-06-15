import 'bootstrap-icons/font/bootstrap-icons.css';
import birdColorfulGradientDesignVector from '../../images/bird-colorful-gradient-design-vector.png';

function Footer() {
    return (
        <div className='bg-black text-white d-flex justify-content-around' style={{ height: '120px', margin: '0', zIndex: '4', position: 'relative', marginTop: '70px'}}>
            <div className='d-flex align-items-center'>
                <a href="https://www.viber.com"> <i className="bi bi-whatsapp fs-4"></i></a>
                <a href="https://www.instagram.com" className='ms-3'> <i className="bi bi-instagram fs-4"></i></a>
                <a href="https://www.facebook.com" className='ms-3'><i className="bi bi-facebook fs-4"></i></a>
                <a href="https://www.google.com" className='ms-3'><i className="bi bi-google fs-4"></i></a>
            </div>
            <div className='d-flex align-items-center'>
                <img src={birdColorfulGradientDesignVector} alt="logo" style={{ width: '70px', height: '70px' }} />
            </div>
            <div className='d-flex align-items-center'>
                <button className="btn bg-transparent ms-5"><a href='https://github.com/Kostya21212/HomePageSite.git'> GitHub <i className="bi bi-github"></i></a></button>
            </div>
        </div>
    );
}

export default Footer;
