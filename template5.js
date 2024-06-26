// dynamically Qualification textaea
function addNewEqField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-3");
  // newNode.setAttribute("rows" , 3);
  newNode.setAttribute("placeholder", "Enter here");
  // newNode.setAttribute("placeholder", "Enter Here");

  let weOb = document.getElementById("eq");
  let weAddButtonOb = document.getElementById("eqAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

// dynamically Technical skills textaea
function addNewTechField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("TechField");
  newNode.classList.add("mt-3");
  // newNode.setAttribute("rows" , 3);
  newNode.setAttribute("placeholder", "Enter here");
  // newNode.setAttribute("placeholder", "Enter Here");

  let techOb = document.getElementById("techSkills");
  let techAddButtonOb = document.getElementById("techAddButton");

  techOb.insertBefore(newNode, techAddButtonOb);
}

// dynamically Language skills textaea
function addNewLanguageField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("languageField");
  newNode.classList.add("mt-3");
  // newNode.setAttribute("rows" , 3);
  newNode.setAttribute("placeholder", "Enter here");
  // newNode.setAttribute("placeholder", "Enter Here");

  let languageOb = document.getElementById("language");
  let languageAddButtonOb = document.getElementById("languageAddButton");

  languageOb.insertBefore(newNode, languageAddButtonOb);
}

// dynamically Intrests
function addNewIntrestField() {
  const newNode2 = document.createElement("textarea");
  newNode2.classList.add("form-control");
  newNode2.classList.add("intrestField");
  newNode2.classList.add("mt-3");
  // newNode2.setAttribute("rows" , 3);
  newNode2.setAttribute("placeholder", "Enter here");
  // newNode2.setAttribute("placeholder", "Enter Here");

  const intrestOb = document.getElementsByClassName("intrestForm")[0]; // Using getElementsByClassName since it seems there are multiple elements with the same class
  const intrestAddButtonOb = document.getElementById("intrestAddButton");

  intrestOb.insertBefore(newNode2, intrestAddButtonOb);
}

// Hobby
function addNewHobbyField() {
  const newNode3 = document.createElement("textarea");
  newNode3.classList.add("form-control");
  newNode3.classList.add("hobbyField");
  newNode3.classList.add("mt-3");
  // newNode2.setAttribute("rows" , 3);
  newNode3.setAttribute("placeholder", "Enter here");
  // newNode2.setAttribute("placeholder", "Enter Here");

  const hobbyOb = document.getElementsByClassName("hobbyForm")[0]; // Using getElementsByClassName since it seems there are multiple elements with the same class
  const hobbyAddButtonOb = document.getElementById("hobbyAddButton");

  hobbyOb.insertBefore(newNode3, hobbyAddButtonOb);
}

