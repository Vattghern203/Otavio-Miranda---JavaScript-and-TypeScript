const tresHoras = 60 * 60 * 3 * 1000 // Três horas por causa do fuso (GMT - 3)

const umDia = 60 * 60 * 24 * 1000 // Um dia em milésimos

const data = new Date(0 + tresHoras + umDia) // Hora (0) 01/01/1970 Timestamp Unix ou Época Unix

console.log(data.toString())

const data2 = new Date(2022, 7, 10, 14, 57) // Hoje // Formato: a, m, d, h, M, s, ms

console.log(data2.toString())

const data3 = new Date('2022-08-10 14:58:36')
console.log(data3.toString())

console.log('Dia', data3.getDate())
console.log('Mês', data3.getMonth() + 1) // Mês começa do zero
console.log('Ano', data3.getFullYear())
console.log('Hora:', data3.getHours())
console.log('Minutos:', data3.getMinutes())
console.log('Segundos:', data3.getSeconds())
console.log('Milisegundos:', data3.getMilliseconds())
console.log('Dia da Semana:', data3.getDay()) // 0 - Domingo ... 6 - Sábado

console.log(Date.now())




