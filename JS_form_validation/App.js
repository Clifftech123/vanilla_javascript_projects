// GETTING DOCUMENT 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



// SHOW ERROR FUNCTIONS THAT SHOW WHEN THE 
// USER DID NOT INTER ANY VALUE
function showError(input, meassage) {
    const formControl = input.parentElement;
    formControl.className = 'form-field error'
    const small = formControl.querySelector('small');
    small.innerHTML = meassage;

}

//SUCCESS FUNCTION THAT WILL CALL WHEN THE USER ENTER VALUE
function showSuccess (input) {
    formControl = input.parentElement;
    formControl.className ='form-field success'
}


// CHECKS FUNCTION FOR THE EMAIL
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Enail is not valid');
  }
}



//CHECK REQUIRED FUNCTIONS
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}


// LENGETH CHECK

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}


// PASSWORD MATCH FUNCTION
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

//GET THE FILE NAME FUNCTION  
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// EVENT LISTENER THAT EXCULPATE THE ALL THE FUNCTION
form.addEventListener('submit', function (e) {
    e.preventDefault();

 checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
    
});


