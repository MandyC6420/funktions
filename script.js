function sayILove(){
    console.log("I love Javascript")
}
sayILove()

function sayHello(friendName, greeting){
    console.log(`${greeting}, ${friendName}`)
}

sayHello("Stan", "Hi")
sayHello("Nancy", "What's Up?")
sayHello("Pete", "Hello")

function nameDestination(name, destination){
    console.log(`${name}, would love to visit ${destination}`)
}

nameDestination("Mandy",  "Hawaii")
nameDestination("Sarah", "Taipei")
nameDestination("Marley", "Jamaica")


//tacoTruck

function tacoTruck(typeOfShell, topping){
    let tacoSentence = `Your ${typeOfShell} taco with ${topping} is ready!`
    return tacoSentence
}

let finishedTacoSentence = tacoTruck("soft shell", "chicken and rice")

console.log(finishedTacoSentence)

// Calculator
// Write a function called add. It should accept two numbers as parameters and log their sum to the console.
let x = 2
let y = 2

function add(x, y){
    console.log(x + y)
}

add(2, 2)
// Write a function called subtract. It should accept two numbers as parameters and log the difference between the first and second number to the console.
let z = 4
let a = 4

function subtract(z, a){
    console.log(z - a)
}

subtract(4, 4)

// Write a function called multiply. It should accept two numbers as parameters and log their product to the console.

let b = 7
let c = 8

function multiply(b, c){
    console.log(b * c)
}

multiply(7,8)
// Write a function called divide. It should accept two numbers as parameters, divide the first number by the second number, and log the result to the console.

let d = 6
let e = 7

function divide(d, e){
    console.log(d / e)
}
divide(6,7)
// Call each function three times with different parameters.

add(6, 7)
add(9, 8)
add(8, 8)

subtract(3, 3)
subtract(6, 3)
subtract(7, 3)

multiply(3, 3)
multiply(4, 4)
multiply(7, 7)

divide(3, 3)
divide(7, 3)
divide(6, 4)

// Calculator Refactor

//refactor to:  function tacoTruck(typeOfShell, topping){
//     let tacoSentence = `Your ${typeOfShell} taco with ${topping} is ready!`
//     return tacoSentence
// }

// let finishedTacoSentence = tacoTruck("soft shell", "chicken and rice")

// console.log(finishedTacoSentence)

// Refactor your previous exercise so that each calculator function returns the result of its calculations. You should not have any console.logs inside your functions.
    function add(x, y){
        let addition = x + y
        return addition
    }

    let finishedMath = add(2, 2)

    console.log(finishedMath)

    
    function subtract(x, y){
        let subtraction = x - y
        return subtraction
    }

    let finishedMath2 = subtract(4, 2)
    console.log(finishedMath2)

    function multiply(x, y){
        let multiplication = x * y
        return multiplication
    }
    let finishedMath3 = multiply(8, 7)
    console.log(finishedMath3)

    function divide(x, y){
        let division = x / y
        return division
    }
    let finishedMath4 = divide(20, 5)
    console.log(finishedMath4)

// When you execute your calculator functions, store each result in a new variable and log the variable to the console. The console.logs should now be outside the scope of your functions.

// Greetings Pt. 2
// Revisit the greetings exercise you did in the conditionals chapter, where you logged a greeting to the console based on the person's preferred language.

// Write a function that accepts two parameters: name and language.
function greetings(firstName, language){
  if(language === `Spanish`){
    console.log(`Hola, ${firstName}`)
  }else if(language === `English`){
      console.log(`Hello, ${firstName}`)
  }else if(language === `French`){
      console.log(`Bonjour, ${firstName}`)
  }

}
greetings("Elsa", "French")
greetings("Ferdinand", "Spanish")
greetings("Amara", "English")
// If the person's preferred language is English, the function should print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

// Sandwich Maker
// Write a function that accepts three parameters: breadType (a string), sandwichName, and isToasted (a boolean).

function mySandwich(breadType, sandwichName, isToasted){
    // let isToasted = true
    
}

// The function should check whether isToasted is true or false and build a sentence about the sandwich order accordingly.
// The function should return the sentence.
// Call the function three times, passing in three different sets of parameters.
// Example console output:

// "You ordered a toasted meatball sub sandwich on wheat."