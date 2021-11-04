function mostrararray()
{
    var  mesesdelaño= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    //meses= new Array();//meses.push(mesesdelaño);//console.log(meses);
    for ( var i = 0 ; i < mesesdelaño.length ;i++){
        document.getElementById("imprimir").innerHTML +=mesesdelaño[i]+'<br>';
        //document.write(`${meses}<br>`);
    }
}
productos_lista = [];
function Producto_alimenticio() {
  function producto(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  var codigo = document.getElementById("codigo").value;
  var nombre = document.getElementById("nombre").value;
  var precio = document.getElementById("precio").value;
  nuevoProducto = new producto(codigo, nombre, precio);
  productos_lista.push(nuevoProducto);
}

function imprimeDatos() {
  for (i = 0; i < productos_lista.length; i++) {
    document.getElementById("objetos").innerHTML += `<i>Codigo = ${productos_lista[i].codigo}<br>
        Nombre = ${productos_lista[i].nombre}<br>
        Precio = ${productos_lista[i].precio}<br></i>`;
  }
}
function Limpiar(){
    document.getElementById("objetos").innerHTML ="";
    document.getElementById("imprimir").innerHTML ="";
      
}