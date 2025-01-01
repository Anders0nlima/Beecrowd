export function problem(lines){
    const [A, B, C] = lines[0].split(" ").map(Number);

    const MaiorAB = ((A+B) + Math.abs(A-B)) / 2;

    if(MaiorAB < C){
        console.log(C + " eh o maior")
    } else{
        console.log(MaiorAB + " eh o maior")
    }
   
}