/* const Acuario = document.getElementById('Acuario');

Acuario.addEventListener('click', function(){
    const Acuario = prompt('¿Cual es tu signo?');
    if(Acuario ==='acuario'){
      Swal.fire({
  title: "Acuario",
  text: "Felicidades eres acuario",
  icon: "success"
});

    }
    else{ alert("Lastima, somos signos diferentes")}
});
 */


    document.getElementById('signo-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir el envío del formulario

        const signoSeleccionado = document.getElementById('signo').value;
        /* signoseleccionado seleccionado por id geminis etc */
            const dia = parseInt(document.getElementById('dia').value);
            const mes = parseInt(document.getElementById('mes').value);

            // Determinar el signo basado en la fecha
        let signoPorFecha = '';
        let imagen = '';
        console.log("aries")

        if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) {
                /* mes 3 del dia 21 o antes  mes 4 del dia 20 igual o antes */
            signoPorFecha = 'aries';
            imagen= '../img/aries.png'
            } else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
            signoPorFecha = 'tauro';
             imagen= '../img/tauro.png'

            } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
            signoPorFecha = 'geminis';
              imagen= '../img/geminis.png'
            } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
            signoPorFecha = 'cancer';
             imagen= '../img/cancer.png'
            } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
            signoPorFecha = 'leo';
             imagen= '../img/leo.png'
            } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
            signoPorFecha = 'virgo';
             imagen= '../img/virgo.png'
            } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
            signoPorFecha = 'libra';
             imagen= '../img/libra.png'
            } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
            signoPorFecha = 'escorpio';
             imagen= '../img/escorpio.png'
            
            } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
            signoPorFecha = 'sagitario';
             imagen= '../img/sagitario.png'
            
            } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
            signoPorFecha = 'capricornio';
             imagen= '../img/capricornio.png'
            
            } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
            signoPorFecha = 'acuario';
             imagen= '../img/acuario.png'
            
            } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
            signoPorFecha = 'piscis';
             imagen= '../img/aries.png'
            
            }
console.log(signoSeleccionado)
          
        if (signoSeleccionado === signoPorFecha) {
            console.log(" signoPorFecha: ",  signoPorFecha);
            /* signoseleccionado seleccionado por id geminis etc */
            /* signo por fecha se indentidica con el if de que dia a qwue dia y q va a resultar y si es igual valida */
                Swal.fire({
                    title: "¡Felicidades!",
                    text: `Tu signo seleccionado y tu signo por fecha coinciden: ${signoSeleccionado.charAt(0).toUpperCase() + signoSeleccionado.slice(1)}.`,
                  
  imageUrl:imagen , // Imagen personalizada
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image",
  width: 600, // Ancho personalizado
  padding: "3em", 
  color: "#716add", 
  background: "#fff url(https://sweetalert2.github.io/#downloadimages/trees.png)", // Fondo personalizado
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://media.giphy.com/media/3o7abK8MczLqTMC7kA/giphy.gif")
    left top
    no-repeat
  ` // Fondo animado



                });
            } else {
                Swal.fire({
                    title: "Signos diferentes",
                    text: `Tu signo seleccionado es ${signoSeleccionado.charAt(0).toUpperCase() + signoSeleccionado.slice(1)}, pero por la fecha es ${signoPorFecha.charAt(0).toUpperCase() + signoPorFecha.slice(1)}.`,
                    icon: "error"
                });
            }
        });
