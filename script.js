//Se crea funcion para solicitar el ingreso de 5 Palabras y llenar el array:
var cont=1;
var arrayPalabras = [];
var palabra;
function obtener(){
    while (cont <=5){
        let palabras = prompt(`Ingserar 5 Palabras: [${cont} -Palabra] `)

        arrayPalabras.push(palabras)
         cont++  
     };
 // Se elije una palabra alatoria del array arrayPalabras
palabra = arrayPalabras[Math.floor((Math.random() * 5) + 0)];


} 

   
var { hombre, l } = newFunction();
function newFunction() {
    var hombre, l;
    return { hombre, l };
}
function iniciar() {
    var canvas = document.getElementById("c");
    canvas.width = 410;
    canvas.height = 455;

    var contexto = canvas.getContext("2d");
    hombre = new Ahorcado(contexto);

    l = document.getElementById("letra");
    var b = document.getElementById("boton");

    palabra = palabra.toUpperCase(); // Convierte a mayúscula un texto
    espacio = new Array(palabra.length); // Declara un array con n espacios según la longitud ee la palabra.
    b.addEventListener("click", agregarLetra); // Agregamos una función que se dispare al dar clic al botón.

    mostrarPista(espacio); // Crea la palabra con la estructura _ _ _ 
}
function agregarLetra() {
    var letra = l.value;
    l.value = ""; // Limpia la caja de texto.
    mostrarPalabra(palabra, hombre, letra);
}
function mostrarPalabra(palabra, ahorcado, letra){
    var encontrado = false;
    var p; // Contador (0..n) de las letras de la palabra.
    letra = letra.toUpperCase();
    for(p in palabra) {
        if(letra == palabra[p]) {
            espacio[p] = letra; // El vector vacio se llenará con la letra que fue digitada si la encuentra.
            encontrado = true; 

        } 
    }

    mostrarPista(espacio); // Grafica la palabra, con o sin letras encontradas.
       
    // Si no la encuentra
    if(!encontrado)
        ahorcado.trazar(); // Grafica el ahorcado si no lo encuentra.
    if(!ahorcado.vivo)
        mostrarPista(palabra); // Mostrar la palabra entera al morir
     
     }   


function mostrarPista(espacio) {
    var pista = document.getElementById("pista");
    var texto = "";
    var i;
    var largo = espacio.length;

    for(i = 0; i<largo; i++) {
        if(espacio[i] != undefined)
            texto = texto + espacio[i] + " ";
            
        else
            texto += "__ ";
    }
    pista.innerText = texto;
    
}

//Validacion Caracteres
function validarLetra(palabra) {
    const pattern = new RegExp('^[A-Z\u00d1]+$', 'i');
    if(!pattern.test(palabra) || palabra.length > 1) {
        swal("¡Solo letras!", `Ha ingresado "${letraIngresada.toUpperCase()}" y solo se permiten letras.`, "warning");
        return false;
    } else {
        return true;
    }
}

function addWords(addWords) {
    const pattern = new RegExp('^[A-Z\u00d1]+$', 'i');
    if(!pattern.test(addWords)) {
        swal("¡Solo letras!", `Ha ingresado "${addWords.toUpperCase()}" y solo se permiten letras.`, "warning");
        return false;
    } else {
        return true;
    }
}


   
// Declaración de la clase Ahorcado
    class Ahorcado {
        constructor(ctx) {
            // this se utiliza para llamar las variables locales de la clase, accesibles en toda la clase
            // this.contexto es el context de dibujo del canvas.
            this.contexto = ctx;
            this.maximo = 5;
            this.intentos = 0;
            this.vivo = true;
            this.dibujar();
        }

        dibujar() {
            var dibujo = this.contexto;
            // Dibujando el poste.
            dibujo.beginPath(); // Inicia el trazo (Ejm: Colocar el mouse en el punto).
            dibujo.moveTo(150, 100); // Posición inicial.
            dibujo.lineTo(150, 50); // De la posición inicial es irse hasta...
            dibujo.lineTo(400, 50);
            dibujo.lineTo(400, 350);
            dibujo.lineWidth = 15; // Definir una línea más gruesa.
            dibujo.strokeStyle = "#000"; // Define la linea de color negro.
            dibujo.stroke(); // Función que dibuja todo el poste.
            dibujo.closePath(); // Finaliza el trazo (Ejm: Colocar el mouse en el punto).


            // Intentos = 1 (Rostro)
            if (this.intentos > 0) {
                dibujo.beginPath();
                dibujo.arc(150, 140, 40, 0, Math.PI * 2, false); // Dibujar un círculo. arc(x, y, radio, radianes_iniciales, radianes_finales, manecillas_reloj)
                dibujo.strokeStyle = "#F00";
                dibujo.lineWidth = 5;
                dibujo.stroke();
                dibujo.closePath();

                // Intentos = 2 (Torso)
                if (this.intentos > 1) {
                    dibujo.beginPath();
                    dibujo.moveTo(150, 180);
                    dibujo.lineTo(150, 250);
                    dibujo.strokeStyle = "#F00";
                    dibujo.lineWidth = 5;
                    dibujo.stroke();
                    dibujo.closePath();

                    // Intentos = 3 (Brazos)
                    if (this.intentos > 2) {
                        dibujo.beginPath();
                        dibujo.moveTo(120, 220);
                        dibujo.lineTo(150, 180);
                        dibujo.lineTo(180, 220);
                        dibujo.strokeStyle = "#F00";
                        dibujo.lineWidth = 5;
                        dibujo.stroke();
                        dibujo.closePath();

                        // Intentos = 4 (Piernas)
                        if (this.intentos > 3) {
                            dibujo.beginPath();
                            dibujo.moveTo(120, 290);
                            dibujo.lineTo(150, 250);
                            dibujo.lineTo(180, 290);
                            dibujo.strokeStyle = "#F00";
                            dibujo.lineWidth = 5;
                            dibujo.stroke();
                            dibujo.closePath();

                            // Intentos = 5 (Ojos Muertos)
                            if (this.intentos > 4) {
                                dibujo.beginPath();
                                // Ojo Izquierdo
                                dibujo.moveTo(125, 120);
                                dibujo.lineTo(145, 145);
                                dibujo.moveTo(145, 120);
                                dibujo.lineTo(125, 145);
                                // Ojo Derecho
                                dibujo.moveTo(155, 120);
                                dibujo.lineTo(175, 145);
                                dibujo.moveTo(175, 120);
                                dibujo.lineTo(155, 145);
                                //boca
                                dibujo.arc(150,160,10,0,(Math.PI/180)*360,true);
                                
                                dibujo.strokeStyle = "#0000FF"; // Color Azul.
                                dibujo.lineWidth = 5;
                                dibujo.stroke();
                                dibujo.closePath();
                            }
                        }
                    }
                }
            }
        }
        trazar() {
            this.intentos++;
            if (this.intentos >= this.maximo) {
                this.vivo = false;
                document.getElementById("gana").innerHTML = "UppS!!! estás Ahorcado...  <br> Vuelve a intentar...😰 ";
            }if (palabra.length==espacio.length ){
                document.getElementById("gana").innerHTML = "Felicidades Ganastes !!! 😜";
               
            }  
            
            this.dibujar();
            
        }
    }



