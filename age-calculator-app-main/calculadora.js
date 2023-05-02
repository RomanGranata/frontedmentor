/*function formulario () {
  let d = document.getElementById("dia").value;
  let date;
  if (isNaN (d)) || x < 1 || x > 
  


}
*/
/*
function getEdad(){
 let hoy = new Date()
 let fechaNacimiento = new Date(dateString)
 let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
 let diferenciaMeses = hoy.getMount() - fechaNacimiento.getMonth()
 if(
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
 )
 {
  edad --
 }

return edad

}
*/

function getOption(){

let fechaNacimiento = document.getElementById("fechaNacimiento").value;
let hoy = new Date();
let años = hoy.getFullYear() - fechaNacimiento.getFullYear();

console.log(años);
document.getElementById("años").innerHTML= "su edad es de :";


}





