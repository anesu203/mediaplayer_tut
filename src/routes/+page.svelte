<script>
  import Artist from "$lib/components/Artist.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Chart from "$lib/components/Chart.svelte";
  import Trending from "$lib/components/Trending.svelte";

  let { data } = $props();
  console.log(data);
</script>

<Carousel trending={data.trending}></Carousel>
<div class="w-full overflow-auto flex space-x-4">
  {#each data.artists as artist}
    <Artist name={artist.name} image={artist.image}></Artist>
  {/each}
</div>
<!-- {#each data.trending as song}
  <Trending title={song.title} image={song.image} artist={song.artist}
  ></Trending>
{/each} -->

{#each data.charts as chart, i}
  <Chart
    title={chart.songTitle}
    image={chart.albumArt}
    position={i + 1}
    artist={chart.artist}
  ></Chart>
{/each}
