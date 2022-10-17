<slot name="header"></slot>

{#if $$slots.main}
<main style="height:20rem">
    <slot name="main"></slot>
</main>
{/if}

<slot name="content"></slot>

<footer>
    <slot name="footer"></slot>
</footer>