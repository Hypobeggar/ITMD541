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
                languages: Array.from(document.querySelectorAll('checkbox-group input[type="checkbox"]:checked'))
                    .map((checkbox) => checkbox.value),
                frameworks: Array.from(document.querySelectorAll('check-grp input[type="checkbox"]:checked'))
                    .map((checkbox) => checkbox.value),
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

    if (!formData && window.location.pathname === '/lab5/resume.html') { // If form is not filled, redirect to form.html
        alert("Please fill out the form");
        window.location.href = 'form.html';
        return;
    }

});
