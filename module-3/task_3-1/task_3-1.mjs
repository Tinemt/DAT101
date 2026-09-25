"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

const wakeuptime = 6;
const time = 7;
if (wakeuptime === time) {
    printOut("take the bus");
}else if (time === 8){
    printOut("take the train");
}else{
    printOut("take the car");
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part4number = 5;
if (part4number > 0) {
    printOut("The number is positive");
}else if(part4number < 0) {
    printOut("The number is negative");
}else{
    printOut("The number is zero");
}


printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const imagesizeMP = 4;
const imageMAXsize = 6;
const imageMINsize = Math.floor(Math.random() * 8) + 1;
printOut(`image user size = ${imageMINsize}`);
if (imageMINsize >= imagesizeMP){
    if(imageMINsize <= imageMAXsize){
    printOut("Thank you");
} else{
    printOut("image is too large");
}
}else{
    printOut("image is too small");
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthlist.length;
const monthName = monthlist[Math.floor(Math.random() * noOfMonth)];
printOut({monthName});
if (monthName.includes("r")){
    printOut("you must take vitamin D");
}else{
    printOut("you do not need to take vitamin D");
}




printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

switch(monthName){
    case "January":
    case "March":
    case "May": 
    case "July":
    case "August":
    case "October":
    case "December":

        printOut("This month has 31 days");
        break;
    case "February":
        printOut("This month has 28 days");
        break;
    default:
        printOut("This month has 30 days");

}




printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (monthName ==="March" || monthName === "May"){
    printOut("sorry, the gallery is closed");
}else if(monthName === "April"){
    printOut("sorry, main gallery is closed, you are welcome into the premiss next door");
}else{
    printOut("welcome to the gallery");
}





printOut(newLine);
