export function problem(lines){
    const [X1, Y1] = lines[0].split(" ").map(Number);
    const [X2, Y2] = lines[1].split(" ").map(Number);

    const Valor = Math.sqrt(Math.pow(X2-X1, 2) + Math.pow(Y2-Y1, 2));

    console.log(Valor.toFixed(4));
} 