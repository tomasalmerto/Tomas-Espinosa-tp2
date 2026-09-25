
import { buscarPokemon } from './services/pokemonService';
import { crearTarjetaPokemon } from './components/pokemonCard';
import { validarTexto } from './helpers/validationHelper';
import { mostrarAlertaVacia, mostrarAlertaError, mostrarAlertaExito } from './helpers/alertHelper';


document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.getElementById('search-form');
    const cajaTexto = document.getElementById('search-input');
    const contenedorTarjeta = document.getElementById('card-container');

    formulario.addEventListener('submit', async (evento) => { 

        evento.preventDefault();

        const valorBuscado = cajaTexto.value;

        if (!validarTexto(valorBuscado)) {
            mostrarAlertaVacia();
            return;
        }


        try {

            const informacionPokemon = await buscarPokemon(valorBuscado);


            const tarjetaHTML = crearTarjetaPokemon(informacionPokemon);

            contenedorTarjeta.innerHTML = tarjetaHTML;

            mostrarAlertaExito(informacionPokemon.name);

             cajaTexto.value = '';


              } catch (error) {
                mostrarAlertaError(error.message);
                }
    });
});