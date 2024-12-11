export function problem(lines){

    const name = lines[0];
    const salary = lines[1];
    const vendas = lines[2];

    const TOTAL = (vendas*0.15) + Number(salary);
    
    console.log("TOTAL = R$ " + TOTAL.toFixed(2))
}