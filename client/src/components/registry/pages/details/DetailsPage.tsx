import type {DetailsLoaderResults} from "./detailsLoader";
import { useLoaderData } from "react-router-dom";
export default function DetailsPage(){
    const { details} = useLoaderData() as DetailsLoaderResults;
    return <div className="space-y-4">
        <h1 className="text-3xl font-bold my-4">
            {details.name}
        </h1>
        <h3 className="text-lg font-bold"> Description </h3>
          <div className="p-3 bg-gray-200 rounded">{details.description} </div>
          <h3 className="text-lg font-bold"> Lisence </h3>
          <div className="p-3 bg-gray-200 rounded">{details.lisence} </div>
          <h3 className="text-lg font-bold"> Author </h3>
         
          <div className="p-3 bg-gray-200 rounded">{details.author?.name} </div>
          <div className="p-3 bg-gray-200 rounded">{details.author?.email} </div>
        </div>
}