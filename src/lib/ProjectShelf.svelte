<script lang="ts">
	import Card from './Card.svelte';
	import squares_shader from './assets/squares_shader.png';
	import cubu_disk from './assets/cubu_disk2.png';
	import derail from './assets/derail.png';
	import snake from './assets/snake.png';
</script>

<h2 class="pt-8 text-3xl font-semibold">recent projects</h2>
<h3 class="text-l font-semibold text-gray-500">
	hover for more info, and click to see the full thing
</h3>
<div class="flex flex-col items-stretch justify-center gap-4 p-4 md:flex-row md:flex-wrap">
	<Card title="cubu" href="/cubu" image={cubu_disk}>
		{#snippet desc()}
			a project to create a unix-compatible block device where all the data is stored on rubik's
			cubes. also has an interactive cube solver.
		{/snippet}
	</Card>
	<!-- <Card title="layser - wip">
        {#snippet desc()}
            qwerty bad. this will be an online keyboard layout analyser and
            optimiser.
        {/snippet}
    </Card> -->
	<Card
		title="shader art"
		href="https://www.shadertoy.com/user/adaad"
		image={squares_shader}
	>
		{#snippet desc()}
			shader art is code that runs on your gpu to generate dynamic, interactive digital art.
			examples are the visuals above and right here. i've written a few on <a
				href="https://www.shadertoy.com/"
				class="a">shadertoy</a
			>.
		{/snippet}
		<!-- {#snippet backdrop()}
			<div id="background" class="pointer-events-none absolute inset-0 my-[-50px]">
				<iframe
					src="https://www.shadertoy.com/embed/lfdSWS?gui=false&amp;t=10&amp;paused=false&amp;muted=true"
					width="100%"
					height="100%"
					frameborder="0"
					allowfullscreen={false}
					title="3dperlinnoise"
					class="inset-0"
				></iframe>
			</div>
		{/snippet} -->
	</Card>
	<Card title="snake" href="/snake" image={snake}
		>{#snippet desc()}
			a little webgl snake game
		{/snippet}</Card
	>
	<Card
		title="derail valley mods"
		href="https://next.nexusmods.com/profile/sloast/mods"
		image={derail}
		bg_style="background-position:top;"
	>
		{#snippet desc()}
			<p>
				<a class="a" href="https://www.derailvalley.com/">derail valley</a>
				is a train simulation game by
				<a class="a" href="https://www.altfuture.gg/">altfuture</a>. my derail valley mods are
				available on
				<a class="a" href="https://github.com/sloast/">github</a>
				and
				<a class="a" href="https://next.nexusmods.com/profile/sloast/mods">nexus</a>.
			</p>
		{/snippet}
	</Card>
	<!-- <Card title="言葉で遊ぼう">{#snippet desc()}{/snippet}</Card> -->
</div>
