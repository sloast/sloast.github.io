<script lang="ts">
    import slogo_full from "/slogo_full.svg";
</script>

<header
    class="sticky top-0 flex flex-row items-center justify-between border-b-gray-500 border-b-2 bg-gray-800 p-4 z-10"
>
    <a
        class="basis-0 grow"
        href="https://vite.dev"
        target="_blank"
        rel="noreferrer"
    >
        <img src={slogo_full} class="logo" alt="Vite Logo" />
    </a>
    <div class="flex flex-row gap-4">
        <!-- <a class="btn" href="game/">snake</a> -->
        <a class="btn" type="button" href="https://github.com/sloast/">github</a
        >
        <a class="btn" type="button" href="https://www.linkedin.com/in/sloast/">
            linkedin
        </a>
        <a class="btn" type="button" href="/cubu">cubu</a>
    </div>
    <p class="basis-0 grow text-right">&nbsp;[ made by human ]&nbsp;</p>
</header>

<style>
    .logo {
        height: 3em;
        filter: drop-shadow(0 0 1.5em #00e436);
    }
</style>
