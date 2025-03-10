<script lang="ts">
  import Header from "./header.svelte";

  let tttext: String = "";
  let ttfinal: String = "adam robson";
  let cursor: String = "_";

  function add_char() {
    tttext += ttfinal[0];
    ttfinal = ttfinal.substring(1);
    if (ttfinal.length === 0) {
      clearInterval(id);
      setInterval(() => {
        cursor = cursor == "_" ? "\xa0" : "_";
      }, 1000);
    }
  }

  let id = 0;

  setTimeout(() => {
    id = setInterval(add_char, 100);
  }, 200);
</script>

<Header></Header>
<div
  class="flex items-center justify-center relative min-h-72 overflow-clip z-0"
>
  <h1 class="bg-gray-800 rounded p-4 pointer-events-none z-10 text-5xl">
    &nbsp;{tttext}{cursor}
  </h1>

  <div id="background" class="inset-0 my-[-50px] absolute">
    <iframe
      src="https://www.shadertoy.com/embed/XfdSRs?gui=false&amp;t=10&amp;paused=false&amp;muted=true"
      width="100%"
      height="100%"
      frameborder="0"
      allowfullscreen={false}
      title="3dperlinnoise"
      class="inset-0"
    ></iframe>
  </div>
</div>
<main class="pt-4">
  <p>
    welcome to my site. it's a bit empty at the moment, but i'm working on it :)
  </p>
</main>
