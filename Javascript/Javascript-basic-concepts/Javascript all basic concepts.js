
// This section has functions created using javascript and these functions will act as the concepts which we will further extend as we move forward in our javascript learning journey   


function helloWorld() {

  console.log("\n ************************************* INTRODUCTION TO USE JAVASCRIPT Hello World Program *************************************   \n");

  // This is the first javascript webpage program which will have all the basic concepts required for javascript 

  // Java-script is a loosely typed language

  // in this program we will be storing and using all the javascript basic concepts in the form of functions and using them by linking them with html webpages

  console.log("Hello world this is my first javascript program\n"); // This is the hello world program created using javascipt


 console.log("\n ************************************* The End *************************************   \n");
}


function Variables () {

  
  console.log("\n ************************************* INTRODUCTION TO USE JAVASCRIPT Variables *************************************   \n");
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

  console.log("\n ************************************* The End *************************************   \n");


}


function dataTypes() {

 
  console.log("\n ************************************* INTRODUCTION TO USE JAVASCRIPT Data-types *************************************   \n");
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

  console.log("\n ************************************* The End *************************************   \n");





}


function htmlDOM() {
 
 console.log("\n ************************************* INTRODUCTION TO USE JAVASCRIPT WITH HTML (DOM) *************************************   \n");
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

   console.log("\n ************************************* The End *************************************   \n");


}


function Numbers () {

  
  console.log("\n ************************************* Introduction to the concept of numbers and methods in javascript *************************************   \n");

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
  


  
 console.log("\n ************************************* The End *************************************   \n");


}


