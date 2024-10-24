var _a;
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    // Get form input values
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var addressInput = document.getElementById('address');
    var skillsInput = document.getElementById('skills');
    var experienceInput = document.getElementById('experience');
    var educationInput = document.getElementById('education');
    // Collect form data
    var resumeData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        address: addressInput.value,
        skills: skillsInput.value.split(',').map(function (skill) { return skill.trim(); }),
        experience: experienceInput.value,
        education: educationInput.value,
    };
    // Call function to generate resume
    generateResume(resumeData);
}
// Function to generate and display the resume
function generateResume(data) {
    var outputDiv = document.getElementById('resume-output');
    outputDiv.innerHTML = "\n      <h2>".concat(data.name, "'s Resume</h2>\n      <p><strong>Email:</strong> ").concat(data.email, "</p>\n      <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n      <p><strong>Address:</strong> ").concat(data.address, "</p>\n      <p><strong>Skills:</strong> ").concat(data.skills.join(', '), "</p>\n      <p><strong>Experience:</strong> ").concat(data.experience, "</p>\n      <p><strong>Education:</strong> ").concat(data.education, "</p>\n    ");
}
//   // Add event listener to the form
var form = document.getElementById('resume-form');
form.addEventListener('submit', handleFormSubmit);
// Print functionality
(_a = document.getElementById('print-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    window.print(); // This will open the print dialog
});
