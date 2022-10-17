<script>
    import ilumsfd from '../../assets/images/ilumsfd.png';
    import autosfd from '../../assets/images/autosfd.png';
    import { ContactForm , Layout , NavBar , Footer } from "..";

    export let theme;

    const sources = {
        ilum:ilumsfd,
        auto:autosfd
    }
</script>

<Layout >
    <NavBar slot="header" {theme}>
        <img src={sources[theme]} alt="brand" slot="brand" style:height="3rem">
    </NavBar>
    <div data-theme={theme} class="view" slot="content">
        <h2 class="text-3xl text-primary">Envíanos tu solicitud a nuestro correo</h2>
        <div class="divider"></div>
        <ContactForm {theme} />
    </div>
    <Footer slot="footer" {theme} >
        <img src={sources[theme]} alt="logo brand" slot="logo" style:height="5rem" />
    </Footer>
</Layout>

<style>
    .view  {
        display:flex;
        flex-direction: column;
        width:100%;
        align-items: center;
        justify-content: center;
        padding:.5em 0;
    }
</style>