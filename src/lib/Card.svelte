<script lang="ts">
	let {
		title,
		background_image = null,
		image = null,
		href = null,
		backdrop = null,
		bg_style = '',
		desc
	} = $props();

	const toImageUrl = (processedImagePath: String) =>
		`url('${processedImagePath.replaceAll('\\', '/')}')`;
</script>

<button
	class="group relative z-0 flex w-80 flex-col justify-stretch overflow-clip rounded-xl border-2 border-gray-400 bg-gray-900 transition-all duration-500 hover:z-10 hover:shadow-[0_0_2em_#008236]"
	onclick={() => {
		window.location.href = href;
	}}
>
	<div class="grow-0 bg-gray-900 py-1 text-center align-middle">
		<h2 class="text-2xl font-semibold">{title}</h2>
	</div>

	<!-- {#if image}
            <img src={image} alt="" />
        {:else if background_image} -->
	<!-- <div class="p-8"></div> -->
	<!--{/if}-->

	<div
		class="relative flex grow flex-col items-stretch justify-end overflow-clip rounded-xl bg-gray-800 bg-cover bg-center bg-no-repeat"
		style={(background_image ? `background-image: ${toImageUrl(background_image)};` : '') +
			bg_style}
	>
		{#if backdrop}{@render backdrop()}{/if}
		<div
			class="grow-0 translate-y-full bg-black/25 p-4 backdrop-blur-sm transition-all duration-200 ease-out group-hover:translate-y-0"
		>
			{@render desc()}
		</div>
	</div>
</button>
