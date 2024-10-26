import type { packageDetails } from "../../../../api/types/packageDetails";
import { getFeaturedPackages } from "../../../../api/queries/getFeaturedPackages";

export interface HomeLoaderResult{
    featuredPackages : packageDetails
}
export async function HomeLoader():Promise<HomeLoaderResult>{
    const featuredPackages = await getFeaturedPackages();

    return {
        featuredPackages
    }

}