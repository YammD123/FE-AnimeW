<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import { fade } from 'svelte/transition';
	//getTopAnime
	let TopAnime = $state('airing');
	let datas: any = $state([]);
	let isLoading = $state(false);
	async function getData() {
		try {
			isLoading = true;
			const res = await fetch(`${PUBLIC_API_URL}/top/anime?filter=${TopAnime}&limit=18`);
			datas = await res.json();
			console.log(datas);
		} catch (error) {
			console.log(error);
		} finally {
			isLoading = false;
		}
	}

	$effect(() => {
		getData();
	});
</script>

<div class="mt-8 px-4">
	<h2 class="flex items-center text-3xl font-bold text-white">
		<span class="mr-2 h-6 w-1 bg-gradient-to-b from-purple-500 to-blue-500"></span>
		Top Animes
	</h2>
	<div class="flex flex-wrap gap-4 pt-4">
		{#each ['airing', 'upcoming', 'bypopularity', 'favorite'] as gantiTop}
			<button
				onclick={() => (TopAnime = gantiTop)}
				class={`${TopAnime === gantiTop ? 'border-b-2 border-b-white text-white opacity-100' : ''} font-sans text-xl font-semibold text-white opacity-75 duration-75 ease-in-out`}
			>
				Top {gantiTop.charAt(0).toUpperCase() + gantiTop.slice(1)}
			</button>
		{/each}
	</div>
	<Separator class="mt-2 block w-full" />
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 pt-6">
		{#if isLoading}
			{#each Array(18) as _, i}
				<div class="h-72 w-64 animate-pulse rounded-md bg-slate-700/35"></div>
			{/each}
		{:else}
			{#each datas.data as data}
				<HoverCard.Root>
					<HoverCard.Trigger>
						<div class="relative w-64">
							<a href="/detail/{data.mal_id}">
								<img
									class="h-72 w-full rounded-md object-cover duration-200 ease-in-out hover:blur-sm"
									src={data.images.webp.large_image_url}
									alt=""
								/>
							</a>
							<h1 class="absolute bottom-2 px-2 py-1 text-base font-semibold text-white">
								{data.title}
							</h1>
						</div>
					</HoverCard.Trigger>
					<HoverCard.Content
						class="border-none  bg-gray-900/70 text-white duration-200   ease-in-out"
					>
						<div>
							<h1 class="line-clamp-2 text-lg font-bold">{data.title}</h1>
							<h2 class="line-clamp-1 text-base font-semibold">{data.title_japanese}</h2>
							<Separator class="my-2" />
							<div class="gap-2 text-sm">
								<Button class="bg-red-500">{data.rating.slice(0, 7)}</Button>
								<Button class="bg-green-500">{data.status}</Button>
								<Button class="mt-2 bg-yellow-500">{data.type}</Button>
							</div>
							<p class="line-clamp-3 text-sm">{data.synopsis}</p>
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			{/each}
		{/if}
	</div>
</div>
