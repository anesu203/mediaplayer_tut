<script>
  import Artist from "$lib/components/Artist.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Chart from "$lib/components/Chart.svelte";
  import Trending from "$lib/components/Trending.svelte";
  import IconMenu from "$lib/icons/IconMenu.svelte";

  let { data } = $props();

  let menuOpen = $state();
</script>

<!-- <Carousel trending={data.trending}></Carousel>
<div class="w-full overflow-auto flex space-x-4">
  {#each data.artists as artist}
    <Artist name={artist.name} image={artist.image}></Artist>
  {/each}
</div> -->
<!-- {#each data.trending as song}
  <Trending title={song.title} image={song.image} artist={song.artist}
  ></Trending>
{/each} -->

<!-- {#each data.charts as chart, i}
  <Chart
    title={chart.songTitle}
    image={chart.albumArt}
    position={i + 1}
    artist={chart.artist}
  ></Chart>
{/each} -->

<div class=" bg-purple-500 flex flex-row w-full h-screen">
  <div
    class:w-300={menuOpen}
    class="flex flex-col bg-red-400 w-8 md:w-2/12 transition-all"
  >
    <button
      class="btn btn-ghost btn-square btn-sm"
      onclick={() => {
        menuOpen = !menuOpen;
      }}><IconMenu></IconMenu></button
    >
  </div>
  <div class="bg-green-800 p-4 w-full md:w-10/12">
    <div class="w-full bg-sky-300 p-4 h-[10%]"></div>
    <div class="w-full bg-sky-500 p-4 h-[40%]"></div>
    <div class="w-full bg-sky-700 p-4 h-[50%]"></div>
  </div>
</div>

div.w-full
