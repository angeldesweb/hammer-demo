<script>
    import { fade } from 'svelte/transition';
    import { link } from 'svelte-navigator';
    import {Hero} from "..";
    import ilumsfp from '../../assets/images/ilumsfp.png';
    import autosfp from '../../assets/images/autosfp.png';
</script>

<div class="view">
    <header>
        <p in:fade={{duration:3000}} class="title lighter">Bienvenidos a Grupo Hammer</p>
    </header>
    <div class="home">
        <div class="brands">
            <Hero theme="dark" bgColor="#000">
                <img src={autosfp} alt="hammer auto" slot="title">
                <a slot="action" class="btn btn-outline text-white" href="/automotriz" use:link >Entrar</a>
            </Hero>
        </div>
        <div class="brands">
            <Hero theme="dark" bgColor="#000">
                <img src={ilumsfp} alt="hammer auto" slot="title">
                <a slot="action" class="btn btn-outline text-white" href="/iluminacion" use:link >Entrar</a>
            </Hero>
        </div>
    </div>
</div>
<style>
    @media screen and (orientation:portrait) {
        .title {
            font-size:3vh;
        }
    }
    @media screen and (orientation:landscape) {
        .title {
            font-size:3vw;
        }
    }
    .view  {
        display:grid;
        grid-template-rows: 20% 65% 15%;
        height:100vh;
        width:100vw;
        background-color: #000;
    }
    .lighter {
        text-shadow: 0 0 30px #fff;
        font-family: "lemon";
        color:#fff;
    }
    header {
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .brands {
        width:min(25rem,100%)
    }
    .home {
        display:flex;
        flex-wrap:wrap;
        justify-content: space-around;
    }

    
</style>