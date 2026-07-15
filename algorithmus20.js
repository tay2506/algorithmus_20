alert("Vamos encontrar a potencia entre dois números.");
let num1=parseInt(prompt("Digite a base, o primeiro número."));
let num2=parseInt(prompt("Digite o expoente, o segundo número."));
function potencia(x,y){
    return x**y;
}
let resposta= potencia(num1,num2);
document.getElementById("elemento").innerHTML="A potencia entre "+num1+" e "+num2+" é "+resposta;