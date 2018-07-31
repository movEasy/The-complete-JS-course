// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = false;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);


// /********************************
//  * Variable mutatoin and type coercion
//  */

// var firstName = 'John';
// var age = 28;

// // Type coercion - JS automatically convert age to a string, so it can be
// // output it as a string in the console.log statement
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + 'is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation
// age = 'twenty eight';
// job = 'driver';

// /*****************************************
//  * Basic operators
//  */
// var year, yearJohn, yearMark;
// year = 2018;
// yearJohn = year - 28;
// yearMark = year - 33;

// console.log(yearJohn);

// /*******************************************
//  * Operator precedence
//  *  this precedence can be found on mozilla developer network
//  *  i.e. a subtraction have a higher precdedence than an equal-or opeartor
//  *  will be run first and the equal-or second
//  */

// var markMass, markHeigh, johnMass, johnHeight, markBMI, johnBMI, highestBMI
// markMass = 80;
// markHeigh = 1.80;

// markBMI = markMass / (markHeigh * markHeigh);

// johnMass = 70;
// johnHeight = 1.65;

// johnBMI = johnMass / (johnHeight * johnHeight);

// console.log(markBMI, johnBMI);

// highestBMI = markBMI > johnBMI;
// console.log(highestBMI);


// /********************************
//  * The ternary operator and swith statements 
//  */

// var firstName = 'John';
// var age = 16;

// age >= 18 ? console.log(firstName + 'drinks beer') :
//     console.log(firstName + ' drinks juice');

// var drink = age >= 18 ? 'beer' : 'juice';

// var job = 'teacher';

// // switch statements
// switch (job) {
//     case 'teacher':
//     case 'scientist':
//         console.log(firstName + 'dadsadsadsa');
//         break;

//     case 'driver':
//         console.log(firstName + 'dsadsadadsa');
//         break;

//     case 'designer':
//         console.log(firstName + 'dsadsadsadsa');
//         break;

//     default:
//         console.log(firstName + 'dsadsadsada');
// }

// /**
//  * Truthy and falsy values and equality operators
//  */

// // falsy values: undefined, null, 0, '', NaN
// // truthy values: NOT falsy values

// var height;

// // falsy value
// height = 0;

// if (height) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable is NOT defined');
// }

// // Equality operators
// if (height == '23') {
//     console.log("This returns true because of type coecion")
// }

// var johnTeamAvg, mikeTeamAvg

// johnTeamAvg = (89 + 120 + 103) / 3;
// mikeTeamAvg = (116 + 94 + 123) / 3;

// if (johnTeamAvg > mikeTeamAvg) {
//     console.log('Johns team wins on average with a score of ' + johnTeamAvg + '. Mikes team only scored an average of ' + mikeTeamAvg);   
// } else if (johnTeamAvg === mikeTeamAvg) {
//     console.log('Its a draw');
// } else {
//     console.log('Mikes team wins on average with a score of ' + mikeTeamAvg);   
// }

// /**
//  * Functions
//  */

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// console.log(ageJohn);

// function yearstoUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
// }

// yearstoUntilRetirement(1990, 'John');

// /**
//  * Function statements and expressions
//  */

// // function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + 'teachers kids how to code';

//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.';

//         case 'designer':
//             return firstName + ' designs beautiful websites';

//         default:
//             return firstName + ' does something else';
//     }
// }

// //function declaration
// function whatDoyouDo(job, firstName) {

// }

// // anything that produces a result is an expression
// // statements produce actions, but not any immediate values

// /******************************************
//  * Arrays
//  */

// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// var allTips = [];
// var allFinalAmount = [];

// function tipCalculator(amount)  {


//     if (amount < 50) {
//         var tip = amount * 0.20;
//         allTips.push(tip);

//         var finalAmount = amount + tip;
//         allFinalAmount.push(finalAmount);
//     } else if (amount > 50 && amount < 200) {
//         var tip = amount * 0.15;
//         allTips.push(tip);

//         var finalAmount = amount + tip;
//         allFinalAmount.push(finalAmount);
//     } else {
//         var tip = amount * 0.10;
//         allTips.push(tip);

//         var finalAmount = amount + tip;
//         allFinalAmount.push(finalAmount);
//     }
// }

// tipCalculator(48);
// tipCalculator(124);
// tipCalculator(268);
// console.log(allTips, allFinalAmount);
// console.log("hello");

/**
 * Objects and properties
 */

// Objects (key: value pairs) can be used to group together different variables
// Orders does not matter in objects

// var john = {
//     // firstName is a property of the john object
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
// };

// console.log(john);
// // dot notation used to read the value of the properties
// console.log(john.firstName);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1990;
// jane['lastName'] = 'Smith';
// console.log(jane);

/******************************************
 * Objects and methods
 * Only objects have methods
 */

// functions can be attached to objects and are called methods

// var john = {
//     // firstName is a property of the john object
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age =  2018 - this.birthYear;
//     }
// };

// // john.age = john.calcAge();

// // console.log(john.calcAge());

// john.calcAge();
// console.log(john);

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 88,
//     height: 1.90,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }
// };

// var mark = {
//     firstName: 'mark',
//     lastName: 'Smith',
//     mass: 88,
//     height: 1.90,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };

// john.calcBMI();
// mark.calcBMI();

// console.log(john, mark);


// by returning the this.bmi in the method, we can just call john.calcBMI instead of 
// john.bmi
// if (john.BMI > mark.BMI) {
//     console.log(john.firstName + ' ' + john.lastName + ' has the highest BMI of ' + john.BMI)
// } else if (john.BMI < mark.BMI) {
//     console.log(mark.firstName + ' ' + mark.lastName + ' has the highest BMI of ' + mark.BMI)
// } else {
//     console.log('Both Mark and John have the same BMI of ' + john.BMI);
// }


/*************************************
 * Loops and iteration
 */

/*
// Basic for loop, syntax: for (counter variable; condition eval before each loop, counter update)
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['John', 'Mark', 'Jane'];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// basic while loop, only has the condition
while(i < names.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements

// Continue
var names = ['John', 'Mark', 'Jane'];

for (var i = 0; i < names.length; i++) {
    if (typeof john[i] !== 'string') continue;

    console.log(names[i]);
}

// Break

var names = ['John', 'Mark', 'Jane'];

for (var i = 0; i < names.length; i++) {
    if (typeof john[i] !== 'string') break;

    console.log(names[i]);
}
*/

var billValues = {
    bills: [124, 48, 268, 180],
    totalTip: [],
    totalAmount: [],
    calcTip: function () {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                tip = this.bills[i] * 0.2;
                finalPaid = this.bills[i] + tip;

                this.totalTip.push(tip);
                this.totalAmount.push(finalPaid);

            } else if (this.bills[i] > 50 && this.bills[i] < 200) {
                tip = this.bills[i] * 0.15;
                finalPaid = this.bills[i] + tip;

                this.totalTip.push(tip);
                this.totalAmount.push(finalPaid);

            } else {
                tip = this.bills[i] * 0.1;
                finalPaid = this.bills[i] + tip;

                this.totalTip.push(tip);
                this.totalAmount.push(finalPaid);
                
            }
        }
    }
};

billValues.calcTip();

console.log(billValues.totalTip);
console.log(billValues.totalAmount);