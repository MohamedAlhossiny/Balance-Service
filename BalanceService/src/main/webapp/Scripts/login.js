document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const adminCredentials = { username: "admin", password: "admin1234", role: "admin" };

        if (username === adminCredentials.username && password === adminCredentials.password) {
            
            localStorage.setItem("loggedInUser", JSON.stringify({ username, role: "admin" }));

            window.location.href = "admin.html";
        } else {
            alert("Invalid username or password! Try again.");
        }
    });
});


