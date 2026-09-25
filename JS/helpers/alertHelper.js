

export function mostrarAlertaVacia() {
    Swal.fire({
        icon: 'warning',
        title: 'Sin busqueda',
        text: 'Por favor, escribe el nombre o el ID de un Pokémon antes de presionar buscar.',
        confirmButtonColor: '#ffc107',
        background: '#212529',
        color: '#fff'
        });
}

export function mostrarAlertaError(mensajeError) {
    Swal.fire({
        icon: 'Error',
        title: 'No se encontro al pokemon',
        text: mensajeError,
        confirmButtonColor: '#dc3545',
        background: '#212529',
        color: '#fff'
    });
}

export function mostrarAlertaExito(nombrePokemon) {
    Swal.fire({
        icon: 'success',
        title: 'Pokemon encontrado',
        text: `Se cargaron los datos de ${nombrePokemon} con éxito.`,
        confirmButtonColor: '#198754',
        background: '#212529',
        color: '#fff',
        timer: 2000,
         timerProgressBar: true
         });
}