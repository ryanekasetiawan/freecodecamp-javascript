/*
Handle a Fulfilled Promise with then

Promises are most useful when you have a process that takes an unknown amount of time in your code(i.e.something asynchronous), often a server request
.When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server.
This can be achieved by using the then method.

Promise.prototype.then(onFulfilled, onRejected)

The then method schedules callback functions for the eventual completion of a Promise - either fulfillment or rejection. 
One of the onFulfilled and onRejected handlers will be executed to handle the current promise's fulfillment or rejection. 
When the promise is fulfilled with resolve the onFulfilled handler is called.

myPromise.then(result => {

});

result comes from the argument given to the resolve method.
*/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});