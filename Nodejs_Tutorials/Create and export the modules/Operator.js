const add=(a,b)=>{
    return a+b;
};

const sub=(a,b)=>{
    return a-b;
};

const mult=(a,b)=>{
    return a*b;
};

const name="Vinod";

//These variables and functions are only defined in operator.js
//We can't access them outside this file
// There scope is private here..

//Our main task is to make the scope public here 


//Now we can access the add function from any file
// module.exports=add; To export only the add function

//module.exports=name;// To export only the name constant

// module.exports=add;
//module.exports=sub;

//This is not the right  method of exporting two modules..
//Instead we must do it in the following way..

// module.exports.add=add;
// module.exports.sub=sub;
// module.exports.mult=mult;


module.exports={add,sub,mult,name};
