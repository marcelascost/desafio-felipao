let win = 260
let fail = 205
let nome = "Marcela"
let xp = partidas(win,fail)

function partidas(win, fail) {
    let saldoVitorias = win - fail;
    let nivel = "Ferro";

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }
    console.log("O Herói tem um saldo de " + saldoVitorias + " está no nível " + nivel);
    
}
