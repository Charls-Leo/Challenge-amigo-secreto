// Se debe añadir nombres de personas en una lista, para luego escoger entre esa lista un amigo secreto.
// Luego, teniendo ya la lista de amigos, se le dará a el botón de sortear y aparecerá luego el mensaje de "El amigo secreto es: "
//Si no se pone ningún nombre poner un alert para que el jugador ingrese un nombre válido 

//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
//Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
//Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

let ListaAmigos = []

function agregarAmigo() {
    let nombreIngresado = document.getElementById("amigo").value;

    //si no se agrega ningún nombre
    if (nombreIngresado === "") {
        alert("Por favor escribe un nombre válido.");
        return;
    }
    // si se ingresa un número o algo que parece número
    if (!isNaN(nombreIngresado)) {
    alert("No se permite agregar números, solo nombres.");
    return; 
    }
    //se agrega a la lista los nombres
    ListaAmigos.push(nombreIngresado);
    //se muestra la lista en consola, (para verificación)
    console.log(ListaAmigos);
    mostrarLista();
    // para limpiar el input
    document.getElementById("amigo").value = "";

    limpiarCaja();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");

    // se limpia el contenido para evitar duplicados
    lista.innerHTML = "";

    for (let amigo of ListaAmigos) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    if (ListaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * ListaAmigos.length);
    let amigoSorteado = ListaAmigos[indiceAleatorio];

    console.log("Amigo sorteado:", amigoSorteado);

    // Mostrarlo en la página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: <li>${amigoSorteado}</li>`;
}

function condicionesIniciales() {
    // Reinicia la lista en memoria
    ListaAmigos = [];

    // Limpia lo que se muestra en pantalla
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    // Limpia y enfoca el input
    limpiarCaja();
    document.getElementById("amigo").focus();
}

function reiniciarJuego(){
    condicionesIniciales();
}


