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

var intentos = 1;
var nombreCoder = "";
var puntos = 0;
var nombreCorrecto = 0;
var numeroAlAzar = 0;
var idCoder = "";

$( document ).ready(function() {
    console.log( "ready!" );
  /*Medirá la relación que hacen sus usuarixs entre nombre y fotografía.Puede usarse con fines didácticos (exámenes, lecciones, etc) o de sondeo */
  // 1. CONDICIÓN INICIAL. El juego debe cargar sólo cuando (evento) se elija como sede Ciudad de México
  $('#Sede').change(function(){
    var sede = $(this).val(); //Ésto toma el valor del elemento y lo asigna a var sede
    if (sede=="Mx") { //Validación del match de la sede con las fotos
      imagenAleatoria();// Esto llama a la función imagenAleatoria que se declara más abajo
      creaNombres();
      deplegarPuntos();
    }else{
      alert("Éste juego sólo funcionará para la sede Ciudad de México")  
    }
  });

}); // cierra (document).ready

//FUNCIÓN PARA CREAR CAJAS DE NOMBRES
function creaNombres() {
  for (var i = 0; i < nombres.length; i++) {
    var elementId = 'nombre_' + i;
    var parrafoNombre = '<p id="' + elementId + '" class="cajaCoder" ondragstart="dragStart(event)" ondrag="dragging(event)" draggable="true">'+nombres[i]+'</p>';
    $('#NamesArea').append(parrafoNombre);
  }
}
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
  var nombre = nombres[numeroAlAzar];
//se crea la var imagen, con datos para el atributo src
//'fotos/' da la dirección de la carpeta donde están todos los archivos de fotos 
//y donde imagenes[numeroAlAzar] da un index del arreglo imagenes, o sea, elige una foto 
  // y '.jpg' da la extensión del archivo
    $('#imagenPersona').attr("src", imagen); // ; ??
// Al elemento con el id imagenPersona le pone atributo src con valor de var imagen
    $('#imagenPersona').attr("alt", nombre)
// Al elemento con el id imagenPersona le pone atributo alt con valor de var nombre
    //Cambiar un atributo de forma dinámica
  }else{
    alert("Fin del juego");//No hay más fotos que mostrar
  }
};


// FUNCIONES DRAG!!!!!!!!
function dragStart(event) { // Evento detona cuando empieza a arrastrar
    event.dataTransfer.setData("Text", event.target.id);
};
function dragging(event) { //Quita el texto "Arrastra su nombre aquí" mientras dure el arrastre
  $( "#Instruccion" ).remove();
};
function allowDrop(event) {
    event.preventDefault();
};
function drop(event) {
    console.log('Drop');
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    console.log(data);
    var elemento = document.getElementById(data);
    event.target.appendChild(elemento);
    hacerMatch(elemento);// MANDA LLAMAR LA FUNCIÓN hacerMatch
};

//LA FUNCIÓN PARA COMPARAR LOS DATOS
//LA FUNCION hacerMatch, LLAMADA POR drop(event), SE DEFINE ASÍ:
function hacerMatch(elemento){
    
    var nombre = elemento.innerHTML;
    // Declara var nombre, que toma el valor del elemento con el id #inputNombre
    var nombreCorrecto = nombres[numeroAlAzar];
    console.log('Validar :' + nombre + ' con el correcto: ' + nombreCorrecto);
    //SI ACIERTA, ENTONCES ELIMINA EL NOMBRE YA ACERTADO
          if (nombre===nombreCorrecto) {// SI ACIERTA, EL NOMBRE Y LA FOTO SE QUITAN DE SUS RESPECTIVOS ARREGLOS
            alert("¡Acertaste!")
            intentos = 1;
            puntos = puntos + 5; //suma 5 al contador de puntos
            nombres.splice(numeroAlAzar, 1);
            imagenes.splice(numeroAlAzar, 1); 
            //algo.splice(cortarDesdeIndex, cuantosElementos);
            $(elemento).remove(); // ¿¿¿¿lo quita de la caja donde lo dropeó ????
            imagenAleatoria(); //PARA REPETIR EL PROCESO
          }else{ 
              $(elemento).remove(); // ¿¿¿¿lo quita de la caja donde lo dropeó ????
              $('#NamesArea').append(elemento);// vuelve a poner el nombre con los demás
              alert("es tu intento numero: " + intentos); 
              puntos--;
              intentos++;
              contarErrores(intentos);
          }
}; //CIERRA FUNCIÓN hacerMatch  

function contarErrores(intentos) {
      var errores = intentos;
        if (errores <= 5) {
          alert("Tenes otra oportunidad")
        }
        else {
          alert("Has agotado tus intentos")
          imagenAleatoria(); //PARA REPETIR EL PROCESO
        } 
}; //CIERRA FUNCIÓN contarErrores();              

  
// NO ESTÁ RECONOCIENDO LA FUNCIÓN innerHTML(puntos)
function deplegarPuntos(){ // Para cambiar el texto a #spanScore
  $('#spanScore').innerHTML(puntos); //NO ESTÁ ESCRIBIENDO EN EL HTML
};

  

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

