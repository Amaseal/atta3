<script lang="ts">
	import type { Gallery, HomePage } from '../../types/types';
	import MdiChevronLeft from '~icons/mdi/chevron-left';
	import MdiChevronRight from '~icons/mdi/chevron-right';
	import type { Image } from '../../types/types';

	export let gallery: Gallery;
	export let homePage: HomePage;

	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	let index = 0;

	const [send] = crossfade({
		duration: 0,
		delay: 100
	});

	const [receive] = crossfade({
		duration: 100,
		delay: 10
	});

	let next = () => {
		let image: Image = gallery.images.shift()!;
		gallery.images = [...gallery.images, image];
		index = (index + 1) % gallery.images.length;
		if (index > gallery.images.length) {
			index = 1;
		}
	};

	let back = () => {
		let image: Image = gallery.images.pop()!;
		gallery.images = [image, ...gallery.images];
		if (index < 1) {
			index = gallery.images.length;
		}
		index = (index - 1) % gallery.images.length;
	};
</script>

<section>
	<div class="container">
		<h2>{homePage.gallery_title}</h2>
		<div class="image_container">
			<div class="flex gap images">
				{#each gallery.images as item (item.id)}
					<div
						animate:flip={{ duration: 100 }}
						in:receive={{ key: item.id }}
						out:send={{ key: item.id }}
					>
						<img src={item.formats.medium?.url || item.url} alt="" />
					</div>
				{/each}
			</div>
		</div>

		<div class="flex justify">
			<div class="controls flex align">
				<button on:click={() => back()} class="flex"><MdiChevronLeft /></button>
				{#key gallery.images}
					{#each gallery.images as item, i}
						<button class:active={index === i} class="control" />
					{/each}
				{/key}

				<button on:click={() => next()} class="flex"><MdiChevronRight /></button>
			</div>
		</div>
	</div>
</section>

<style>
	.image_container {
		position: relative;
		height: 350px;
	}
	.images {
		overflow-x: hidden;
		position: absolute;
		right: 0;
		flex-direction: row-reverse;
	}
	.control.active {
		background-color: var(--text);
	}
	.controls {
		margin-top: var(--size-m);
	}
	.container {
		position: relative;
	}
	section {
		padding: calc(var(--size-l) + var(--size-m)) 0;
	}

	img {
		height: 350px;
		border-radius: var(--size-s);
		background-color: var(--secondary);
	}
	h2 {
		font-size: 72px;
		font-size: clamp(32px, 5vw, 72px);
		line-height: 1.2;
		text-align: center;
		margin-bottom: var(--size-m);
	}
	.control {
		background-color: var(--primary);
		border-radius: 50%;
		height: 15px;
		width: 15px;
		border: 1px solid var(--text);
		margin: var(--size-xs);
	}
</style>
