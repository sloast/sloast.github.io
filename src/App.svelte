<script lang="ts">
  import slogo from "/slogo.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <header>
    <div>
      <a href="https://vite.dev" target="_blank" rel="noreferrer">
        <img src={slogo} class="logo" alt="Vite Logo" />
      </a>
    </div>
  </header>

  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>
