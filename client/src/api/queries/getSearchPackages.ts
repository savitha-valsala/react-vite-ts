import type { packageSummry } from "../types/packageSummary";

interface searchResponse{
    objects : {
        package :{
            name : string ,
            description : string ,
            version : string ,
            keywords : string[]
        }
    }[]
}

export async function searchPackages(term: string): Promise<packageSummry[]>{
    const res = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
      );
      const data : searchResponse= await res.json();
    //   return data.objects.map((searchResults)=>{
    //     return {
    //         name : searchResults.package.name,
    //         description : searchResults.package.description,
    //         versions : searchResults.package.version ,
    //         keywords : searchResults.package.keywords
    //     }
    //   });
    return data.objects.map(({package: {name, description, version, keywords}})=>{
        return {
            name ,
            description ,
            version  ,
            keywords 
        }
      });

}