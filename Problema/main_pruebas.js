
/*
Este código
function decirHolaAFulanita(Nombre){
	console.log("Hola!");
}
var Nombre = "Beatriz"
*/

if () {

};

// CÓDDIGO PARA FUNCIÓN NÚMERO ALEATORIO EN RANGO
function enteroRandomEnRango(min, max) {
	var numero = Math.random() * (max - min) + min;
	var entero = Math.round(número); // Para que se vuelva número entero. Math.floor() redondea hacia abajo
	return entero;
}
var arregloNombres = ['Beatriz', 'Ruth', 'Evelyn', 'Analy', 'Karla Monica', 'Reyna']

while (arregloNombres.length > 0) {
	
//ver el tamaño del arreglo
var tamano = arregloNombres.length;

//Generamos el número al azar
var indice = enteroRandomEnRango(0, 45);
//Imprimimos el nombre y la imagen
console.log(arregloNombres[indice]);
console.log(arregloNombres[indice] + '.jpg');



var arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 90]

arreglo.splice(1, 4) // primer parámentro indica desde dónde se corta, segundo parámetro indica cuántos elementos se cortarán después de ese index
//splice(cortarDesde, cuantosElementos);

}

//document = es un selector
$(document).ready(function() {
	console.log('El documento ya está listo');
	//Cambiar un atributo
$('#imagenPersona').attr('src', 'fotos/Ana.JPG');

//Decirle que ejecute cuando haga click
$('#btnRevisar').click(function(){
	//hará ésto cuando reciba click

	//obtener el valor
	var nombre = $('#inputNombre').val();
	console.log(nombre);
	});

});



/* PSEUDOCÓDIGO
1. El programa está dividido en cabecera y en el juego.
La cabecera es fija y tiene un h1, dos párrafos y el dropdown "Elige tu sede" 
con las opciones Lima y Ciudad de México. 
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
