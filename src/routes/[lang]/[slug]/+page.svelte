<script lang="ts">
	export let data;
	import LL from '$i18n/i18n-svelte';
</script>

<section>
	<div class="container">
		<h1>{data.category.title}</h1>
		{#each data.category.services as service}
			<div class="flex gap align category">
				<div class="text">
					<h2>{service.title}</h2>
					<p>{service.description}</p>
					<a class="button" href="/">{$LL.buttons.categories()}</a>
				</div>
				<img src={service.image.formats.medium?.url} alt="" />
			</div>
		{/each}
	</div>
</section>

<style>
	h1 {
		text-align: center;
		margin-bottom: var(--size-m);
	}
	section {
		margin: calc(var(--size-xl) + var(--size-m)) 0;
		height: 100vh;
	}
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
	p {
		margin-bottom: var(--size-l);
	}
</style>
