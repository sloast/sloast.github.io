<script lang="ts">
    import Card from "./lib/Card.svelte";
    import sampleim from "./assets/sampleim.png";
    import cubu_disk from "./assets/cubu_disk2.png";
</script>

<h2 class="text-3xl font-semibold pt-8">projects</h2>
<h3 class="text-l font-semibold text-gray-500">
    (hover for more info, and click to see the full thing)
</h3>
<div
    class="flex flex-col items-center md:flex-row md:flex-wrap justify-center md:items-stretch gap-4 py-4"
>
    <Card title="cubu" href="/cubu" background_image={cubu_disk}>
        {#snippet desc()}
            a project to create a unix-compatible block device where all the
            data is stored on rubik's cubes. also has an interactive cube
            solver.
        {/snippet}
    </Card>
    <Card title="layser - wip">
        {#snippet desc()}
            qwerty bad. this will be an online keyboard layout analyser and
            optimiser.
        {/snippet}
    </Card>
    <Card title="shadertoy">
        {#snippet desc()}
            i've made some shader art on a site called <a
                href="https://www.shadertoy.com/"
                class="a">shadertoy</a
            >, such as this and the visuals in the banner above.
        {/snippet}
        {#snippet backdrop()}
            <div
                id="background"
                class="absolute inset-0 my-[-50px] pointer-events-none"
            >
                <iframe
                    src="https://www.shadertoy.com/embed/lfdSWS?gui=false&amp;t=10&amp;paused=false&amp;muted=true"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allowfullscreen={false}
                    title="3dperlinnoise"
                    class="inset-0"
                ></iframe>
            </div>{/snippet}
    </Card>
    <Card title="title" background_image={sampleim}>
        {#snippet desc()}
            description
        {/snippet}
    </Card>
</div>
