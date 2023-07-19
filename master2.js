// Array de productos
const productos = [];


// jason de prod
async function ObtenerProd(){
const respuesta= await fetch("./data.json")
.then((res)=>res.json())
.then((data)=>{
    data.forEach((prod)=>{
      productos.push(prod);
      
    })
})}

ObtenerProd();

const card = document.querySelector("#product");


// creacion div*cards
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((prod) => {
      

      const div = document.createElement('div');
      div.innerHTML = `
        <divclass= "col" style ="max-widht: 18 rem">
          <div class="card" id="${prod.tipo}" style="max-width: 18rem;">
            <img src="${prod.img}" class="card-img-top" alt="liquidos-limpieza">
            <div class="card-body">
              <h5 class="card-title">${prod.tipo}</h5>
              <p class="card-text">${prod.descripcion}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Precio: $${prod.precio}</li>
            </ul>
            <div class="card-body">
              <button type="button" class="btn btn-success" id="${prod.tipo}">agregar carrito</button>
            </div>
          </div>
        </div>
      `;
      card.appendChild(div);
      // Agregar event listener al botón "Agregar carrito"
      const agregarCarritoBtn = document.getElementById(prod.tipo);
      agregarCarritoBtn.addEventListener('click', () => {
        agregarAlCarrito(prod);
        Swal.fire(
          'Agregaste este producto!',
          'continua con tu compra!',
          'success'
        )});
    });
  });


  

  // Función para agregar un producto al carrito
  function agregarAlCarrito(producto) {
    // Obtener el carrito del LocalStorage o un array vacío si no existe
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  


    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.tipo === producto.tipo);
    if (productoExistente) {
      // Incrementar la cantidad si el producto ya existe en el carrito
      productoExistente.cantidad++;
    } else {
      // Agregar el producto al carrito con una cantidad de 1
      carrito.push({ ...producto, cantidad: 1 });
    }
  

    // Guardar el carrito actualizado en el LocalStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
  


    // Actualizar el contenido del carrito en el HTML
    actualizarCarrito();
  }
  
  // Función para calcular el valor total del carrito
  function calcularTotal() {
    let total = 0;
  
    // Obtener el carrito del LocalStorage o un array vacío si no existe
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
    // Calcular el total sumando el precio de cada producto multiplicado por su cantidad
    carrito.forEach(item => {
      total += item.precio * item.cantidad;
    });
  
    return total;
  }
  
  // Función para actualizar el contenido del carrito en el HTML
  function actualizarCarrito() {
    // Obtener el carrito del LocalStorage o un array vacío si no existe
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
    const carritoDiv = document.getElementById('carrito1');
  
    // Limpiar el contenido previo del carrito
    carritoDiv.innerHTML = '';
  
    // Crear y agregar los elementos de los productos en el carrito
    carrito.forEach(item => {
      const productoDiv = document.createElement('div');
      productoDiv.textContent = `${item.tipo} - Cantidad: ${item.cantidad} = $${item.cantidad*item.precio} `;
      carritoDiv.appendChild(productoDiv);

      const papeleradiv = document.createElement('img');
      papeleradiv.src = '../img/papelera.png';  
      papeleradiv.style.width = '1.5rem';
      papeleradiv.addEventListener('click', () =>{

        quitarElemento(item.id);
        actualizarCarrito();
      })
      
        carritoDiv.appendChild(papeleradiv);
    });
  
    //imagen papelera
     

    // Mostrar el valor total del carrito
    const totalDiv = document.createElement('div');
    totalDiv.textContent = `Total: $${calcularTotal()}`;
    carritoDiv.appendChild(totalDiv);
  }
  
  
  




  // Actualizar el contenido del carrito al cargar la página
  actualizarCarrito();
  



  // vaciar carrito

  document.getElementById('clear').addEventListener('click', () => {
    localStorage.removeItem('carrito');
    actualizarCarrito();   

});


 
    
    function quitarElemento(id) {
        // Obtener el carrito del LocalStorage o un array vacío si no existe
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        
        // Encontrar el índice del producto en el carrito
        const sacarProducto = carrito.findIndex(item => item.id === id);
        
        if (sacarProducto !== -1) {
          const producto = carrito[sacarProducto];
      
          if (producto.cantidad > 1) {
            // Restar la cantidad si es mayor a 1
            producto.cantidad--;
          } else {
            // Eliminar el producto del carrito si la cantidad es 1
            carrito.splice(sacarProducto, 1);
          }
      
          // Guardar el carrito actualizado en el LocalStorage
          localStorage.setItem('carrito', JSON.stringify(carrito));
      
          // Actualizar el contenido del carrito en el HTML
          actualizarCarrito();
        }
      }

       document.getElementById('buy').addEventListener('click', ()=>{
        Swal.fire(
          'Gracias por tu compra!',
          'Nos podremos en contacto para finalizar la operación',
          'success')

       })
          
  