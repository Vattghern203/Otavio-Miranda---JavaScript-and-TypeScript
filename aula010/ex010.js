const nome = 'Otávio';
const sobrenome = 'Augusto';
const idade = 21;
const peso = 60;
const altura = 1.77;

let imc; // peso / (altura * altura)
let ano = 2022;
let anoNascimento = ano - idade;

imc = peso / (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade}, pesa ${peso}kg, tem ${altura}m de altura e seu IMC é igual a: ${imc.toFixed(2)}`);

console.log(`${nome} nasceu no ano de ${anoNascimento}`);