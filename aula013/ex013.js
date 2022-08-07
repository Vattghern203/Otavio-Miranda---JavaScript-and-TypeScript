const nome = window.prompt("Qual o seu nome complpeto?");

document.body.innerHTML += `O seu nome é: ${nome} <br>`;

document.body.innerHTML += `Seu nome tem ${
  nome.slice("").length - 1
} letras <br>`;

document.body.innerHTML += `A segunda letra do seu nome é ${nome.charAt(
  1
)} <br>`;

document.body.innerHTML += `Esse é o primeiro índice da letra 'a' no seu nome: ${nome.indexOf(
  "a"
)} <br>`;

document.body.innerHTML += `Esse é o último índice da letra 'a' no seu nome: ${nome.lastIndexOf(
  "a"
)} <br>`;

document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(
  -3
)} <br>`;

document.body.innerHTML += `O seu nome dividido fica assim: ${nome.slice(
  "",
  nome.length
)} <br>`;

document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br>`;

document.body.innerHTML += `Seu nome em minúsculas ${nome.toLowerCase()} <br>`;
