/*Esta aplicación web medirá la relación que hacen sus usuarixs entre nombre y fotografía.
Puede usarse con fines didácticos (exámenes, lecciones, etc) o de sondeo */

// 1. Una condición para llamar a la función para iniciar el juego
//El juego debe cargar sólo cuando (evento) se elija como sede Ciudad de México
$('#Sede').change(function(){
  var sede = $(this).val(); //Ésto toma el valor del elemento y lo asigna a var sede
  if (sede=="Mx") { //Validación del match de la sede con las fotos
    imagenAleatoria();// Esto llama a la función imagenAleatoria que se declara más abajo
    crearCajasConNombres(); 
  }else{
    alert("Éste juego sólo funcionará para la sede Ciudad de México")  
  }
});

//Éstos son los arreglos que contienen las imágenes y los nombres de las coders. C/u tiene 36 items
var imagenes = [
 "Ana.jpg", "Analy.jpg", 
 "Areli.jpg", "Beatriz.jpg", 
 "Cecilia.jpg", "Claudia.jpg", 
 "Daniela.jpg", "Elisa.jpg", 
 "Evelyn.jpg", "Gabriela.jpg", 
 "Grissel.jpg", "Guadalupe.jpg", 
 "Johana.jpg", "Joyce.jpg", 
 "Ofelia.jpg", "Patricia.jpg", 
 "Sharon.jpg", "Heredia.jpg", 
 "Karen.jpg", "Monica.jpg",  
 "Karla.jpg", "Leslie.jpg", 
 "Mishel.jpg", "Milca.jpg", 
 "Tayde.jpg", "Naibit.jpg", 
 "Nayeli.jpg", "Nelly.jpg", 
 "Reyna.jpg", "Adriana.jpg", 
 "Ruth-Lopez.jpg","Ruth-Vega.jpg",
 "Sandra-Bollo.jpg","Sandra-Diaz.jpg", 
 "Vianey.jpg", "Zazil.jpg"];

 var nombres = [ 
 "Anita", "Analy", 
 "Areli", "Bet",
 "Cecy", "Claudia", 
 "Daniela", "Elisa", 
 "Eve", "Gaby", 
 "Griss", "Lupita", 
 "Joy", "Joyce", 
 "Ofe", "Paty", 
 "Sharon", "Heredia", 
 "Karen", "Moni", 
 "Karla", "Leslie",
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nelly", 
 "Reyna", "Adri", 
 "Dj Ruth", "Ruth", 
 "Sandia", "San", 
 "Vian", "Zaz"];
var nombreCoder = "",
var puntos = 0,
var intentos = 0,
var nombreCorrecto = 0,
var numeroAlAzar = 0,
var idCoder = "";
function deplegarPuntos(){ // Le va a cambiar el texto a #spanScore
  $('#spanScore').text(puntos);
};

//FUNCIÓN PARA CARGAR FOTO AL AZAR //enteroRandomEnRango se necesita para la función imagenAleatoria
function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.round(numero);//Para redondear a entero. Math.floor() redondea hacia abajo
  return entero; //arroja el valor de la variable
};
function imagenAleatoria() {
  var tamanoArregloNombres = nombres.length;//guarda el número de items del arreglo nombres
//VALIDACIÓN DE QUE AÚN QUEDAN ELEMENTOS EN EL ARREGLO 
  if (tamanoArregloNombres>0) {
    numeroAlAzar = enteroRandomEnRango(0, tamanoArregloNombres);
//numeroAlAzar se actualiza llamando a función enteroRandomEnRango con los parámetros (0, tamanoArregloNombres)
//Ésto hace que numeroAlAzar sea un número entero al azar entre 0 y el número de elementos de tamanoArregloNombres
//FUNCIÓN PARA TOMAR UNA IMAGEN CON INDEX RANDOM
  var imagen = 'fotos/' + imagenes[numeroAlAzar];
//se crea la var imagen, con datos para el atributo src
//'fotos/' da la dirección de la carpeta donde están todos los archivos de fotos 
//y donde imagenes[numeroAlAzar] da un index del arreglo imagenes, o sea, elige una foto 
  // y '.jpg' da la extensión del archivo
    $('#imagenPersona').attr("src", imagen);
// Al elemento con el id imagenPersona le pone atributo src
    $('#imagenPersona').attr("alt", nombre)
// Al elemento con el id imagenPersona le pone atributo alt
    //Cambiar un atributo de forma dinámica
  }else{
    alert("Fin del juego");//No hay más fotos que mostrar
  }
};


