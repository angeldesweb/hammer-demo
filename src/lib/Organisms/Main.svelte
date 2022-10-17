<script>
    import ilum from '../../assets/images/ilumsfd.png';
    import auto from '../../assets/images/autosfd.png';
    import ilumsfp from '../../assets/images/ilumsfp.png';
    import autosfp from '../../assets/images/autosfp.png';
    import ilumImg from '../../assets/images/ilumslidebg.jpg';
    import autoImg from '../../assets/images/autoslidebg.jpg';
    import NavBar from "../Molecules/NavBar.svelte";
    import Layout from '../Molecules/Layout.svelte';
    import Hero from '../Molecules/Hero.svelte';
    import Footer from '../Molecules/Footer.svelte';

    const sources = [ilum,auto]
    const slidesImgs = [ilumImg,autoImg];
    const logos = [ilumsfp,autosfp]
    const themes = ['ilum','auto'];

    export let view = 0;
</script>

<Layout>
    <NavBar slot="header" theme={view === 1 ? 'auto' : 'ilum'}>
        <img src={sources[view]} alt="brand" slot="brand" style:height="3rem">
    </NavBar>
    <Hero bgImg={slidesImgs[view]} slot="main" >
        <img src={logos[view]} alt="logo" slot="title">
    </Hero>
    <div data-theme={themes[view]} slot="content" class="bg-secondary text-white p-3">
        <h2 class="title text-3xl text-center">
            Nuestra filosofía 
        </h2>
        <div class="divider"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam dolorum expedita labore facere, voluptatibus autem error quis architecto ipsam eos, molestias facilis nobis, sunt est mollitia! Magnam, animi ad.
        Totam porro deleniti voluptate laborum cumque ab illum corrupti recusandae nulla voluptas molestias, repellendus a labore ullam fugiat blanditiis iste saepe repudiandae necessitatibus soluta sed. Sapiente reprehenderit quas vitae iste.
        Impedit aperiam ipsum vitae cumque dolorum ex quod blanditiis alias voluptate iusto, quos in ducimus quaerat sunt, error illum maiores voluptatibus provident architecto at voluptas reiciendis necessitatibus mollitia? Distinctio, placeat.
        Laudantium enim, nihil dolores neque officia vitae perspiciatis accusantium facere eos in ut quibusdam doloremque placeat doloribus et est, ratione voluptates magni minima molestias sunt distinctio tempore harum aspernatur? Ipsam?
        Repellendus non unde quibusdam vel impedit? Delectus modi quos praesentium reiciendis. Iure a voluptatibus enim eveniet facere harum soluta? Cum dolores facilis minus quisquam quaerat iste blanditiis itaque non neque?</p>
    </div>
    <Footer slot="footer" theme={themes[view]}>
        <img src={sources[view]} alt="logo brand" slot="logo" style:height="5rem" />
    </Footer>
</Layout>