<script lang="ts">
	import type { Category } from '../../types/types';
	import LL from '$i18n/i18n-svelte';

	export let categories: Category[];
</script>

<section>
	<div class="container">
		{#each categories.slice(0, 2) as category}
			<div class="flex gap align category">
				<div class="text">
					<h2>{category.title}</h2>
					<p>{category.description}</p>
					<a class="button" href={$LL.link(`/${category.slug}`)}>{$LL.buttons.categories()}</a>
				</div>
				<img src={category.image.formats.medium?.url} alt="" />
			</div>
		{/each}
	</div>
</section>

<style>
	.category {
		gap: var(--size-l);
	}

	.category:nth-of-type(1) > img {
		order: 1;
	}
	.category:nth-of-type(1) {
		margin-bottom: var(--size-l);
	}
	.category:nth-of-type(1) > .text {
		order: 2;
	}
	.text {
		height: 100%;
	}
	img {
		width: 50%;
		border-radius: var(--size-s);
	}
	h2 {
		font-size: 72px;
		font-size: clamp(32px, 5vw, 72px);
		line-height: 1.2;
		margin-bottom: var(--size-s);
	}
	section {
		background-color: var(--secondary);
		padding: calc(var(--size-l) + var(--size-m)) 0;
	}
	p {
		margin-bottom: var(--size-l);
	}
</style>
