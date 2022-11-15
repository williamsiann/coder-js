class Libros {
    constructor(autor, titulo, precio) {
        this.autor = autor.toUpperCase()
        this.titulo = titulo.toUpperCase()
        this.precio = precio
    }
    mostrarLibro () {
        console.log (`${this.titulo.toUpperCase()}, de ${this.autor.toUpperCase()}. Precio: $${this.precio}`)
    }
}
const libro1 = new Libros(`Dario Sztajnszrajber`, `Filosofia a martillazos`, 4999)
const libro2 = new Libros(`Stephen King`, `It`, 8999)
const libro3 = new Libros(`Dario Sztajnszrajber`, `Filosofia en 11 frases`, 3649)
const libro4 = new Libros(`Robin S. Sharma`, `El club de las 5am`, 4199)
const libro5 = new Libros(`Robin S. Sharma`, `El monje que vendio su ferrari`, 2449)

const biblioteca = [libro1, libro2, libro3, libro4, libro5]
let precioTotal = 0

function presentacion() {
    let nombre = prompt(`Hola Como esta? Le vamos a pedir que ingrese su nombre porfavor: `)
    while (nombre == "") {
        nombre = prompt(`Porfavor le reiteramos que ingrese su nombre:`)
    }
    alert(`Hola ${nombre}. Espero que puedas disfrutar este desafio :)`)
}

function opcionSwitch() {
    let elegirOpcion = parseInt(prompt(`Opciones a elegir: 
    1. Ver catálogo de libros      
    2. Agregar un nuevo libro al catálog
    3. Buscar libro por titulo       
    4. Buscar libro por precio
    5. Buscar libro por autor       
    6. Ver titulos incluidos en el catálogo
    7. Ordenar catalogo de menor a mayor precio
    8. Eliminar un libro del catalogo     
    9. Agregar libros al carrito
    10. Salir del programa`))
    switch (elegirOpcion) {
        case 1:
            verCatalogoLibros()
            break;
        case 2:
            agregarNuevoLibro()
            break;
        case 3:
            buscarTitulo()
            break;
        case 4:
            buscarPrecio()
            break;
        case 5:
            buscarAutor()
            break;
        case 6: 
            verTitulos()
            break;
        case 7:
            ordenarMenorMayor()
            break;
        case 8:
            eliminarLibro()
            break;
        case 10: 
            alert(`PROCEDIENDO A SALIR DEL PROGRAMA`)
            break;
        default:
            alert(`OPCION INEXISTENTE`)
            opcionSwitch()
        break;
    }
}

function verCatalogoLibros() {
    console.log(`Catalogo de libros:`)
    for (const element of biblioteca) {
        element.mostrarLibro()
    }
    console.log(` \n`)
    alert(`Se le desplego las lsita en consola`)
    alert(`Redirecionando, enter para confirmar.`)
    opcionSwitch()
}

function agregarNuevoLibro() {
    let nuevoTitulo = prompt(`Por favor, ingrese el título de su nuevo libro: `)
    while (nuevoTitulo == "") {
        nuevoTitulo = prompt(`Debe ingresar un titulo: `) 
    }
    let tituloRep = biblioteca.some( element => element.titulo == nuevoTitulo.toUpperCase())
    while (tituloRep == true) {
        nuevoTitulo = prompt(`Ese titulo ya existe. Por favor, ingrese otro titulo:`)
        while (nuevoTitulo == "") {
            nuevoTitulo = prompt(`Debe ingresar un titulo: `) 
        }
        tituloRep = biblioteca.some( element => element.titulo == nuevoTitulo.toUpperCase())
    }
    let nuevoAutor = prompt(`Por favor, ingrese el autor de su nuevo libro: `)
    while (nuevoAutor == "") {
        nuevoAutor = prompt(`Debe ingresar un autor: `) 
    }
    let nuevoPrecio = parseInt(prompt(`Por favor, ingrese el precio de su nuevo libro: `))
    while (nuevoPrecio == "" || nuevoPrecio == 0) {
        nuevoPrecio = prompt(`Debe ingresar un precio: `) 
    }
    const libroNuevo = new Libros(nuevoAutor, nuevoTitulo, nuevoPrecio)
    biblioteca.push(libroNuevo)
    alert(`Mostrando nuevo catalogo en consola`)
    console.log(`Nuevo catálogo de libros: `)
    for (const elemento of biblioteca) {
        elemento.mostrarLibro()
    }
    console.log(" \n")
    alert(`Redirecionando, enter para confirmar`)
    opcionSwitch()
}

function buscarTitulo() {
    let nombreTitulo = prompt(`Ingrese el titulo del libro que desea buscar: `)
    if (nombreTitulo == null) {
        opcionSwitch()
    }
    while (nombreTitulo == "") {
        nombreTitulo = prompt(`Debe ingresar un nombre para la busqueda: `) 
    }
    let filtrarTitulo = biblioteca.filter((libro) => libro.titulo.toLowerCase().includes(nombreTitulo.toLowerCase()))
    while (filtrarTitulo.length == 0) {
        nombreTitulo = prompt(`El titulo "${nombreTitulo}" no se encuentra en el catálogo. Ingrese otro titulo: `)
        if (nombreTitulo == null) {
            opcionSwitch()
        }
        while (nombreTitulo == "") {
            nombreTitulo = prompt(`Debe ingresar un nombre para la busqueda: `) 
        }
        filtrarTitulo = biblioteca.filter((libro) => libro.titulo.includes(nombreTitulo))
    }
    if (filtrarTitulo.length == 0) {
        alert(`Titulo no encontrado`)
        alert(`Redirecionando, enter para confirmar`)
        opcionSwitch()
    } else {
        console.log(`Se encontro este libro con ese titulo: `)
        filtrarTitulo.forEach( element => element.mostrarLibro())
        console.log(` \n`)
        alert(`Redirecionando, enter para confirmar`)
        opcionSwitch()
    }
}

