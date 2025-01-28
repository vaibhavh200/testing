// Example function to simulate job application
function applyJob() {
    alert("You have successfully applied for this job!");
}

// Handling form submission (for simplicity, we use alert)
document.addEventListener("DOMContentLoaded", function() {
    // Simulate login functionality
    const loginForm = document.querySelector("form[action='user-dashboard.html']");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Login successful! Redirecting to your dashboard...");
            window.location.href = "user-dashboard.html";
        });
    }

    // Simulate signup functionality
    const signupForm = document.querySelector("form[action='user-dashboard.html']");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Signup successful! Redirecting to your dashboard...");
            window.location.href = "user-dashboard.html";
        });
    }

    // Handling posting jobs in employer dashboard
    const jobPostForm = document.querySelector("form[action='#']");
    if (jobPostForm) {
        jobPostForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const jobTitle = document.getElementById("job-title").value;
            const location = document.getElementById("location").value;
            const technology = document.getElementById("technology").value;

            if (jobTitle && location && technology) {
                alert("Job posted successfully!");
                // Here you could save the job to a database via an API
            } else {
                alert("Please fill out all fields.");
            }
        });
    }
});
