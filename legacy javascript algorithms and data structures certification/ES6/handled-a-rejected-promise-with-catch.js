/*
Handle a Rejected Promise with catch

catch is the method used when your promise has been rejected. 
It is executed immediately after a promise's reject method is called. Here’s the syntax:

myPromise.catch(error => {
  
});

error is the argument passed in to the reject method.
*/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});