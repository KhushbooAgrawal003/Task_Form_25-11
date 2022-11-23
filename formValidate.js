
function validateTaskForm() {
    function validName(){
    let userInput = document.getElementById("name").value;
    
   if (userInput.length < 8) {
        document.getElementById("valid").innerHTML = "Please enter a valid name.";       
        return false;
    }
    else {
        document.getElementById("valid").innerHTML = "";    
        return true;
    }
}
validName();
function validDate(){  
    let validDate = document.getElementById("dueDate").value;
    const currentDate = new Date();
    validDate = new Date(validDate)
    if (validDate < currentDate) {
        document.getElementById("valid1").innerHTML ="Error! Due date must be later than today.";
        return false;
    }
    else if (isNaN(validDate)) {
        document.getElementById("valid1").innerHTML ="Please enter a date";
        return false;
    }
    else {
        document.getElementById("valid1").innerHTML = "";    
        return true;
    }
}
validDate();
function validDes() {
    const taskDescription = document.querySelector('#taskDescription');
    let taskDescriptionValue = taskDescription.value;
    if (taskDescriptionValue.length >= 15) {
        taskDescription.classList.add("is-valid");
        taskDescription.classList.remove("is-invalid");
      } else {
        taskDescription.classList.add("is-invalid");
        taskDescription.classList.remove("is-valid");
        validationFail++;
      }
}
validDes();
}

function currentDate () {
    const el = document.getElementById('date');
    const current= new Date();
    const day =  current.getDate();
    const month = current.getMonth()+1;
    const year = current.getFullYear();
    // returns the final date with backslash (/) separator
    const date = `${day}/${month}/${year}`;
    el.innerHTML = date;
  }
  currentDate(); //Calling the current date function

