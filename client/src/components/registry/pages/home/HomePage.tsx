import { useLoaderData, Link } from "react-router-dom";
import type { HomeLoaderResult } from "./homeLoader";

export default function HomePage(){
    const {featuredPackages} = useLoaderData() as HomeLoaderResult;

   // console.log(featuredPackages);
    const renderPackages = featuredPackages.map((p)=>{
        return <div key={p.name} className="flex flex-col justify-between gap-3 border rounded shadow p-4">
                <div className="flex flex-col border-bottom border-gray-400">
                    <div className="font-bold text-center">{p.name} </div>
                    <div className="text-sm text-gray-500">{p.description}</div>
                    <div className="text-sm text-gray-500">{p.maintainers.length} Maintainers</div>
                </div>
                <Link to={`/registry/packages/${p.name}`} className="border rounder border-gray-900 text-center">View</Link>
        </div>

    })
    return <div className="container border-2">
        <div className="text-center">
            <h1 className="text-xl font-bold text-slate-400">
                The NPM Registry
            </h1>
            <p className=" text-cyan-500 text-sm">
                The npm typescript package managing app 
            </p>
        </div>
        <div className=" grid grid-cols-4 items-stretch gap-4">
            {renderPackages}
        </div>
        
    </div>
}
