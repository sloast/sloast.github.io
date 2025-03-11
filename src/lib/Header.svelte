<script lang="ts">
	import slogo_full from './assets/slogo_full.svg';
	import slogo from './assets/slogo.svg';
	import { onMount } from 'svelte';

	let innerWidth = $state(0);
	let innerHeight = $state(0);
	let rem = $state(16);
	let wide = $derived(innerWidth > 50 * rem);
	onMount(() => {
		rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<header
	class="sticky top-0 z-10 flex flex-row items-center justify-between gap-4 border-b-2 border-b-gray-500 bg-gray-800 p-4"
>
	<a class="min-w-[3em] grow basis-0" href="https://sloast.dev">
		{#if wide}
			<img src={slogo_full} class="logo" alt="Sloast Logo" />
		{:else}
			<img src={slogo} class="logo" alt="Sloast Logo" />
		{/if}
	</a>
	<div class="flex flex-row flex-wrap justify-end gap-4">
		<!-- <a class="btn" href="game/">snake</a> -->
		<a class="btn" type="button" href="https://github.com/sloast/">github</a>
		<a class="btn" type="button" href="https://www.linkedin.com/in/sloast/"> linkedin </a>
		<!-- <a class="btn" type="button" href="/cubu">cubu</a> -->
	</div>
	{#if wide}
		<p class="min-w-[8em] grow basis-0 text-right">&nbsp;[ made by human ]&nbsp;</p>
	{/if}
</header>

<style>
	.logo {
		height: 3em;
		filter: drop-shadow(0 0 1.5em #00e436);
		aspect-ratio: auto;
	}
</style>
