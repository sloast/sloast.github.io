<script lang="ts">
	import { onMount } from 'svelte';

	let offset = $state(0);
	let innerHeight = $state(800);
	let height = $derived(innerHeight - offset);
	let iframe: HTMLIFrameElement;
	$effect(() => {
		offset = iframe.offsetTop;
	});

	onMount(() => {
		iframe.focus();
	});
</script>

<svelte:window bind:innerHeight />
<iframe bind:this={iframe} src="/snake/game.html" width="100%" {height} title="snake game"></iframe>
