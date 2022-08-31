function saltarLinea() {

    document.write("<br>");	
    document.write("<br>");	
    document.write("<br>");	

}  

function imprimir(frase) {

    document.write(frase);
    saltarLinea();

}

var numeroPensado = Math.round(Math.random()*10);
var intentos = 3;
var contador = 1;



while (contador <= intentos) {

    var numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10"));

    if (numeroPensado === numeroLanzado){

        alert("Adivinaste");
       
        break;

    }

    else {

        alert("Erraste");
    
    }

    contador++;

}


if (numeroPensado === numeroLanzado){

    imprimir("usted acertó, el numero pensado era " + numeroPensado);

}

else {

    imprimir("usted erró, el numero pensado era " + numeroPensado);

}



imprimir("fin");