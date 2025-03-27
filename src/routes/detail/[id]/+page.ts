import { PUBLIC_API_URL } from '$env/static/public'

export async function load({params,fetch}){
    console.log('feching server')
    try {
        const [animeId,charactersId] = await Promise.all([
            fetch(`${PUBLIC_API_URL}/anime/${params.id}`),
            fetch(`${PUBLIC_API_URL}/anime/${params.id}/characters`)
        ])

        const anime : any = await animeId.json()
        const characters : any = await charactersId.json()

        return {anime,characters}
    } catch (error) {
        console.log(error)
    }

}