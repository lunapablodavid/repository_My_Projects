const entrada = document.getElementById("intput-entrada")
const entrada2 = document.getElementById("input-entrada2")
const num1 = document.getElementById("btn_1")
const num2 = document.getElementById("btn_2")
const num3 = document.getElementById("btn_3")
const num4 = document.getElementById("btn_4")
const num5 = document.getElementById("btn_5")
const num6 = document.getElementById("btn_6")
const num7 = document.getElementById("btn_7")
const num8 = document.getElementById("btn_8")
const num9 = document.getElementById("btn_9")
const num0 = document.getElementById("btn_0")
const suma = document.getElementById("btn_sum")
const resta = document.getElementById("btn_res")
const division = document.getElementById("btn_div")
const multiplicacion = document.getElementById("btn_mult")
const igual = document.getElementById("btn_igual")
const clear = document.getElementById("clear")


//numeros(botones)
num1.addEventListener("click",()=>{
entrada.value+=num1.value;
})
    num2.addEventListener("click",()=>{
    entrada.value+=num2.value;
    })
        num3.addEventListener("click",()=>{
        entrada.value+=num3.value;
        })
            num4.addEventListener("click",()=>{
            entrada.value+=num4.value;
            })
                 num5.addEventListener("click",()=>{
                entrada.value+num5.value;
                })
                      num6.addEventListener("click",()=>{
                    entrada.value+=num6.value;
                    })
                           num7.addEventListener("click",()=>{
                        entrada.value+=num7.value;
                        })
                                num8.addEventListener("click",()=>{
                            entrada.value+=num8.value;
                            })
                                    num9.addEventListener("click",()=>{
                                entrada.value+=num9.value;
                                })
                                         num0.addEventListener("click",()=>{
                                    entrada.value+=num0.value;
                                    })
//operaciones(botones)
let estadoSuma=false
let estadoRes=false
let estadoMul=false
let estadoDiv=false
suma.addEventListener("click",()=>{
  estadoSuma=true;  
  suma.value;
    entrada2.value=entrada.value + suma.value;
    entrada.value="";
    })
 
    resta.addEventListener("click",()=>{
      estadoRes=true;
       resta.value;
        entrada2.value=entrada.value + resta.value;
        entrada.value="";
        })
        division.addEventListener("click",()=>{
          estadoDiv=true  
          division.value
          entrada2.value=entrada.value + division.value;
          entrada.value="";
            })
            multiplicacion.addEventListener("click",()=>{
              estadoMul=true  
             multiplicacion.value
             entrada2.value=entrada.value + multiplicacion.value;
             entrada.value="";
                })
//resultado(boton)
igual.addEventListener("click",()=>{
let dato1= entrada.value;
let operaciones;
let signo;
if(estadoSuma ===true){
  estadoRes=false;
  estadoMul=false;
  estadoDiv=false;
  operaciones=Sum;
  signo=suma.value;
}
  if (estadoRes ===true){
  estadoSuma=false;
  estadoMul=false;
  estadoDiv=false;
  operaciones=Res;
  signo=resta.value;
}
  if (estadoMul ===true){
    estadoSuma=false;
    estadoRes=false;
    estadoDiv=false;
    operaciones=Mul;
    signo=multiplicacion.value; 
  }
    if (estadoDiv ===true){
      estadoSuma=false;
      estadoRes=false;
      estadoMul=false;
      operaciones=Div;
    signo=division.value;
  }

    console.log(Calc(parseInt(entrada.value), parseInt(entrada2.value),operaciones), " vamo`a ver")
       entrada2.value+= dato1 +  igual.value + Calc(entrada.value, entrada2.value,operaciones)
       entrada.value=Calc(entrada.value,entrada2.value,operaciones);
          estadoSuma=false;
          estadoRes=false
          estadoDiv=false;
          estadoMul=false
        //  console.log("estado suma", estadoSuma)
         // console.log("estado resta", estadoRes)
}
)
function Clear(){
entrada.value="";
entrada2.value=""; 
}
clear.addEventListener("click",()=>{
  Clear()
  })

function Sum(num1,num2){
 return parseInt(num1) + parseInt(num2)
  
}
function Res(num1,num2){
 return parseInt(num2) - parseInt(num1)
  }
  function Div(num1,num2){
    return parseInt(num2) / parseInt(num1)
  }
  function Mul(num1,num2){
    return parseInt(num1) * parseInt(num2)
  }
function Calc(a,b,cb){
  return cb(a,b)
}

