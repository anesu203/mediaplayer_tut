<script>
  import Artist from "$lib/components/Artist.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Chart from "$lib/components/Chart.svelte";
  import Trending from "$lib/components/Trending.svelte";
  import IconMenu from "$lib/icons/IconMenu.svelte";
  import IconNotificationbell from "$lib/icons/IconNotificationbell.svelte";
  import IconSettings from "$lib/icons/IconSettings.svelte";

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
    <div class="w-full bg-sky-300 p-4 h-[10%] flex flex-row">
      <div class="w-full bg-purple-400">
        <div>
          <h2>SONGS</h2>
        </div>
      </div>
      <div class="w-full bg-pink-400">
        <label class="input">
          <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
              ><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"
              ></path></g
            ></svg
          >
          <input type="search" class="grow" placeholder="Search" />
          <kbd class="kbd kbd-sm">⌘</kbd>
          <kbd class="kbd kbd-sm">K</kbd>
        </label>
      </div>

      <div class="w-full bg-yellow-400 flex justify-end items-center">
        <div class=" flex flex-row">
          <button class=" btn btn-ghost btn-circle btn-sm"
            ><IconNotificationbell></IconNotificationbell></button
          >
          <button class="btn btn-circle btn-ghost btn-sm"
            ><IconSettings></IconSettings></button
          >
        </div>

        <div class="flex rounded-sm bg-black items-center h-full">
          <div class="p-2 bg-gray-700 h-full">
            <img
              class="h-full"
              src="/artists/people-collage-design_01.jpg"
              alt=""
            />
          </div>
          <div class="py-2 px-3">
            <h2>Dave Cooper</h2>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-sky-500 p-4 h-[40%]"></div>
    <div class="w-full bg-sky-700 p-4 h-[50%]"></div>
  </div>
</div>

<style>
  div {
    border: 1px;
    border-color: tomato;
  }
</style>
