import type { searchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../PackageListItem";
export default function SearchPage(){
    const {searchResults} = useLoaderData() as searchLoaderResult;
    
    const renderedResults = searchResults.map((result)=>{

            return <PackageListItem  pack={result} key={result.name} />
    });
    return <div className="mt-20">
        Search Page
        <div className=" relative ">
            {renderedResults}
        </div>

    </div>
}