/*
Faça um programa se a passoa pode votar
E se o voto é obrigatório ou facultativo
*/

console.log("Esse programa íra te ajudar com suas dúvidas sobre a votação nas eleições no Brasil!")

let = 69

if (let == 16 || let == 17 || let >= 70) {
    console.log("Seu voto é facultativo.")
}
else if (let >= 18 && let <= 69) {
    console.log("Seu volto é obrigatorio.")
} else {
    console.log("você é menor de idade, logo não pode voltar.")
}

/* ================================================================================================
0- inicicante
1- bronze
2- prata
3- ouro
4- platina
5- diamente
6- mestre
================================================================================================ */

let nivel = 5

switch (nivel) {
    case 0:
        console.log("Iniciante")
        break;
    case 1:
        console.log("Broze")
        break;
    case 2:
        console.log("Prata")
        break;
    case 3:
        console.log("Ouro")
        break;
    case 4:
        console.log("Platina")
        break;
    case 5:
        console.log("Diamente")
        break;
    case 6:
        console.log("Mestre")
        break;
    default:
        break;
}

/* ================================================================================================
free    - Plano grátis com muitos anuncios
basic   - Plano pago com 2 anuncios
normal  - Plano pago sem anuncios
premium - Plano pago sem anuncios com beneficios
================================================================================================ */

let plano = "free"

switch (plano) {
    case "free":
        console.log("Plano grátis com muitos anuncios")
        break;
    case "basic":
        console.log("Plano pago com 2 anuncios")
        break;
    case "normal":
        console.log("Plano pago sem anuncios")
        break;
    case "premium":
        console.log("Plano pago sem anuncios com beneficios")
        break;

    default:
        console.log("Plano invalido!")
        break;
}

let online = false
let nome = "Fred Mercury"

if (online == true) {
    console.log(nome + " ONLINE")
} else {
    console.log(nome + " OFFLINE")
}

console.log(`Olá ${nome} ${online ? "ONLINE" : "OFFLINE"}`);