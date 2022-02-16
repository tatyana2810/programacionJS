var esquina = prompt("elige tu opcion\n1 Esquina superior derecha\n2 esquina superiorizquierda\n3 esquina inferior derecha\n4 esquina inferior izquierda");

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 60;
var l = 0;
var xi ,yi, xf, yf;
var colorcito = "#0E6251"


dibujarLinea(colorcito, 1, 1, 1, 599);
dibujarLinea(colorcito, 1, 599, 599, 599);
dibujarLinea(colorcito, 1, 1, 599, 1);
dibujarLinea(colorcito, 599, 1, 599, 599);

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

if(esquina == 1)
{
    for(l=0; l < lineas; l++)
    {
        xi = 300 + (l * 10);
        yi = 0;
        xf = 600;
        yf = 10 * (l + 1);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }
}
else if(esquina == 2)
{
    for(l=0; l < lineas; l++)
    {
        xi = 300 - (l * 10);
        yi = 0;
        xf = 0;
        yf = 10 * (l + 1);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }
}
else if(esquina == 3)
{
    for(l=0; l < lineas; l++)
    {
        xi = 600;
        yi = 300 + (10 * l);
        xf = 590 - (l * 10);
        yf = 600;
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }
}
else if(esquina == 4)
{
    for(l=0; l < lineas; l++)
    {
        xi = 0;
        yi = 300 + (10 * l);
        xf = 10 * (l + 1);
        yf = 600;
        dibujarLinea(colorcito, xi, yi, xf, yf);
        console.log("lineas " + l);
    }

}
 else
{
   alert("Error, el dato introducido es incorrecto");
}




