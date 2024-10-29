
// Toggle for Login page Password
const password = document.getElementById("password_inputs");
const eye_logos = document.getElementById("eye_logos");

eye_logos.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        eye_logos.src = "../../image/open_eye_password.png";
        eye_logos.style.width = "25px";
        eye_logos.style.height = "25px";
    } else {
        password.type = "password";
        eye_logos.src = "../../image/close_logo_password.png";
        eye_logos.style.width = "25px";
        eye_logos.style.height = "25px";
    }
});

// Toggle for sign up page Password
const signupPassword = document.getElementById("password_input");
const eye_logo_password = document.getElementById("eye_logo_password");

eye_logo_password.addEventListener("click", () => {
    if (signupPassword.type === "password") {
        signupPassword.type = "text";
        eye_logo_password.src = "../../image/open_eye_password.png";
        eye_logo_password.style.width = "25px";
        eye_logo_password.style.height = "25px";
    } else {
        signupPassword.type = "password";
        eye_logo_password.src = "../../image/close_logo_password.png";
        eye_logo_password.style.width = "25px";
        eye_logo_password.style.height = "25px";
    }
});


// Toggle for sign up page Confirm Password
const cpassword = document.getElementById("Cpassword_input");
const eye_logo_confirm = document.getElementById("eye_logo_confirm");

eye_logo_confirm.addEventListener("click", () => {
    if (cpassword.type === "password") {
        cpassword.type = "text";
        eye_logo_confirm.src = "../../image/open_eye_password.png";
        eye_logo_confirm.style.width = "25px";
        eye_logo_confirm.style.height = "25px";
    } else {
        cpassword.type = "password";
        eye_logo_confirm.src = "../../image/close_logo_password.png";
        eye_logo_confirm.style.width = "25px";
        eye_logo_confirm.style.height = "25px";
    }
});

// go to sign page and go to login page
const goSignUp = document.getElementById("go_sign_up");
const goLoginPage = document.getElementById("go_login_page");
const loginContainer = document.querySelector(".login-container");
const signUpContainer = document.querySelector(".sign_up_container")

goSignUp.addEventListener("click", () => {
    loginContainer.classList.add("hidden");
    signUpContainer.classList.remove("hidden");
});

goLoginPage.addEventListener("click", () => {
    signUpContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
});


const firebaseConfig = {
    apiKey: "AIzaSyD2-zKNWSqkRWHsk49coYSbMfBnywCpdO8",
    authDomain: "smartbus-7443b.firebaseapp.com",
    projectId: "smartbus-7443b",
    storageBucket: "smartbus-7443b.appspot.com",
    messagingSenderId: "35022257891",
    appId: "1:35022257891:web:8eed74fb4131a414730fd6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Select elements from the DOM
const loginForm = document.getElementById("login_form");
const loginEmail = document.getElementById("Email_inputs");
const loginPassword = document.getElementById("password_inputs");
const loginError = document.getElementById("loginError");

const signUpName = document.getElementById("Name_input");

const signUpForm = document.getElementById("sign_up_form");
const signUpEmail = document.getElementById("Email_input");
const signUpPassword = document.getElementById("password_input");
const signUpError = document.getElementById("signUpError");

// Handle Login Form Submission
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('Logged in:', userCredential.user);
            window.location.href = "home.html"
            loginError.textContent = ''; 
        })
        .catch((error) => {
            loginError.textContent = ""; 
        });
});

// Handle Sign Up Form Submission
signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = signUpEmail.value;
    const password = signUpPassword.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('Signed up:', userCredential.user);
            alert('Sign-up successful, you can now log in.');
            signUpError.textContent = '';
            signUpContainer.classList.add('hidden');
            loginContainer.classList.remove('hidden');

            localStorage.setItem("userName", username);
        })
        .catch((error) => {
            signUpError.textContent = "";
        });
});


// Login page
const loginName = document.getElementById("Name_inputs");

// Login page form validation Error space
const loginNameError = document.getElementById("nameError");
const loginEmailError = document.getElementById("emailError");
const loginPasswordError = document.getElementById("passwordError");

// Sign up page form validation Error space
const signUpNameError = document.getElementById("NameError");
const signUpEmailError = document.getElementById("EmailError");
const signUpNumberError = document.getElementById("numberError");
const signUpPasswordError = document.getElementById("passError");
const signUpCpassError = document.getElementById("cpassError");
const signUpBtn = document.getElementById("Sign_up");

// Form validation for login page
loginForm.addEventListener("submit", (e) =>{
    if(loginName.value.length === 0){
        e.preventDefault();
        loginNameError.textContent = "User name required";
    }
    else if(loginName.value.length >= 3 && loginForm.value.length <= 30){
        e.preventDefault();
        loginNameError.textContent = "";
    }
    else {
        e.preventDefault();
        loginNameError.textContent = "The user name must be 3 to 30 character";
    }

    if(loginEmail.value.length === 0){
        e.preventDefault();
        loginEmailError.textContent = "Enter required";
    }
    else if(loginEmail.validity.typeMismatch){
        e.preventDefault();
        loginEmailError.textContent = "Enter valid email";
    }
});
