// Callback
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);


// Callback Hell 
// This is also known as Pyramid of Doom
// In simple words it is nested callbacks, i.e callback within callback

// Example 1: 
// Here, 6 setTimeout() are called within themselves. Each setTimeout() is called exactly after 1000ms have passed since the previous setTimeout() was called

let val = 1;
setTimeout(() => {
    console.log("Hello World!", val, "time");
    val = val + 1;
    setTimeout(() => {
        console.log("Hello World!", val, "time");
        val = val + 1;
        setTimeout(() => {
            console.log("Hello World!", val, "time");
            val = val + 1;
            setTimeout(() => {
                console.log("Hello World!", val, "time");
                val = val + 1;
                setTimeout(() => {
                    console.log("Hello World!", val, "time");
                    val = val + 1;
                    setTimeout(() => {
                        console.log("Hello World!", val, "time");
                        val = val + 1;
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// Example 2:
// Here, we are creating 6 divs and setting their textContent as their "Div <Div number>"
// A callback hell is created where, if all the divs are present and their textContent values match with the values passed by user, then "Divs exist and texts have matched successfully!" message is printed on console otherwise "Error occurred!" message is printed on console

const div1 = document.createElement("div");
div1.textContent = "Div 1";
const div2 = document.createElement("div");
div2.textContent = "Div 2";
const div3 = document.createElement("div");
div3.textContent = "Div 3";
const div4 = document.createElement("div");
div4.textContent = "Div 4";
const div5 = document.createElement("div");
div5.textContent = "Div 5";
const div6 = document.createElement("div");
div6.textContent = "Div 6";

function callbackHellExample(element, value, matchCallback, notMatchCallback) {
    setTimeout(() => {
        if (element) {
            let check = (element.textContent === value) ? true : false;
            if (check) {
                matchCallback();
            }
            else {
                notMatchCallback();
            }
        }
        else {
            notMatchCallback();
        }
    }, 1000);
}

const callbackMatch = () => {
    console.log("Divs exist and texts have matched successfully!");
}
const callbackNotMatch = () => {
    console.log("Error occurred!");
}

callbackHellExample(div1, "Div 1",
    callbackHellExample(div2, "Div 2",
        callbackHellExample(div3, "Div 3",
            callbackHellExample(div4, "Div 4",
                callbackHellExample(div5, "Div 5",
                    callbackHellExample(div6, "Div 6",
                        callbackMatch
                    , callbackNotMatch)
                , callbackNotMatch)
            , callbackNotMatch)
        , callbackNotMatch)
    , callbackNotMatch)
, callbackNotMatch)



