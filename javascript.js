function c2f(){
    //fonction pour convertir celsius vers fahrenheit
    //Recupère la température saisie par l'utilisateur
    let celsius= document.getElementById("celsius").value;

    //Calcul
    let calcul;
    let resultat;
    let controle; 

    if (!celsius){
        resultat = "vide";
        controle = false;
    } else{
        calcul = celsius * 9/5 + 32;
        resultat = Math.floor(calcul);
        controle = true;
    }
  //affiche le résultat dans l'input Fahrenheit
  let fahrenheit = document.getElementById("fahrenheit");
  if ( controle === true ){
      fahrenheit.value = resultat;}
    
    //affiche le résultat --> test ONLY
    console.log(resultat);
}

function f2c(){
    let celsius = document.getElementById("celsius");
    let fahrenheit= document.getElementById("fahrenheit").value;
    let resultat;
    let calcul;
    let controle;

    if (!fahrenheit){
        resultat = "vide";
        controle = false;
    } else{
        calcul = (fahrenheit - 32 )* 5/9;
        resultat = Math.floor(calcul);
        //resultat = calcul.toFixed(2); --> arrondi à décimales.
        controle = true;
    }
        if ( controle === true ){
            celsius.value = resultat;}
}

/*
Fonction pour l'interface
*/

//variable pour définir les calculs
var type_calcul;//variable qui permet de savoir quel calcul doit être effectué
type_calcul = "celsius2fahrenheit";//valeur par défaut 

/*
 * Si type_calcul vaut "celsius2fahrenheit", on convertit de celsius vers fahrenheit
 * Si type_calcul vaut "fahrenheit2celsius", on convertit de fahrenheit vers celsius
 */

/*const label_c = document.getElementById("label_celsius");
const label_f = document.getElementById("label_fahrenheit");*/

function intervertir(param1, param2){
    //fonction pour intervertir celsius et fahrenheit
    //param1 --> type de calcul
    //param2 --> text de conversion

    if (param1 === "celsius2fahrenheit"){
        type_calcul = "fahrenheit2celsius";

        document.getElementById (param2).innerHTML = "Fahrenheit vers Celsius";


        console.log("Valeur par défaut");
    } else{ 
        type_calcul = "celsius2fahrenheit";

        document.getElementById (param2).innerHTML = "Celsius vers Fahrenheit";


        console.log("Autre valeur");

    }
    
}

/**
 * Le calcul en fonction du contenu de type_calcul
 */

function convertir(param1){
    //fonction pour effectuer le calcul final

    //variable pour le résultat
    function c2f(){
        //fonction pour convertir celsius vers fahrenheit
        //Recupère la température saisie par l'utilisateur
        let temperature= document.getElementById("celsius").value;
        let affichage = document.getElementById("resultat");
        //Calcul
        let calcul;
        let resultat;
        let controle; 
    
        if (!temperature){
            resultat = "vide";
            controle = false;
        } else{
            calcul = temperature * 9/5 + 32;
            resultat = Math.floor(calcul);
            controle = true;
        }
        //affiche le résultat dans l'input Fahrenheit
      
        if ( controle === true ){
          affichage.innerHTML = resultat + "°F";}
        
        //affiche le résultat --> test ONLY
        console.log(resultat);
        }

    function f2c(){
        let temperature = document.getElementById("celsius").value;
        let affichage = document.getElementById("resultat");
        let resultat;
        let calcul;
        let controle;
    
        if (!temperature){
            resultat = "vide";
            controle = false;
            console.log("résultat if");
        } else{
            calcul = (temperature - 32 )* 5/9;
            resultat = Math.floor(calcul);
            //resultat = calcul.toFixed(2); --> arrondi à décimales.
            controle = true;
            console.log("résultat else");
        }
            if ( controle === true ){
                affichage.innerHTML = resultat + "°C";}
            
    }

    let conversion; 

    if(param1 === "celsius2fahrenheit"){
        conversion = c2f();
    } else{
        conversion = f2c();
    }

    return conversion;
}

/*
Interface 
*/

const alternate = document.getElementById("alternate");
alternate.addEventListener("click", function() {intervertir (type_calcul, "label_celsius")});

const button_convert = document.getElementById('button_convert'); 
button_convert.addEventListener("click", function (){
    convertir(type_calcul);
});