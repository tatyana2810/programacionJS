var usuario = prompt("cual es tu temperatura?");
var medida = prompt("elige tu opcion\n1 es °C a °F, 2 es °F a °C");
var temperatura = parseInt(usuario);
var opcion = medida;
var temperatura_final;
var nombre;

if(opcion == 1)
{
   temperatura_final = (temperatura * 1.8) + 32;
   nombre = "°F";
   document.write("Tu temperatura en " + nombre + " es <strong>" + temperatura_final + " </strong>");
}
 else if(opcion == 2)
{
   temperatura_final = (temperatura - 32) * (5/9);
   nombre = "°C";
   document.write("Tu temperatura en " + nombre + " es <strong>" + temperatura_final + " </strong>");
}
 else
{
   document.write("Error, el dato introducido es incorrecto");
}



