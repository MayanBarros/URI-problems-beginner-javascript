var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prod1 = lines.shift().split(" ");
var prod2 = lines.shift().split(" ");
// -------------------------------------
var code1 = parseInt(prod1.shift());
var units1 = parseInt(prod1.shift());
var price1 = parseFloat(prod1.shift());
// -------------------------------------
var code1 = parseInt(prod2.shift());
var units2 = parseInt(prod2.shift());
var price2 = parseFloat(prod2.shift());
// -------------------------------------
var total_prod1 = units1 * price1;
var total_prod2 = units2 * price2;
var total_final = total_prod1 + total_prod2;
console.log("VALOR A PAGAR: R$ " + total_final.toFixed(2));
