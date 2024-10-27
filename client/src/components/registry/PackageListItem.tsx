import type { packageSummry } from "../../api/types/packageSummary";
import {Link} from "react-router-dom";

interface PackageListItemProps{
    pack : packageSummry

}
export default function packageListItem({pack} : PackageListItemProps){
    const renderedKeywords = (pack.keywords || []).map((keyword)=>{
        return <div key={keyword} className="border  px-1 text-xs bg-slate-200 rounded">
            {keyword}
        </div>

    });
    return <div className="border p-4 rounded flex items-center justified-between">
        <div className="flex flex-col gap-2">
            <Link to={`/registry/packages/${pack.name}`} className="text-xl font-bold">
                {pack.name}
            </Link>
            <p className="text-sm text-gray-500">
                {pack.description}
            </p>
            <div className="flex gap-2">
                {renderedKeywords}
            </div>
            <div className="mr-6">
                <Link to={`/registry/packages/${pack.name}`} className="py-2 px-2 rounded bg-black text-white text-lg">
               View
                </Link>

            </div>
             
        </div>
    </div>

}