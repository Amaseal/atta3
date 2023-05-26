<script lang="ts">
	import LL from '$i18n/i18n-svelte';
	import type { Category, HomePage } from '../../types/types';
	import Form from './Form.svelte';
	import MdiFacebook from '~icons/mdi/facebook';
	import MdiInstagram from '~icons/mdi/instagram';
	export let homePage: HomePage;
	export let categories: Category[];
</script>

<Form {homePage} />
<footer>
	<div class="container">
		<div class="flex gap large">
			<a class="logo" href="/">
				<picture>
					<source srcset="./images/logo_light.svg" media="(prefers-color-scheme: dark)" />
					<img src="./images/logo_dark.svg" alt="Atta print logo" />
				</picture>
			</a>
			<div class="flex links gap large">
				{#each categories as category}
					<div class="flex collumn">
						<h4 class="main">{category.title}</h4>
						{#each category.services as service}
							<a href={$LL.link('/')}>{service.title}</a>
						{/each}
					</div>
				{/each}
				<a class="main" href={$LL.link('/galerija')}>{$LL.nav.gallery()}</a>
				<a class="main" href={$LL.link('/par-mums')}>{$LL.nav.about()}</a>
				<ul class="flex icons">
					<li>
						<a class="round_button" href="https://www.facebook.com/attaprint1"><MdiFacebook /></a>
					</li>
					<li>
						<a class="round_button" href="https://www.instagram.com/atta.print1/"
							><MdiInstagram /></a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<style>
	.links {
		width: 100%;
	}
	.icons {
		margin-left: auto;
	}
	.main {
		padding: var(--size-s) 0;
		font-weight: 600;
	}
	footer {
		background-color: black;
		padding: calc(var(--size-xl) + var(--size-l)) 0;
	}
</style>
