function VerificaFibonacci(n) {
    let x = 0, b = 1, temp;

    while (x <= n) {
        if (x === n) {
            return `O número ${n} faz parte da sequência de Fibonacci.`;
        }
        temp = x;
        x = b;
        b = temp + b;
    }
    return `O número ${n} faz não parte da à sequência de Fibonacci.`;
}

const numero = parseInt(prompt("Informe um número, por favor: "));

console.log(VerificaFibonacci(numero));