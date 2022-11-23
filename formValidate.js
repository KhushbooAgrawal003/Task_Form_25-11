
function validateTaskForm() {
    function validName(){
    let userInput = document.getElementById("name").value;
    
   if (userInput.length<8) {
        alert("Please enter a valid name.");       
        return false;
    }
    else {
        return true;
    }
}
validName();
function validDate(){
    
    let validDate = document.getElementById("dueDate").value;
    const currentDate = new Date();
    validDate = new Date(validDate)
    if (validDate < currentDate) {
        alert("Error! Due date must be later than today.")
        return false;
    }
}
validDate();
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