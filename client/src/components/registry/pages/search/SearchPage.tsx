import type { searchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../PackageListItem";
export default function SearchPage(){
    const {searchResults} = useLoaderData() as searchLoaderResult;
    
    const renderedResults = searchResults.map((result)=>{

            return <PackageListItem  pack={result} key={result.name} />
    });
    return <div>Search Page
        <div className="space-y-4 mt-4">
            {renderedResults}
        </div>

    </div>
}