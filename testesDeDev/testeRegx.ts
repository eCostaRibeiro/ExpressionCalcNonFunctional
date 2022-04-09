import * as calcs from "./calcs"
import * as casos from "./casos"


//---
enum MsgOp { SUM = "+", SUB = "-", MUL = "*", DIV = "/" }

//Regex expressions
var INNER_ELEMENTS = /\([^)(]*\)/gm
var PLANNER_NUMS = /\d+[.]?\d?/gm
var OP_SIGNALS = /[\+\-\*\/]/gmd


//--- convertions
function innerElements(arg: string): string[] {
    const elements = arg.match(INNER_ELEMENTS)
    return elements
}

function extractNums(args: string): number[] {
    const elements = args.match(PLANNER_NUMS).map(Number)
    return elements
}

function extractOperator(args: string): string[] {
    const elements = args.match(OP_SIGNALS)
    return elements
}

function operatingIn(a: number, b: number) {
    if (operator[0] == MsgOp.SUM) {
        operator.shift()
        return calcs.Sum(a, b)
    } else if (operator[0] == MsgOp.SUB) {
        operator.shift()
        return calcs.Subtract(a, b)
    } else if (operator[0] == MsgOp.MUL) {
        operator.shift()
        return calcs.Multiply(a, b)
    } else if (operator[0]) {
        operator.shift()
        return calcs.Divide(a, b)
    }
}


const origin = casos.txtTest4
const operands = origin.match(PLANNER_NUMS)

const operator = origin.match(OP_SIGNALS)
const values = extractNums(operands.toString())




console.log(
    values.reduce((a, b) => operatingIn(a, b))
)
