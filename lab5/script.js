document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('detailsForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phoneNumber: document.getElementById('phone_number').value,
                degree: document.getElementById('degree').value,
                institute: document.getElementById('institute').value,
                passingYear: document.getElementById('passing Year').value,
                jobTitle: document.getElementById('job_title').value,
                company: document.getElementById('company').value,
                duration: document.getElementById('duration').value,
                responsibility: document.getElementById('responsibility').value,
                languages: Array.from(document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked'))
                    .map((checkbox) => checkbox.value),
                frameworks: Array.from(document.querySelectorAll('.check-grp input[type="checkbox"]:checked'))
                    .map((checkbox1) => checkbox1.value),
                versionControl: document.getElementById('version').value,
                projectName: document.getElementById('ProjectName').value,
                projDescription: document.getElementById('ProjectDescription').value
                
            };

            
            sessionStorage.setItem('formData', JSON.stringify(formData));// Store data in sessionStorage
            window.location.href = 'resume.html'; // Redirect to resume
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Check if data exists in sessionStorage
    const formData = sessionStorage.getItem('formData');

    if (!formData && window.location.pathname.endsWith('/resume.html')) { // If form is not filled, redirect to form.html
        alert("Please fill out the form");
        window.location.href = 'form.html';
        return;
    }

    // Parse the form data and populate the resume page
    const data = JSON.parse(formData);


    document.getElementById('displayName').textContent = data.name;
    document.getElementById('displayEmail').textContent = `Email: ${data.email}`;
    document.getElementById('displayPhone').textContent = `Phone: ${data.phoneNumber}`;

    document.getElementById('displayEducation').innerHTML = 
    `
        <strong>Degree:</strong> ${data.degree}<br>
        <strong>Institution:</strong> ${data.institute}<br>
        <strong>Year:</strong> ${data.passingYear}
    `;

    document.getElementById('displayExperience').innerHTML = 
    `
        <h4>If not any put N.A</h4>
            <strong>Job Title:</strong> ${data.jobTitle}<br>
            <strong>Company:</strong> ${data.company}<br>
            <strong>Duration:</strong> ${data.duration}<br>
            <strong>Responsibilities:</strong> ${data.responsibility}
    `;

    document.getElementById('Language').textContent = `Language: ${data.languages.join(', ')}`;
    document.querySelector('#displaySkills > ul > li:nth-child(2)').textContent = `Framework: ${data.frameworks.join(', ')}`;
    document.querySelector('#displaySkills > ul > li:nth-child(3)').textContent = `Version Control: ${data.versionControl}`;
    document.querySelector('#displaySkills > ul > li:nth-child(4)').textContent = "Database: ";



    document.getElementById('displayProject').innerHTML = 
    `
        <ul>
            <li><strong>Name:</strong> ${data.projectName}</li>
            <li><strong>Description:</strong> ${data.projDescription}</li>
        </ul>
    `;
});
