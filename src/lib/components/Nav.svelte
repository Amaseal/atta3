<script lang="ts">
	import { locale } from '$i18n/i18n-svelte';
	import type { Category } from '../../types/types';
	import LL from '$i18n/i18n-svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	import { clickOutside } from 'svelte-use-click-outside';

	import MdiFacebook from '~icons/mdi/facebook';
	import MdiInstagram from '~icons/mdi/instagram';
	import SearchButton from './SearchButton.svelte';

	export let categories: Category[];

	let categoryDropdown = false;
	let languageDropdown = false;
	let height: number;
</script>

<svelte:window bind:scrollY={height} />

<section class:scrolled={height > 90}>
	<div class="container">
		<nav class:scrolled={height > 90}>
			<a class="logo" href={$LL.link('/')}>
				<picture>
					<source srcset="../images/logo_light.svg" media="(prefers-color-scheme: dark)" />
					<img class:scrolled={height > 90} src="./images/logo_dark.svg" alt="Atta print logo" />
				</picture>
			</a>
			<ul class="flex gap align margin">
				<SearchButton />

				<li class="dropdown">
					<button
						use:clickOutside={() => (categoryDropdown = false)}
						on:click={() => (categoryDropdown = !categoryDropdown)}
						class="navlink"
					>
						{$LL.nav.categories()}
					</button>

					{#if categoryDropdown}
						<ul class="dropdown_content">
							{#each categories as category}
								<li>
									<a class="navlink" href={$LL.link(`/${category.slug}`)}>{category.title}</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>

				<li><a class="navlink" href={$LL.link('/galerija')}>{$LL.nav.gallery()}</a></li>
				<li><a class="navlink" href={$LL.link('/par-mums')}>{$LL.nav.about()}</a></li>
			</ul>
			<ul class="flex">
				<li>
					<a class="round_button" href="https://www.facebook.com/attaprint1"><MdiFacebook /></a>
				</li>
				<li>
					<a class="round_button" href="https://www.facebook.com/attaprint1"><MdiInstagram /></a>
				</li>
			</ul>

			<ul>
				<li class="dropdown">
					<button
						use:clickOutside={() => (languageDropdown = false)}
						on:click={() => (languageDropdown = !languageDropdown)}
						class="navlink"
					>
						{$locale}
					</button>
					{#if languageDropdown}
						<ul class="dropdown_content">
							<LocaleSwitcher />
						</ul>
					{/if}
				</li>
			</ul>
		</nav>
	</div>
</section>

<style>
	img {
		transition: all 0.2s ease-in-out;
		transform-origin: center left;
	}
	img.scrolled {
		transform: scale(0.7);
	}
	section {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 99999;
		transition: all 0.2s ease-in-out;
	}
	section.scrolled {
		background-color: var(--primary);
	}
	.margin {
		margin-left: auto;
	}
	nav {
		padding: var(--size-m) 0;
		transition: all 0.2s ease-in-out;
	}
	nav.scrolled {
		padding: var(--size-xs) 0;
	}
</style>
