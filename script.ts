

// Define interfaces for form data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    address: string;
    skills: string[];
    experience: string;
    education: string;
  }
  
  // Function to handle form submission
  function handleFormSubmit(event: Event): void {
    event.preventDefault();
  
    // Get form input values
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const addressInput = document.getElementById('address') as HTMLInputElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
    const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
    const educationInput = document.getElementById('education') as HTMLTextAreaElement;
  
    // Collect form data
    const resumeData: ResumeData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      address: addressInput.value,
      skills: skillsInput.value.split(',').map(skill => skill.trim()),
      experience: experienceInput.value,
      education: educationInput.value,
    };
  
    // Call function to generate resume
    generateResume(resumeData);
  }
  
  // Function to generate and display the resume
  function generateResume(data: ResumeData): void {
    const outputDiv = document.getElementById('resume-output') as HTMLDivElement;
    outputDiv.innerHTML = `
      <h2>${data.name}'s Resume</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Address:</strong> ${data.address}</p>
      <p><strong>Skills:</strong> ${data.skills.join(', ')}</p>
      <p><strong>Experience:</strong> ${data.experience}</p>
      <p><strong>Education:</strong> ${data.education}</p>
    `;
  }
  

  // Print functionality
 // Ensure you have the correct type for the button
const printButton = document.getElementById('print-resume') as HTMLButtonElement;

if (printButton) {
    printButton.addEventListener('click', () => {
        window.print(); // This will open the print dialog
    });
}