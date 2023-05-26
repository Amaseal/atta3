<script>
	import MdiMagnify from '~icons/mdi/magnify';
	let searchOpen = false;
	let searchQuery = '';

	import LL, { locale } from '$i18n/i18n-svelte';
	import { enhance } from '$app/forms';
	import { clickOutside } from 'svelte-use-click-outside';

	let handleOutside = () => {
		searchOpen = false;
		searchQuery = '';
	};
</script>

<li class="flex" use:clickOutside={handleOutside}>
	<form class:active={searchOpen} action="/search/{$locale}" method="post" use:enhance>
		<input
			bind:value={searchQuery}
			class:active={searchOpen}
			type="text"
			name="search"
			placeholder={`${$LL.nav.search}`}
		/>
		<button class:active={searchOpen} type="submit" class="flex round_button"
			><MdiMagnify />
		</button>
	</form>

	<button class="flex round_button" on:click={() => (searchOpen = !searchOpen)}
		><MdiMagnify />
	</button>
</li>

<style>
	button.active {
		z-index: 100;
	}
	form.active {
		width: 200px;
	}
	li {
		position: relative;
		width: 50px;
		height: 50px;
	}
	form,
	button {
		border-radius: var(--size-m);
		display: flex;
		width: 50px;
		height: 50px;
		right: 0;
		position: absolute;
	}
	input {
		border-radius: var(--size-m);
		border: none;
		width: 100%;
		height: 100%;
		position: absolute;
		padding: var(--size-s) var(--size-m);
	}
</style>