function operator() {

  console.log("\n ************************************* Introduction to the concept operators in javascript *************************************   \n");

 // In javascript the operators plays an important role in making a program or webpage and there are many types of operators which are used in this language 

 // Some of them are
 
 // 1. Arithmetic Operators
 // 2. Assignment Operators
 // 3. Comparison Operators
 // 4. String Operators
 // 5. Logical Operators
 // 6. Bitwise Operators
 // 7. Ternary Operators
 // 8. Type Operators


 // Now we will study each of them in datails with examples


 console.log("\n ************************************* Introduction to the Arithmetic Operators in javascript *************************************   \n");


 // Arithmetic operators are the type operators which are used to perform basic calculations in javascript programs
 
 // Some of their types are: 
 
 //  Operator	        Description
 //   +	              Addition
 //   -	              Subtraction
 //   *	              Multiplication
 //   **	            Exponentiation (ES2016)
 //   /	              Division
 //    %	            Modulus (Remainder)
 //   ++	            Increment
 //   --	            Decrement

 // This the example of using addition operator in javascript
 let a = 2;
 let b = 2;
 let c = a + b;
 console.log(c ,": is the example of using addition arithmetic operator (2 + 2) in javascript");

 // This the example of using Substraction operator in javascript
 let a1 = 10;
 let b1 = 20;
 let c1 = a1 - b1;
 console.log(c1 ,": is the example of using Sunstraction arithmetic operator (10 - 20) in javascript");

 // This the example of using Multiplication operator in javascript
 let a2 = 10;
 let b2 = 20;
 let c2 = a2 * b2;
 console.log(c2 ,": is the example of using Multiplication arithmetic operator (10 * 20) in javascript");

 // This the example of using Exponentiation operator in javascript
 let a3 = 10;
 let b3 = 2;
 let c3 = a3 ** b3;
 console.log(c3 ,": is the example of using Exponentiation arithmetic operator (10 ** 2) in javascript");

 // This the example of using Division operator in javascript
 let a4 = 10;
 let b4 = 2;
 let c4 = a4 / b4;
 console.log(c4 ,": is the example of using Division arithmetic operator (10 / 2) in javascript");

 // This the example of using Modulus operator in javascript
 // Modulus is a special number because it gives remainder as the answere for eg when 10 is divided by 2 we will get 0 as their remainder
 let a5 = 10;
 let b5 = 2;
 let c5 = a5 % b5;
 console.log(c5 ,": is the example of using Modulus arithmetic operator (10 % 2) in javascript");

  // This the example of using increment operator in javascript
 let a6 = 10;
 let b6 = 2;
 let c6 = a6++;
 let d6 = ++b6;
 console.log(c6 ,": is the example of using increment operator (10++) in javascript"); // in this case we will get same value because the operator is behind the number which means the number is first printed and then added when used again
 
 console.log(d6 ,": is the example of using increment operator (++2) in javascript"); // in this case we will get different value because the operator is at the front of the number which means the number is first added and then printed

 // This the example of using decrement operator in javascript
 let a7 = 10;
 let b7 = 2;
 let c7 = a7--;
 let d7 = --b7;
 console.log(c7 ,": is the example of using decrement operator (10--) in javascript"); // in this case we will get same value because the operator is behind the number which means the number is first printed and then reduced when used again
 
 console.log(d7 ,": is the example of using decrement operator (--2) in javascript"); // in this case we will get different value because the operator is at the front of the number which means the number is first reduced and then printed





 console.log("\n ************************************* The End *************************************   \n");




 console.log("\n ************************************* Introduction to the Assignment Operators in javascript *************************************   \n");

 // In Javascript there are 4 types assignment operators in javascript


 
 // 1. Logical Assignment Operator

 //  Operator	      Example    	      Same As
 //   &&=	          x &&= y	          x = x && (x = y)
 //   ||=	          x ||= y	          x = x || (x = y)
 //   ??=	          x ??= y	          x = x ?? (x = y)

 // 2. Bitwise Assignment Operators

 //  Operator	      Example           Same As
 //  &=	            x &= y	          x = x & y
 //  ^=	            x ^= y	          x = x ^ y
 //  |=	            x |= y	          x = x | y
 

 // 3. Shift Assignment Operators

 //  Operator	      Example	                Same As
 //  <<=	           x <<= y	              x = x << y
 //  >>=	           x >>= y	              x = x >> y
 //  >>>=	           x >>>= y	              x = x >>> y


 // 4. JavaScript Assignment Operators

 //  Operator	       Example	               Same As
 // =	               x = y	                  x = y
 // +=	             x += y	                  x = x + y
 // -=	             x -= y	                  x = x - y
 // *=	             x *= y	                  x = x * y
 // /=	             x /= y	                  x = x / y
 // %=	             x %= y	                  x = x % y
 // **=	             x **= y	                x = x ** y



 // #########################################################################################
 // Logical bitwise operators - These are the type of operators whose working is based on truthfulness of the value of the operator

 // These are of 3 types

 // 1.  Logical AND assignment operator (x &&= 5) - Here is the working example of this operator 

 let c11 = 10; // This is the syntax of using Logical AND assignment operator
 c11  &&= 20;
 console.log(c11, ": is output of using Logical AND assignment operator")

 // as output we will get a new number 20 after using this operator because this  operator will change value if the initial value of x is any non zero value oo initial variable x will be considered  truthful which fulfills the condition of the operator and the initial value get changed to the specified value
 // #########################################################################################

 // #########################################################################################

 // 2.  Logical OR assignment operator (x ||= 5) - Here is the working example of this operator 

 let c22 = 10; // This is the syntax of using Logical AND assignment operator
 c22  ||= 20;
 console.log(c22, ": is output of using Logical OR assignment operator")

 // as output we will get a initial number 10  after using this operator because this  operator will change value if the initial value of x is  is falsy (e.g., null, undefined, false, 0, or an empty string).
 // #########################################################################################

 // #########################################################################################

 // 3.  Nullish coalescing assignment operator (x ??= 5) - Here is the working example of this operator 

 let c33 = 10; // This is the syntax of using Nullish coalescing assignment operator
 c33  ??= 20;
 console.log(c33, ": is output of using Nullish coalescing assignment operator")

 // as output we will get a initial number 10  after using this operator because this  operator will change value if the initial value of x is  only null, undefined or emplty string 
 // #########################################################################################

 // Bitwise Assignment Operators - These are the special type of operators which compare two numbers (bit by bit) and convert them into a different number.

 //There are 3 types of Bitwise Assignment Operators :


 //#########################################################################################
 // 1. Bitwise AND Assignment Operator(x &= 5) - Here is the working example of this operator 
 let a11 = 10; // This is the syntax of using Bitwise AND assignment operator
 a11  &= 20;
 console.log(a11, ": is the output of using Bitwise AND Assignment Operator");

 // as output we will get a new number 4(binary version - 0100 ) after using this operator

 // This is how Bitwise AND Assignment Operator works 

 // This is how values are compared by using (& operator means “if 1 == 1 = 1 are same its true otherwise either 1 == 0 = 1  or 0 == 1 = 1 is false” and in programing 1 represents  true and 0 represents false)

 //   0110 (Binary Version of 6)
 //   0101 (Binary Version of 5)
 //   & ---- (This where 5 and 6 are compared bit by bit and their comparison and we have got new number 4 as result)
 //   0100 ((Binary Version of 4))

 // #########################################################################################


 // #########################################################################################
 // 2. Bitwise OR Assignment Operator(x |= 5)  - Here is the working example of this operator 
 let a22 = 10; // This is the syntax of using Bitwise OR assignment operator
 a22  |= 20;
 console.log(a22, ": is the output of using Bitwise OR Assignment Operator");

 // as output we will get a new number 7(binary version - 0111 ) after using this operator

 // This is how Bitwise OR Assignment Operator works 

 // This is how values are compared by using (| operator means “if 1 == 1 = 1 are same its true, either 1 == 0 = 1 or 0 == 1 = 1 is also true” only 0 == 0 = 0 is false and in programing 1 represents  true and 0 represents false)

 //   0110 (Binary Version of 6)
 //   0101 (Binary Version of 5)
 //   | ---- (This where 5 and 6 are compared bit by bit and their comparison and we have got new number 7 as result)
 //   0111 ((Binary Version of 7))

 // #########################################################################################


 // #########################################################################################
 // 3. Bitwise XOR Assignment Operator (x ^= 5) -   Here is the working example of this operator 
 let a33 = 10; // This is the syntax of using Bitwise XOR Assignment Operator
 a33  ^= 20;
 console.log(a33, ": is the output of using Bitwise XOR Assignment Operator");

 // as output we will get a new number 3(binary version - 0011 ) after using this operator

 // This is how Bitwise OR Assignment Operator works 

 // This is how values are compared by using (^ operator means “if  1 == 0 = 1 or 0 == 1 = 1 is  true” and all other casses either 1 == 1 = 1 will be false and in programing 1 represents  true and 0 represents false)

 //   0110 (Binary Version of 6)
 //   0101 (Binary Version of 5)
 //   | ---- (This where 5 and 6 are compared bit by bit and their comparison and we have got new number 3 as result)
 //   0011 ((Binary Version of 3))

 // This is avery special operator as it is used for data-encryption purposes 

 // #########################################################################################


 // #########################################################################################
 // Shift Assignment Operators imoortant information

 // Right/left shift operator in javasript - It is special type of operator in javascript which allows the user to work with numbers on binary level and changes the number by shifting their binary position according to dirction provided either left or right 

 // There we have a detailed example which demostrated the working of this operator: 

 // 0000000000000001 = 1 // These are the numbers binary version of the number 1 and 2
 // 0000000000000010 = 2 

 // after using (x = 1 << 2) left shift operator
 // 0000000000000100 = 4 // the number is converted to 4 because we have used left shift operator which means the 
 // binary expression 1 got shifted left by 2 digits and when its converted to decimal after using shift operator its 4 

 // after using (x = 1 >> 2) right shift operator
 // 0000000000000000 = 0 // / the number is converted to 0 because we have used right shift operator which means 
 // the binary expression 1 got shifted right by 2 digits and when its converted to decimal after using shift operator its 0 

 // Difference between right shift (x = 1 >> 2) and unsigned right shift operator (x = 1 >>> 2):

 // Both right shift (x = 1 >> 2) and unsigned right shift operator (x = 1 >>> 2) are very similar about what they do but they only get different when they have to deal with negative numbers for example

 // Case 1: Using right shift (x = 1 >> 2)
 // 1. The binary representation of 1 is 0001.
 // 2. When you perform a signed right shift by 2 positions, the sign bit (the leftmost bit) is preserved, and the rightmost positions are filled with zeros.

 let b11 = 1; // This is the syntax of using Bitwise signed Right shift operator
 b11 >>= 2;
 console.log(b11, ": is output of using Bitwise signed right shift Operator");

 //#########################################################################################

 //#########################################################################################
 // Case 2: Using unsigned right shift (x = 1 >>> 2) 
 // x = 1 >>> 2 (Unsigned Right Shift):
 // 1. As before, the binary representation of 1 is 0001.
 // 2. When you perform an unsigned right shift by 2 positions, it fills the leftmost positions with zeros without preserving the sign bit.

 let b22 = 1; // This is the syntax of using Bitwise unsigned Right shift operator
 b22 >>>= 2;
 console.log(b22, ": is output of using Bitwise unsigned right shift Operator");

 // In both cases the x will be zero but the only difference is how they deal with bits whens used 

 //#########################################################################################

 // 4. JavaScript Assignment Operators - these are sme which can bes used in javascsript to perform some basic calculations




  console.log("\n ************************************* The End *************************************   \n");


}


// This section has functions executed using javascript and we can select which function/concept we want run/use at time instead of running all concepts at once 

 helloWorld(); // This function has information about the first hello-world program created by using javascript


 Variables(); // This function has information about the concept of variables and types used in javascript


 dataTypes(); // This function has information about the concept of data-types used in javascript


// htmlDOM(); // This function has information about the concept of HTML DOM which allows us to manipulate HTML and CSS elements by using javascript


 Numbers(); // This function has information about the concept of Numbers and conversion methods which can be used in javascript

 operator(); // This function has information about the concept of operators which are commonly used in making javascript programs 
 
