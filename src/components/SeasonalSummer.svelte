<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import { Button } from '$lib/components/ui/button/index.js';
	import { fade, fly, scale } from 'svelte/transition';
	import SwiperAnime from './SwiperAnime.svelte';
	let { dataAnimeRecom } = $props();
	let loading = $state(false);

	let season = $state('summer');

	let datas: any = $state([]);
	async function getData() {
		try {
			loading = true;
			const res = await fetch(`${PUBLIC_API_URL}/seasons/2025/${season}?page=1&limit=16`);
			const data = await res.json();
			datas = data;

			console.log(datas);
		} catch (error) {
			console.log(error);
		} finally {
			loading = false;
		}
	}

	$effect(() => {
		getData();
	});
</script>

<div class="px-4">
	<h2 class="flex items-center text-3xl font-bold text-white">
		<span class="mr-2 h-6 w-1 bg-gradient-to-b from-purple-500 to-blue-500"></span>
		Seasonal Animes
	</h2>
	<p class="text-balance text-white/80">{season} 2025</p>
	<div class="sm:flex sm:justify-between">
		<div class="flex gap-3">
			{#each ['spring', 'summer', 'fall', 'winter'] as gantiSeason}
				<Button
					class={` rounded-sm border-none text-white hover:bg-yellow-600/15 hover:text-yellow-700 ${season === gantiSeason ? 'bg-yellow-600/15 text-yellow-700' : ''}`}
					onclick={() => (season = gantiSeason)}>{gantiSeason}</Button
				>
			{/each}
		</div>
	</div>
	<div class="gap-5 pt-4 2xl:flex">
		{#if loading}
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
				{#each Array(16) as _, i}
					<div class="h-56 w-40 animate-pulse rounded-md bg-gray-700/35"></div>
				{/each}
			</div>
		{:else}
			<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
				{#key season}
					{#each datas.data as seasonData, index}
						<a href={`/detail/${seasonData.mal_id}`}>
							<div
								class="group relative mt-4 w-40 overflow-hidden bg-slate-200"
								in:fly={{ y: 20 }}
								out:scale={{ duration: 200 }}
							>
								<img
									class="h-56 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
									src={seasonData.images.webp.image_url}
									alt=""
								/>

								<!-- Overlay Detail -->
								<div
									class="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								>
									<h2 class="line-clamp-2 text-sm font-bold">{seasonData.title}</h2>
									<p class="mt-2 line-clamp-4 text-xs">{seasonData.synopsis}</p>
								</div>
							</div>
						</a>
					{/each}
				{/key}
			</div>
		{/if}
		<SwiperAnime {dataAnimeRecom} />
	</div>
</div>
