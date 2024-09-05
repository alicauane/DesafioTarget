function TextoInvertido(str) {
    let texto = '';
    
    for (let x = str.length - 1; x >= 0; x--) {
        texto += str[x];
    }
    
    return texto;
}

const Original = "Alicauane";
const Invertido = TextoInvertido(Original);

console.log("String original:", Original);
console.log("String invertida:", Invertido);