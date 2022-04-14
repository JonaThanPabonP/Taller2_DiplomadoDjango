function fondo() {
    var red = document.getElementById("slideRed").value;
    var green = document.getElementById("slideGreen").value;
    var blue = document.getElementById("slideBlue").value;

    var color = "rgb("+red+","+green+","+blue+")";
    
    document.getElementById("body").style.backgroundColor = color;
}

function par() {
  var num = document.getElementById("ta-number").value;

  if (num % 2 == 0) {
    document.getElementById("res-par").innerHTML = "El numero es par";
    console.log("El numero es par");
  } else {
    document.getElementById("res-par").innerHTML = "El numero es impar";
    console.log("El numero es impar");
  }
}

function factura() {
  var total = 0;
  var luz = document.getElementById("ta-luz").value;
  var agua = document.getElementById("ta-agua").value;
  var gas = document.getElementById("ta-gas").value;

  total = Number(luz) + Number(agua) + Number(gas);

  document.getElementById("total-facturas").innerHTML = "El total es " + total;
  console.log("El total es", total);
}

function sumar() {
  var total = 0;
  var balance = document.getElementById("total-finanzas").textContent;
  console.log(balance);
  var valor = document.getElementById("ta-valor").value;
  console.log(valor);
  total = Number(valor) + Number(balance);
  console.log(total);
  document.getElementById("total-finanzas").innerHTML = total;
}

function restar() {
    var total = 0;
    var balance = document.getElementById("total-finanzas").textContent;
    console.log(balance);
    var valor = document.getElementById("ta-valor").value;
    console.log(valor);
    total = Number(balance) - Number(valor);
    console.log(total);
    document.getElementById("total-finanzas").innerHTML = total;
  }