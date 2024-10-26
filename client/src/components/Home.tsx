import {Link} from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function (){
    return<div>
        <h3>Welcome , React-ts Vite App</h3>
        <ul>
            <li><Link to="/registry">NPM Registry</Link></li>
            {/* <li><Link to="/Error">NPM Registry</Link></li> */}
            <li><Link to="/location">Location Searching</Link></li>
        </ul>
        <Outlet />
    </div>

}
