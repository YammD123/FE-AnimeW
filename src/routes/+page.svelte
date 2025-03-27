<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
	import SeasonalSummer from "../components/SeasonalSummer.svelte";
	import Swiper from "../components/Swiper.svelte";
	import TopAnime from "../components/TopAnime.svelte";
    export let data;
    console.log(data.Topdata)
</script>

<main class="justify-centerflex flex-col gap-4 mt-4">
    <div class="">
        <Swiper datas={data.Topdata}/>
    </div>
    <div>
        <SeasonalSummer dataAnimeRecom={data.GetRecom} />
    </div>
    <div>
        <TopAnime/>
    </div>
</main>