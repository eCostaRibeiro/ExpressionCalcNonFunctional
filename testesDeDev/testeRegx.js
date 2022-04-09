"use strict";
exports.__esModule = true;
var calcs = require("./calcs");
var casos = require("./casos");
//---
var MsgOp;
(function (MsgOp) {
    MsgOp["SUM"] = "+";
    MsgOp["SUB"] = "-";
    MsgOp["MUL"] = "*";
    MsgOp["DIV"] = "/";
})(MsgOp || (MsgOp = {}));
//Regex expressions
var INNER_ELEMENTS = /\([^)(]*\)/gm;
var PLANNER_INTS = /\d/g;
var OP_SIGNALS = /[\+\-\*\/]/gmd;
//--- convertions
function innerElements(arg) {
    var elements = arg.match(INNER_ELEMENTS);
    return elements;
}
function plannerInts(args) {
    var elements = args.match(PLANNER_INTS).map(Number);
    return elements;
}
function extractOperator(args) {
    var elements = args.match(OP_SIGNALS);
    return elements;
}
function calculo(calculo) {
    var result = 0;
    var solving = innerElements(calculo.expressao); // [ '(6-3)', '(1+1)' ]
    console.log(solving.map(plannerInts));
    console.log(solving.map(extractOperator));
    for (var i = 0; i < solving.length; i++) {
        calculo.operador = solving.map(extractOperator)[i];
        calculo.operandos = solving.map(plannerInts)[i];
        while (calculo.operandos.length > calculo.operador.length
            && calculo.operador.length != 0) {
            for (var n = 0; n < calculo.operador.length; n++) {
                result = calcs.Sum(calculo.operandos[n], calculo.operandos[n + 1]);
            }
            calculo.operador.shift();
        }
        console.log(result);
    }
}
var teste3 = {
    expressao: casos.txtTest3
};
calculo(teste3);
//const teste = casos.txtTest3.replace(casos.txtTest3)
