<script>
  function toggleView(e) {
    console.log(e.target.id);
    //store clicked id in variable
    selectedTab = e.target.id;
  }
  let selectedTab = $state("music");
</script>

<div role="tablist" class="tabs tabs-border">
  <li class:tab-active={selectedTab === "music"} role="tab" class="tab">
    <button id="music" onclick={toggleView}>MUSIC</button>
  </li>
  <li class:tab-active={selectedTab === "podcast"} role="tab" class="tab">
    <button id="podcast" onclick={toggleView}>PODCAST</button>
  </li>
  <li class:tab-active={selectedTab === "live"} role="tab" class="tab">
    <button id="live" onclick={toggleView}>LIVE</button>
  </li>
</div>
