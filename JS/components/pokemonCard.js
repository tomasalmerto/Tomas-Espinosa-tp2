

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


export function crearSpinnerCarga() {
    return `
        <div class="d-flex flex-column align-items-center my-5 animate__animated animate__fadeIn">
            <div class="spinner-border text-warning" role="status" style="width: 3rem; height: 3rem;">
                <span class="visually-hidden">Cargando...</span>
            </div>
            <p class="text-warning mt-3 fw-semibold">Buscando en la Pokédex...</p>
        </div>
    `;
}