import log from './consoleScript';
import { isEqual, getRandomItemFromArray, } from './utils'

const lightTheme = Object.freeze({
    headerBlue: '#8080ff',
    lightBlue: '#b3b3ff',
    headerShadow: '0 0 4px 6px lightgrey'
})

const practiceColors = [
    '#f40012', 'salmon', '#ff8088', 
    '#cc0066', '#ccff66', 'red', 
    '#aaff80', '#99ddff', '#ccccff',
    '#99ccff', '#d11aff', '#ffd633'
]

function hintMessage(message) {
    return `[Hint]: ${message}`
}

const phases = username => Object.freeze({
    variablesConst: {
        codeLines: [
            "// This is a comment",
            "// Every line that starts with '//' it's a comment",
            "// It means the browser ignores it,",
            "// And it doesn't executes it like a regular peace of code",
            "// In order to create a variable we are using 'const' keyword",
            "// It doesn't mean that it's a constant",
            "// It does mean that it can't be re assign",
            "// For example:",
            "const isReady = true // legal",
            "// But re assign it's illegal:",
            "isReady = false // illegal",
            "// And also re decalre:",
            "const isReady = false // illegal"
        ],
        codeDescription: "Create isReady const and when you done," +
            " call the function next, and provide isReady. For example: next(isReady)",
    },
    variablesLet: {
        codeLines: [
            "// We can also use the keyword 'let'",
            "// This keyword allows us to store a variable",
            "// And re assign it in the future",
            "// For example:",
            "let myName = 'Avner' // legal",
            `myName = '${username}' // legal`,
            "// But we can't re declare it:",
            "let myName = 'someOtherName' // illegal",
            "// Please notice! we will choose const over let",
            "// In order to keep our variables with the original values"
        ],
        codeDescription: "You can keep next",
    },
    variablesVar: {
        codeLines: [
            "// We can also use the keyword 'var'",
            "// This keyword allows us to store a variable",
            "// And re assign it in the future",
            "// And also re declare it",
            "// For example:",
            "var num = 9 // legal",
            'num =  6 // legal',
            "var num = 7 // legal",
            "// Please notice! we will choose const and let over var",
            "// In order to know which variable contains what"
        ],
        codeDescription: "You can keep next"
    },
    dataTypeNumber: {
        codeLines: [
            "// Data types: Number",
            "// In JavaScript, We dont need to declare types",
            "// But, every variable which we are creating has a data type.",
            "// For example:",
            "const num1 = 1 // 'number'",
            "// This one above, his type is 'number'",
            "const num2 = 3.999 // Still a 'number'",
            "// There are no differents between float or integer.",
            "// Number is 'number'",
            "// We can use 'typeof' keyword, in order to validate type",
            "// For example:",
            "typeof num1 === 'number'",
            "// The answer will be a 'boolean' type",
            "// It means true or false"
        ],
        codeDescription: "Try it yourself inside the console & Keep next",
    },
    dataTypeBoolean: {
        codeLines: [
            "// Data types: Boolean",
            "// Boolean represent a true or false value",
            "// Boolean value can be stored inside a variable",
            "// For example:",
            "const isCool = true",
            "// We can alse initiate boolean variable with a boolean expression",
            "// For example:",
            "const isCool2 = userName === 'Avner'",
            "// The '===' operator stands for equality check",
            "// We can use brackets to close over our expression",
            "// For example: ",
            "const isKid = (age < 18 && age > 1)"
        ],
        codeDescription: "Try to initiate few variables & keep next"
    },
    dataTypeString: {
        codeLines: [
            "// Data types: String",
            "// String represent a text value",
            "// Unlike Number or Boolean, String is an object",
            "// It means that it has attributes & functions",
            "// There are few ways to initiate String: ",
            `const myName = "${username}"`,
            '// In this example, We are using double quotes "..."',
            "// By using double quotes we can combine single qoutes inside our String",
            "// For instance:",
            `const sup = "what' up?"`,
            "// We can do the same with single quotes:",
            `const smartQuote = '"hahaha"`,
            "// The last one is a template String:",
            "const someString = `some text...`",
            "// When we are using template String, we can inject values inside the String:",
            "const number = 9",
            "const withNumber = `this is the number: ${number}`",
            "// Output: this is the number: 9",
        ],
        codeDescription: "keep next..."
    },
    dataTypeStringFunc: {
        codeLines: [
            "// String is immutable object",
            "// Once you have created it, it can't be change",
            "// You can re assign if you are using let or var",
            "// But you can't change a letter inside the String",
            "// String is an Object contains different functions",
            "// For example:",
            "const upperCaseName = 'avner'.toUpperCase()",
            "// This function creates a new String from the old one",
            "// And turn every letter from to old one to be capital letter (AVNER)",
            "// As i wrote before, you cann't change a String",
            "// This one has no effect:",
            "const name = 'itay'",
            "name.toUpperCase()",
            "// Because String can't be changed, line 13 has no effect",
            "// You can send it to function",
            "myFunction(name.toUpperCase())",
            "// And now the function got 'ITAY'",
            "// But just writing name.toUpperCase() has no effect",
            "// You can re assign assuming you are using let",
            "name = name.toUpperCase()"
        ],
        codeDescription: "keep next & let's practice!"
    },
    consoleStringPracticeUpper: {
        commands: [
            () => console.log("%cLet's Practice!", `color:${getRandomItemFromArray(practiceColors)};font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold`),
            () => log._male(`Hi there ${username}!`),
            () => console.log("First, create a String variable 'name'"),
            () => console.log("Initiate it with the value 'itay'"),
            () => console.log("Change it to an upper case String (Or create a new one)"),
            () => console.log("When you done, call the function answer, and pass your variable"),
            () => console.log("answer(name)"),
            () => console.log('The name should be itay, and it has to be an upper case'),
            () => log._swords('Use string function toUpperCase()')
        ],
        rightAnswer: "ITAY",
        hints: [
            hintMessage("Create a new const, contains the old one but with upper case function"),
            hintMessage("Make name a 'let' variable, and reassign it to itself, but upper case"),
            hintMessage("You can invoke toUpperCase right after every String"),
            hintMessage("In order to invoke toUpperCase, use dot operator 'avner'.toUpperCase()")
        ]
    },
    consoleStringPracticeIndex: {
        commands: [
            () => console.log("%cLet's Practice!", `color:${getRandomItemFromArray(practiceColors)};font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold`),
            () => log._male(`Nice ${username}! Let's talk about indexing `),
            () => console.log("first create a String const named abc with the value: 'abcd1234' "),
            () => console.log('In order to catch a letter inside this String, '),
            () => console.log('We can use square brackets after the String, and put an index inside'),
            () => console.log('For example: abc[0]'),
            () => console.log("First character will be at index 0"),
            () => console.log("For instance, the letter c will appear at abc[2]"),
            () => console.log("Find the number 2 inside the abc variable"),
            () => console.log('Once you find it, answer the number'),
            () => console.log('answer(number)')
        ],
        rightAnswer: 5,
        hints: [
            hintMessage("Remember first character inside a String will appear at index 0"),
            hintMessage("Use a type number inside answer, For example: answer(0)"),
        ]
    },
    dataTypeArray: {
        codeLines: [
            "// Array is a collection of data",
            "// In Java Script, Arrays are not safe to a specific type",
            "// In other words... we can stored different data types inside a collection",
            "// In order to create an Array, all we need to do is to wrap our data inside []",
            "// For instance:",
            "const friends = ['Avner', 'Itay', 'Yaniv']",
            "// We can mix data types:",
            "const mixed = ['Avner', 9, true] // legal",
            "// If we want to get a value from the Array,",
            "// We can use Indexing same with Strings",
            "// For example:",
            "// const avner = friends[0]",
        ],
        codeDescription: 'Keep next...'
    },

    consoleStringArrayPractice: {
        commands: [
            () => console.log("%cLet's Practice!", `color:${getRandomItemFromArray(practiceColors)};font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold`),
            () => log._male("Hi there again!"),
            () => log._swords("Create a String const with the same value: 'Hi there how are you'"),
            () => console.log("We can use a String function 'split' in order to create an Array"),
            () => console.log("'split' will split the String to Array of charachters / words"),
            () => console.log("For instance, 'abcd'.split('') will create ['a','b','c','d']"),
            () => console.log("'abcd'.split('b') will create ['a','cd']"),
            () => console.log("'hi bye'.split(' ') will ['hi', 'bye']"),
            () => console.log("So... Split the String to Array:"),
            () => log._swords("const splitString = myString.split(' ')"),
            () => console.log("Now you got an Array of Strings"),
            () => console.log("Find the index of 'how' inside your Array:"),
            () => log._swords("const how = splitString[99]"),
            () => console.log("Find the index of the letter 'o'"),
            () => console.log("answer the number: answer(99)"),
        ],
        rightAnswer: 2,
        hints: [
            hintMessage("Create a String const with the same value: 'Hi there how are you'"),
            hintMessage("We can assign index of Array / String to a new const: const x = myString[9]"),
            hintMessage("We can assign index of Array / String to a new const: const y = myArray[9]"),
            hintMessage("You can test your index to the console:  myString[3], and the console will print the value")
        ]
    },
    dataTypeArrayFunctions: {
        codeLines: [
            "// You probably figured that out...",
            "// Arrays has it's functions too!",
            "// For instance' if you like to add a new element to the Array",
            "// You van use the 'push' function",
            "const friends = ['Danny', 'Maor']",
            "friends.push('Avner')",
            "// Now, if you will print friends to the console you will see:",
            "['Danny', 'Maor', 'Avner]",
            "// In order to add 'Itay' to the first index we can use 'unshift'",
            "// friends.unshift('Itay')",
            "// Now friends will be:",
            "['Itay', 'Maor', 'Danny', 'Avner']",
            "// In order to remove item from the last index, we can use 'pop'",
            "// 'pop' will remove the last item,",
            "// and will return it so we can save the value:",
            "const avner = friends.pop()",
            "// Yeah we dont have to save it to a new const, but we sure can.",
            "// If we want to remove the first item, we can use 'shift'",
            "// 'shift' also going to return us the item, so we can save it",
            "const itay = friends.shift()",
            "// As i have mention, you don't have to save the removed item:",
            "friends.pop() // legal",
            "firends.shift() // legal",

        ],
        codeDescription: 'Keep next and practice :)'
    },
    consoleArrayFunctionsPractice: {
        commands: [
            () => window.friends = ['Itay', `${username}`, 'Avner', 'Maor'],
            () => console.log("%cLet's Practice!", `color:${getRandomItemFromArray(practiceColors)};font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold`),
            () => log._male(`${username} I can't belive you are still here`),
            () => console.log('I have created for you an array, you can find it under the name firends'),
            () => console.log("Remove 'Itay', and right after remove 'Maor'"),
            () => console.log('Now remove the element at index 1 and save it to a const'),
            () => console.log('Pass this const to the answer function'),
            () => console.log("For example: answer(atIndex1)"),
            () => log._ufo("If something went wrong you can use 'reload()'"),
            () => log._ufo('It will reload this practice page')
        ],
        rightAnswer: 'Avner',
        hints: [
            hintMessage("Try again... use 'reload()' in order to begin, or 'previous()' to the code example"),
        ]
    },
    dataTypeJson: {
        codeLines: [
            "// JSON - java script object notation",
            "// We can stored data like we did with array,",
            "// But, Unlike Array...",
            "// We can use keys instead of number as an index",
            "const avner = { ",
            "   name: 'Avner', ",
            "   age: 27",
            `   friends: [${username}], `,
            "   address: {",
            "       city: 'Ashdod'",
            "       street: 'Ha Haluts",
            "       number: 23",
            "   }",
            "}",
            "// In avner example, we created a JSON object",
            "// We are wrraping our data under curly brackets '{}'",
            "// Each entry contains a pair of key & value",
            "const number = { num1: 87 , num2: 112 }",
            "// Notice, Unlike other assignments...",
            "// Inside an object we are using ':' instead of '='",
            "// And we seperate our (key, value) pair with ','",
            "// Object can stored any data type,",
            "// like String, Number Array and even another JSON.",
            "// If we want to get an item from the object,",
            "// We can use '.' and the item name",
            "const avnerAge = avner.age",
            "// We can also use sqare brackest:",
            "const avnerName = avner['name']",

        ],
        codeDescription: 'Keep next...'
    },
    consoleObjectIndexPractice: {
        commands: [
            () => window.avner = {
                name: 'Avner',
                age: 27,
                friends: [username],
                address: {
                    city: 'Ashdod',
                    street: 'Ha Haluts',
                    number: 23
                }
            },
            () => console.log("%cLet's Practice!", `color:${getRandomItemFromArray(practiceColors)};font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold`),
            () => log._male(`${username} Your progress is awesome!`),
            () => console.log("I have created for you a JSON object under the name: 'avner'"),
            () => console.log("In order to get some value from avner,"),
            () => console.log("We can use '.' or '[]"),
            () => console.log("For instance: avner.name , avner['name']"),
            () => console.log("Now, Avner has a birthday and now he's no longer 27"),
            () => console.log("Help Avner & fix he's age"),
            () => console.log("When you done, answer(avner)")

        ],
        predicate: userAnswer => {
            const right = {
                name: 'Avner',
                age: 28,
                friends: [username],
                address: {
                    city: 'Ashdod',
                    street: 'Ha Haluts',
                    number: 23
                }
            }
            return isEqual(userAnswer, right);
        },
        hints: [
            hintMessage("Try to get he's age before changing it"),
            hintMessage("You can assign new values to keys by: avner.car = 'Toyota'"),
            hintMessage("You can assign new values to keys by: avner['car'] = 'Toyota'")
        ]
    },
    consoleObjectIndexPractice2: {
        commands: [
            () => window.avner = {
                name: 'Avner',
                age: 28,
                friends: [username],
                address: {
                    city: 'Ashdod',
                    street: 'Ha Haluts',
                    number: 23
                }
            },
            () => console.log("%cLet's Practice!", `color:${getRandomItemFromArray(practiceColors)};font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold`),
            () => log._male(`${username} Wow!`),
            () => console.log(`Well Avner still needs some help...`),
            () => console.log(`As you see, you are he's only friends ${window.avner.friends}`),
            () => console.log("Help him out, and add more friends to the array"),
            () => console.log("When you done, answer(avner)")
        ],
        predicate: userAnswer => {
            if (!userAnswer) {
                log._stupid('Well you need to supply an answer inside...')
                return false
            }
            if (typeof userAnswer !== 'object') {
                log._stupid("You should send 'avner' inside the answer")
                return false;
            }
            if ('!friends' in userAnswer) {
                log._stupid("What kind of object did you send to me? it doesn't contains friends")
                return false;
            }
            if (!Array.isArray(userAnswer.friends)) {
                log._stupid(`I don't know how 'avner.friends' isn't array, change avner.friends = ['${username}']'`)
                return false;
            }
            if (userAnswer.friends.length <= 1) {
                log._stupid("You need to add more friends to Avner...")
                return false;
            }
            return true
        },
        hints: [
            hintMessage("Try to get he's friends first"),
            hintMessage("Use Array functions such as 'push'")
        ]
    },
}
)

