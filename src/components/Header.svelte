<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Search } from '@lucide/svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { onMount } from 'svelte';
	import { PUBLIC_API_URL } from '$env/static/public';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	let DataAnime: any;
	let query = '';
	let isLoading = false;

	async function getDataSearch() {
		try {
			DataAnime = [];
			if (query === '') return;
			isLoading = true;
			const res = await fetch(`${PUBLIC_API_URL}/anime?q=${query}`);
			DataAnime = await res.json();
			console.log(DataAnime);
		} catch (error) {
			console.error(error);
		} finally {
			isLoading = false;
		}
	}

	onMount(() => {
		getDataSearch();
	});
</script>

<header class="header border-b border-gray-400/45 bg-[#09090b] text-white">
	<div class="flex w-full items-center justify-between gap-4 p-3">
		<h1 class="text-2xl font-bold">Siam</h1>
		<form class="flex items-center justify-center gap-2">
			<Dialog.Root>
				<Dialog.Trigger>
					<Search size={25} />
				</Dialog.Trigger>
				<Dialog.Content class="border border-gray-400/15 bg-black/80">
					<Dialog.Title class="text-white">Search</Dialog.Title>
					<Dialog.Description class="text-white">Search apa yang kamu inginkan</Dialog.Description>
					<Separator />
					<Input
						bind:value={query}
						onchange={getDataSearch}
						class="text-white"
						placeholder="Search"
                       
					/>
					<div class="mt-3 text-white">
						{#if isLoading}
							<p>Loading...</p>
						{:else if DataAnime?.data?.length === 0}
							<p>No results</p>
						{:else if DataAnime?.data}
							<ScrollArea class='h-72 w-full rounded-md border'>
								<ul class="space-y-2">
									{#each DataAnime.data as anime}
										<li class="flex items-center gap-2 border-b border-gray-600 p-2">
											<img
												src={anime.images.jpg.image_url}
												alt={anime.title}
												class="h-16 w-12 rounded-md"
											/>
											<span>{anime.title}</span>
										</li>
									{/each}
								</ul>
							</ScrollArea>
						{/if}
					</div>
				</Dialog.Content>
			</Dialog.Root>
		</form>
	</div>
</header>
