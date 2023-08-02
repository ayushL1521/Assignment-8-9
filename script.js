function register() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name='gender']:checked");
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    let hasErrors = false;

    // Reset previous error messages
    document.querySelectorAll(".error-message").forEach(errorElement => {
        errorElement.textContent = "";
    });

    // Check for empty fields and display appropriate error messages
    if (!firstName) {
        document.getElementById("firstNameError").textContent = "Please enter your first name.";
        hasErrors = true;
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
        document.getElementById("firstNameError").textContent = "First name should contain only letters.";
        hasErrors = true;
    }

    if (!lastName) {
        document.getElementById("lastNameError").textContent = "Please enter your last name.";
        hasErrors = true;
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
        document.getElementById("lastNameError").textContent = "Last name should contain only letters.";
        hasErrors = true;
    }

    if (!dob) {
        document.getElementById("dobError").textContent = "Please enter your date of birth.";
        hasErrors = true;
    }

    if (!gender) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        hasErrors = true;
    }

    if (!password) {
        document.getElementById("passwordError").textContent = "Please enter a password.";
        hasErrors = true;
    }

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        hasErrors = true;
    }

    if (!hasErrors) {
        // All inputs are valid, proceed with registration logic here
        alert("Registration successful!");
        document.getElementById("registrationForm").reset();
    }
}
