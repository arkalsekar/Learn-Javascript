// In JavaScript, a Regular Expression (RegEx) is an object that describes a sequence of characters used for defining a search pattern. For example 
// /^a...s$/
// The above code defines a RegEx pattern. The pattern is: any five letter string starting with a and ending with s.

// program to validate the email address

function validateEmail(email) {

    // regex pattern for email
    const re = /\S+@\S+\.\S+/g;

    // check if the email is valid
    let result = re.test(email);
    if (result) {
        console.log('The email is valid.');
    }
    else {
        let newEmail = prompt('Enter a valid email:');
        validateEmail(newEmail);
    }
}

// take input
let email = prompt('Enter an email: ');

validateEmail(email);






// program to validate the phone number

function validatePhone(num) {

    // regex pattern for phone number
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;

    // check if the phone number is valid
    let result = num.match(re);
    if (result) {
        console.log('The number is valid.');
    }
    else {
        let num = prompt('Enter number in XXX-XXX-XXXX format:');
        validatePhone(num);
    }
}

// take input
let number = prompt('Enter a number XXX-XXX-XXXX');

validatePhone(number);





// program to validate the youtube url
function validateYoutubeUrl(url) {

    // regex pattern for youtube url
    const re = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

    // check if the youtube url is valid
    let result = re.match(url)
    if (result) {
        console.log('Thw url is valid')
    } 
    else {
        let newUrl = prompt('Enter new youtube url');
        validateYoutubeUrl(newUrl);
    }
}

// take input
let url = prompt('Enter a youtube url');

validateYoutubeUrl(url)
