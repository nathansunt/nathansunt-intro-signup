const form = document.getElementById('form');
const fname = document.getElementById('first-name');
const lname = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  let firstName = fname.value.trim();
  let lastName = lname.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let emailVerify = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(firstName === ''){
    errorFunction(fname, 'First Name cannot be empty')
  } else {
    successFunction(fname)
  }

  if(lastName === ''){
    errorFunction(lname, 'Last Name cannot be empty')
  } else {
    successFunction(lname)
  }

  if(emailValue === ''){
    errorFunction(email, 'Email cannot be empty')
  } else if (!emailValue.match(emailVerify)){
    errorFunction(email, 'Looks like this is not an email')
  } else {
    successFunction(email)
  }

  if(passwordValue === ''){
    errorFunction(password, 'Password cannot be empty')
  } else if (passwordValue.length < 8){
    errorFunction(password, 'Password must be at least 8 characters')
  } else {
    successFunction(password)
  }
});

function errorFunction(userInput, message){
  const formControl = userInput.parentElement;
  const span = formControl.querySelector('span');
  span.innerText = message;
  userInput.classList.add('error');
  span.className += 'error-text ';
};

function successFunction(userInput){
  const formControl = userInput.parentElement;
  const span = formControl.querySelector('span');
  userInput.classList.add('success');
  userInput.classList.remove('error');
  span.style.display = 'none'; 

}