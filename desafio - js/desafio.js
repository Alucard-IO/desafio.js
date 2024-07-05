var nome =  prompt("Digite o nome do personagem.");
var xp = prompt("Digite o a quantidade de xp do personagem.");
var nivel;

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp < 2000) {
    nivel = "Bronze";
} else if (xp >= 2000 && xp < 5000) {
    nivel = "Prata";
} else if (xp >= 5000 && xp < 8000) {
    nivel = "Ouro";
} else if (xp >= 8000 && xp < 9000) {
    nivel = "Platina";
} else if (xp >= 9000 && xp < 10000) {
    nivel = "Ascendente";
} else if (xp >= 10000 && xp < 10001) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
}

console.log("O personagem: " + nome + " está no nível: " + nivel);
