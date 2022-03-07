// create a var equal to my age 
  // used let as the users age is not constant
  let myAge = 29;
  let earlyYears = 2;
  // multiplication assignment operator to multiply value of earlyYears by 10.5 and reassign it to earlyYears
  earlyYears *= 10.5;
  // first two years are accounted for setting result equal to laterYears changable variable
  let laterYears = myAge - 2;
  // Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.
  laterYears *= 4;
  // Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
  var myAgeInDogYears = earlyYears + laterYears;
  // Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
  var myName = 'Cade Wilson'.toLowerCase();
  
  // Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value (use backticks)
  console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
  
  //console.log(earlyYears);
  //console.log(laterYears);
  
  // If you’d like extra practice, try writing this project without the *= operator.
  // x *= 10; or x = x * 10
  
  