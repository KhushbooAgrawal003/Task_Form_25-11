// task description not empty and min of 15 characters -->
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