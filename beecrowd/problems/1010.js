export function problem(lines){

    const space = " "; 

    const [codigo1, quant1, price1] = lines[0].split(space);
    const [codigo2, quant2, price2] = lines[1].split(space);
    
    const Valor = (quant1*price1) + (quant2*price2);

    console.log("VALOR A PAGAR: R$ " + Valor.toFixed(2));
    
}