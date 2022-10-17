<script>
    export let theme;
</script>

<div data-theme={theme} class="card shadow-xl p-3">
    <form>
        <div class="form-control w-full">
            <label for="" class="text-primary">Nombre</label>
            <input class="input input-bordered text-primary" type="text" name="name" placeholder="Nombres y apellidos">
        </div>
        <div class="form-control w-full">
            <label for="" class="text-primary">Dirección de correo</label>
            <input class="input input-bordered text-primary" type="email" name="email" placeholder="ejemplo@mail.com">
        </div>
        <div class="form-control w-full">
            <label for="" class="text-primary">Detalle</label>
            <textarea class="textarea textarea-bordered text-primary" name="details" cols="30" rows="10" placeholder="Escribe aquí..."></textarea>
        </div>
        <button class="btn btn-primary mt-3 text-white">Enviar</button>
    </form>
</div>


<style>
    .card {
        width: 70%;
    }
</style>