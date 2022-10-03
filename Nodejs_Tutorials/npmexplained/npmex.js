// npm- node package manager
// we get the packaged files of react and vue here

// npm init -- used to iniitalize our project

// package.json -- consists of all the files that we install using.. npm install

// all the files are stored in package.json as dependancies

// a dependancy is a third party code that yourapplication depends on

// installing chalk node module

// package-lock.json keeps the files of the dependencies
// like here we installed chalk module so it keeps the info about the chalk module
// code modules consist of all the code for dependencies

const chalk= require('chalk');

console.log(chalk.yellowBright("My name is Aryan"));
console.log("My name is Aryan");
console.log(chalk.green("My name is Aryan"));
console.log(chalk.green.italic("My name is Aryan"));
console.log(chalk.green.underline("My name is Aryan"));
console.log(chalk.green.inverse("My name is Aryan"));
console.log(chalk.red.inverse("false"));


// form validation using npm

const validator= require('validator');


const  res= validator.isEmail('aryangmai.com');
console.log(res?chalk.green.inverse(res): chalk.red.inverse(res));

//the above two modules are known are local modules

