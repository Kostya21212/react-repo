// import birdColorfulGradientDesignVector from '../../../images/bird-colorful-gradient-design-vector.png';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, NAV_PATHS } from '../../config/navigation_config';
import birdColorfulGradientDesignVector from '../../images/bird-colorful-gradient-design-vector.png';

const Navigation = () => {
let {pathname} = useLocation()
    return ( 
    <div >
      <nav className='container'>
        
          <ul className='d-flex gap-2 justify-content-between' id='d-flex'>
          <li>
            <img src={birdColorfulGradientDesignVector} alt="bird" className='z-3' style={{ width: '70px', height: '70px' }} />
            </li>
          {NAV_ITEMS.map((item) => {
            if(item.isNotNav)return null
            return (
              <div>
               
                <li key={item.path}  className={` p-1 ${pathname === item.path ? "border-bottom border-3 border-warning":"bg-transparent text-white"}`}>
                    <Link to={item.path}className='text-black'>{item.title}</Link>
                </li>
              </div>
              
            )
        })}
            {/* <li>
            <img src={birdColorfulGradientDesignVector} alt="logo" style={{ width: '70px', height: '70px' }} />
            </li>
              <li>
                <Link to= '/' className='btn bg-transparent ms-5'>Home <i className="bi bi-house"></i></Link>
              </li>
              <li >
                <Link to= '/goods' className='btn bg-transparent ms-5'>Goods <i className="bi bi-credit-card-fill"></i></Link>
              </li>
              <li >
                <Link to= '/contact'  className='btn bg-transparent ms-5'>Contact <i className="bi bi-person-lines-fill"></i></Link>
              </li>
              <li >
                <Link to= '/todo' className='btn bg-transparent ms-5'>Todo-list <i className="bi bi-check2"></i></Link>
              </li> 
              <li>
                <Link to= '/smiles' className='btn bg-transparent ms-5'>Smiles <i className="bi bi-emoji-smile-fill"></i></Link>
              </li>
              <li>
                <Link to= '/registration' className='btn bg-transparent ms-5'>Registration <i className="bi bi-box-arrow-left"></i></Link>
              </li>
              <li>
              <a href='https://github.com/Kostya21212/react-repo'>GitHub <i className="bi bi-github"></i></a>
              </li> */}
            </ul>
            
          </nav>
          </div> 
        );
}
export default Navigation
