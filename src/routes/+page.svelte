<script>
  import Artist from "$lib/components/Artist.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Chart from "$lib/components/Chart.svelte";
  import TabsTab from "$lib/components/TabsTab.svelte";
  import Trending from "$lib/components/Trending.svelte";
  import IconMenu from "$lib/icons/IconMenu.svelte";
  import IconNotificationbell from "$lib/icons/IconNotificationbell.svelte";
  import IconSettings from "$lib/icons/IconSettings.svelte";

  let { data } = $props();

  let menuOpen = $state();

  let menuHover = $state();

  let tabActive = $state();
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

<div class=" bg-purple-500 flex flex-row w-full md:h-screen">
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

  <div class="bg-green-800 w-full md:w-10/12">
    <div class="w-full bg-sky-300 h-[6%] flex flex-wrap min-h-12">
      <div class="w-full md:w-1/3 h-full hidden md:inline-block bg-purple-400">
        <div class="flex space-x-2 items-end">
          <TabsTab></TabsTab>
        </div>
      </div>
      <div class="w-full md:w-1/3 h-full bg-pink-400 block md:inline-block">
        <label class="input w-full h-full">
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

      <div
        class="w-full md:w-1/3 h-full bg-yellow-400 flex justify-end items-center"
      >
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

    <div class="w-full bg-sky-500 h-[40%]">
      <Carousel trending={data.trending}></Carousel>
    </div>

    <div
      class="w-full bg-sky-700 h-[54%] flex flex-col md:flex-row space-x-0 md:space-x-4"
    >
      <div class="bg-teal-900 p-4 w-full h-full space-y-4 md:w-8/12">
        <div class="bg-teal-800 w-full h-[40%]">
          <div class="w-full flex justify-between">
            <span>Text yacho</span>
            <span>Text yacho</span>
          </div>
          <div class="w-full overflow-auto flex space-x-8">
            {#each data.artists as artist}
              <Artist name={artist.name} image={artist.image}></Artist>
            {/each}
          </div>
        </div>
        <div
          class="bg-teal-700 w-full flex flex-col space-x-0 md:space-x-4 md:flex-row p-4 h-[60%] space-y-4 md:space-y-0"
        >
          <div class="bg-teal-600 p-4 md:w-4/12 w-full"></div>
          <div class="bg-teal-600 p-4 md:w-8/12 w-full">
            <div class="w-full flex justify-between">
              <span>Text yacho</span>
              <span>Text yacho</span>
            </div>
            <div class="w-full overflow-auto h-full">
              {#each data.charts as chart, i}
                <Chart
                  title={chart.songTitle}
                  image={chart.albumArt}
                  position={i + 1}
                  artist={chart.artist}
                ></Chart>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="bg-orange-600 w-full p-4 md:w-4/12"></div>
    </div>
  </div>
</div>

<style>
  div {
    border: 1px;
    border-color: tomato;
  }
</style>
