


export function validarTexto(textoBuscado) {

    const textoLimpio = textoBuscado.trim();


    if (textoLimpio === "") {
        return false;
    }

    return true;
}