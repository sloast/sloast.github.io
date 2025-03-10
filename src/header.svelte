<script lang="ts">
    import slogo_full from "/slogo_full.svg";
    import slogo from "/slogo.svg";

    let innerWidth = 0;
    let innerHeight = 0;
    let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    $: wide = innerWidth > 50 * rem;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<header
    class="sticky top-0 flex flex-row items-center justify-between border-b-gray-500 border-b-2 bg-gray-800 p-4 z-10 gap-4"
>
    <a class="basis-0 grow min-w-[3em]" href="https://sloast.dev">
        {#if wide}
            <img src={slogo_full} class="logo" alt="Sloast Logo" />
        {:else}
            <img src={slogo} class="logo" alt="Sloast Logo" />
        {/if}
    </a>
    <div class="flex flex-row justify-end gap-4 flex-wrap">
        <!-- <a class="btn" href="game/">snake</a> -->
        <a class="btn" type="button" href="https://github.com/sloast/">github</a
        >
        <a class="btn" type="button" href="https://www.linkedin.com/in/sloast/">
            linkedin
        </a>
        <a class="btn" type="button" href="/cubu">cubu</a>
    </div>
    {#if wide}
        <p class="basis-0 grow text-right min-w-[8em]">
            &nbsp;[ made by human ]&nbsp;
        </p>
    {/if}
</header>

<style>
    .logo {
        height: 3em;
        filter: drop-shadow(0 0 1.5em #00e436);
        aspect-ratio: auto;
    }
</style>
