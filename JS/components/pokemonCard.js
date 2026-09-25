

export function crearTarjetaPokemon(informacionPokemon) {

    const { 
        name: nombre, 
        id: identificador, 
        sprites: imagenes, 
        types: tipos 
    } = informacionPokemon;



    const urlImagen = imagenes.other['official-artwork'].front_default || imagenes.front_default;

    const listaTipos = tipos.map(item => item.type.name).join(', ');




    return `
        <div class="card mx-auto shadow-lg bg-secondary text-white border-0" style="width: 18rem;">
            <img src="${urlImagen}" class="card-img-top p-3 bg-dark-subtle rounded-top" alt="${nombre}">
            <div class="card-body text-center">
                <h5 class="card-title text-capitalize fw-bold">${nombre}</h5>
                <p class="card-text text-warning fw-semibold">#${identificador}</p>
                <div class="mt-3">
                    <span class="badge bg-warning text-dark text-capitalize px-3 py-2 fw-bold">
                        ${listaTipos}
                    </span>
                </div>
            </div>
        </div>
    `;
}