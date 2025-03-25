import { PUBLIC_API_URL } from "$env/static/public"

export async function load({ fetch }) {
    console.log("Fetching data on server...");
    try {
        const res = await fetch(`${PUBLIC_API_URL}/seasons/2025/winter?limit=5`)
        const Topdata : any = await res.json()
        return { Topdata }
    } catch (error) {
        console.log(error)
        
    }
}