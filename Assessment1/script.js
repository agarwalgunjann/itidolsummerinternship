const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic validations
  let isValid = true;

  // Check if all required fields are filled
  inputs.forEach((input) => {
    if (input.required && input.value === '') {
      isValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  // Check if email is valid
  const emailInput = document.querySelector('input[type="email"]');
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    isValid = false;
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }

  // Check if password is strong enough
  const passwordInput = document.querySelector('input[type="password"]');
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    isValid = false;
    passwordInput.classList.add('error');
  } else {
    passwordInput.classList.remove('error');
  }

  if (isValid) {
    // Form is valid, submit it
    form.submit();
    alert("Successfully submit");
  }
});