import * as calcs from "./calcs"
import * as casos from "./casos"


//---
enum MsgOp { SUM = "+", SUB = "-", MUL = "*", DIV = "/" }

interface Calc {
    operator?: MsgOp;
    operands?: number[];
}

//Regex expressions
var INNER_ELEMENTS = /\([^)(]*\)/gm
var PLANNER_INTS = /\d/g
var OP_SIGNALS = /[\+\-\*\/]/gmd



//--- convertions
function innerElements(arg: string): string[] {
    const elements = arg.match(INNER_ELEMENTS)
    return elements
}

function plannerInts(args: string): number[] {
    const elements = args.match(PLANNER_INTS).map(Number)
    return elements
}

function extractOperator(args: string): string[] {
    const elements = args.match(OP_SIGNALS)
    return elements
}



//--- hummmm....
interface calculo {
    expressao: string;
    operador?: string[];
    operandos?: number[]
}





function calculo(calculo: calculo) {
    let result: number = 0

    const solving = innerElements(calculo.expressao); // [ '(6-3)', '(1+1)' ]

    console.log(solving.map(plannerInts));
    console.log(solving.map(extractOperator));




    for (let i = 0; i < solving.length; i++) {
        calculo.operador = solving.map(extractOperator)[i]
        calculo.operandos = solving.map(plannerInts)[i]
        while (calculo.operandos.length > calculo.operador.length
            && calculo.operador.length != 0) {
            for (let n = 0; n < calculo.operador.length; n++) {
                result = calcs.Sum(
                    calculo.operandos[n],
                    calculo.operandos[n + 1])
            }
            calculo.operador.shift()

        }
        console.log(result);

    }
}

const teste3: calculo = {
    expressao: casos.txtTest3
}

calculo(teste3)





//const teste = casos.txtTest3.replace(casos.txtTest3)




