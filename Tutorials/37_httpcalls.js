
//Using get to take data from a API.
fetch('https://sitedaapi/info')
    //taking care of the success case
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data in console
    .catch(err => console.log('Erro de solicitação', err)); // take care of errors 

//Using Post to add information in a API

let _data = {       //data that we want to send do the Api
    title: "foo",
    body: "bar", 
    userId:1
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",   //metod http that we want to use
    body: JSON.stringify(_data), //the data that we want to send
    headers: {"Content-type": "application/json; charset=UTF-8"}  //type of data that we are sending
  })
  .then(response => response.json()) // convert to json
  .then(json => console.log(json)) //print data in console
  .catch(err => console.log(err))// take care of errors 