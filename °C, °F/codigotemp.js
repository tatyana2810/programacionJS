var usuario = prompt("cual es tu temperatura?");
var medida = prompt("elige tu opcion\n1 es °C a °F, 2 es °F a °C");
var temperatura = parseInt(usuario)
var uno = 32;
var dos = 1.8;
var tres = 0.5;
var temperatura_final;
var nombre;
if(opcion == 1)
{
   temperatura_final = temperatura * dos + uno;
   nombre = "°F";
}
 else if(opcion == 2)
{
   temperatura_final = temperatura - uno * tres;
   nombre = "°C";
}
 else
{
   temperatura_final = "error, el dato introducido es icorrecto";
   nombre = "error";
}
temperatura_final = parseInt(temperatura_final)
document.write("tu temperatura en " + nombre + " es <strong>" + temperatura_final + " </strong>");
