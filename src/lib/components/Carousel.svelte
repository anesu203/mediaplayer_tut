<script>
  import Trending from "./Trending.svelte";

  let { trending = [] } = $props();
</script>

<div class="carousel w-full h-full">
  {#each trending as song, i}
    <div id="slide{i + 1}" class="carousel-item relative w-full">
      <!--  -->
      <Trending title={song.title} image={song.image} artist={song.artist}
      ></Trending>
      <div
        class="absolute right-5 bottom-0 flex space-x-3 -translate-y-1/2 transform justify-between"
      >
        <a href="#slide{i || 1}" class="btn btn-circle">❮</a>
        {#if i === trending.length - 1}
          <a href="#slide1" class="btn btn-circle">❯</a>
        {:else}
          <a href="#slide{i + 2}" class="btn btn-circle">❯</a>
        {/if}
      </div>
    </div>
  {/each}
</div>
