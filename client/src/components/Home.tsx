import {Link, Outlet} from "react-router-dom";

export default function (){
    return(
    <div className="p-4">
        <div className="text-xl font-bold text-indigo-300 shadow-xl p-5">
            React-TypeScript- Vite App
        </div>
       
        <ul className="p-5 text-sm text-cyan-500 italic underline">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/registry">NPM Registry</Link></li>
            {/* <li><Link to="/Error">NPM Registry</Link></li> */}
            <li><Link to="/location">Location Searching</Link></li>
        </ul>
        <Outlet />
    </div>
    )
}
