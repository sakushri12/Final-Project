
// const form = document.querySelector("#Modal");
let name1 = document.getElementById('title');
  let validateDescription = document.querySelector("#description");
  const validateAssignedTo = document.querySelector("#assignedto");
  const validateDueDate = document.querySelector("#dueDate");
  const validateStatus = document.querySelector("#status");
//   let validationFail = 0;
let n = name1.value;
  console.log(name1.value.length);
//   console.log("Task Description :" + validateDescription.value.length);
//   console.log("Task Assigned To :" + validateAssignedTo.value.length);
//   console.log("Task Due Date :" + validateDueDate.value);
//   console.log("Task Status:" + validateStatus.value);
let btnSub2 = document.querySelector("#submit");
// let myName2 = document.querySelector("#myName2");
let errMsg1 = document.querySelector("#errMsg1");
let errMsg2 = document.querySelector("#errMsg2");
let errMsg3 = document.querySelector("#errMsg3");
let errMsg4 = document.querySelector("#errMsg4");
let errMsg5 = document.querySelector("#errMsg5");
btnSub2.addEventListener("click", validateBox);
// let validationFail = 0;
function validateBox() {
  // function clearFormFields () {
  //   name1.value = "";
  //   validateDescription.value = "";
  //   validateAssignedTo.value = "";
  //   validateStatus.value = "In Progress";
  //   validateDueDate.value = "";
  // }

  // validation for NameInput
  if (name1.value == "" || name1.value.length < 5) {
    console.log(name1.value.length);
    errMsg1.innerHTML = "Length should be more than 5";
    errMsg1.style.color = "#ff0000";
    name1.focus();
  } else {
    errMsg1.innerHTML = "All good ";
    errMsg1.style.color = "#eeeeee";

  }
  // validation for description
  
  if (validateDescription.value == "" || validateDescription.value.length < 5) {
    console.log(validateDescription.value.length);
    errMsg2.innerHTML = "Length should be more than 5";
    errMsg2.style.color = "#ff0000";
    validateDescription.focus();
    } else {
    errMsg2.innerHTML = "All good ";
    errMsg2.style.color = "#eeeeee";
  }
// validate assignedto
if (validateAssignedTo.value == "" || validateAssignedTo.value.length < 5) {
  console.log(validateAssignedTo.value.length);
  errMsg3.innerHTML = "Length should be more than 5";
  errMsg3.style.color = "#ff0000";
  validateAssignedTo.focus();
  } else {
  errMsg3.innerHTML = "All good ";
  errMsg3.style.color = "#eeeeee";
}

// if (validationFail > 0) {
//   validationFail = 0;
//   return;
// } else {
//   // Push the valid input into our tasks array
//   taskManager.addTask(
//     validateName.value,
//     validateDescription.value,
//     validateAssignedTo.value,
//     validateDueDate.value,
//     validateStatus.value
//   );
//   clearFormFields();
// }
let status = validateStatus.value;
if(status.value === "todo" || status.value === "in_progress" || status.value === "review" ||status.value === "done"){
console.log(status.value);
  errMsg4.innerHTML ="Select the correct option";
  errMsg4.style.color = "#ff0000";
  validateStatus.focus();
  } else {
  errMsg4.innerHTML = "All good ";
  errMsg4.style.color = "#eeeeee";
}

console.log(validateStatus.value);
  const date = validateDueDate;
  if(date.value === "dd/mm/yyyy"){
      errMsg5.innerHTML ="Select the correct date";
      errMsg5.style.color = "#ff0000";
      date.focus();
      } else {
      errMsg5.innerHTML = "All good ";
      errMsg5.style.color = "#eeeeee";
    }
    
    console.log(date.value);
    
    
    }
    
  
  