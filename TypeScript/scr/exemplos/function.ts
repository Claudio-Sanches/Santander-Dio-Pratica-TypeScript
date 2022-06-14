// essa função não terá retorno == void
function printValoresNumericos(numero1: number, numero2: number):void{
    console.log(numero1 + numero2);
}

// essa função terá como retorno apenas números == number
function somarValoresNumericos(numero1: number, numero2: number):number{
    return numero1 + numero2;
};
console.log(somarValoresNumericos(1,3));

// essa função será callblack

function somarValoresNumericosETratar(numero3:number,numero4:number, callblack: (numero:number)=>number):number{
    let resultado = numero3 + numero4;
    return callblack(resultado);
}

function aoQuadrado(numero:number):number{
    return numero * numero;
}

function dividirPorEleMesmo(numero:number):number{
    return numero / numero
}

console.log(somarValoresNumericosETratar(1,3, aoQuadrado));
console.log(somarValoresNumericosETratar(1,3, dividirPorEleMesmo))