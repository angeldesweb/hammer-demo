<script>
    import { useLocation } from 'svelte-navigator';
    import { Contact , Footer , NavBar , Layout } from '../lib';

    const location = useLocation();
    const view = $location.pathname.split('/')[1];
    let views = {
        iluminacion:'ilum',
        automotriz:'auto'
    }
    
</script>

<svelte:head>
    {#if view === 'iluminacion'}
    <link rel="icon" type="image/png" href="/faviconilum.png" />
    <title>Hammer iluminación</title>
    {:else if view === 'automotriz'}
    <link rel="icon" type="image/png" href="/faviconauto.png" />
    <title>Hammer automotríz</title>
    {:else}
    <link rel="icon" type="image/png" href="/favicon.png" />    
    <title>Grupo Hammer</title>
    {/if}
</svelte:head>
<Contact theme={views[view]} />