//#red FUNCIÓN PARA CREAR NOMBRES ARRASTRABLES
//tomar array y *for each* 
//escribir en <p> el valor de texto de su index respectivo del arreglo nombres
//ponerle una clase -la misma- a cada <p> (para estilizar y hacerlo draggable=true) 
//ponerle un value diferente a cada <p> (para manipular eventos)
function crearCajasConNombres() {
  nombres.forEach(function(element){
    nombreCoder = element;
    idCoder = nombreCoder;
    console.log=nombreCoder;
    //var htmlItem = $('<p id="'+idCoder + '"></p>');
    //$('div').append(htmlItem);    
  });

 // nombre.createElement$("div")// crear div dar atributo #nombre
 // INICIAR CON btnClick-->EVENTO

  /* TIENE QUE CREARSE ALGO ASÍ
  <p ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true"
  id="dragtarget">Nombre</p>
  <p class="demo"></p>
  */
};

// FUNCIONES DRAG!!!!!!!!
function dragStart(event) { // Evento que se detona cuando se arrastra
    event.dataTransfer.setData("Text", event.target.id);
}
function dragging(event) {
    document.getElementById("demo").innerHTML = "The p element is being dragged";
}
function allowDrop(event) {
    event.preventDefault();
}
function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
    hacerMatch();// MANDA LLAMAR LA FUNCIÓN hacerMatch
}

//LA FUNCION hacerMatch, LLAMADA POR drop(event), SE DEFINE ASÍ:
function hacerMatch(){
  //A CONTINUACIÓN, EL EVENTO QUE DETONARÁ LA FUNCIÓN PARA COMPARAR LOS DATOS
    var nombre = $('#inputNombre').val(); 
    // Declara var nombre, que toma el valor del elemento con el id #inputNombre
    var nombreCorrecto = nombres[numeroAlAzar];// #red CUIDADO CON EL SCOPE!!!!!!!!!!
    //SI ACIERTA, ENTONCES ELIMINA EL NOMBRE YA ACERTADO
    if (nombre===nombreAAdivinar) {// SI ACIERTA, EL NOMBRE Y LA FOTO SE QUITAN DE SUS RESPECTIVOS ARREGLOS
      puntos = puntos + 5; //suma 5 al contador de puntos
      alert("¡Acertaste!")
      nombres.splice(numeroAlAzar, 1);
      imagenes.splice(numeroAlAzar, 1); 
// primer parámentro indica desde dónde se corta, segundo parámetro indica cuántos elementos se cortarán después de ese index
//splice(cortarDesdeIndex, cuantosElementos);
       imagenAleatoria(); //SE LLAMA DE NUEVO A LA FUNCIÓN, PARA REPETIR EL PROCESO
     }else{ //#red SE DEBEN MODIFICAR UN CONTADOR DE INTENTOS Y UNO DE PUNTOS
      puntos = puntos - 1; //puntos--
      alert("Fallaste!"); // 
      intentos = intentos + 1; //intentos++
     }
    
 // });
}; //CIERRA FUNCIÓN hacerMatch
  

$(document).ready(function() {
  imagenAleatoria();
});   //CIERRA FUNCIÓN DOCUMENT READY



//Decirle que ejecute cuando haga click
//$('#btnRevisar').click(function(){
  //hará ésto cuando reciba click
  //}

/* ESTE CÓDIGO NO SIRVE, PERO NO LO BORRO PORQUE #YOLO #YODELFUTUROTELOESTOYGUARDANDO
//Generamos el número al azar
//var indice = enteroRandomEnRango(0, 45);
//Imprimimos el nombre y la imagen
//console.log(arregloNombres[indice]);
//console.log(arregloNombres[indice] + '.jpg');
//ver el tamaño del arreglo imagenes: var tamanoArregloImagenes = imagenes.length;

*/

/* SPECS
Apariencia: El programa está dividido en cabecera y en el juego.
1.La cabecera es fija. Hay un select "Elige tu sede" con las opciones Lima, Santiago y Ciudad de México. 
El juego está dividido en 5 columnas para la foto y 7 columnas para el textbox.
2. Para empezar a jugar debes elegir una sede en específico para que cargue tus compañeras de clase.
3. Una vez una sede es seleccionada se debe mostrar al azar una imagen de tu compañera
4. El jugador debe ingresar el texto en el input text y debe darle click al botón comprobar que le va 
a permitir comprobar si es que el nombre es correcto.
5. El jugador tiene 5 intentos como máximo antes que el sistema cambie de foto y le disminuye 1 punto
6. En caso el jugador acierte correctamente debe sumar 5 puntos y debe mostrarse 1 foto más
7. En caso no existan más fotos que mostrar de esa sede entonces el juego debe terminar y debe mostrar 
el puntaje obtenido.
*/

