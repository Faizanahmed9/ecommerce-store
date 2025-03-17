// Login Function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alert("Login Successful!");

        // Admin Check
        if (email === "faizan123@gmail.com") {
            window.location.href = "admin-dashboard.html";
        } else {
            window.location.href = "index.html";
        }
    })
    .catch((error) => {
        alert(error.message);
    });
}




// Signup Function
function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("Account Created Successfully!");
        window.location.href = "index.html";
    })
    .catch((error) => {
        alert(error.message);
    });
}
