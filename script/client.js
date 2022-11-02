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
  let employeeBonus = {loyal: 'no', deduction: 'no'};

  let earnedBonus = [0,0,0,.04,.06,.1];

  // for loop 
  for(let i = 0; i < employees.length; i++){
    if(employeeNum == employees[i].employeeNumber){
      currEmployee = employees[i]
      employeeBonus.name = currEmployee.name;
    }
  }

  // bonus logic
  
  // setting base bonus according to rating
  bonus = earnedBonus[currEmployee.reviewRating]
  
  // adding addition loyalty bonus
  if(currEmployee.employeeNumber.length === 4){
    // average salary reduction
    if(currEmployee.annualSalary > 65000){
      bonus += .04;
    }
    else{
      bonus += .05
    }
    employeeBonus.loyal = "yes"
  }

  // average salary reduction
  if(currEmployee.annualSalary > 65000){
    bonus -= 1;
    employeeBonus.deduction = "yes"
  }

  // creating bonus recived object
  employeeBonus.bonusPercentage = bonus;
  employeeBonus.totalCompensation = (parseInt(currEmployee.annualSalary) + (parseInt(currEmployee.annualSalary) * bonus));
  employeeBonus.totalBonus = currEmployee.annualSalary * bonus
  // return new object with bonus results
  return employeeBonus;
}

console.log(calculateIndividualEmployeeBonus(2405))



// fill in function

function fillIn(employObj, bonusObj){
  document.getElementById('input_name').innerHTML = employObj.name;
  document.getElementById('input_employNum').innerHTML = employObj.employeeNumber;
  document.getElementById('input_salary').innerHTML = employObj.annualSalary;
  document.getElementById('input_rating').innerHTML = employObj.reviewRating;

  document.getElementById('comp_num').innerHTML = bonusObj.totalCompensation;
  document.getElementById('bonus_num').innerHTML = bonusObj.totalBonus;
  document.getElementById('bonus_per_num').innerHTML = bonusObj.bonusPercentage;
  document.getElementById('input_year_bonus').innerHTML = bonusObj.loyal;
  document.getElementById('input_salary_deduction').innerHTML = bonusObj.deduction;
}




// dom manipulation
let isNot = false;

function submit(){
  let employNum = document.getElementById("employeeNum").value;
  let match = 0;
  for(let i=0; i<employees.length; i++){
    if(employNum == employees[i].employeeNumber){
      if(isNot){
        document.getElementById('not').remove();
      }
      match ++
    }
  }

  if(match === 0){
    isNot = false;
  }
  
  if(!isNot){
    let notFound = document.createElement('p');
    notFound.id = 'not';
    notFound.innerHTML = "employee not found"
    document.getElementById('userNotFound').appendChild(notFound)
    isNot = true;
  }
}

function keySubmit(event){
    if(event.key === "Enter"){
      document.getElementById('submit').click();
      event.preventDefault();
    }

}

document.getElementById('employeeNum').addEventListener('keypress', keySubmit);





















/*

// user card function 
function userCard(emplyObj, bonusObj){
  // creating userCard div
  let userCard_ = document.createElement('div');
  userCard_.id = 'userCard';
  document.getElementById('container').appendChild(userCard_);



  // creating userInfo div
  let userInfo = document.createElement('div');
  userInfo.id = 'user_info';
  document.getElementById('userCard').appendChild(userInfo);

  // creating pfp
  let pfp = document.createElement('div');
  pfp.id = 'pfp';
  document.getElementById('user_info').appendChild(pfp);




  // creating curr info
  let currInfo = document.createElement('div');
  currInfo.id = 'user_curr_info';




  // creating userName
  let userName = document.createElement('div');
  userName.id = 'user_name';
  userName.className = 'user_curr';
  document.getElementById('user_curr_info').appendChild(userName);

  // userName Contents
  let name = document.createElement('h3');
  name.innerHTML = "Name:";
  document.getElementById('user_name').appendChild(name);

  let nameEnter = document.createElement('p');
  nameEnter.innerHTML = emplyObj.name;
  document.getElementById('user_name').appendChild(nameEnter);






  // creating userEmployNum
  let userEmployeeNum = document.createElement('div');
  userEmployeeNum.id = 'user_employeeNum';
  userEmployeeNum.className = 'user_curr';
  document.getElementById('user_curr_info').appendChild(userEmployeeNum);

  // userEmployee Contents
  let employee_num = document.createElement('h3');
  employee_num.innerHTML = "Employee #:";
  document.getElementById('user_employeeNum').appendChild(employee_num);

  let employee_num_enter = document.createElement('p');
  nameEnter.innerHTML = emplyObj.employeeNumber;
  document.getElementById('user_employeeNum').appendChild(employee_num_enter);





  // creating userRating
  let userRating = document.createElement('div');
  userRating.id = 'user_rating';
  userRating.className = 'user_curr';
  document.getElementById('user_curr_info').appendChild(userRating);

  // userRating Contents
  let userRate = document.createElement('h3');
  userRate.innerHTML = "Rating:";
  document.getElementById('user_rating').appendChild(userRate);

  let userRateEnter = document.createElement('p');
  userRateEnter.innerHTML = emplyObj.reviewRating;
  document.getElementById('user_rating').appendChild(userRateEnter);




  // creating userSalary
  let userSalary = document.createElement('div');
  userSalary.id = 'user_salary';
  userSalary.className = 'user_curr';
  document.getElementById('user_curr_info').appendChild(userSalary);

  // userSalary Contents
  let userSalaryLable = document.createElement('h3');
  userSalaryLable.innerHTML = "Salary:";
  document.getElementById('user_salary').appendChild(userSalaryLable);

  let userSalaryNum = document.createElement('p');
  userSalaryNum.innerHTML = emplyObj.annualSalary;
  document.getElementById('user_salary').appendChild(userSalaryNum);
  




  // create userBonus div
  userBonus = document.createElement('div');
  userBonus.id = 'user_bonus';
  document.getElementById('userCard').appendChild(userBonus);




  // total comp
  totalComp = document.createElement('div');
  totalComp.id = 'total_comp';
  document.getElementById('user_bonus').appendChild(totalComp);

  //total comp contents
  compLable = document.createElement('h2');
  compLable.id = 'comp_lable';
  compLable.innerHTML = 'Total Compensation';
  document.getElementById('total_comp').appendChild(compLable)

  compNum = document.createElement('h1');
  compNum.id = 'comp_num';
  compNum.innerHTML = bonusObj.totalCompensation;
  document.getElementById('total_comp').appendChild(compNum);



  // total bonus
  totalBonus = document.createElement('div');
  totalBonus.id = 'bonus_earned';
  document.getElementById('user_bonus').appendChild(totalBonus);

  //total comp contents
  bonusLable = document.createElement('h2');
  bonusLable.id = 'bonus_lable';
  bonusLable.innerHTML = 'Total Compensation';
  document.getElementById('bonus_earned').appendChild(bonusLable)

  bonusNum = document.createElement('h1');
  bonusNum.id = 'bonus_num';
  bonusNum.innerHTML = bonusObj.totalBonus;
  document.getElementById('bonus_earned').appendChild(bonusNum);
}


*/


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