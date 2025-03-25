<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
	import SeasonalSummer from "../components/SeasonalSummer.svelte";
	import Swiper from "../components/Swiper.svelte";
    export let data;
    console.log(data.Topdata)
</script>

<main class="justify-center items-start flex flex-col gap-4 mt-4">
    <div class="">
        <Swiper datas={data.Topdata}/>
    </div>
    <div class="">
        <SeasonalSummer />
    </div>
</main>