import type {Params} from "react-router-dom";
import type { packageDetails } from "../../../../api/types/packageDetails";
import { getPackage } from "../../../../api/queries/getPackage";

interface loaderArgs{
    params : Params
}
export interface DetailsLoaderResults{
    details : packageDetails
}
export async function detailsLoader({params} : {params : loaderArgs}): Promise<DetailsLoaderResults>{
    const {name} = params ;
    if(!name){
        throw new Error('Must provide name');
    }
    const details = await getPackage(name);
    return {
        details
    }
}