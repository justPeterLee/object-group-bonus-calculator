// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employeeNum ) {  
  // your logic here

  // variables
  let bonus = 0;
  let currEmployee;
  
  // for loop 
  for(let i = 0; i < employees.length; i++){
    if(employeeNum == employees[i].employeeNumber){
      currEmployee = employees[i]
    }
  }
  
  
  
  // return new object with bonus results

}

console.log(calculateIndividualEmployeeBonus(2405))

/*

####### rules in logic ##########\

<= 2 star 

return( currentAnnualSalary );
bonus = 0

-----

3 star
return(
  currentAnualSalary * .04;
)
bonus = .04
-----

4 star
return(
  currentAnnaulSalary * .06;
)
bonus = .06
-----

5 star
return(
  currentAnnualSalary * .1;
)
bonus = .1
--

if yearsIn > 15 {
  bonus += .05
}
--

if annualIncome > 65,000{
  bonus -= .01
}

--
0 <= bonus <= 13 

*/