"use strict";
//
const form = document.getElementById("resume-form");
const resumeDisplay = document.getElementById("resume-display");
// Function to create a content-editable section
function makeEditable(element) {
    element.setAttribute("contenteditable", "true");
    element.style.border = "1px dashed #007bff"; // Visual feedback
    element.style.padding = "5px";
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const email = document.getElementById("email").value;
    const instituteName = document.getElementById("institue-name").value;
    const fieldOfStudy = document.getElementById("field-of-study").value;
    const degree = document.getElementById("degree").value;
    const completionYear = document.getElementById("completion-year").value;
    const skills = document.getElementById("skills-list")
        .value;
    const jobTitle = document.getElementById("job-title")
        .value;
    const companyName = document.getElementById("company-name").value;
    const duration = document.getElementById("duration")
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
    const nameDisplay = document.getElementById("name-display");
    const phoneDisplay = document.getElementById("phone-display");
    const emailDisplay = document.getElementById("email-display");
    const instituteDisplay = document.getElementById("institute-display");
    const fieldDisplay = document.getElementById("field-display");
    const degreeDisplay = document.getElementById("degree-display");
    const yearDisplay = document.getElementById("year-display");
    const skillsDisplay = document.getElementById("skills-display");
    const jobDisplay = document.getElementById("job-display");
    const companyDisplay = document.getElementById("company-display");
    const durationDisplay = document.getElementById("duration-display");
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
