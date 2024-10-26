import { createBrowserRouter,  RouterProvider } from "react-router-dom";
// import history from "history";
import Home from "./components/Home";
import Registry from "./components/registry";
import Location from "./components/location";
import HomePage from "./components/registry/pages/home/HomePage";
import { HomeLoader } from "./components/registry/pages/home/homeLoader";
import SearchPage from "./components/registry/pages/search/SearchPage";
import { searchLoader } from "./components/registry/pages/search/searchLoader";

import DetailsPage from "./components/registry/pages/details/DetailsPage";
import { detailsLoader } from "./components/registry/pages/details/detailsLoader";

const App = () =>{
const route = createBrowserRouter([
  {
    path: "/",
    element : <Home />,
    children :[
      {
        path : "/registry",
        element: <Registry />,    
        children : [
          {
            index : true ,
            element : <HomePage />,
            loader  : HomeLoader
          },
          {
            path : "/registry/search" ,
            element : <SearchPage />,
            loader : searchLoader

          },
          {
            path : "/registry/packages/:name" ,
            element : <DetailsPage />,
            loader : detailsLoader
          }

        ]    
     
      },
      {
        path : "/location",
        element :<Location /> ,
        
      },
      {
        path : "/error" ,
        element : <div><h4>Temperorly down due to Loading Issue....</h4></div>
      }

    ]
  },  
]  
);
  return(
    <div className=" bg-blend-lighten hover:bg-blend-darken">
    <div className="relative " >
    <RouterProvider router={route} />
    </div>         
 </div>
  );

}
export default App;