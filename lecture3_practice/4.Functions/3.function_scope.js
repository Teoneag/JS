
//*! Variables defined inside a function are not accessible (visible) from outside the function.

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here CANNOT use carName




  //Global variables
  let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}


