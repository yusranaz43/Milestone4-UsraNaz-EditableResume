//

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById(
  "resume-display"
) as HTMLDivElement;


// Function to create a content-editable section
function makeEditable(element: HTMLElement) {
  element.setAttribute("contenteditable", "true");
  element.style.border = "1px dashed #007bff"; // Visual feedback
  element.style.padding = "5px";
}


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phoneNumber = (
    document.getElementById("phone-number") as HTMLInputElement
  ).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const instituteName = (
    document.getElementById("institue-name") as HTMLInputElement
  ).value;
  const fieldOfStudy = (
    document.getElementById("field-of-study") as HTMLInputElement
  ).value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const completionYear = (
    document.getElementById("completion-year") as HTMLInputElement
  ).value;
  const skills = (document.getElementById("skills-list") as HTMLTextAreaElement)
    .value;
  const jobTitle = (document.getElementById("job-title") as HTMLInputElement)
    .value;
  const companyName = (
    document.getElementById("company-name") as HTMLInputElement
  ).value;
  const duration = (document.getElementById("duration") as HTMLInputElement)
    .value;

    
    
    
    const resumeHTML = `
    <div id="resume-container">
    <h2>Your Resume</h2>

    <fieldset class="resume-section">
        <legend>Personal Information</legend>
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Phone Number:</strong>${phoneNumber}</p>
        <p><strong>Email:</strong>${email}</p>
    </fieldset>

    <fieldset class="resume-section">
        <legend>Education</legend>
        <p><strong>Institute Name:</strong> ${instituteName}</p>
        <p><strong>Field of Study:</strong> ${fieldOfStudy}</p>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Completion Year:</strong> ${completionYear}</p>
    </fieldset>

    <fieldset class="resume-section">
        <legend>Skills</legend>
        <p>${skills}</p>
    </fieldset>

    <fieldset class="resume-section">
        <legend>Work Experience</legend>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Duration:</strong> ${duration}</p>
    </fieldset>
    </div>

`;


  resumeDisplay.innerHTML = resumeHTML;

  resumeDisplay.style.display = "block";


  // Make each section editable
  const nameDisplay = document.getElementById("name-display") as HTMLElement;
  const phoneDisplay = document.getElementById("phone-display") as HTMLElement;
  const emailDisplay = document.getElementById("email-display") as HTMLElement;
  const instituteDisplay = document.getElementById("institute-display") as HTMLElement;
  const fieldDisplay = document.getElementById("field-display") as HTMLElement;
  const degreeDisplay = document.getElementById("degree-display") as HTMLElement;
  const yearDisplay = document.getElementById("year-display") as HTMLElement;
  const skillsDisplay = document.getElementById("skills-display") as HTMLElement;
  const jobDisplay = document.getElementById("job-display") as HTMLElement;
  const companyDisplay = document.getElementById("company-display") as HTMLElement;
  const durationDisplay = document.getElementById("duration-display") as HTMLElement;


  // Apply content-editable to each element
  makeEditable(nameDisplay);
  makeEditable(phoneDisplay);
  makeEditable(emailDisplay);
  makeEditable(instituteDisplay);
  makeEditable(fieldDisplay);
  makeEditable(degreeDisplay);
  makeEditable(yearDisplay);
  makeEditable(skillsDisplay);
  makeEditable(jobDisplay);
  makeEditable(companyDisplay);
  makeEditable(durationDisplay);

});
