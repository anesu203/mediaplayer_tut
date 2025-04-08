<script>
  let { name, image } = $props();
</script>

<div
  class="w-20 shrink-0 bg-grey-100 m-2 rounded-lg shadow-md flex flex-col item-center"
>
  <img src="/artists/{image}" alt="" />
  <h2 class="text-sm">{name}</h2>
</div>
