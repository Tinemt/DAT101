"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function skrivDagensDato() {
    const dato = new Date().toLocaleDateString("no-NO", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    printOut(dato);
}

skrivDagensDato();


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function dagensDato() {
    const idag = new Date();
    const norskDato = idag.toLocaleDateString("no-NO", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    return norskDato;
}

function dagerTilPremiere() {
    const idag = new Date();
    const premiere = new Date("2027-09-15"); // internasjonal dato
    const diffTid = premiere - idag; // forskjell i millisekunder
    const dagerIgjen = Math.ceil(diffTid / (1000 * 60 * 60 * 24)); // konverter til dager
    return dagerIgjen;
}

function visNedtelling() {
    const dato = dagensDato();
    const dager = dagerTilPremiere();
    printOut(`I dag er det ${dato}.`);
    printOut(`Det er ${dager} dager igjen til Demon Slayer: Infinity Castle – Part 2 har internasjonal premiere!`);
}

visNedtelling();




printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function sirkel (radius) {
    const diameter = radius * 2;
    const omkrets = 2 * Math.PI * radius;
    const areal = Math.PI * radius ** 2;

    printOut(`For en sirkel med radius ${radius} cm:`);
    printOut(`Diameter: ${diameter.toFixed(2)} cm`);
    printOut(`Omkrets: ${omkrets.toFixed(2)} cm`);
    printOut(`Areal: ${areal.toFixed(2)} cm²`);
}

sirkel(5);



printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


function rektangel (lengde, bredde) {
    const omkrets = 2 * (lengde + bredde);
    const areal = lengde * bredde;

    printOut(`For et rektangel med lengde ${lengde} cm og bredde ${bredde} cm:`);
    printOut(`Omkrets: ${omkrets.toFixed(2)} cm`);
    printOut(`Areal: ${areal.toFixed(2)} cm²`);
}

rektangel(10, 5);





printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function tempratur (temperatur, type) {
    let celsius, fahrenheit, kelvin;

    if (type === "C") {
        celsius = temperatur;
        fahrenheit = (temperatur * 9/5) + 32;
        kelvin = temperatur + 273.15;
    } else if (type === "F") {
        fahrenheit = temperatur;
        celsius = (temperatur - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (type === "K") {
        kelvin = temperatur;
        celsius = temperatur - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    } else {
        printOut("Ugyldig temperaturtype. Bruk 'C', 'F' eller 'K'.");
        return;
    }

    printOut(`Temperaturkonvertering:`);
    printOut(`${Math.ceil(celsius * 100) / 100} °C`);
    printOut(`${Math.ceil(fahrenheit * 100) / 100} °F`);
    printOut(`${Math.ceil(kelvin * 100) / 100} K`);
}

tempratur(25, "C");
tempratur(75, "F");
tempratur(169, "K");


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function momsBeregning (prismMoms,momsgruppe){
    momsgruppe = "" + momsgruppe.toLowerCase() + "";
let pris = 0;

if (momsgruppe == "normal") {
    momsgruppe = 25;
    pris = (100 * prismMoms) / (momsgruppe + 100);
    printOut("Price without VAT: " + pris.toFixed(2));

}else if (momsgruppe == "food") {
    momsgruppe = 15;
    pris = (100 * prismMoms) / (momsgruppe + 100);
    printOut("Price without VAT: " + pris.toFixed(2));

}else if (momsgruppe == "hotel") {
    momsgruppe = 10;
    pris = (100 * prismMoms) / (momsgruppe + 100);
    printOut("Price without VAT: " + pris.toFixed(2));

}else if (momsgruppe == "cinema") {
    momsgruppe = 10;
    pris = (100 * prismMoms) / (momsgruppe + 100);
    printOut("Price without VAT: " + pris.toFixed(2));

}else{
    printOut(momsgruppe + " is an unknown moms group");
}

}

momsBeregning(125, "normal");
momsBeregning(123, "food");
momsBeregning(134, "HOTEL");
momsBeregning(111, "boat");


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/








printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function string(text, max, character, boolean) {
    if (text.length < max && boolean === false) {
    let forskjell = max - text.length;
    text = text + character.repeat(forskjell);
    } else if (text.length < max && boolean === true) {
    let forskjell = max - text.length;
    text = character.repeat(forskjell) + text;
    }
    printOut(text);
}
string("Hello", 10, "*", false);
string("Hello", 10, "*", true);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/





printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
printOut(`Factorial of ${n} is ${result}`);
}

factorial(5);



printOut(newLine);
