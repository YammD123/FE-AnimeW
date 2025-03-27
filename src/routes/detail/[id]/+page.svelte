<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Images, Tv } from '@lucide/svelte';

	let id = page.params.id;
	export let data;
</script>

<main class="relative px-4">
	<!-- Background Image -->
	<div class="relative">
		<img
			class="h-[500px] w-full object-cover opacity-50 blur-lg"
			src={data.anime.data.trailer?.images?.maximum_image_url ||
				'https://ruckuscomp.com/wp-content/uploads/2021/02/noimg.jpg'}
			alt=""
		/>
		<!-- Overlay -->
		<!-- Content -->
		<div class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform px-6">
			<div class="items-center gap-6 sm:flex">
				<img
					class="rounded-md shadow-lg"
					src={data.anime.data.images?.webp?.image_url ||
						'https://ruckuscomp.com/wp-content/uploads/2021/02/noimg.jpg'}
					alt="Anime Thumbnail"
				/>
				<div>
					<h1 class="text-5xl font-bold text-white drop-shadow-md">
						{data.anime.data.title}
					</h1>
					<div class="mt-2 flex gap-2">
						<Button class="bg-gradient-to-r from-sky-700 to-slate-900"
							>{data.anime.data.status}</Button
						>
						<Button class="bg-gradient-to-r from-sky-700 to-slate-900"
							>{data.anime.data.type}</Button
						>
						<Button class="bg-gradient-to-r from-sky-700 to-slate-900"
							>Sc : {data.anime.data.source}</Button
						>
						<Button class="bg-gradient-to-r from-sky-700 to-slate-900"
							>Eps : {data.anime.data.episodes}</Button
						>
						<Button class="bg-gradient-to-r from-sky-700 to-slate-900"
							>{data.anime.data.season}</Button
						>
					</div>
					<p class="mt-2 text-lg font-light text-white">{data.anime.data.synopsis}</p>
					<a href={data.anime.data.trailer?.url}>
						<Button class="mt-2 text-white" variant="ghost">
							<Tv />
							Watch Trailer Now
						</Button>
					</a>
				</div>
			</div>
		</div>
	</div>

	<h2 class="mt-6 flex items-center text-3xl font-bold text-white">
		<span class="mr-2 h-6 w-1 bg-gradient-to-b from-purple-500 to-blue-500"></span>
		Charachters
	</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-6">
		{#each data.characters.data as dataCharacters}
			<div class="relative w-64">
				<img
					class="h-72 w-full rounded-md object-cover"
					src={dataCharacters.character.images.webp.image_url}
					alt=""
				/>
				<Button class="absolute top-2 right-2 bg-gradient-to-r from-yellow-700 to-yellow-400"
					>{dataCharacters.voice_actors[0].person.name}</Button
				>

				<h1 class="absolute bottom-2 px-2  text-2xl font-bold text-white">
					{dataCharacters.character.name}
				</h1>
			</div>
		{/each}
	</div>
</main>
