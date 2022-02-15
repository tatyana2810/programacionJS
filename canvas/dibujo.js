var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("purple", 10, 300, 220, 10);
dibujarLinea("black", 35, 234, 175, 278);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}