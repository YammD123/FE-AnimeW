import { PUBLIC_API_URL } from "$env/static/public"

export async function load({ fetch }) {
    //getbanner
    console.log("Fetching data on server...");
    try {
        const [resWinterBanner,resRecomBanner] = await Promise.all([
            fetch(`${PUBLIC_API_URL}/seasons/2025/winter?limit=5`),
            fetch(`${PUBLIC_API_URL}/recommendations/anime`),

        ])
        const Topdata : any = await resWinterBanner.json()
        const GetRecom : any = await resRecomBanner.json()
        return { Topdata,GetRecom }
    } catch (error) {
        console.log(error)
        
    }

    //getrandom

}


