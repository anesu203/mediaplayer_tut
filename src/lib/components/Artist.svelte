<script>
    let {name, image} = $props();

</script>
<div class="w-64 bg-grey-100 p-4 m-2 rounded-lg shadow-md flex flex-col item-center">
<img src="/artists/{image}" alt="">
<h2 class="text-2xl">{name}</h2>
</div>