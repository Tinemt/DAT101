"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//
const orgMathExp = "2 + 3 * 2 - 4 * 6"
const newMathExp = "2 + 3 * (2 - 4) * 6"
const mathExpanswer = 2 + 3 * (2 - 4) * 6
printOut(orgMathExp);
printOut(newMathExp);
printOut(mathExpanswer);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const meters = 25*1000;
const cmeters = 34*10;
const mmeters = meters + cmeters;
printOut(mmeters);
const millPRInsh = 25.4;
const sum = mmeters / millPRInsh;
printOut(sum.toFixed(2));


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const days = 3*24*60;
const hours = 12*60;
const minutes = 14
const seconds = 45/60;

const totalMinutes = days + hours + minutes + seconds;
printOut(totalMinutes);


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const TotalDays = 6322.52 / (24*60);
const WholeDays = Math.floor(TotalDays);
printOut(WholeDays);

const lefoverF = TotalDays - WholeDays;
const totalHours = lefoverF * 24;
const WholeHours = Math.floor(totalHours);
printOut(WholeHours);

const lefoverF2 = totalHours - WholeHours;
const totalminutes = lefoverF2 * 60;
const WholeMinutes = Math.floor(totalminutes);
printOut(WholeMinutes);

const leftoverF3 = totalminutes - WholeMinutes;
const totalSeconds = leftoverF3 * 60;
const WholeSeconds = Math.floor(totalSeconds);
printOut(WholeSeconds);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const Nok = 76 / 8.6;
const orgUSD = 54;

const USDtilNOK = orgUSD * Nok;
const UandN = Math.round(USDtilNOK);
printOut(UandN);
printOut(orgUSD);



printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const tekst = "There is much between heaven and earth that we do not understand";
const leingth = tekst.length;
printOut(leingth);

const caracter = tekst.charAt(19);
printOut(caracter);

const potion = tekst.substring(35, 43);
printOut(potion);

const specific = tekst.indexOf("earth");
printOut(specific);


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const a = 5>3;
printOut(a);
const b = 7>=7;
printOut(b);
const c = a>b;
printOut(c);
const d = 1<a;
printOut(d);
const e = 2500<a+b+c+d;
printOut(e);
const f = "arne"==="thomas";
printOut(f);
const g = 2===5;
printOut(g);
const h = (a+b+c+d)>(b+c+d);
printOut(h);



printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const one = "254";
const ONE = Number(one);
printOut(ONE);

const two = "57.23";
const TWO1 = parseInt(two);
const TWO2 = parseFloat(two);
printOut(TWO1);
printOut(TWO2);

const three = "25 kroner";
const THREE = parseInt(three);
printOut(THREE);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const r = Math.random ()*360;
printOut(Math.floor(r));



printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let dager = 131;
let uker = Math.floor(dager / 7);
let resten = 131 % 7;
printOut(uker);
printOut(resten);


printOut(newLine);