<script>
	import MdiMagnify from '~icons/mdi/magnify';
	import MdiChevronDown from '~icons/mdi/chevron-down';
	import MdiFacebook from '~icons/mdi/facebook';
	import MdiInstagram from '~icons/mdi/instagram';
	import MdiTwitter from '~icons/mdi/twitter';
</script>

<div class="container max-w-screen-xl px-2">
	<div class="navbar bg-base-100">
		<div class="flex-1">
			<a href="/">
				<picture>
					<source
						class="h-20"
						srcset="./images/logo_light.svg"
						media="(prefers-color-scheme: dark)"
					/>
					<img class="h-20" src="./images/logo_dark.svg" alt="Atta print logo" />
				</picture>
			</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<button class="btn btn-ghost btn-circle">
					<MdiMagnify />
				</button>

				<li tabindex="-1">
					<a href="/">
						Parent
						<MdiChevronDown />
					</a>
					<ul class="p-2 bg-base-100">
						<li><a href="/">Submenu 1</a></li>
						<li><a href="/">Submenu 2</a></li>
					</ul>
				</li>
				<li><a href="/">Item 3</a></li>
				<li><a href="/">Item 1</a></li>
			</ul>
			<ul class="flex items-center gap-2 ml-4">
				<li class="w-11">
					<a href="/" class="p-3 flex items-center justify-center hover:bg-secondary"
						><MdiFacebook />
					</a>
				</li>
				<li class="w-11">
					<a href="/" class="p-3 flex items-center justify-center"><MdiInstagram /> </a>
				</li>
				<li class="w-11">
					<a href="/" class="p-3 flex items-center justify-center"><MdiTwitter /> </a>
				</li>
			</ul>
		</div>
	</div>
</div>
