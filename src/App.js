
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Contact from "./views/Home/Contact/Contact";
import Experience from "./views/Home/Experience/Experience";
import Home from "./views/Home/Home";
import Portfolio from "./views/Home/Portfolio/Portfolio";
import { render } from "react-dom";


import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import { Outlet, useRoutes } from 'react-router-dom';
const App = () => {
  let routes = useRoutes([
    { 
      path: '/', 
      element: <Home/>
    },
   { 
    path: 'experience', 
    element: <Experience/>,
  },
  { 
    path: 'contact', 
    element: <Contact/>,
  },
  { 
    path: 'portfolio', 
    element: <Portfolio/>,
  }
   
]);
  return routes;
}
export default App
const Homie= () => {
  return (
    <div className="homeie">
      <div>This is the Home Page</div>
      <Outlet />
    </div>
  );
}
