// Sample data for job postings (this can be dynamically fetched from a database in a real-world scenario)
const jobListings = [
    {
        title: 'Software Engineer',
        company: 'Tech Innovators',
        location: 'San Francisco, CA',
        postedBy: 'John Doe, Class of 2015',
        description: 'Develop and maintain software applications in a fast-paced, agile environment.'
    },
    {
        title: 'Marketing Manager',
        company: 'Creative Solutions',
        location: 'Remote',
        postedBy: 'Jane Smith, Class of 2010',
        description: 'Lead the marketing team to develop innovative campaigns for global clients.'
    },
    {
        title: 'Data Analyst',
        company: 'Data Insights Inc.',
        location: 'New York, NY',
        postedBy: 'Michael Lee, Class of 2012',
        description: 'Analyze and interpret complex datasets to assist in strategic decision-making.'
    }
];

// Dynamically populate job listings on the page
const jobListingsContainer = document.querySelector('.job-listings');

function populateJobListings() {
    jobListings.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';

        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Posted By:</strong> ${job.postedBy}</p>
            <p><strong>Job Description:</strong> ${job.description}</p>
            <button class="apply-btn">Apply Now</button>
        `;

        jobListingsContainer.appendChild(jobCard);
    });
}

// Call the function to display job listings when the page loads
window.onload = populateJobListings;
