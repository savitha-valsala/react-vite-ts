import type { packageSummry } from "../../../../api/types/packageSummary";
import { searchPackages } from "../../../../api/queries/getSearchPackages";

export interface searchLoaderResult {
    searchResults : packageSummry[];
}
export async function searchLoader({request}: {request:Request}):Promise<searchLoaderResult>{
    // console.log(request);
     const {searchParams} = new URL(request.url);
     const term = searchParams.get('term');
     if(!term){
       throw new Error('Search term missing ');
     }
     const results = await searchPackages(term);
    
     return {
        searchResults : results
     }
    
   }