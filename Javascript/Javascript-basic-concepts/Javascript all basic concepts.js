
// This section has functions created using javascript and these functions will act as the concepts which we will further extend as we move forward in our javascript learning journey   


function helloWorld() {

  // ********************************************************************* JAVASCRIPT HELLO World Program **********************************************************


  // This is the first javascript webpage program which will have all the basic concepts required for javascript 

  // Java-script is a loosely typed language

  // in this program we will be storing and using all the javascript basic concepts in the form of functions and using them by linking them with html webpages

  console.log("Hello world this is my first javascript program\n"); // This is the hello world program created using javascipt
 // ********************************************************************* The End *********************************************************************************

}


function Variables () {

  // ********************************************************** INTRODUCTION TO JAVASCRIPT Variables ***************************************************************
  
  // in javascript the variables work as a storage container which are used to hold data like numbers, texts and many other things

  // In javascript we can declear variables 2 ways 

  // * Using semi-colen at the end of every variable, console.log() or data-type is not important even without that the program will run without ant errors *  

  // 1. by using let keyword

  let a = 6;
  let b = 4;

  console.log(a, "- output of variable 'a' (decleared using 'let' keyword)");
  console.log(b, "- output of variable 'b' (decleared using 'let' keyword) ");

  // this is the example of creating variables in javascript with let keyword 

  // 2. by using var keyword

  var c = 25;
  var d = 50;

  console.log(c, "- output of variable 'c' (decleared using 'var' keyword)"); // This is the method of printing variable stored values
  console.log(d, "- output of variable 'd' (decleared using 'var' keyword) ");


  // This is the example of creating variables with var keyword

  console.log(a + b + c + d, "- sum of all created variables 'a', 'b', 'c', 'd' "); // This method is used to add all the variables or we can also used this method to do basic calculations in javascript

  // 3. by using const keyword - this keyword allows user to declear a variable whose value cannot be changed once it is created in a program

  const permanentVariable = 2323;

  console.log(permanentVariable + " - Output of a constant variable ");

  // this is the example of using variable with const keyword

  // if we try to change the value of const variable the program will give an error

// ********************************************************************* The End *********************************************************************************


}


function dataTypes() {

  // ********************************************************** INTRODUCTION TO JAVASCRIPT Data-types **************************************************************

  // In javascript there are eight types of data-types


  //************************************************************************************************************************************************************** */
  // Data Types	                              Description	                                                            Example
  // String 	                             represents textual data	                                                 'hello', "hello world!" etc
  // Number 	                             an integer or a floating-point number	                                    3, 3.234, 3e-2 etc.
  // BigInt 	                             an integer with arbitrary precision	                                      900719925124740999n , 1n etc.
  // Boolean                                 Any of two values: true or false	                                        true and false
  // undefined                               a data type whose variable is not initialized	                          let a;
  // null 	                                 denotes a null value	                                                    let a = null;
  // Symbol                                  data type whose instances are unique and immutable	                      let value = Symbol('hello');
  // Object	                                 key-value pairs of collection of data	                                  let student = { };
  //************************************************************************************************************************************************************** */

  // Now we will be creating of all the data-types to see their function and demostration in each data-type
  
  
  // 1. using string operator

  let firstName = "Pranav";
  let lastName = "Likhi";
  console.log("\n"); // syntax of creating empty space/line
  console.log(`The owner of this program is ${firstName} ${lastName} - is example of using string operator `); // ${firstName} is the template litereal used to store variable values


  // 2. using number operator

  let num1 = 60;
  let num2 = 40.56;
  console.log("Sum of 2 numbers is: " , num1 + num2, " - is the example output of using number operator"); 

  // 3. using Bigint operator

  let n1 = 50688585850n;
  let n2 = 50n;
  console.log("Sum of 2 numbers is: ", n1 + n2, " - is the example output of using big-int operator")

  // 4. using Boolean operator
  
  let value1 = true;
  let value2 = false;
  console.log(`Boolean extressions are ${value1} and ${value2} - is the example output of using boolean operator`);

  // 5. using undedfined operator

  let val;
  console.log(`${val} - is the example of using undefined operator`);

  // 6. using null operator
  let nl = null;
  console.log(`${nl} - is the example of using nul operator`);

  // 7. using symbol operator

  let exp1 = Symbol("This is a unique value");
  let exp2 = Symbol("This is a unique value");
  console.log( exp1 ,"and", exp2  ,"- are the example of using symbol operator");
  // we cannot print symbol value with console in this way ${nl} because it will give an error 

  // 8. using object operator

  let nm = 'Vishav Passey';
  let age = 27;
  let city ="Mississuaga";
  let identity = {nm, age, city};

  console.log( identity , "- is the example of using object operator"); // we can use this operator to store different types of variable under one name just like class is c language


// ********************************************************************* The End ************************************************************************************





}


