// Array de productos
const productos = [
    { id: 1, tipo: "liquidos de limpieza", precio: 10000 },
    { id: 2, tipo: "productos toxic", precio: 20000 },
    { id: 3, tipo: "kit Paños", precio: 10000 },
    { id: 4, tipo: "kit Cepillos", precio: 20000 }
  ];

  

  // Función para agregar un producto al carrito
  function agregarAlCarrito(producto) {
    // Obtener el carrito del LocalStorage o un array vacío si no existe
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  


    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === producto.id);
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
  
  // Asignar los listeners de click a los botones de agregar al carrito
  document.getElementById('liquidos').addEventListener('click', () => {
    agregarAlCarrito(productos[0]);
  });
  
  document.getElementById('toxic').addEventListener('click', () => {
    agregarAlCarrito(productos[1]);
  });
  
  document.getElementById('paños').addEventListener('click', () => {
    agregarAlCarrito(productos[2]);
  });
  
  document.getElementById('cepillos').addEventListener('click', () => {
    agregarAlCarrito(productos[3]);
  });
  
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