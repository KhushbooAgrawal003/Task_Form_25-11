const regEx = /^[A-Za-z\s]*$/;
function validateTaskForm()
 {
    function validName() 
    {
        let userInput = document.getElementById("name").value;
        if (!regEx.test(userInput) && userInput.length < 8)
         {
            document.getElementById("valid").innerHTML = "The Name at least 8 characters and only contain letters";
            return false;
        }
        else if (!regEx.test(userInput)) 
        {
            document.getElementById("valid").innerHTML = "The Name field Only contain letters";
            return false;
        }
        else if (regEx.test(userInput) && userInput.length < 8)
         {
            document.getElementById("valid").innerHTML = "The Name should be more then 8 characters";
            return false;
        }
        else 
        {
            document.getElementById("valid").innerHTML = "";
            return true;
        }
    }
    validName();

    function validDate() {
        let validDate = document.getElementById("dueDate").value;
        const currentDate = new Date();
        validDate = new Date(validDate)
        if (validDate < currentDate) {
            document.getElementById("valid1").innerHTML = "The date must be Bigger or Equal to today's date";
            return false;
        }
        else if (isNaN(validDate)) {
            document.getElementById("valid1").innerHTML = "Please enter the due date";
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
        }
    }
    validDes();


    function validAssign() {
        const element = document.getElementById("assign").value;
        if (!regEx.test(element) && element.length < 8) {
            document.getElementById("errorMsg").innerHTML = "Assigned to text at least 8 characters and only contains letters";
            return false;
        } else if (!regEx.test(element)) {
            document.getElementById("errorMsg").innerHTML = "The Assigned to field Only contain letters";
            return false;
        } else if (regEx.test(element) && element.length < 8) {
            document.getElementById("errorMsg").innerHTML = "Assigned to should be more then 8 characters";
            return false;
        }
        else {
            document.getElementById("errorMsg").innerHTML = "";
            return true;
        }
    }
    validAssign();
}

function currentDate() {
    const el = document.getElementById('date');
    const current = new Date();
    const day = current.getDate();
    const month = current.getMonth() + 1;
    const year = current.getFullYear();
    // returns the final date with backslash (/) separator
    const date = `${day}/${month}/${year}`;
    el.innerHTML = date;
}
currentDate(); //Calling the current date function

// Khushboo's code for Status:
const validateStatus = document.getElementById('status');
if (validateStatus.selectedIndex === 0) 
{
    document.getElementById('error1').innerHTML = 'Please select an status option';
    return false;
}