function htmlDOM() {
 // ********************************************************** INTRODUCTION TO USE JAVASCRIPT WITH HTML (DOM) **************************************************************

  // Jvascript can be used with html to make webpages interacrtive



  // 1. this is the example of adding content in empty html using javascipt
 document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("demo").innerHTML = 'Hello world this is the first element made by external javascript file';

  } );

 // 2. javascipt can change the contents of html elements
 
 // 3. javascript can change the style of elements


 // 4. javascript can hide the html contents and can also reveal hidden html contents


 // this is the example of using javascript to show elements
  document.addEventListener("DOMContentLoaded", function() {
 var button = document.getElementById('hiddenButton');
 var hiddenSection1 = document.getElementById('hiddenElement');

    button.addEventListener("click", function() {
      hiddenSection1.style.display = "block";
   });
 });


// This is the example of using javascript to hide elements

document.addEventListener("DOMContentLoaded", function() {
 var button = document.getElementById('hiddenButton2');
 var hiddenSection1 = document.getElementById('hiddenElement');

    button.addEventListener("click", function() {
      hiddenSection1.style.display = "none";
   });
 });

 // 5. Javascript can be used to make input boxes interactive 

 
     function boxValidate(){ // this is the example of using a function created in javascript and used by HTML Document

       let Num = document.getElementById("IP").value;  // this allows to use only numeric values on html elements
       let text;

       if (isNaN(Num) || Num < 1 || Num > 10){
       
        text ="Input is invalid"; 

      } else {

        text ="Input is validated";
  
      }
        document.getElementById("result").innerHTML = text

     }



 // 6. javascript can used to make form submitions more interactive and realistic 
 

  // this is the example of using javascript function to change the behaviour of form submissions ** this function works only on single form attribute to alter different attributes in form we will need to create multiple functions like this


  function Validateform(){
    var c = document.forms["Newsletter"]["f-n"].value; // This allows javascript to identify form values in html whereas newsletter is the name of the form and f-n is the taget value in the form which we want to alter  
    if (c == "") {
    alert('please enter your full name to complete form');
    return false;
    } 

   }
    
   console.log("\n");
 // ********************************************************************* The End **************************************************************************************

 


}


function Numbers () {

  // ********************************************************** INTRODUCTION TO USE JAVASCRIPT Numbers **************************************************************


  // In javascript any type of number can be stored in the the variable we do not need any typ specifier like long, double or float to store numbers   

  // In javascript we can use and create numbers as objects but this is not reccomended beacause they are quite unstable, produce unexpected results and they also slow down the execution speed of the program 
  
  // this is the example of creating a number object in javascipt 
 
  
  console.log("\n"); // This is method of adding empty line space in our program 
  let obj1 = {nm: 34};
  console.log(typeof(obj1) , "This is the output of number object created using javascript\n");

  // In javascript if the strings are numeric then they are automatically converted into numbers to work with actual numbers

  let x = 50;
  let y = "5"; // This is the string charactor which will get converted into actual number 
  let z = x/y;

  console.log(z + " This is the output of dividing converted number from string with actual number\n");

  // In javascript if the strings are not numeric but a name or alphabet  then they will not work with actual number and we will get a NaN (Not a number or not a legal number) as output 


  let a = 50;
  let b = "Java"; // This is the string charactor which will not get converted into actual number
  let c = a/b;

  console.log(c + " This is the output of dividing string charactor with a number \n");

  // In javascript we have some special keywords which allows to check the type of variable 

  // This is the example of using typeof (it returns type name instead of true/false) and isNaN() (it checks wheather the given variable is a number (true) or not (false))

  let a1 = 2; // this is a number
  let a2 = "Amazon"; // this is a string

  console.log(typeof(a1), typeof(a2) , " This the output of using typeof() operator\n")
  
  console.log(isNaN(a1), isNaN(a2) , " This the output of using isNaN() operator\n")


  // Now we will see the example some of the converters which allows to covert various strings or objects into numbers 

  // These are some of the Number methods which can be used with numbers

  //   Method	            Description
  // toString()	          Returns a number as a string
  // toExponential()	    Returns a number written in exponential notation
  // toFixed()	          Returns a number written with a number of decimals
  // toPrecision()	      Returns a number written with a specified length
  // ValueOf()	          Returns a number as a number
  

  // These are some of the conversion which can be used to convert variables into numbers



  // Method	       Description
  // Number()	     Returns a number converted from its argument.
  // parseFloat()	 Parses its argument and returns a floating point number
  // parseInt()	   Parses its argument and returns a whole number
  
  
  // These object methods belong to the Number object:

  // Method	                  Description
  // Number.isInteger()	      Returns true if the argument is an integer
  // Number.isSafeInteger()	  Returns true if the argument is a safe integer
  // Number.parseFloat()	    Converts a string to a number
  // Number.parseInt()	      Converts a string to a whole number
  


 // ********************************************************************* The End **************************************************************************************



}


// This section has functions executed using javascript and we can select which function/concept we want run/use at time instead of running all concepts at once 

// helloWorld(); // This function has information about the first hello-world program created by using javascript


// Variables(); // This function has information about the concept of variables and types used in javascript


// dataTypes(); // This function has information about the concept of data-types used in javascript


// htmlDOM(); // This function has information about the concept of HTML DOM which allows us to manipulate HTML and CSS elements by using javascript


 Numbers(); // This function has information about the concept of Numbers and conversion methods which can be used in javascript
 
// Test changes hjbhjbj n
 
// how are you
