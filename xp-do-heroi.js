let nome = "Marcela"
let xp = 6445
var nivel = "Ferro"

if (xp <= 1000) {
    var nivel = "Ferro";
}
if (xp >= 1001 && xp <= 2000) {
    var nivel = "Bronze";
}
if (xp >= 2001 && xp <= 5000) {
    var nivel = "Prata";
}
if (xp >= 5001 && xp <= 7000) {
    var nivel = "Ouro";
}
if (xp >= 7001 && xp <= 8000) {
    var nivel = "Platina";
}
if (xp >= 8001 && xp <= 9000) {
    var nivel = "Ascendente";
}
if (xp >= 9001 && xp <= 10000) {
    var nivel = "Imortal";
}
if (xp >= 10001) {
    var nivel = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)