function buscarPrecio() {
    let precioLibro = parseFloat(prompt(`Ingrese el precio del libro que desea buscar: `))
    if (precioLibro == null) {
        opcionSwitch()
    }
    while (precioLibro == "") {
        precioLibro = prompt(`Debe ingresar un nombre para la busqueda: `) 
    }
    let filtrarPrecio = biblioteca.filter((libro) => libro.precio == (precioLibro))
    while (filtrarPrecio.length == 0) {
        precioLibro = parseFloat(prompt(`El precio indicado no coincide con ningun libro en el catálogo. Ingrese otro precio: `))
        if (precioLibro == null) {
            opcionSwitch()
        }
        while (precioLibro == "") {
            precioLibro = prompt(`Debe ingresar un nombre para la busqueda: `) 
        }
        filtrarPrecio = biblioteca.filter((libro) => libro.precio == (parseFloat(precioLibro)))
    }
    if (filtrarPrecio.length == 0) {
        alert(`Intente con otro titulo`)
        alert(`Redirecionando, enter para confirmar`)
        opcionSwitch()
    } else {
        console.log(`Se ha encontrado el siguiente libro con ese precio: `)
        filtrarPrecio.forEach( element => element.mostrarLibro())
        console.log(` \n`)
        alert(`Redirecionando, enter para confirmar`)
        opcionSwitch()
    }
}

function buscarAutor() {
    let nombreAutor = prompt(`Ingrese el nombre del autor del libro que desea buscar: `)
    if (nombreAutor == null) {
        opcionSwitch()
    }
    while (nombreAutor == "") {
        nombreTitulo = prompt(`Debe ingresar un nombre para la busqueda: `) 
    }
    let filtrarNombre = biblioteca.filter((libro) => libro.autor.toLowerCase().includes(nombreAutor.toLowerCase()))
    while (filtrarNombre.length == 0) {
        nombreAutor = prompt(`El autor "${nombreAutor}" no se encuentra en el catálogo. Ingrese otro autor: `)
        if (nombreAutor == null) {
            opcionSwitch()
        }
        while (nombreTitulo == "") {
            nombreAutor = prompt(`Debe ingresar un nombre para la busqueda: `) 
        }
        filtrarNombre = biblioteca.filter((libro) => libro.autor.toUpperCase().includes(nombreAutor.toUpperCase()))
        }
    if (filtrarNombre.length == 0) {
        alert(`Redirecionando, enter para confirmar`)
        opcionSwitch()
    } 
    else {
        console.log(`Se ha encontrado el siguiente libro con ese autor: `)
        filtrarNombre.forEach( element => element.mostrarLibro())
    }
    console.log(` \n`)
    alert(`Redirecionando, enter para confirmar`)
    opcionSwitch()
}

function verTitulos() {
    console.log(`Titulos incluidos en el catálogo:`)
    biblioteca.forEach( book => {console.log(book.titulo.toUpperCase())})
    console.log(` \n`)
    alert(`Redirecionando, enter para confirmar`)
    opcionSwitch()
}

function ordenarMenorMayor() {
    console.log(`Catalogo ordenado de menor a mayor precio:`)
    biblioteca.sort( (a, b) => a.precio - b.precio )
    for (const books of biblioteca) {
        books.mostrarLibro()
    }
    console.log(`\n`)
    alert(`Redirecionando, enter para confirmar`)
    opcionSwitch()
}

function eliminarLibro() {
    let band = false
    console.log(`Lista de libros:`)
    biblioteca.forEach (el=>el.mostrarLibro())
    console.log(`\n`)
    let deleteBook = prompt(`Ingrese el titulo del libro que desea eliminar:`)
    while (deleteBook == "") {
        deleteBook = prompt(`Debe ingresar un titulo: `) 
    }
    for (const el of biblioteca) {
        if (el.titulo.toUpperCase() == deleteBook.toUpperCase()) {
            let preguntaSegura = prompt(`Esta seguro/a que desea eliminar este libro? (Responder si o no)`)
            while (preguntaSegura != 'si' && preguntaSegura != 'no') {
                preguntaSegura = prompt(`Debe responder si o no. Ingrese nuevamente una respuesta:`)
            }
            if (preguntaSegura.toLowerCase() == "si") {
                band = true
                biblioteca.splice(biblioteca.indexOf(el), 1)
            }
            else if (preguntaSegura.toLowerCase() == "no") {
                eliminarLibro()
            }
        }
    }
    while (band == false) {
        deleteBook = prompt(`El titulo "${deleteBook}" no se encuentra en el catalogo. Ingrese un nuevo titulo:`)
        for (const el of biblioteca) {
            if (el.titulo.toUpperCase() == deleteBook.toUpperCase()) {
                band = true
                biblioteca.splice(biblioteca.indexOf(el), 1)
            }
        }
    }
    if (band == true) {
        console.log(`Nuevo catalogo de libros:`)
        biblioteca.forEach( element => element.mostrarLibro())
        console.log(` \n`)
        alert(`Redirecionando, enter para confirmar`)
        opcionSwitch()
    }
}
presentacion()
opcionSwitch()