
import { buscarPokemon } from './services/pokemonService.js';
import { crearTarjetaPokemon, crearSpinnerCarga } from './components/pokemonCard.js';
import { validarTexto } from './helpers/validationHelper.js';
import { mostrarAlertaVacia, mostrarAlertaError, mostrarAlertaExito } from './helpers/alertHelper.js';


document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.getElementById('search-form');
    const cajaTexto = document.getElementById('search-input');
    const contenedorTarjeta = document.getElementById('card-container');
    const botonReset = document.getElementById('btn-reset');





    async function cargarPokemonIniciales() {
        contenedorTarjeta.innerHTML = crearSpinnerCarga();
        
        try {
            const idsAleatorios = [
                Math.floor(Math.random() * 1010) + 1,
                Math.floor(Math.random() * 1010) + 1,
                Math.floor(Math.random() * 1010) + 1
            ];

            const promesas = idsAleatorios.map(id => buscarPokemon(id));
            const listaPokemon = await Promise.all(promesas);

            contenedorTarjeta.innerHTML = '';

            contenedorTarjeta.className = "row justify-content-center gap-3";

            listaPokemon.forEach(pokemon => {
                const tarjetaHTML = crearTarjetaPokemon(pokemon);
                
                const columna = document.createElement('div');
                columna.className = "col-md-3 d-flex justify-content-center";
                columna.innerHTML = tarjetaHTML;
                
                contenedorTarjeta.appendChild(columna);
            });

        } catch (error) {
            contenedorTarjeta.innerHTML = `<p class="text-danger">No se pudieron cargar los Pokémon iniciales.</p>`;
        }
    }

    cargarPokemonIniciales();






    formulario.addEventListener('submit', async (evento) => { 

        evento.preventDefault();

        const valorBuscado = cajaTexto.value;

        if (!validarTexto(valorBuscado)) {
            mostrarAlertaVacia();
            return;
        }

        contenedorTarjeta.className = "col-md-6 text-center mx-auto";
        contenedorTarjeta.innerHTML = crearSpinnerCarga();


        try {

            const informacionPokemon = await buscarPokemon(valorBuscado);
            const tarjetaHTML = crearTarjetaPokemon(informacionPokemon);

            contenedorTarjeta.className = "col-md-6 text-center";
            contenedorTarjeta.innerHTML = tarjetaHTML;

            mostrarAlertaExito(informacionPokemon.name);

             cajaTexto.value = '';


              } catch (error) {
                mostrarAlertaError(error.message);
                }
    });


    botonReset.addEventListener('click', () => {
        cajaTexto.value = '';

        cargarPokemonIniciales();
    });


});