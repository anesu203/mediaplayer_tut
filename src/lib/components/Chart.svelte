<script>
  import IconPlaymicro from "./IconPlaymicro.svelte";
  import IconPlusmicro from "./IconPlusmicro.svelte";

  let { title, artist, image, position } = $props();
</script>

<div class="h-36 flex space-x-4 py-2 items-center w-screen-md">
  <div>
    {#if position < 10}
      <span class="font-medium text-2xl text-gray-400">0{position}</span>
    {:else}
      <span class="font-medium text-2xl text-gray-400">0{position}</span>
    {/if}
  </div>
  <div class="aspect-square rounded-2xl overflow-hidden h-32">
    <img src="/album_art/{image}" alt="" />
  </div>
  <div class="flex flex-col min-w-48">
    <div class="font-medium">{title}</div>
    <div class="text-sm">{artist}</div>
  </div>
  <div class="font-medium">3:43</div>
  <div>
    <button aria-label="play" class="btn btn-square btn-sm btn-outline"
      ><IconPlaymicro></IconPlaymicro></button
    >
  </div>
  <div>
    <button aria-label="add to playlist" class="btn btn-square btn-sm btn-ghost"
      ><IconPlusmicro></IconPlusmicro></button
    >
    <!--  -->
  </div>
</div>
