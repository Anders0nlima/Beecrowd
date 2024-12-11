export function problem(lines){
    const [A, B, C] = lines;

    const Pa = 2;
    const Pb = 3;
    const Pc = 5;

   const MEDIA = (Number(A*Pa) + Number(B*Pb) + Number(C*Pc))/(Pa+Pb+Pc)

   console.log("MEDIA = " + MEDIA.toFixed(1))

}