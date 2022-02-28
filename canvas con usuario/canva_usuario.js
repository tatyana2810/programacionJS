var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var esquina = prompt("elige tu opcion\n1 Circulo\n2 Circulo y estrella\n3 Estrella\n4 Mariposa");

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var lineas = parseInt (texto.value);
var l = 0;
var xi ,yi, xf, yf;
var colorcito = "#0E6251";


dibujarLinea(colorcito, 1, 1, 1, 599);
dibujarLinea(colorcito, 1, 599, 599, 599);
dibujarLinea(colorcito, 1, 1, 599, 1);
dibujarLinea(colorcito, 599, 1, 599, 599);
dibujarLinea(colorcito, 300, 0, 300, 600);
dibujarLinea(colorcito, 0, 300, 600, 300);

console.log(esquina);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
var lineas = parseInt(texto.value);
var l = 0;
var yi, xf;
var colorcito = "#0E6251";
var espacio = ( ancho / 2) / lineas;


if(esquina == 1)        
{
    for(l=0; l < lineas; l++)
    {
        xi = (ancho / 2) + (l * espacio);
        yi = 0;
        xf = ancho;
        yf = espacio * (l + 1);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = (ancho / 2) - (l * espacio);
        yi = 0;
        xf = 0;
        yf = espacio * (l + 1);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }
    for(l=0; l < lineas; l++)
    {
        xi = ancho;
        yi = (ancho / 2) + (espacio * l);
        xf = 590 - (l * espacio);
        yf = ancho;
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = 0;
        yi = (ancho / 2) + (espacio * l);
        xf = 10 * (l + espacio);
        yf = ancho;
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

}
else if(esquina == 2)
{
    for(l=0; l < lineas; l++)
    {
        xi = (ancho / 2) + (l * espacio);
        yi = 0;
        xf = ancho;
        yf = 10 * (l + espacio);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = (ancho / 2) - (l * espacio);
        yi = 0;
        xf = 0;
        yf = 10 * (l + espacio);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }
    for(l=0; l < lineas; l++)
    {
        xi = ancho;
        yi = (ancho / 2) + (espacio * l);
        xf = 590 - (l * espacio);
        yf = ancho;
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = 0;
        yi = (ancho / 2) + (espacio * l);
        xf = 10 * (l + espacio);
        yf = ancho;
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = (ancho / 2);
        yi = 0 + (espacio * l);
        xf = 310 + (l * espacio);
        yf = (ancho / 2);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = (ancho / 2);
        yi = 0 + (espacio * l);
        xf = 290 - (l * espacio);
        yf = (espacio / 2);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = ancho - (l * espacio);
        yi = (ancho / 2);
        xf = (ancho / 2);
        yf = 310 + (espacio * l);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = 0 + (espacio * l);
        yi = (ancho / 2);
        xf = (ancho / 2);
        yf = 310 + (l * espacio);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }
}
else if(esquina == 3)
{
    for(l=0; l < lineas; l++)
    {
        xi = (ancho / 2);
        yi = 0 + (espacio * l);
        xf = 310 + (l * espacio);
        yf = (ancho / 2);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = (ancho / 2);
        yi = 0 + (espacio * l);
        xf = 290 - (l * espacio);
        yf = (ancho / 2);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = ancho - (l * espacio);
        yi = (ancho / 2);
        xf = (ancho / 2);
        yf = 310 + (espacio * l);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = 0 + (espacio * l);
        yi = (ancho / 2);
        xf = (ancho / 2);
        yf = 310 + (l * espacio);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }
}
else if(esquina == 4)
{
    for(l=0; l < lineas; l++)
    {
        xi = ancho - (espacio * l);
        yi = 0;
        xf = (ancho / 2);
        yf = 10 + (l * espacio);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    } 

    for(l=0; l < lineas; l++)
    {
        xi = 0 + (espacio * l);
        yi = 0;
        xf = (ancho / 2);
        yf = 10 + (l * espacio);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = (ancho / 2);
        yi = (ancho / 2) + (espacio * l);
        xf = 310 + (espacio * l);
        yf = ancho;
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = (ancho / 2);
        yi = (ancho / 2) + (espacio * l);
        xf = 290 - (espacio * l);
        yf = ancho;
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = ancho;
        yi = 0 + (espacio * l);
        xf = 590 - (espacio * l);
        yf = (ancho / 2);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = 0;
        yi = 0 + (espacio * l);
        xf = 10 + (espacio * l);
        yf = (ancho / 2);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = (ancho / 2) + (espacio * l);
        yi = (ancho / 2);
        xf = ancho;
        yf = 310 + (l * espacio);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

    for(l=0; l < lineas; l++)
    {
        xi = (ancho / 2) - (espacio * l);
        yi = (ancho / 2);
        xf = 0;
        yf = 310 + (l * espacio);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }
}
 else
{
   alert("Error, el dato introducido es incorrecto");
}
}




