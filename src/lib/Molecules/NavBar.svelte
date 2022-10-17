<script>
    import { link , useLocation } from 'svelte-navigator';
    export let theme;
    let location = useLocation();

    let path = $location.pathname.split('/')[1];
    console.log(path);
</script>

<header 
    class="navbar"
    class:bg-primary={!!theme}
    data-theme={theme}
    style="z-index:3"
>
    <div class="navbar-start">
        <div class="dropdown">
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <label tabindex="0" for="" class="btn btn-ghost text-white lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul tabindex="0" 
                class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
                class:bg-primary={!!theme}    
            >
                <li><a class="text-white" use:link href={`/${path}/`}>Inicio</a></li>
                <li><a class="text-white" href={null}>Galería</a></li>
                <li><a class="text-white" href={null}>Sobre nosotros</a></li>
                <li><a class="text-white" use:link href={`/${path}/contact`}>Contacto</a></li>
            </ul>
        </div>
        <a href={null} class="btn btn-ghost normal-case text-xl">
            <slot name="brand"></slot>
        </a>
    </div>
    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
            <li><a class="text-white" use:link href={`/${path}/`}>Inicio</a></li>
            <li><a class="text-white" href={null}>Galería</a></li>
            <li><a class="text-white" href={null}>Sobre nosotros</a></li>
            <li><a class="text-white" use:link href={`/${path}/contact`}>Contacto</a></li>
        </ul>
    </div>
    <div class="navbar-end">
        <a href="/" use:link class="btn btn-ghost text-white">Salir</a>
    </div>
</header>