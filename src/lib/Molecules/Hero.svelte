<script>
    export let width = 100;
    export let height = 100;
    export let theme = '';
    export let primary = false;
    export let bgColor = '';
    export let bgImg = '';
</script>

<div 
    class="hero"
    class:bg-primary={primary}
    class:text-white={primary}
    data-theme={theme}
    style:width={`${width}%`}
    style:height={`${height}%`}
    style:background-color={bgColor}
    style:background-image={`url(${bgImg})`}
    style:background-opacity="30%"
> 
  {#if bgImg}
  <div class="hero-overlay bg-opacity-60"></div>
  {/if}
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
            <slot name="title"></slot>
        </h1>
        <slot name="description"></slot>
        <slot name="action"></slot>
      </div>
    </div>
  </div>