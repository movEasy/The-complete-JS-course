// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge =
    function () {
        console.log(2016 - this.yearOfBirth);
    }


// Instanceciation
var john = new Person('John', 1990, 'teacher');

john.calculateAge();


// Object.create
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    year: { value : 1969 },
    job { value: 'designer' }
});
*/

// Primitives vs objects

// Variable created as a object, only points to the place in memory where the object is created
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


var obj1 = {
    name: 'John',
    age: 26
};
// Her we reference the exact same object in memory, meaning that we
// change the age on the object both obj1 and obj2 gets the new age value
var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lison'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

// When we pass a primitive a simple copy is made, when we pass a object we only pass the reference


/**
 *  Passing functions as arguments
 */
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(fullAges);

*/

/**
 * Functions returning functions
 */

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you tect, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var techerQuestion = interviewQuestion('teacter');
var designerQuestin = interviewQuestion('designer');

teacherQuestion('John');
designerQuestin('John');

interviewQuestion('teacher')('Mark');
*/

/**
 * IIFE
 */

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);


/**
 * Closures
 */

// function retirement(retirementAge) {
//     var a = ' years left until retirement';
//     return function (yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);

// function interviewQuestion(job) {
//     return function (name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log('What subject do you tect, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

/**
 * Bind, call and apply
 */

/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemnet! I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey§ What\'s pu? Im ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer',
};

john.presentation('formal', 'morning');

// call allows us to set the this variable. The difference between call and apply is that apply accept an array
// call
john.presentation.call(emily, 'friendly', 'afternoon');
// array
john.presentation.array(emily, ['friendly', 'afternoon']);

// bind - very similar to call method. But bind generates a copy of the function
// This is called currying
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');
*/




// 1. Build a function constructor called Question to describe a question. A question should include:
// a) the question
// b) the answers from which the player can choose the correct one
// correct answer

var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.getRandomNum = function () {
        return ranNum = Math.floor(Math.random() * 2);
    }
};

var firstQuestion = new Question('Favorite icecreem', ['Cherry', 'Blueberry', 'Choco'], 'a');
var secondQuestion = new Question('Best movie', ['Lord of the rings', 'Lord of the rings', 'Lord of the rings'], 'c');

var questionArray = [firstQuestion, secondQuestion];








var displayQuestion = function () {

    if (questionArray[0] === 0) {
        console.log('What is your ' + firstQuestion.question + '?. Please choose an answer:');
        console.log('a: ' + firstQuestion.answers[0] + ' b: ' + firstQuestion.answers[1] + ' c: ' + firstQuestion.answers[2]);
        
        var answer = prompt()
            if (answer === firstQuestion.correctAnswer) {
                console.log('That is correct!');
            } else {
                console.log('That is wrooooooooooooooooooooooooooooong');
            }
        
        //setTimeout(5000, displayQuestion);

    } else {
        console.log('What is your ' + secondQuestion.question + '?. Please choose an answer:');
        console.log('a: ' + secondQuestion.answers[0] + ' b: ' + secondQuestion.answers[1] + ' c: ' + secondQuestion.answers[2]);
        
        var answer = prompt()
            if (answer === secondQuestion.correctAnswer) {
                console.log('That is correct!');
            } else {
                console.log('That is wrooooooooooooooooooooooooooooong');
            }
    }
}

displayQuestion();