const alertMessages = {
    success: [
        "If at first you don't succed, skydiving definitely isn't for you",
        "Keyboard not responding. Press any key to continue",
        "'Shana tova' from windows 98",
        "You call it nagging, I call it 'listen to what I said the first time!'",
        "Your secrets are safe with me... I wasn't even listening.",
        "Dinosaurs never had coffee, and we see how that turned out.",
        "Roads? Where we're going we don't need... roads!",
        "If you put your mind to it, you can accomplish anything.",
        "Great Scott!",
        "There is no spoon!",
        "I have an idea so smart that my head would explode if I even began to know what I was talking about.",
    ],
    failure: [
        "An error occurred while displaying the previous error",
        "Found infected file: 'Microsoft Windows', Remove it?",
        "Fatal Error: NO ERROR",
        `${new Date().toLocaleTimeString()} Is not time to quit :(`,
        "Error Code 42: User Error. Replace user",
        "Whenever I find the key to success, someone changes the lock.",
        "If common sense is so common why is there so many people with out it?",
        "I'm sure in 1985 plutonium is in every corner drug store, but in 1955," + 
        "its a little hard to come by! I'm sorry, but I'm afraid you're stuck here",
        "Is there a problem with Earth's gravitational pull in the future? Why is everything so heavy?",
        "I am Darth Vader from Planet Vulcan!",
        "The answer to the question is U-4, not U2, Mr. Bennish!",
        "Good bye, Mr. Anderson.",
        "There is a difference between knowing the path and walking the path."

    ]

}

export {
    lightTheme,
    phases,
    alertMessages,
};