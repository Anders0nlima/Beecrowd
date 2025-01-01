export function problem(lines){
   const [A, B, C] = lines[0].split(" ").map(Number)
  
   const PI = 3.14159;

   const TRIANGULO = (A*C)/2;
   const CIRCULO = (C*C)*PI;
   const TRAPEZIO = ((A+B)*C)/2;
   const QUADRADO = B*B;
   const RETANGULO = A*B;

    console.log("TRIANGULO: " + TRIANGULO.toFixed(3));
    console.log("CIRCULO: " + CIRCULO.toFixed(3));
    console.log("TRAPEZIO: " + TRAPEZIO.toFixed(3));
    console.log("QUADRADO: " + QUADRADO.toFixed(3));
    console.log("RETANGULO: " + RETANGULO.toFixed(3));
    
}