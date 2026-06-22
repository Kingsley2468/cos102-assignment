// ==========================================
// 1. REGEX PATTERNS
// ==========================================

// Alphanumeric strings between 5 and 15 characters long
const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;

// Min 8 characters, at least 1 uppercase letter, 1 digit, and 1 special character
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

// Starts exactly with +234 followed by exactly 10 digits
const phoneRegex = /^\+234\d{10}$/;

// ==========================================
// 2. DOM ELEMENTS
// ==========================================
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const phoneInput = document.getElementById('phone');

const usernameFeedback = document.getElementById('username-feedback');
const passwordFeedback = document.getElementById('password-feedback');
const phoneFeedback = document.getElementById('phone-feedback');

// ==========================================
// 3. VALIDATION LISTENERS
// ==========================================

// Validate Username on input
usernameInput.addEventListener('input', () => {
    const value = usernameInput.value;
    if (value === "") {
        setFeedback(usernameFeedback, "Empty.", "gray");
    } else if (usernameRegex.test(value)) {
        setFeedback(usernameFeedback, "Valid Username", "green");
    } else {
        setFeedback(usernameFeedback, "Invalid (Must be 5-15 alphanumeric characters)", "red");
    }
});

// Validate Password on input
passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;
    if (value === "") {
        setFeedback(passwordFeedback, "Empty.", "gray");
    } else if (passwordRegex.test(value)) {
        setFeedback(passwordFeedback, "Valid Password", "green");
    } else {
        setFeedback(passwordFeedback, "Weak (Needs minimum of 8 characters, 1 upper, 1 digit, 1 special)", "red");
    }
});

// Validate Phone Number on input
phoneInput.addEventListener('input', () => {
    const value = phoneInput.value;
    if (value === "") {
        setFeedback(phoneFeedback, "Empty.", "gray");
    } else if (phoneRegex.test(value)) {
        setFeedback(phoneFeedback, "Valid Nigerian Number", "green");
    } else {
        setFeedback(phoneFeedback, "Invalid (Must start with +234 (Nigerian number) followed by 10 digits)", "red");
    }
});

// ==========================================
// 4. HELPER FUNCTION TO CHANGER FEEDBACK
// ==========================================
function setFeedback(element, text, color) {
    element.textContent = text;
    element.style.color = color;
}