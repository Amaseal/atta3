<script lang="ts">
	import type { HomePage } from '../../types/types';
	import LL from '$i18n/i18n-svelte';
	export let homePage: HomePage;
</script>

<section>
	<div class="container">
		<div class="contacts flex">
			<div class="contact_container">
				<h2>{homePage.contact_title}</h2>
				<div class="flex gap spaced">
					{#each homePage.contacts as contact}
						<div>
							<h4>{contact.title}</h4>
							{#each contact.single_contact as singleContact}
								<div class="flex align gap contact">
									<img class="icon" src={singleContact.icon.url} alt="" />
									<a href={$LL.link(`${singleContact.text}`)}>{singleContact.text}</a>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
			<div class="form">
				<h3>{$LL.form.message()}</h3>
				<form action="?/" class="flex collumn">
					<div class="flex spaced gap">
						<label for="name">{$LL.form.name()}</label>
						<input type="text" name="name" />
					</div>
					<div class="flex spaced gap">
						<label for="name">{$LL.form.surname()}</label>
						<input type="text" name="name" />
					</div>
					<div class="flex spaced gap">
						<label for="name">{$LL.form.email()}</label>
						<input type="text" name="name" />
					</div>
					<div class="flex spaced gap">
						<label for="name">{$LL.form.text()}</label>
						<textarea name="name" />
					</div>
					<button class="button">{$LL.buttons.send()}</button>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	.contact_container > .spaced {
		width: 70%;
	}
	.icon {
		height: 30px;
		width: 30px;
		border-radius: var(--size-l);
	}
	.contact_container {
		width: 65%;
	}
	input {
		border-radius: var(--size-xs);
		margin-bottom: var(--size-s);
		border: none;
		width: 250px;
		height: 100%;
		padding: var(--size-s) var(--size-m);
	}
	textarea {
		border-radius: var(--size-xs);
		margin-bottom: var(--size-l);
		border: none;
		height: 100px;
		width: 250px;
		resize: none;

		padding: var(--size-s) var(--size-m);
	}

	.form {
		padding: var(--size-l);
		border-radius: var(--size-s);
		background-color: var(--secondary);
		width: 35%;
	}
	.contact {
		margin-bottom: var(--size-xs);
	}
	h3 {
		margin-bottom: var(--size-l);
		font-size: clamp(24px, 4vw, 36px);
	}
	h4 {
		margin-bottom: var(--size-s);
		font-size: clamp(16px, 2vw, 28px);
	}
	h2 {
		font-size: clamp(32px, 5vw, 72px);
		line-height: 1.2;
		margin-top: var(--size-l);
		margin-bottom: var(--size-xl);
	}
	section {
		height: 550px;
	}
</style>
