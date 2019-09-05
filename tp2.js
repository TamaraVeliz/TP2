let botonPlus = document.getElementById('botonAdd');

botonPlus.addEventListener('click', function() {
    let tareaMostrar = document.getElementById('tareaNueva');

    tareaMostrar.classList.toggle('desplegable');
});

let botonAgregarFlecha = document.getElementById('botonFlecha');

botonAgregarFlecha.addEventListener('click', function() {
    let title = document.getElementById('ingreseTarea').value;
    let description = document.getElementById('descripcion').value;

    let card = agregarTarea(title, description);
    let padre = document.querySelector('ul.listas');
    padre.appendChild(card);
});

function agregarTarea(title, descripcion) {
    let elementoCard = document.createElement('li');
    elementoCard.classList.add('tarea', 'sinCompletar'); //li padre

    let contenedorTituloyP = document.createElement('div');
    contenedorTituloyP.classList.add('tarea-contenedorTituloyP'); //div conenedor de titulo y descripcion

    let tareaContenedorBotones = document.createElement('div');
    tareaContenedorBotones.classList.add('tarea-contenedorBotones'); //div contenedor botones check y eliminar

    let tituloCard = document.createElement('h3');
    tituloCard.classList.add('tarea-Titulo');
    tituloCard.innerText = title; //titulo de card

    let descripcionCard = document.createElement('p');
    descripcionCard.classList.add('tarea-Descripcion'); // descripcion card
    descripcionCard.innerText = descripcion;

    let botonCheck = document.createElement('button');
    botonCheck.classList.add('boton-aceptar', 'botones-tareas'); //boton check
    botonCheck.addEventListener('click', elementoCompletado());

    let botonTrash = document.createElement('button');
    botonTrash.classList.add('boton-delete', 'botones-tareas'); // boton delete

    let contenedorCheck = document.createElement('figure'); // contenedor check
    contenedorCheck.classList.add('tarea-botonContenedor');

    let contenedorDelete = document.createElement('figure'); //contenedor delete
    contenedorDelete.classList.add('tarea-botonContenedor');

    let iconoCheck = document.createElement('img'); //icono check
    iconoCheck.src = 'img/check-circle-solid.png';
    iconoCheck.classList.add('tarea-boton', 'botonCheck');

    let iconoDelete = document.createElement('img'); //icono delete
    iconoDelete.src = 'img/trash-solid.png';
    iconoDelete.classList.add('tarea-boton', 'botonDelete');

    apendizar(contenedorDelete, iconoDelete);
    apendizar(contenedorCheck, iconoCheck);
    apendizar(botonTrash, contenedorDelete);
    apendizar(botonCheck, contenedorCheck);

    apendizar(contenedorTituloyP, tituloCard);
    apendizar(contenedorTituloyP, descripcionCard);

    apendizar(tareaContenedorBotones, botonCheck);
    apendizar(tareaContenedorBotones, botonTrash);

    apendizar(elementoCard, contenedorTituloyP);
    apendizar(elementoCard, tareaContenedorBotones);

    return elementoCard;
}

function apendizar(padre, hijo) {
    return padre.appendChild(hijo);
}

function elementoCompletado() {
    let padreUl = this;
}

console.log(elementoCompletado());
