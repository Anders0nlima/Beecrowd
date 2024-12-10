export function problem(lines){
    const A = lines[0];
    const B = lines[1];
    const Pa = 3.5;
    const Pb = 7.5;
 
    const MEDIA = (Number(A*Pa) + Number(B*Pb))/Number(Pa+Pb);

    console.log("MEDIA = "+ MEDIA.toFixed(5));
    
}