document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector(".container");
    const pwShowHide = document.querySelectorAll(".showHidePw");
    const signUp = document.querySelector(".signup-link");
    const login = document.querySelector(".login-link");
    const pass = document.querySelector(".pass-link");
    const loginButton = document.getElementById("loginButton");

    function toggleForm(formToShow) {
        document.querySelectorAll('.form').forEach(form => {
            form.style.opacity = 0;
        });
        // Show the form specified by formToShow
        document.querySelector(formToShow).style.opacity = 1;
    }

    // Show/hide password and change icon
    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            const pwField = eyeIcon.previousElementSibling;
            if (pwField.type === "password") {
                pwField.type = "text";
                eyeIcon.classList.replace("uil-eye-slash", "uil-eye");
            } else {
                pwField.type = "password";
                eyeIcon.classList.replace("uil-eye", "uil-eye-slash");
            }
        });
    });

    // Changes from login to registration, and password recovery
    signUp.addEventListener("click", () => {
        container.classList.add("active");
        toggleForm('.signup');
    });

    login.addEventListener("click", () => {
        container.classList.remove("active");
        toggleForm('.login');
    });

    pass.addEventListener("click", () => {
        container.classList.remove("active");
        window.location.href = "pass_index.html";
    });

    // Singleton to maintain one login
    class SessionManager {
        constructor() {
            if (!SessionManager.instance) {
                this.loggedInUser = null;
                SessionManager.instance = this;
            }
            return SessionManager.instance;
        }

        loginUser(user) {
            this.loggedInUser = user;
        }

        getLoggedInUser() {
            return this.loggedInUser;
        }

        logoutUser() {
            this.loggedInUser = null;
        }
    }

    function validate(email, password) {
        // for testing
        return email === 'brooklyn' && password === 'little';
    }

    // Login form submission
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get username and password
        let email = document.querySelector('.login input[type="text"]').value;
        let password = document.querySelector('.login input[type="password"]').value;

        // Validate input
        if (!validate(email, password)) {
            alert("Invalid email or password");
            return; // Validation failed, exit
        }

        // Simulate login process (replace with actual login logic)
        // For demonstration purposes, assume login is successful
        let user = { email: email, role: 'user' };

        // Create singleton instance of SessionManager
        const sessionManager = new SessionManager();

        // Log in the user
        sessionManager.loginUser(user);

        // Redirect to home page 
        window.location.href = 'welcome_index.html';
    });
});
