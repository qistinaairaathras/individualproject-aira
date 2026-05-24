function add(){

    let a =
    parseFloat(document.getElementById("num1").value);

    let b =
    parseFloat(document.getElementById("num2").value);

    document.getElementById("result").innerHTML =

    "Result: " + (a + b);
}



function subtract(){

    let a =
    parseFloat(document.getElementById("num1").value);

    let b =
    parseFloat(document.getElementById("num2").value);

    document.getElementById("result").innerHTML =

    "Result: " + (a - b);
}



function multiply(){

    let a =
    parseFloat(document.getElementById("num1").value);

    let b =
    parseFloat(document.getElementById("num2").value);

    document.getElementById("result").innerHTML =

    "Result: " + (a * b);
}



function divide(){

    let a =
    parseFloat(document.getElementById("num1").value);

    let b =
    parseFloat(document.getElementById("num2").value);

    document.getElementById("result").innerHTML =

    "Result: " + (a / b);
}



/* BMI CHECKER */

function checkBMI(){

    let weight =
    parseFloat(document.getElementById("weight").value);

    let height =
    parseFloat(document.getElementById("height").value);

    /* convert cm to meter */

    height = height / 100;

    let bmi =
    weight / (height * height);

    let category = "";

    if(bmi < 18.5){

        category = "Underweight";
    }

    else if(bmi < 25){

        category = "Normal";
    }

    else if(bmi < 30){

        category = "Overweight";
    }

    else{

        category = "Obese";
    }

    document.getElementById("bmiResult").innerHTML =

    "Your BMI is " +

    bmi.toFixed(2) +

    " (" + category + ")";
}



/* INCOME TAX */

function calculateTax(){

    let income =

    parseFloat(document.getElementById("income").value);

    let tax = 0;

    if(income <= 5000){

        tax = income * 0.01;
    }

    else if(income <= 20000){

        tax = income * 0.03;
    }

    else if(income <= 50000){

        tax = income * 0.05;
    }

    else{

        tax = income * 0.08;
    }

    document.getElementById("taxResult").innerHTML =

    "Estimated Tax: RM " +

    tax.toFixed(2);
}



/* UNIT CONVERTER */

function cmToMeter(){

    let value =

    parseFloat(document.getElementById("convertValue").value);

    document.getElementById("convertResult").innerHTML =

    value / 100 + " meter";
}



function meterToCm(){

    let value =

    parseFloat(document.getElementById("convertValue").value);

    document.getElementById("convertResult").innerHTML =

    value * 100 + " cm";
}



function meterToKm(){

    let value =

    parseFloat(document.getElementById("convertValue").value);

    document.getElementById("convertResult").innerHTML =

    value / 1000 + " km";
}



function kmToMeter(){

    let value =

    parseFloat(document.getElementById("convertValue").value);

    document.getElementById("convertResult").innerHTML =

    value * 1000 + " meter";
}