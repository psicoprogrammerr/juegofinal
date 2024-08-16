//definimos las varriables del numero secreto que se generara por la operación math.randon y la que servira de contador (intentos).
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroGenerado = [];
let numeroMaximo = 10;
// por medio de esta funcion estare ingresando al documento html y seleccionando una ubicacion en especifico por medio del queryselector (el return lo puse por constumbre)

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/* en esta funcion inicialmente ingresamos al html (especificamente al imput) y por medio del codigo document.getElementById puedo no solo ver el contenido del campo "valorUsuario" que creé
elemento "imput" y luego cree un id llamado de esa forma. le agregramos a la linea de codigo document.getElementById("valorUsuario").value);(el "value")al final para 
poder modificar el contenido de ese imput.
Aparte de lo anterio en esta función realice las operaciones para poder hacer la interaccion del juego del numero secreto, compare si el numero secreto era igual al numero de usuario que
obtuve en la primera linea de codigo(la primera linea funciona como si fuera un "promt"), seguido a esto la comparacion si era acertada se muestra en la asignacion "p" a la cual accederemos
por medio de la funcion "asignarTextoElemento", cabe anotar que en esa linea de codigo se realiza un ciclo wile en su forma abreviada (? :) representada con esos dos simbolos. 
finalmente se hacen las otras 2 comparaciones de si es menor o si es mayor y se finaliza con un contador (intentos++) y se ejecuta una funcion que reinicia el juego.
Nota: el return es obligatorio ya que esta  funcion va a retornar unos elementos. 
Esta función verificarIntento como va a estar interactuando de manera directa con el button de html debe crearse tambien en el archivo de html en el button que va a tener los datos directos.
en la cuarta linea de codigo de esta funcion se establece que si se acierta el numero se debe habilitar el button2 de "nuevo juego" ya que en 
el html esta en modo "disble", para habilitar este button lo hacemos a travez del getElementById y entramos al elemento "reiniciar" (que creamos por medio
del html en el button2 asi: onclick = "reiniciarJuego();") y agregramos la funcion  ".removeAttribute" y le indicamos la casilla de "disable" que es la que mantiene el button desconectado.
*/
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento("p",`Acertaste!! en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
      } else{
            if(numeroSecreto > numeroDeUsuario){
                asignarTextoElemento("p","el numero es mayor");
           } else {
                asignarTextoElemento("p","el numero secreto es menor");
            }
        intentos ++;
        limpiarCaja();
    }

    return;

}

//en esta funcion se utiliza el queryselector junto con el # para acceder a una ubicación id de manera directa (recuerda que solo por medio de getelementbyid puedes acceder sin el #)
//se accede al elemento valousuario ubicado en el elemento "imput" del archivo html se pone el (value = "" ) para dejar esa caja donde se almacena el imput sin valor. 
//y que cada vez que se ponga un nuemero se borre automaticamente.
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

//por medio de esta funcion generamos el numeroSecreto y lo guardamos en la variable llamada "numeroSecreto" 
//el numero que se genera es aleatorio gracias a la funcion math.randon y luego se escoje solo el entero gracias al math.floor
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeroGenerado);
    if (listaNumeroGenerado.length == numeroMaximo){
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles")
    } 
    else {
        if (listaNumeroGenerado.includes(numeroGenerado)){
    //este pedazo de codigo es para decirle al if que si la lista incluye el numero generado, entonces vuelva a ejecutar el aleatorio        
    return generarNumeroSecreto;

    } else{
        listaNumeroGenerado.push(numeroGenerado)

    return numeroGenerado;
    }

    }
        
    
    
  
}
/*
en esta funcion se agrupan las condiciones iniciales que debe tener el juego para funcionar, por ejemplo se cuenta con la lamada de la funcion asignarTextoelemento y en ella se modifican 
los valores que se quieren editar de las ubicaciones "h1" y "p", ademas se le asigna el valor de la función "generarNumeroSecreto" a la variable "numeroSecreto" y luego se pone el contador
esta funcion servira para que cada que se reinicie el juego vuelva a establecer los valores iniciales.
*/

function condicionesIniciales(){
    asignarTextoElemento("h1", "juego del numero secreto!");
    asignarTextoElemento("p", `indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto ()
    intentos = 1;
}

/*
en esta función se reiniciara todo el juego y se volvera a desabilitar el button 2 por medio de la funcion "document.querySelector("#reiniciar").setAttribute("disabled","true");"
que lo que hace es acceder al button2 en el html y el "setAtribute" agregandole al final el "true" devuelve los valores preestablecidos. 
en general en esta funcion se declaran todas las demas funciones que realizamos en el juego.
*/
function reiniciarJuego (){
    //limpiar caja
    limpiarCaja();
    //indicar mensajes de intervalo de numeros
    condicionesIniciales()
    //generar el numero aleatorio 
    condicionesIniciales()
    //inicializar el numero de intentos 
    condicionesIniciales()
    //desabilitar el boton de nuevo juego 
    document.querySelector("#reiniciar").setAttribute("disabled","true");

    
}

//finalmente en la ultima parte del codigo se llama la funcion de las condiciones iniciales para que cuando nuestro juego inicie de nuevo se haga con parametros nuevos.
condicionesIniciales();
