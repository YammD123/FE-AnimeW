<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
	let { datas } = $props();
</script>

<Carousel.Root
	plugins={[plugin]}
	class="w-full"
	onmouseenter={plugin.stop}
	onmouseleave={() => plugin.play()}
>
	<Carousel.Content>
		{#each datas.data as data (data.mal_id)}
			<Carousel.Item class="w-full relative">
				<div class="h-[400px] w-full px-4 rounded-md relative">
					<!-- Sesuaikan tinggi sesuai kebutuhan -->

					<img
						src={data.images.webp.large_image_url}
						alt={data.title}
						class="h-full opacity-60 w-full rounded-md object-cover"
					/>
                    <div class="absolute  bottom-0 w-full pl-4 pb-24 bg-gradient-to-t from-black to-transparent text-white">
						<h2 class="font-serif pr-10 text-4xl md:text-6xl text-wrap font-bold text-white line-clamp-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">{data.title}</h2>
                        <h3 class="md:text-2xl text-xl pr-10 font-semibold text-wrap font-mono">{data.title_japanese}</h3>
						<p class="text-base font-sans max-w-xs pr-10 md:max-w-xl line-clamp-2 md:line-clamp-3">{data.synopsis}</p>
						<div class="flex items-center gap-4 mt-2">
							<div class="flex items-center gap-1">
								<!-- Icon Bintang (Rating) Via Svg -->
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7 text-yellow-500">
										<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
									  </svg>
								<!-- End Icons -->
									<p class="text-2xl text-yellow-500 font-sans">{data.score}</p>
									<p>({data.members} members)</p>
							</div>
							<div class="flex items-center gap-1">
								<!-- Icon Love Via Svg -->
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7 text-red-500">
									<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
								  </svg>
								<!-- End Icon Love -->
								<p class="text-base">{data.favorites}</p>
							</div>
						</div>
					</div>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
</Carousel.Root>
