// react-simple/src/components/Config/navigation_config.jsx

import Home from '../components/pages/Home';
import Goods from '../components/pages/Goods'
import Contact from '../components/pages/ContactPage';
import Smiles from '../components/pages/Smiles';
import Registration from '../components/pages/Registration';
import Todo_list from '../components/pages/Todo-list';
import NotFound from "../components/pages/NotFound";
import Login from '../components/pages/Login';
import ListUsers from '../components/pages/ListUsers';
export const NAV_PATHS = {
    HOME: "/",
    GOODS: "/goods",
    TODO_LIST: "/todo_list",
    CONTACT: "/contact",
    SMILES: "/smiles",
    REGISTRATION: "/registration",
    LOGIN:"/login",
    LISTUSERS:"/listUsers"
  };
  
  export const NAV_ITEMS = [
    {
      path: NAV_PATHS.HOME,
      title: "Home",
      element: <Home />,
    },
    {
      path: NAV_PATHS.GOODS,
      title: "Goods",
      element: <Goods />,
    },
    {
      path: NAV_PATHS.TODO_LIST,
      title: "Todo_list",
      element: <Todo_list />,
    },
    {
      path: NAV_PATHS.SMILES,
      title: "Smiles",
      element: <Smiles />,
    },
    {
        path: NAV_PATHS.CONTACT,
        title: "Contact",
        element: <Contact/>,
      },
  
    {
      path: NAV_PATHS.LISTUSERS,
      title: 'Users list',
      element: <ListUsers/>,
    },  
    {
      path: NAV_PATHS.REGISTRATION,
      title: <i class="bi bi-box-arrow-right"></i>,
      element: <Registration/>,
    },
    {
      path: NAV_PATHS.LOGIN,
      title: <i class="bi bi-person-circle"></i>,
      element: <Login/>,
    },
    {
      path: "*",
      isNotNav: true,
      element: <NotFound />,
    },
    
  ];