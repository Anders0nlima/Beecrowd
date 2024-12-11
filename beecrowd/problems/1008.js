export function problem(lines){
    const number = lines[0];
    const horas = lines[1];
    const perHoras = lines[2];

    const SALARY = horas*perHoras;

    console.log("NUMBER = " + number);
    console.log("SALARY = U$ " + SALARY.toFixed(2));
}