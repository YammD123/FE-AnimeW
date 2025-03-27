<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Autoplay from 'embla-carousel-autoplay';

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });

	let { dataAnimeRecom } = $props();
</script>

<div class=" mt-3 flex h-72 justify-center rounded-md border border-gray-600/55 bg-gray-950/35">
	<div class="p-5">
		<h1 class="px-4 py-3 font-mono text-2xl font-semibold text-white">▶ CURRENTLY</h1>
		<Carousel.Root
			plugins={[plugin]}
			class="relative w-full"
			onmouseenter={plugin.stop}
			onmouseleave={() => {
				plugin.play();
			}}
		>
			<div class=" w-96 rounded-md px-4">
				<Carousel.Content class="flex">
					{#each dataAnimeRecom.data.slice(0, 4) as animeRecoms}
						{#each animeRecoms.entry as animeRecom}
							<Carousel.Item class="relative">
								<div class="group relative h-40 overflow-hidden rounded-lg">
									<img
										class="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
										src={animeRecom.images.webp.large_image_url}
										alt={animeRecom.title}
									/>
									<div
										class="absolute bottom-0 left-0 right-0 bg-gradient-to-t to-transparent p-3 font-bold text-black/60 opacity-0 duration-300 ease-in-out group-hover:opacity-100"
									>
										<h2 class="text-2xl">{animeRecom.title}</h2>
									</div>
								</div>
							</Carousel.Item>
						{/each}
					{/each}
				</Carousel.Content>
			</div>
		</Carousel.Root>
	</div>
</div>
