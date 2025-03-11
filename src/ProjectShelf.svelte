<script lang="ts">
    import Card from "./lib/Card.svelte";
    import sampleim from "./assets/sampleim.png";
    import cubu_disk from "./assets/cubu_disk2.png";
    import derail from "./assets/derail.png";
</script>

<h2 class="text-3xl font-semibold pt-8">projects</h2>
<h3 class="text-l font-semibold text-gray-500">
    hover for more info, and click to see the full thing
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
    <!-- <Card title="layser - wip">
        {#snippet desc()}
            qwerty bad. this will be an online keyboard layout analyser and
            optimiser.
        {/snippet}
    </Card> -->
    <Card
        title="shader art"
        href="https://www.shadertoy.com/profile/?show=shaders"
    >
        {#snippet desc()}
            shader art is code that runs on your gpu to generate dynamic,
            interactive digital art. examples are the visuals above and right
            here. i've uploaded a few to <a
                href="https://www.shadertoy.com/"
                class="a">shadertoy</a
            >.
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
            </div>
        {/snippet}
    </Card>
    <Card
        title="derail valley mods"
        href="https://next.nexusmods.com/profile/sloast/mods"
        background_image={derail}
        bg_style="background-position:top;"
    >
        {#snippet desc()}
            <a class="a" href="https://www.derailvalley.com/">derail valley</a>
            is train simulation game by
            <a class="a" href="https://www.altfuture.gg/">altfuture</a>. my
            derail valley mods are available on
            <a class="a" href="https://github.com/sloast/"> github </a>
            and
            <a class="a" href="https://next.nexusmods.com/profile/sloast/mods">
                nexus
            </a>.
        {/snippet}
    </Card>
    <!-- <Card title="言葉で遊ぼう">{#snippet desc()}{/snippet}</Card> -->
</div>
