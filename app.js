// Lista donde se almacenarán los nombres
let listaAmigos = [];

// Función para añadir un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor escribe un nombre válido.");
        return;
    }
    if (/\d/.test(nombre)) {
        alert("No se permiten números en el nombre.");
        input.value = "";
        return;
    }

    // Agregar a la lista interna
    listaAmigos.push(nombre);

    // Crear un nuevo <li> y mostrarlo en la lista
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;

    document.getElementById("listaAmigos").appendChild(nuevoElemento);

    // Limpiar input
    input.value = "";
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        document.getElementById("resultado").textContent = "No hay nombres en la lista.";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const seleccionado = listaAmigos[indiceAleatorio];

    document.getElementById("resultado").textContent = `🎉 Tu amigo secreto es: ${seleccionado}`;
}

