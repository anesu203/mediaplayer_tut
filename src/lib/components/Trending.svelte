<script>
  import IconHeart from "$lib/icons/IconHeart.svelte";

  let { title, image, artist } = $props();
</script>

<div class="w-full relative">
  <img src="/artist_cover_art/{image}" alt={artist} />
  <div class="absolute bg-black/50 inset-0">
    <div class="text-white absolute bottom-5 left-5">
      <div class="text-sm">Trending New Hits</div>
      <div class="text-2xl font-bold">{title}</div>
      <div class="font-bold">{artist}</div>

      <div class="flex space-x-2 mt-4">
        <button class="btn rounded-full btn-primary text-sm">Listen Now</button>
        <button aria-label="favorite" class="btn btn-circle btn-outline"
          ><IconHeart></IconHeart></button
        >
      </div>
    </div>
  </div>
</div>