// generating CV
function generateCV() {
  // Code For Setting Image
  let file = document.getElementById("imgField").files[0];
  let file2 = document.getElementById("imgField").files[0];

  console.log(file);
  console.log(file2);

  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);

  let reader2 = new FileReader();
  reader2.readAsDataURL(file2);
  console.log(reader2.result);

  // Set The Image To Template
  reader.onloadend = function () {
    document.getElementById("imgTemplate2").src = reader.result;
  };
  // Set The Image To Template
  reader2.onloadend = function () {
    document.getElementById("ShowImgTemplate2").src = reader2.result;
  };

  // name
  let nameField = document.getElementById("nameField").value;
  document.getElementById("nameT2").innerText = nameField;
  document.getElementById("showNameT2").innerText = nameField;

  //  Job Title
  document.getElementById("jobTitleT").innerHTML =
    document.getElementById("jobTitle").value;
  document.getElementById("showJobTitleT").innerHTML =
    document.getElementById("jobTitle").value;

  // Email
  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;
  document.getElementById("showEmailT").innerHTML =
    document.getElementById("emailField").value;

  // contact
  document.getElementById("countryContactT").innerHTML =
    document.getElementById("countryCode").value;
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
  document.getElementById("showountryContactT").innerHTML =
    document.getElementById("countryCode").value;
  document.getElementById("showContactT").innerHTML =
    document.getElementById("contactField").value;

  // Address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;
  document.getElementById("showAddressT").innerHTML =
    document.getElementById("addressField").value;

  // Objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("ObjectiveField").value;
  document.getElementById("showObjectiveT").innerHTML =
    document.getElementById("ObjectiveField").value;

  // Qe (QUALIFICATION)
  let aqs = document.getElementsByClassName("eqField");
  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li>${e.value}</li>`;
  }

  document.getElementById("aqT").innerHTML = str1;
  document.getElementById("showEducation").innerHTML = str1;


  //  Social media Links
  document.getElementById("githubT").href =
    document.getElementById("gitField").value;
    document.getElementById("githubT").innerText =
    document.getElementById("gitField").value;
  document.getElementById("showGithubT").href =
    document.getElementById("gitField").value;
    document.getElementById("showGithubT").innerText =
    document.getElementById("gitField").value;
  

  //Expertise
  let skills = document.getElementsByClassName("TechField");
  let techSkills = "";
  for (let e of skills) {
    techSkills = techSkills + `<li>${e.value}</li>`;
  }
  document.getElementById("keySkills").innerHTML = techSkills;
  document.getElementById("showSkills").innerHTML = techSkills;


  //hobby
  let hobbies = document.getElementsByClassName("hobbyField");
  let hobby = "";
  for (let e of hobbies) {
    hobby = hobby + `<li>${e.value}</li>`;
  }
  document.getElementById("hobbys").innerHTML = hobby;
  document.getElementById("showHobbies").innerHTML = hobby;
}

// --------------------------------------------------------------------------------------------
// WORK EXPERIENCE
function duplicateForm() {
  const template = document.getElementById("weTemplate");
  const clone = template.cloneNode(true);
  clone.style.display = "block";
  clone.removeAttribute("id"); // Remove ID to avoid duplicates
  document.getElementById("formClone").appendChild(clone);
}

function showData() {
  const forms = document.querySelectorAll(".form-group:not(#weTemplate)"); // Exclude the template
  const resultSection = document.getElementById("resultSection");

  forms.forEach((form, index) => {
    const fromField = form.querySelector(".fromWorkField");
    const toField = form.querySelector(".toWorkField");
    const companyField = form.querySelector(".workExpField");
    const descriptionField = form.querySelector(".weField");

    // Check if all required fields exist
    if (fromField && toField && companyField && descriptionField) {
      const from = fromField.value;
      const to = toField.value;
      const company = companyField.value;
      const description = descriptionField.value;

      // Create result structure
      const resultDiv = document.createElement("div");
      resultDiv.className = "card mt-4";
      resultDiv.innerHTML = `
                  <div class="card-header">
                      <h6 id="workExpLabel">${company}</h6>
                      <div class="dateSection" style="display: flex; gap:5px">
                          <div><span>${from}</span></div> -
                          <div><span>${to}</span></div>
                      </div>
                  </div>
                  <div class="card-body">
                      <p style="text-align:justify;">${description}</p>
                  </div>
              `;

      resultSection.appendChild(resultDiv);
    } else {
      console.error("One or more fields are missing in the form.");
    }
  });
}

// PROJECT ADDING

function duplicateProjectForm() {
  const template = document.getElementById("proTemplate");
  const clone = template.cloneNode(true);
  clone.style.display = "block";
  clone.removeAttribute("id"); // Remove ID to avoid duplicates
  document.getElementById("formProjectClone").appendChild(clone);
}

function showProjectData() {
  const proForms = document.querySelectorAll(".form-group:not(#proTemplate)"); // Exclude the template
  const resultProjectSection = document.getElementById("ProjectResult");

  proForms.forEach((projectForm, index) => {
    const fromProField = projectForm.querySelector(".fromProField");
    const toProField = projectForm.querySelector(".toProField");
    const projectField = projectForm.querySelector(".projectField");
    const descriptionProField = projectForm.querySelector(".proDesc");
    const proPositionField = projectForm.querySelector(".projectPositionField");

    console.log("fromProField:", fromProField);
    console.log("toProField:", toProField);
    console.log("projectField:", projectField);
    console.log("descriptionProField:", descriptionProField);

    // Check if all required fields exist
    if (fromProField && toProField && projectField && descriptionProField && proPositionField) {
      const proFrom = fromProField.value;
      const proTo = toProField.value;
      const projectName = projectField.value;
      const proDescription = descriptionProField.value;
      const proPosition = proPositionField.value;

      // Create result structure
      const resultProDiv = document.createElement("div");
      resultProDiv.className = "projectResultSection mt-4";
      resultProDiv.innerHTML = `
      <h4>${projectName}</h4>
      <div style="dislay:flex;">
      <span><strong>${proPosition}</strong></span><span style="color: rgb(82, 82, 82); font-size: x-small;"> &nbsp;<i><span>${proFrom}</span> - <span>${proTo}</span></i> </span>
      </div>
      <p style="text-align:justify;">${proDescription}</p>
              `;

      resultProjectSection.appendChild(resultProDiv);
    } else {
      console.error("One or more fields are missing in the form.");
    }
  });
}

// --------------------------------------------------------------------------------------------

// for template color
function dark() {
  const dark = document.getElementById("spanCol6").innerHTML;
  document.getElementById("headingColourChange").style.background = dark;
  document.getElementById("SummaryColorSection").style.borderTopColor=dark;
  document.getElementById("ProjectColorSection").style.borderTopColor=dark;
  document.getElementById("EducationColorSection").style.borderTopColor=dark;
  document.getElementById("SkillsColorSection").style.borderTopColor=dark;
  document.getElementById("HobbiesColorSection").style.borderTopColor=dark;
  document.getElementById("ExperienceColorSection").style.borderTopColor=dark;

  document.getElementById("showResumeHeader").style.background = dark;
  document.getElementById("showSummary").style.borderTopColor=dark;
  document.getElementById("showExperiences").style.borderTopColor=dark;
  document.getElementById("showEducation").style.borderTopColor=dark;
  document.getElementById("showSkills").style.borderTopColor=dark;
  document.getElementById("showProject").style.borderTopColor=dark;
  document.getElementById("showHobbies").style.borderTopColor=dark;
 }
function LightBlue() {
  const blue = document.getElementById("spanCol5").innerHTML;
  document.getElementById("headingColourChange").style.background = blue;
  document.getElementById("SummaryColorSection").style.borderTopColor=blue;
  document.getElementById("ProjectColorSection").style.borderTopColor=blue;
  document.getElementById("EducationColorSection").style.borderTopColor=blue;
  document.getElementById("SkillsColorSection").style.borderTopColor=blue;
  document.getElementById("HobbiesColorSection").style.borderTopColor=blue;
  document.getElementById("ExperienceColorSection").style.borderTopColor=blue;

  document.getElementById("showResumeHeader").style.background = blue;
  document.getElementById("showSummary").style.borderTopColor=blue;
  document.getElementById("showExperiences").style.borderTopColor=blue;
  document.getElementById("showEducation").style.borderTopColor=blue;
  document.getElementById("showSkills").style.borderTopColor=blue;
  document.getElementById("showProject").style.borderTopColor=blue;
  document.getElementById("showHobbies").style.borderTopColor=blue;
}
function Eucalyptus() {
  const eucalyptus = document.getElementById("spanCol4").innerHTML;
  document.getElementById("headingColourChange").style.background = eucalyptus;
  document.getElementById("SummaryColorSection").style.borderTopColor=eucalyptus;
  document.getElementById("ProjectColorSection").style.borderTopColor=eucalyptus;
  document.getElementById("EducationColorSection").style.borderTopColor=eucalyptus;
  document.getElementById("SkillsColorSection").style.borderTopColor=eucalyptus;
  document.getElementById("HobbiesColorSection").style.borderTopColor=eucalyptus;
  document.getElementById("ExperienceColorSection").style.borderTopColor=eucalyptus;

  document.getElementById("showResumeHeader").style.background = eucalyptus;
  document.getElementById("showSummary").style.borderTopColor=eucalyptus;
  document.getElementById("showExperiences").style.borderTopColor=eucalyptus;
  document.getElementById("showEducation").style.borderTopColor=eucalyptus;
  document.getElementById("showSkills").style.borderTopColor=eucalyptus;
  document.getElementById("showProject").style.borderTopColor=eucalyptus;
  document.getElementById("showHobbies").style.borderTopColor=eucalyptus;
}
function light3() {
  const colo3r = document.getElementById("spanCol3").innerHTML;
  document.getElementById("headingColourChange").style.background = colo3r;
  document.getElementById("SummaryColorSection").style.borderTopColor=colo3r;
  document.getElementById("ProjectColorSection").style.borderTopColor=colo3r;
  document.getElementById("EducationColorSection").style.borderTopColor=colo3r;
  document.getElementById("SkillsColorSection").style.borderTopColor=colo3r;
  document.getElementById("HobbiesColorSection").style.borderTopColor=colo3r;
  document.getElementById("ExperienceColorSection").style.borderTopColor=colo3r;

  document.getElementById("showResumeHeader").style.background = colo3r;
  document.getElementById("showSummary").style.borderTopColor=colo3r;
  document.getElementById("showExperiences").style.borderTopColor=colo3r;
  document.getElementById("showEducation").style.borderTopColor=colo3r;
  document.getElementById("showSkills").style.borderTopColor=colo3r;
  document.getElementById("showProject").style.borderTopColor=colo3r;
  document.getElementById("showHobbies").style.borderTopColor=colo3r;
}
function light2() {
  const color4 = document.getElementById("spanCol2").innerHTML;
  document.getElementById("headingColourChange").style.background = color4;
  document.getElementById("SummaryColorSection").style.borderTopColor=color4;
  document.getElementById("ProjectColorSection").style.borderTopColor=color4;
  document.getElementById("EducationColorSection").style.borderTopColor=color4;
  document.getElementById("SkillsColorSection").style.borderTopColor=color4;
  document.getElementById("HobbiesColorSection").style.borderTopColor=color4;
  document.getElementById("ExperienceColorSection").style.borderTopColor=color4;

  document.getElementById("showResumeHeader").style.background = color4;
  document.getElementById("showSummary").style.borderTopColor=color4;
  document.getElementById("showExperiences").style.borderTopColor=color4;
  document.getElementById("showEducation").style.borderTopColor=color4;
  document.getElementById("showSkills").style.borderTopColor=color4;
  document.getElementById("showProject").style.borderTopColor=color4;
  document.getElementById("showHobbies").style.borderTopColor=color4;
}
function light1() {
  const color5 = document.getElementById("spanCol1").innerHTML;

  document.getElementById("headingColourChange").style.background = color5;
  document.getElementById("SummaryColorSection").style.borderTopColor=color5;
  document.getElementById("ProjectColorSection").style.borderTopColor=color5;
  document.getElementById("EducationColorSection").style.borderTopColor=color5;
  document.getElementById("SkillsColorSection").style.borderTopColor=color5;
  document.getElementById("HobbiesColorSection").style.borderTopColor=color5;
  document.getElementById("ExperienceColorSection").style.borderTopColor = color5;

  document.getElementById("showResumeHeader").style.background = color5;
  document.getElementById("showSummary").style.borderTopColor=color5;
  document.getElementById("showExperiences").style.borderTopColor=color5;
  document.getElementById("showEducation").style.borderTopColor=color5;
  document.getElementById("showSkills").style.borderTopColor=color5;
  document.getElementById("showProject").style.borderTopColor=color5;
  document.getElementById("showHobbies").style.borderTopColor=color5;
}

function changeBackgroundColor() {
  let input = document.getElementById("favcolor").value;
 
  document.getElementById("headingColourChange").style.background = input;
  document.getElementById("SummaryColorSection").style.borderTopColor=input;
  document.getElementById("ProjectColorSection").style.borderTopColor=input;
  document.getElementById("EducationColorSection").style.borderTopColor=input;
  document.getElementById("SkillsColorSection").style.borderTopColor=input;
  document.getElementById("HobbiesColorSection").style.borderTopColor=input;
  document.getElementById("ExperienceColorSection").style.borderTopColor=input;

  document.getElementById("showResumeHeader").style.background = input;
  document.getElementById("showSummary").style.borderTopColor=input;
  document.getElementById("showExperiences").style.borderTopColor=input;
  document.getElementById("showEducation").style.borderTopColor=input;
  document.getElementById("showSkills").style.borderTopColor=input;
  document.getElementById("showProject").style.borderTopColor=input;
  document.getElementById("showHobbies").style.borderTopColor=input;
}
function resetBackgroundColor() {
  document.getElementById("headingColourChange").style.background = "#00FFFF";
  document.getElementById("SummaryColorSection").style.borderTopColor="#00FFFF";
  document.getElementById("ProjectColorSection").style.borderTopColor="#00FFFF";
  document.getElementById("EducationColorSection").style.borderTopColor="#00FFFF";
  document.getElementById("SkillsColorSection").style.borderTopColor="#00FFFF";
  document.getElementById("HobbiesColorSection").style.borderTopColor="#00FFFF";
  document.getElementById("ExperienceColorSection").style.borderTopColor="#00FFFF";
  document.getElementById("nameT2").style.color = "#C0C0C0";
  document.getElementById("jobTitleT").style.color ="#C0C0C0";


document.getElementById("showJobTitleT").style.color ="#C0C0C0";
  document.getElementById("showNameT2").style.color = "#C0C0C0";

  document.getElementById("showResumeHeader").style.background = "#00FFFF";
  document.getElementById("showSummary").style.borderTopColor="#00FFFF";
  document.getElementById("showExperiences").style.borderTopColor="#00FFFF";
  document.getElementById("showEducation").style.borderTopColor="#00FFFF";
  document.getElementById("showSkills").style.borderTopColor="#00FFFF";
  document.getElementById("showProject").style.borderTopColor="#00FFFF";
  document.getElementById("showHobbies").style.borderTopColor="#00FFFF";
}

// for template fontC colour

function fontLight2() {
  document.getElementById("nameT2").style.color = "white";
  document.getElementById("jobTitleT").style.color = "white";
  document.getElementById("showJobTitleT").style.color = "white";
  document.getElementById("showNameT2").style.color = "white";
}
function fontLight1() {
  document.getElementById("nameT2").style.color = "black";
  document.getElementById("jobTitleT").style.color = "black";
  document.getElementById("showJobTitleT").style.color = "black";
  document.getElementById("showNameT2").style.color = "black";
}
// --------------------------------------------------------------------------------------------

async function captureDivAndDownloadPdf() {
  const content = document.getElementById("cvTemplate");
  if (!content) {
    console.error("Content element not found");
    return;
  }

  try {
    // Capture the content as a canvas
    const canvas = await html2canvas(content, {
      scale: 1,
      logging: true,
      useCORS: true,
    });

    let pdf;
    if (window.jspdf && window.jspdf.jsPDF) {
      pdf = new window.jspdf.jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
      });
    } else {
      console.error("jsPDF not loaded correctly!");
      return;
    }

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Scale factor to fit the canvas width to the PDF width
    const contentScaleFactor = pdfWidth / canvas.width;
    let remainingCanvasHeight = canvas.height;

    // Split the canvas into pages as needed
    let yPos = 0; // Tracks the position on the canvas to start the next page's content
    while (remainingCanvasHeight > 0) {
      // Calculate the height of the content for the current PDF page
      const contentHeightOnPage = Math.min(
        remainingCanvasHeight,
        pdfHeight / contentScaleFactor
      );

      // Convert the current slice of the canvas to an image
      const canvasSlice = document.createElement("canvas");
      canvasSlice.width = canvas.width;
      canvasSlice.height = contentHeightOnPage;

      const ctx = canvasSlice.getContext("2d");
      ctx.drawImage(canvas, 0, -yPos, canvas.width, canvas.height);

      // Add the image to the PDF, scaling it to fit the width
      const imgData = canvasSlice.toDataURL("image/png");
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        pdfWidth,
        contentHeightOnPage * contentScaleFactor
      );

      yPos += contentHeightOnPage;
      remainingCanvasHeight -= contentHeightOnPage;

      // Add a new page in the PDF if there is more content to add
      if (remainingCanvasHeight > 0) {
        pdf.addPage();
      }
    }

    // Save the PDF
    pdf.save("cv_template.pdf");
  } catch (error) {
    console.error("Error capturing content or generating PDF:", error);
  }
}

//
