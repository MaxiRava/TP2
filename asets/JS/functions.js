
function func_ej1(){
    let ej1_c1 = parseFloat(document.getElementById("ej1_c1").value);
    let ej1_c2 = parseFloat(document.getElementById("ej1_c2").value);
    let ej1_c3 = parseFloat(document.getElementById("ej1_c3").value);

    if ((ej1_c1 > ej1_c2)&&(ej1_c1>ej1_c3)){
        document.getElementById("ej1_resultado").value = "El mayor de todos es el " + ej1_c1;
    }
    if ((ej1_c2 > ej1_c3)&&(ej1_c2>ej1_c3)){
        document.getElementById("ej1_resultado").value = "El mayor de todos es el " + ej1_c2;
    }
    if ((ej1_c3 > ej1_c1)&&(ej1_c3>ej1_c2)){
        document.getElementById("ej1_resultado").value = "El mayor de todos es el " + ej1_c3;
    }
}

function func_ej2(){
    let ej2_c1 = parseFloat(document.getElementById("ej2_c1").value);
    let ej2_c2 = parseFloat(document.getElementById("ej2_c2").value);
    
    let ej2_suma = ej2_c1 + ej2_c2
    document.getElementById("ej2_resultado").value= ej2_suma;
    }

function func_ej3(){
    let ej3_c1 = document.getElementById("ej3_c1").value;
    let ej3_c2 = parseFloat(document.getElementById("ej3_c2").value);

    let ej3_resultado = ""
    for (let index = 0; index < ej3_c2; index++) {
        ej3_resultado = ej3_resultado + ej3_c1 + "_"
        //ej3_resultado += ej3_c1
    }
    document.getElementById("ej3_resultado").value = ej3_resultado;
    }

function func_ej4 (){
    let ej4_c1 = parseFloat(document.getElementById("ej4_c1").value);
    let ej4_c2 = parseFloat(document.getElementById("ej4_c2").value);
        
    let ej4_conversorFahren = (ej4_c1 * 9/5) + 32
    let ej4_conversorCelcius= (ej4_c2 - 32) * 5/9
    document.getElementById("ej4_c2").value = ej4_conversorFahren;
    document.getElementById("ej4_c1").value = ej4_conversorCelcius;
}

function func_ej5(){
    let ej5_c1 = document.getElementById("ej5_c1").value;

    let ej5Contador = ej5_c1.length
    document.getElementById("ej5_resultado").value = ej5_c1 + " tiene " + ej5Contador + " letras.";
}

function func_ej6(){
    let ej6_c1 = parseFloat(document.getElementById("ej6_c1").value);

    if (ej6_c1%2==0){
        document.getElementById("ej6_resultado").value = "El n??mero es par";
    }else{
        document.getElementById("ej6_resultado").value = "El n??mero es impar";
    }
    
}

function func_ej7(){
    let ej7_c1 = parseFloat(document.getElementById("ej7_c1").value);
    let ej7_c2 = parseFloat(document.getElementById("ej7_c2").value);

    const multiposDeTres = [];

    for (let i=1; i <= ej7_c2 && i <= ej7_c1; i++){
        if (i % 3 == 0){
          multiposDeTres.push(i);
        }
    }
    document.getElementById("ej7_resultado").value = multiposDeTres.toString();
}

function func_ej8(){
    let ej8_c1 = parseFloat(document.getElementById("ej8_c1").value);
    
    function esPrimo(numero){
        let divisores = 0;
        for(let i=2; i <= numero; i++) {        
            if(numero % i === 0) {
                divisores += 1;                    
            }
        }
        if(divisores===1){
            console.log(numero + " es primo")
            return true
        }else{
            console.log(numero + " no es primo")
            return false
        }
    }

    let Primo = [];

    for(let i=0; i <= ej8_c1; i++){
        console.log("i es " + i)
        if (esPrimo(i)){
            Primo.push(i);
        }
    }

    document.getElementById("ej8_resultado").value = Primo.toString();
}

function func_ej9(){
    let ej9_c1 = document.getElementById("ej9_c1").value;
    let ej9_c2 = document.getElementById("ej9_c2").value;
    let ej9_c3 = parseFloat(document.getElementById("ej9_c3").value);
    let ej9_c4 = document.getElementById("ej9_c4").value;

    document.getElementById("ej9_resultado").value = "Mi nombre es " + ej9_c1 + " " + ej9_c2 + ", tengo " + ej9_c3 + " a??os. Nac?? en la ciudad de " + ej9_c4 + ".";
}

function func_ej10 () {

    let ej10_c1= parseFloat(document.getElementById("ej10_c1").value);
    let ej10_c2= parseFloat(document.getElementById("ej10_c2").value);

    let ej10_resultado= ""

    if (ej10_c1>ej10_c2){
        for(i=ej10_c2 + 1; i < ej10_c1; i ++){
            ej10_resultado= ej10_resultado + i + "-"
        }
    }else{
        for(i=ej10_c1 + 1; i < ej10_c2; i++){
            ej10_resultado= ej10_resultado + i + "-"
        }
    }   
    document.getElementById("ej10_resultado").value = ej10_resultado;
}