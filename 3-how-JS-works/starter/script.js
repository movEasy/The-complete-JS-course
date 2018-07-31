///////////////////////////////////////
// Lecture: Hoisting

// since the function is hoisted, we can call it before we create it
// since it is already available
calculateAge(1990);

function calculateAge(year) {
    console.log( 2016 - year);
}


// since this is a function expression, hoisting does not work
// as it does above since that is a function declaration

// retirement(1990);

var retirement = function(year) {
    console.log(65 - (2016 - year))
}

// Variables

// In the creation phase of the variable object, the code are 
// scanned for variable declarations and the variables are then
// sat to undefined. SO by running the below code, JS knows that
// a variable are declared, but it is set to undefined since 
// the value haven't been set yet
console.log(age);
var age = 23;


function foo() {
    // this will return undefined because of the execution context
    console.log(age)
    var age= 65;
    console.log(agE);
}

// Get its own execution context
foo();
// Global execution object
console.log(age);










///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// in the global context, this is the window object
console.log(this);

calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);

    // this is a regular func call so this points to the 
    // global object
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        // here it refers to the john object
        console.log(this);

        function innerFunction() {
            // here the 'this' is the window object
            // bc when a regular function call is made
            // it points to the window obejct
            console.log(this);
        }

        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();

// because it is the mike object that calls the function
// this.yearOfBirth refers to the mike object since it is this
// object that calls the method

