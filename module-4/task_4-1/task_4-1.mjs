"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

const accounttype = {
  Normal : "Brukskonto",
  Saving : "Sparekonto",
  Credit : "Kredittkonto",
  Pension : "Pensjonskonto"
}

class Taccount {
  #type;
  #balance;
  #withdrawcount;
  #currencytype;

  constructor(atype){
    this.#type = atype;
    this.#balance = 0.0;
    this.#withdrawcount = 0;
    this.#currencytype = CurrencyTypes.NOK;
  }

  #currencyconvert(atype){
    return CurrencyTypes.NOK.value / this.#currencytype.value * atype.value;
  }

  tostring() {
    return this.#type;

  }

  settype(atype) {
    printOut(`Kontotypen er endret fra ${this.#type} til ${atype}`);
    this.#type = atype;
    this.#withdrawcount = 0;
  }

  getbalance() {
    return this.#balance;
  }

  deposit(aAmount, atype = CurrencyTypes.NOK) {
    const newamount = aAmount / this.#currencyconvert(atype);
    this.#balance += newamount;
    this.#withdrawcount = 0;
    const den = this.#currencytype.denomination;
    const txtbalance = this.#balance.toFixed(2);
    printOut(`innskudd av ${aAmount} ${atype.name}, Ny saldo er ${txtbalance}${den}`);
  }

  withdraw(aAmount, atype) {
    if(atype === undefined) {
      atype = CurrencyTypes.NOK;
    }
    let canwithdraw = true;
    switch(this.#type) {
      case accounttype.Pension:
        canwithdraw = false;
        printOut("du kan ikke ta ut penger fra pensjonskontoen");
        break;
      case accounttype.Saving:
        if(this.#withdrawcount >= 3) {
          canwithdraw = false;
          printOut("du kan ikke ta ut mer enn 3 ganger fra sparekontoen");
        }
        break;
    }

    if(canwithdraw === true) {
      const newamount = aAmount / this.#currencyconvert(atype);
      this.#balance -= newamount;
      this.#withdrawcount++;
      const den = this.#currencytype.denomination;
      const txtbalance = this.#balance.toFixed(2);
      printOut(`uttak av ${aAmount} ${atype.name}, Ny saldo er ${txtbalance}${den}`);
    }
  }


  setcurrencytype(atype) {
    if(atype === this.#currencytype) {
      return;
    }
  
    printOut(`kontovalutaen er endret fra ${this.#currencytype.name} til ${atype.name}`);
    this.#balance *= this.#currencyconvert(atype);
    this.#currencytype = atype;
    const txtbalance = this.#balance.toFixed(2);
    printOut(`ny saldo er ${txtbalance}${this.#currencytype.denomination}`);
  }

}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const accounttypekeys = Object.keys(accounttype);
printOut(accounttypekeys.toString());



printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const myaccount =  new Taccount(accounttype.Normal);
printOut(`myaccount = ${myaccount.tostring()}`);
myaccount.settype(accounttype.Saving);



printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myaccount.deposit(100);
myaccount.withdraw(25);
printOut(`myaccount balance is ${myaccount.getbalance()}`);


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myaccount.deposit(25);
myaccount.withdraw(30);
myaccount.withdraw(30);
myaccount.withdraw(30);
myaccount.withdraw(30);
myaccount.settype(accounttype.Pension);
myaccount.withdraw(30);
myaccount.settype(accounttype.Saving);
myaccount.withdraw(10);



printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myaccount.deposit(150);



printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myaccount.setcurrencytype(CurrencyTypes.SEK);
myaccount.setcurrencytype(CurrencyTypes.USD);
myaccount.setcurrencytype(CurrencyTypes.NOK);




printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myaccount.deposit(12, CurrencyTypes.USD);
myaccount.withdraw(10, CurrencyTypes.GBP);
myaccount.setcurrencytype(CurrencyTypes.CAD);
myaccount.setcurrencytype(CurrencyTypes.INR);

myaccount.withdraw(150.1585, CurrencyTypes.SEK);


printOut(newLine);
