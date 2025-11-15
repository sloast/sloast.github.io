<script lang="ts">
	let tttext: String = '';
	let ttfinal: String = 'adam robson';
	let cursor: String = '_';

	function add_char() {
		tttext += ttfinal[0];
		ttfinal = ttfinal.substring(1);
		if (ttfinal.length === 0) {
			clearInterval(id);
			setInterval(() => {
				cursor = cursor == '_' ? '\xa0' : '_';
			}, 1000);
		}
	}

	let id = 0;

	setTimeout(() => {
		id = setInterval(add_char, 100);
	}, 200);
</script>

<div class="relative z-0 flex min-h-72 items-center justify-center overflow-clip">
	<h1 class="pointer-events-none z-10 rounded bg-gray-800 p-4 text-5xl">
		&nbsp;{tttext}{cursor}
	</h1>

	<div id="background" class="absolute inset-0 my-[-50px]">
		<iframe
			src="/shader/index.html"
			width="100%"
			height="100%"
			frameborder="0"
			allowfullscreen={false}
			title="3dperlinnoise"
			class="inset-0"
		></iframe>
	</div>
</div>
