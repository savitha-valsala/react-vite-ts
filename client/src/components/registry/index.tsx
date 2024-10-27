import { Outlet } from "react-router-dom";
import SearchInput from "./SearchInput";
const Registry =()=>{
    return(
        <div className="p-3">
            <div className="flex items-center justify-between px-4 border-b h-14">
            <h3>NPM Registry</h3> 
            <div className="max-w-xl ml-4">
                <SearchInput />
                </div>
                <Outlet />
            </div>
        </div>      
    );
};
export default Registry;