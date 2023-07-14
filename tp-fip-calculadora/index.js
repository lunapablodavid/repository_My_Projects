var entrada = document.getElementById("intput-entrada");
var entrada2 = document.getElementById("input-entrada2");
var num1 = document.getElementById("btn_1");
var num2 = document.getElementById("btn_2");
var num3 = document.getElementById("btn_3");
var num4 = document.getElementById("btn_4");
var num5 = document.getElementById("btn_5");
var num6 = document.getElementById("btn_6");
var num7 = document.getElementById("btn_7");
var num8 = document.getElementById("btn_8");
var num9 = document.getElementById("btn_9");
var num0 = document.getElementById("btn_0");
var suma = document.getElementById("btn_sum");
var resta = document.getElementById("btn_res");
var division = document.getElementById("btn_div");
var multiplicacion = document.getElementById("btn_mult");
var igual = document.getElementById("btn_igual");
var clear = document.getElementById("clear");
//numeros(botones)
num1 === null || num1 === void 0 ? void 0 : num1.addEventListener("click", function () {
    entrada.value += num1.value;
});
num2 === null || num2 === void 0 ? void 0 : num2.addEventListener("click", function () {
    entrada.value += num2.value;
});
num3 === null || num3 === void 0 ? void 0 : num3.addEventListener("click", function () {
    entrada.value += num3.value;
});
num4 === null || num4 === void 0 ? void 0 : num4.addEventListener("click", function () {
    entrada.value += num4.value;
});
num5 === null || num5 === void 0 ? void 0 : num5.addEventListener("click", function () {
    entrada.value += num5.value;
});
num6 === null || num6 === void 0 ? void 0 : num6.addEventListener("click", function () {
    entrada.value += num6.value;
});
num7 === null || num7 === void 0 ? void 0 : num7.addEventListener("click", function () {
    entrada.value += num7.value;
});
num8 === null || num8 === void 0 ? void 0 : num8.addEventListener("click", function () {
    entrada.value += num8.value;
});
num9 === null || num9 === void 0 ? void 0 : num9.addEventListener("click", function () {
    entrada.value += num9.value;
});
num0.addEventListener("click", function () {
    entrada.value += num0.value;
});
//operaciones(botones)
var estadoSuma = false;
var estadoRes = false;
var estadoMul = false;
var estadoDiv = false;
suma.addEventListener("click", function () {
    estadoSuma = true;
    suma.value;
    entrada2.value = entrada.value + suma.value;
    entrada.value = "";
});
resta.addEventListener("click", function () {
    estadoRes = true;
    resta.value;
    entrada2.value = entrada.value + resta.value;
    entrada.value = "";
});
division.addEventListener("click", function () {
    estadoDiv = true;
    division.value;
    entrada2.value = entrada.value + division.value;
    entrada.value = "";
});
multiplicacion.addEventListener("click", function () {
    estadoMul = true;
    multiplicacion.value;
    entrada2.value = entrada.value + multiplicacion.value;
    entrada.value = "";
});
//resultado(boton)
igual.addEventListener("click", function () {
    var dato1 = entrada.value;
    var operaciones;
    var signo;
    if (estadoSuma === true) {
        estadoRes = false;
        estadoMul = false;
        estadoDiv = false;
        operaciones = Sum;
        signo = suma.value;
    }
    if (estadoRes === true) {
        estadoSuma = false;
        estadoMul = false;
        estadoDiv = false;
        operaciones = Res;
        signo = resta.value;
    }
    if (estadoMul === true) {
        estadoSuma = false;
        estadoRes = false;
        estadoDiv = false;
        operaciones = Mul;
        signo = multiplicacion.value;
    }
    if (estadoDiv === true) {
        estadoSuma = false;
        estadoRes = false;
        estadoMul = false;
        operaciones = Div;
        signo = division.value;
    }
    console.log(Calc(parseInt(entrada.value), parseInt(entrada2.value), operaciones), " vamo` a ver");
    entrada2.value += dato1 + igual.value + Calc(entrada.value, entrada2.value, operaciones);
    entrada.value = Calc(entrada.value, entrada2.value, operaciones);
    estadoSuma = false;
    estadoRes = false;
    estadoDiv = false;
    estadoMul = false;
    //  console.log("estado suma", estadoSuma)
    // console.log("estado resta", estadoRes)
});
function Clear() {
    entrada.value = "";
    entrada2.value = "";
}
clear.addEventListener("click", function () {
    Clear();
});
function Sum(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}
function Res(num1, num2) {
    return parseInt(num2) - parseInt(num1);
}
function Div(num1, num2) {
    return parseInt(num2) / parseInt(num1);
}
function Mul(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}
function Calc(a, b, cb) {
    return cb(a, b);
}
