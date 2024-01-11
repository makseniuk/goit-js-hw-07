const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const emailInput = this.element.email;
    const passwordInput = this.element.password;

    if (emailInput.value.trim() || passwordInput.value.trim()) {
        alert("All fields must be completed");
        return;
    }

    const formData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim()
    };

    console.log(formData);

    this.reset();

});
