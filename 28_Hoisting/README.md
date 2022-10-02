## Hoisting in Javascript
-----
<br>

Hoisting is a mechanism in Javascript by which you can access variables and functions ```even before you have initialized them.``` This mechanism moves the declared variables and functions at the top.


NOTE: Hoisting in Javascript is applicable only for declaration not for initialization. 

Ex :   console.log(a); <br>
        var a = 5;<br>
        console.log(a);<br>
        
-----
Output : Undefined<br>
5

<br>

## Explanation
---
Compilation Process: 


- Starting with statement 1 ie, console.log(a). Since, there is no variable and no function declaration. So, it will reach to next statement ie, var a = 5.
- Now we are on statement var a = 5. Since it is a variable declaration so variable a takes its place in memory and its default value is set as undefined.
- Now coming on the last statement ie, console.log(a). Again there is no variable declaration and no function declartion. Hence the compilation is finished.   
---
Execution Process:
- The first statement which is going to be executed is console.log(a). So, the variable a exists in memory and it is undefined. So the output will be undefined.
- On moving on statement 2 ie, var a = 5.It will check whether we have var a or not. So, yes we have var a so 5 will be assigned to var a.
- Now moving on statement 3 ie, console.log(a).This will print 5 as 5 was assigned to var a.                     
