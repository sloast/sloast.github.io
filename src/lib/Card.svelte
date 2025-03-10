<script lang="ts">
    let {
        title,
        background_image = null,
        image = null,
        href = null,
        backdrop = null,
        desc,
    } = $props();

    const toImageUrl = (processedImagePath: String) =>
        `url('${processedImagePath.slice(1).replaceAll("\\", "/")}')`;
</script>

<a {href}>
    <div
        class="group relative flex h-full flex-col justify-stretch w-80 rounded-xl z-0 border-2 border-gray-400 bg-gray-800 transition-all duration-500 hover:shadow-[0_0_2em_#008236] hover:z-10 overflow-clip"
    >
        <div class="text-center align-middle bg-gray-900 py-1 grow-0">
            <h2 class="text-2xl font-semibold">{title}</h2>
        </div>

        <!-- {#if image}
            <img src={image} alt="" />
        {:else if background_image} -->
        <!-- <div class="p-8"></div> -->
        <!--{/if}-->

        <div
            class="relative flex flex-col justify-end items-stretch bg-no-repeat bg-cover bg-center overflow-clip grow"
            style={background_image
                ? `background-image: ${toImageUrl(background_image)}`
                : ""}
        >
            {#if backdrop}{@render backdrop()}{/if}
            <p
                class="bg-black/20 p-4 grow-0 transition-all backdrop-blur-sm translate-y-full group-hover:translate-y-0 ease-out duration-200"
            >
                {@render desc()}
            </p>
        </div>
    </div>
</a>
