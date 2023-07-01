const productos = [
    { id: 1, tipo: "liquidos de limpieza", precio: 10000 },
    { id: 2, tipo: "productos toxic", precio: 20000 },
    { id: 3, tipo: "kit Paños", precio: 10000 },
    { id: 4, tipo: "kit Cepillos", precio: 20000 }
  ];

const producto1 ={
    id: 1,
    tipo: "liquidos de limpieza", 
    precio: 10000,

}

const producto2 ={
    id: 2, 
    tipo: "productos toxic", 
    precio: 20000
}

const producto3 ={
    id: 3, 
    tipo: "kit Paños", 
    precio: 10000
}

const producto4 ={
    id: 4, 
    tipo: "kit Cepillos", 
    precio: 20000
}


  
let carrito = [];
let totalcompra= 0;

const buttonl= document.getElementById("liquidos")
// console.log(buttonl)
const buttont= document.getElementById("toxic")
// console.log(buttont)
const buttonkp= document.getElementById("paños")
// console.log(buttonkp)
const buttonkc= document.getElementById("cepillos")
// console.log(buttonkc)


 function addCarrito(id) {
     const prod = productos.find(p => p.id === id);
     if (prod) {
       carrito.push(prod);
     }
   }


   function calcularTotalCarrito() {
    totalcompra = 0;
    for (const producto of carrito) {
      totalcompra += productos.precio;
    }
    return totalcompra;
  }

// Eventos agregar carrito

buttonl,addEventListener("click", function(e){
    e.preventDefault();
    addCarrito(1);
    calcularTotalCarrito();
    localStorage.setItem('Producto1', JSON.stringify(producto1));
    
    console.log()
})

buttont,addEventListener("click", function(e){
e.preventDefault();

    addCarrito(2);
    calcularTotalCarrito();
    localStorage.setItem('Producto2', JSON.stringify(producto2));

})
buttonkp,addEventListener("click", function(e){
e.preventDefault();
    addCarrito(3);
    calcularTotalCarrito();
    localStorage.setItem('Producto3', JSON.stringify(producto3));
    
})
buttonkc,addEventListener("click", function(e){
    e.preventDefault();
    addCarrito(4);
    calcularTotalCarrito();
    localStorage.setItem('Producto4', JSON.stringify(producto4));
    
})


if (buttonl) {
    
}


function calcularTotalCarrito() {
    // Lógica para calcular el total del carrito
}


function actualizarCarrito() {
    const carritoElement = document.querySelector("#carrito1");
    
    carritoElement.innerHTML = ""; // Limpiar el contenido previo del carrito
  
    // Agregar cada producto del carrito al carritoElement
    carrito.forEach( function (el) {
            const productoElement = document.createElement('div');


            productoElement.innerHTML = ` 
      <p>${productos.tipo}</p>
      <p>${productos.precio}</p>`;
            contenedor.appendChild(div);
        })
      }
      
      


actualizarCarrito();





   //sacar una cantidad 
   function quitarElemento() {
 
    const  = carrito.find(item => item.id === producto.id);
    if (sacarProducto) {    
          //  Incrementar la cantidad si el producto ya existe en el carrito
          sacarProducto.cantidad+-1;
    } else {      
         // Agregar el producto al carrito con una cantidad de 1
      carrito.push({ ...producto, cantidad: -1 });     }
    actualizarCarrito();    

    }
