import "./topbar.css"
import { Link } from "react-router-dom";
export default function Topbar() {
  return <div className="topbar">
      <div className="topLeft"></div>
      <div className="topCenter"></div>
      <div className="topRight">
      <ul className="topLabels">
          <li className="topLabelItem">
          <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topLabelItem"> 
           <Link className="link" to="/experience">
              Experience
            </Link>
          </li>
          <li className="topLabelItem"> 
           <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="topLabelItem">          
           <Link className="link" to="/portfolio">
              African American Literature
            </Link>
          </li>
      </ul>
      </div>
  </div>;
}
