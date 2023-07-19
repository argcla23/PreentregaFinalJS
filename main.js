const formulario = document.querySelector("#formulario");
// console.log(formulario)
const boton = document.querySelector("#Submit");
// console.log(boton)



const arrayServicios = [];



boton.addEventListener("click", respuestaClick);

function respuestaClick(e) {
  e.preventDefault();

  let service = document.getElementById("Service").value;
  let kilometraje = document.getElementById("kilometraje").value;
  let tareas = document.getElementById("Tareas").value;
  let observaciones = document.getElementById("Observaciones").value;

  const newService = {
    Service: service,
    kilometraje: kilometraje,
    tareas: tareas,
    observaciones: observaciones,

  }

 
  arrayServicios.push(newService);

 

  localStorage.setItem('servicios', JSON.stringify(arrayServicios));

  mostrarServicios();

  formulario.reset();
}



function mostrarServicios() {

  const contenedor = document.getElementById("listaContainer");
  console.log(contenedor)
  arrayServicios.forEach(el => {
    const div = document.createElement('div');

    div.innerHTML = ` 
          <p>${"Service:" + el.Service}</p>
          <p>${"Kilometraje:" + el.kilometraje}</p>
          <p>${"Tareas:" + el.tareas}</p>
          <p>${"Observaciones:" + el.observaciones}</p>
        `
    contenedor.appendChild(div)})
}


const hola = document.getElementById('hola')

const login = document.getElementById('log')

login.addEventListener('click',()=> {

  
  const welcome = document.createElement('div');
  welcome.textContent = `Bienvenido`;
  hola.appendChild(welcome);}

)