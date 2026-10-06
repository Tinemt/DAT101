"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let taksline = "line 1: ";
for (let i = 1; i <= 10; i++) {
    taksline += i + " ";
}
printOut(taksline);
taksline = "line 2: ";
for (let i = 10; i >= 1; i--) {
    taksline += i + " ";
}
printOut(taksline);




printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let nuber = 100;
while (nuber !== 45){
    nuber = Math.floor(Math.random() * 60) + 1;
}
printOut(`The number is ${nuber}`);



printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let nuber2 = 0;
let count = 0;
let starttime = Date.now();
while (nuber2 !== 123){
    nuber2 = Math.floor(Math.random() * 1000000) + 1;
    count++;
}
    printOut("the number is " + nuber2);    
    printOut("the count is " + count);
    printOut("the time is " + (Date.now() - starttime) + "ms");



printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
count = 0;
let linje = " ";

for (let tall = 2; tall <= 200; tall ++){
    let divi = 2;
    let count2 = 0;


while (divi < tall){
    count2 += tall % divi === 0;
    divi ++;
}

    if (count2 === 0){
        linje += tall + " ";
        count ++;

        if (count % 10 === 0){
            linje += "<br>";
        }
    } 
}
printOut (linje);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let K = 1; K <= 7; K ++){
    let line = " ";

    for (let R = 1; R <= 9; R ++){
        line += "K" + R + "R" + K + " ";
    }
    printOut (line);
}





printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let grade = (Math.random(1,236)) * 100;
if (grade >= 89){
    printOut(`kandidaten fikk A med ${grade} poeng`);
} else if (grade >= 77){
    printOut(`kandidaten fikk B med ${grade} poeng`);
} else if (grade >= 65){
    printOut(`kandidaten fikk C med ${grade} poeng`);
} else if (grade >= 53){
    printOut(`kandidaten fikk D med ${grade} poeng`);
} else if (grade >= 41){
    printOut(`kandidaten fikk E med ${grade} poeng`);
} else {
    printOut(`kandidaten fikk F med ${grade} poeng`);
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let kast = 0;
// anntall kast
let fullstraightF = false;
let pairsF = false;
let towerF = false;
let yatzyF = false;

//kast
let fullstraight = 0;
let pairs = 0;
let tower = 0;
let yatzy = 0;


while (!fullstraightF || !pairsF || !towerF || !yatzyF) {
    kast++;
    let terning1 = Math.floor(Math.random() * 6) + 1;
    let terning2 = Math.floor(Math.random() * 6) + 1;
    let terning3 = Math.floor(Math.random() * 6) + 1;
    let terning4 = Math.floor(Math.random() * 6) + 1;
    let terning5 = Math.floor(Math.random() * 6) + 1;
    let terning6 = Math.floor(Math.random() * 6) + 1;

    let a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0;

    if (terning1 === 1) a1++;
    if (terning2 === 1) a1++;
    if (terning3 === 1) a1++;
    if (terning4 === 1) a1++;
    if (terning5 === 1) a1++;
    if (terning6 === 1) a1++;

    if (terning1 === 2) a2++;
    if (terning2 === 2) a2++;
    if (terning3 === 2) a2++;
    if (terning4 === 2) a2++;
    if (terning5 === 2) a2++;
    if (terning6 === 2) a2++;

    if (terning1 === 3) a3++;
    if (terning2 === 3) a3++;
    if (terning3 === 3) a3++;
    if (terning4 === 3) a3++;
    if (terning5 === 3) a3++;
    if (terning6 === 3) a3++;

    if (terning1 === 4) a4++;
    if (terning2 === 4) a4++;
    if (terning3 === 4) a4++;
    if (terning4 === 4) a4++;
    if (terning5 === 4) a4++;
    if (terning6 === 4) a4++;

    if (terning1 === 5) a5++;
    if (terning2 === 5) a5++;
    if (terning3 === 5) a5++;
    if (terning4 === 5) a5++;
    if (terning5 === 5) a5++;
    if (terning6 === 5) a5++;

    if (terning1 === 6) a6++;
    if (terning2 === 6) a6++;
    if (terning3 === 6) a6++;
    if (terning4 === 6) a6++;
    if (terning5 === 6) a6++;
    if (terning6 === 6) a6++;

    // check for full straight
    if (!fullstraightF && a1 === 1 && a2 === 1 && a3 === 1 && a4 === 1 && a5 === 1 && a6 === 1) {
        fullstraightF = true;
        fullstraight = kast;

        printOut (`${terning1}, ${terning2}, ${terning3}, ${terning4}, ${terning5}, ${terning6}`);
        printOut(`Full straight achieved after ${kast} rolls.`);
    }

if (!yatzyF && a1 === 5 || a2 === 5 || a3 === 5 || a4 === 5 || a5 === 5 || a6 === 5) {
        yatzyF = true;
        yatzy = kast;

        printOut (`${terning1}, ${terning2}, ${terning3}, ${terning4}, ${terning5}, ${terning6}`);
        printOut(`Yatzy achieved after ${kast} rolls.`);
    }

let parr = 0;

if (a1 === 2) parr++;
if (a2 === 2) parr++;
if (a3 === 2) parr++;
if (a4 === 2) parr++;
if (a5 === 2) parr++;
if (a6 === 2) parr++;

if(!pairsF && parr === 3) {
    pairsF = true;
    pairs = kast;

    printOut (`${terning1}, ${terning2}, ${terning3}, ${terning4}, ${terning5}, ${terning6}`);
    printOut(`Pairs achieved after ${kast} rolls.`);
}

let firelike = false;
let tolike = false;

if (a1 === 4 || a2 === 4 || a3 === 4 || a4 === 4 || a5 === 4 || a6 === 4) {
    firelike = true;
}

if (a1 === 2 || a2 === 2 || a3 === 2 || a4 === 2 || a5 === 2 || a6 === 2) {
    tolike = true;
}

if (!towerF && firelike && tolike) {
    towerF = true;
    tower = kast;

    printOut (`${terning1}, ${terning2}, ${terning3}, ${terning4}, ${terning5}, ${terning6}`);
    printOut(`Tower achieved after ${kast} rolls.`);
}

}

printOut(newLine);
