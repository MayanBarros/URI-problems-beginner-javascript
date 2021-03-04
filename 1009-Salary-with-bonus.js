var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var vendedor = lines.shift();
var salario = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());
var bonus = vendas * (15/100);
var total = salario + bonus;

console.log("TOTAL = R$ " + total.toFixed(2));