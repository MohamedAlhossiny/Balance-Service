// document.addEventListener("DOMContentLoaded", async () => {
//     const role = localStorage.getItem("role");

//     const admin = localStorage.getItem("loggedInUser");
//     if (!admin) {
//         alert("Please log in first.");
//         window.location.href = "login.html";
//         return;
//     }

//     const balanceElement = document.getElementById("balanceAmount");
//     try {
//         const response = await fetch(`/api/getBalance?username=${admin}`);
//         const data = await response.json();
//         balanceElement.innerText = `Total Balance: ${data.balance} USD`;
//     } catch (error) {
//         console.error("Error fetching balance:", error);
//         balanceElement.innerText = "Error retrieving balance.";
//     }
// });
