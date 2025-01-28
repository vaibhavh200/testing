// Function to handle job posting
document.getElementById('postJobForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the form values
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const salary = document.getElementById('salary').value;
    const jobDescription = document.getElementById('jobDescription').value;

    // Create a job object
    const job = {
        jobTitle,
        company,
        location,
        experience,
        salary,
        jobDescription
    };

    // Save the job object to localStorage
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    jobs.push(job);
    localStorage.setItem('jobs', JSON.stringify(jobs));

    // Reset the form
    document.getElementById('postJobForm').reset();

    alert('Job Posted Successfully!');
});

// Function to display jobs on the homepage
function displayJobs() {
    const jobContainer = document.getElementById('jobContainer');
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        jobCard.innerHTML = `
            <h3>${job.jobTitle}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Experience:</strong> ${job.experience} years</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <p>${job.jobDescription}</p>
        `;

        jobContainer.appendChild(jobCard);
    });
}

// Call displayJobs function when the homepage loads
if (document.getElementById('jobContainer')) {
    displayJobs();
}
