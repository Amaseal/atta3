<script lang="ts">
	import type { HomePage, Promos } from '../../types/types';
	import LL from '$i18n/i18n-svelte';
	import { locale } from '$i18n/i18n-svelte';

	import MdiChevronUp from '~icons/mdi/chevron-up';
	import MdiChevronDown from '~icons/mdi/chevron-down';

	export let homePage: HomePage;
	export let promos: Promos[];

	let index = 0;

	const next = () => {
		if (index > promos.length) {
			index = 1;
		}

		index = (index + 1) % promos.length;
	};
	const back = () => {
		if (index < 1) {
			index = promos.length;
		}
		index = (index - 1) % promos.length;
	};
</script>

<section>
	<div class="container">
		<div class="grid align">
			<div class="text flex align">
				<div class="flex collumn start">
					<h1><span>{homePage.span}</span><br />{homePage.title}</h1>
					<p>{homePage.description}</p>

					{#if promos.length > 0}
						<div class="promo_info flex align gap">
							<a class="button" href="/">{$LL.buttons.hero()}</a>
							<a href="{promos[index].product.slug}/{$locale}}" class="button"
								>{promos[index].button}</a
							>
							<h2>{promos[index].text}</h2>
						</div>
					{:else}
						<a class="button" href={$LL.link('/pakalpojumi')}>{$LL.buttons.hero()}</a>
					{/if}
				</div>
			</div>
			<div class="promo">
				{#if promos.length > 0}
					<div class="flex align image">
						{#each [promos[index]] as promo}
							<img src={promo.image.formats.medium?.url} alt="" />
						{/each}
						<div class="flex collumn align justify controls">
							<button class="flex" on:click={() => back()}><MdiChevronUp /></button>
							{#each promos as promo, i}
								<button class:active={i === index} on:click={() => (index = i)} class="control" />
							{/each}
							<button class="flex" on:click={() => next()}><MdiChevronDown /></button>
						</div>
					</div>
				{:else}
					<img src="./images/falling-business-card-mockups.png" alt="business cards" />
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	span {
		font-weight: 300;
	}
	section::after {
		content: '';
		position: absolute;
		top: calc(var(--size-xl) + var(--size-m));
		right: 0;
		border-top-left-radius: var(--size-m);
		border-bottom-left-radius: var(--size-m);
		bottom: var(--size-l);
		background-color: var(--secondary);
		width: 50%;
		z-index: -99;
	}
	.image {
		height: 100%;
		max-width: 100%;
	}
	.control.active {
		background-color: var(--text);
		scale: 1.1;
	}
	h2 {
		line-height: 1.2;
		margin: 0;
	}
	.control {
		background-color: var(--primary);
		border-radius: 50%;
		height: 15px;
		width: 15px;
		border: 1px solid var(--text);
		margin: var(--size-xs);
	}
	.controls {
		padding: var(--size-xs);
		width: var(--size-l);
	}
	.promo,
	.text {
		height: 100vh;
		padding-bottom: var(--size-l);
		padding-top: calc(var(--size-xl) + var(--size-m));
	}

	.text {
		padding-right: var(--size-xl);
	}
	img {
		height: 100%;
		width: calc(100% - var(--size-l));
		object-fit: cover;
		border-radius: var(--size-m);
	}
	section {
		height: 100vh;
	}

	p {
		font-size: clamp(16px, 2vw, 24px);

		margin-bottom: var(--size-l);
	}
	h1 {
		margin: 0;
		margin-top: auto;
		margin-bottom: var(--size-m);
	}
	.container {
		height: 100%;
	}
	.promo_info {
		margin-top: auto;
		height: auto;
		position: absolute;
		bottom: var(--size-l);
	}
</style>
