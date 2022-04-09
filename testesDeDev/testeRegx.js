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
var PLANNER_INTS = /\d{1,}/g;
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
function operaIn(a, b) {
    if (operator[0] == MsgOp.SUM) {
        operator.shift();
        return calcs.Sum(a, b);
    }
    else if (operator[0] == MsgOp.SUB) {
        operator.shift();
        return calcs.Subtract(a, b);
    }
    else if (operator[0] == MsgOp.MUL) {
        operator.shift();
        return calcs.Multiply(a, b);
    }
    else if (operator[0]) {
        operator.shift();
        return calcs.Divide(a, b);
    }
}
var origin = casos.txtTest4;
var operands = origin.match(PLANNER_INTS);
console.log(operands);
var operator = origin.match(OP_SIGNALS);
var values = plannerInts(operands.toString());
console.log(values.reduce(function (a, b) { return operaIn(a, b); }));
