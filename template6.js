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

  console.log(file);

  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);

  // Set The Image To Template
  reader.onloadend = function () {
    document.getElementById("imgTemplate2").src = reader.result;
  };

  // name
  document.getElementById("firstName").innerText=document.getElementById("firstNameField").value;
  document.getElementById("lastName").innerText=document.getElementById("lastNameField").value;

  //  Job Title
  document.getElementById("jobTitleT").innerHTML =
    document.getElementById("jobTitle").value;

  // Email
  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;

  // contact
  document.getElementById("countryContactT").innerHTML =
    document.getElementById("countryCode").value;
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  // Address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  // Objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("ObjectiveField").value;

  // Qe (QUALIFICATION)
  let aqs = document.getElementsByClassName("eqField");
  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li>${e.value}</li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  //  Social media Links
  document.getElementById("githubT").href =
    document.getElementById("gitField").value;
  document.getElementById("githubT").innerText =
    document.getElementById("gitField").value;

  //Expertise
  let skills = document.getElementsByClassName("TechField");
  let techSkills = "";
  for (let e of skills) {
    techSkills = techSkills + `<li>${e.value}</li>`;
  }
  document.getElementById("keySkills").innerHTML = techSkills;

  //Language
  let language = document.getElementsByClassName("languageField");
  let lang = "";
  for (let e of language) {
    lang = lang + `<li>${e.value}</li>`;
  }
  document.getElementById("languages").innerHTML = lang;

  //hobby
  let hobbies = document.getElementsByClassName("hobbyField");
  let hobby = "";
  for (let e of hobbies) {
    hobby = hobby + `<li>${e.value}</li>`;
  }
  document.getElementById("hobbys").innerHTML = hobby;

  //Intrest
  let intrest = document.getElementsByClassName("intrestField");
  let intrst = "";
  for (let e of intrest) {
    intrst = intrst + `<li>${e.value}</li>`;
  }
  document.getElementById("intrests").innerHTML = intrst;

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
      <p><strong><span style="font-size: 19px;">${company}</span> </strong><span style="color: gray; font-size: 12px;">(<em><span>${from}</span> - <span>${to}</span></em>)</span></p>
      <p>${description}</p>
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
    if (
      fromProField &&
      toProField &&
      projectField &&
      descriptionProField &&
      proPositionField
    ) {
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
  document.getElementById("lastName").style.color=dark;
  document.getElementById("experienceIcon").style.background = dark;
  document.getElementById("summaryExperience").style.background = dark;
  document.getElementById("educationIcon").style.background = dark;
  document.getElementById("projectIcon").style.background = dark;
  document.getElementById("languageIcon").style.background = dark;
  document.getElementById("acchivementIcon").style.background= dark;
  document.getElementById("skillsIcon").style.background= dark;
  document.getElementById("hobbyIcon").style.background= dark;
  document.getElementById("jobTitleT").style.color= dark;
}
function LightBlue() {
  const blue = document.getElementById("spanCol5").innerHTML;
  document.getElementById("lastName").style.color=blue;
  document.getElementById("experienceIcon").style.background = blue;
  document.getElementById("summaryExperience").style.background = blue;
  document.getElementById("educationIcon").style.background = blue;
  document.getElementById("projectIcon").style.background = blue;
  document.getElementById("languageIcon").style.background = blue;
  document.getElementById("acchivementIcon").style.background= blue;
  document.getElementById("skillsIcon").style.background= blue;
  document.getElementById("hobbyIcon").style.background= blue;
  document.getElementById("jobTitleT").style.color= blue;
}
function Eucalyptus() {
  const eucalyptus = document.getElementById("spanCol4").innerHTML;
  document.getElementById("lastName").style.color=eucalyptus;
  document.getElementById("experienceIcon").style.background = eucalyptus;
  document.getElementById("summaryExperience").style.background = eucalyptus;
  document.getElementById("educationIcon").style.background = eucalyptus;
  document.getElementById("projectIcon").style.background = eucalyptus;
  document.getElementById("languageIcon").style.background = eucalyptus;
  document.getElementById("acchivementIcon").style.background= eucalyptus;
  document.getElementById("skillsIcon").style.background= eucalyptus;
  document.getElementById("hobbyIcon").style.background= eucalyptus;
  document.getElementById("jobTitleT").style.color= eucalyptus;
}
function light3() {
  const colo3r = document.getElementById("spanCol3").innerHTML;
  document.getElementById("lastName").style.color=colo3r;
  document.getElementById("experienceIcon").style.background = colo3r;
  document.getElementById("summaryExperience").style.background = colo3r;
  document.getElementById("educationIcon").style.background = colo3r;
  document.getElementById("projectIcon").style.background = colo3r;
  document.getElementById("languageIcon").style.background = colo3r;
  document.getElementById("acchivementIcon").style.background= colo3r;
  document.getElementById("skillsIcon").style.background= colo3r;
  document.getElementById("hobbyIcon").style.background= colo3r;
  document.getElementById("jobTitleT").style.color= colo3r;
}
function light2() {
  const color4 = document.getElementById("spanCol2").innerHTML;
  document.getElementById("lastName").style.color=color4;
  document.getElementById("experienceIcon").style.background = color4;
  document.getElementById("summaryExperience").style.background = color4;
  document.getElementById("educationIcon").style.background = color4;
  document.getElementById("projectIcon").style.background = color4;
  document.getElementById("languageIcon").style.background = color4;
  document.getElementById("acchivementIcon").style.background= color4;
  document.getElementById("skillsIcon").style.background= color4;
  document.getElementById("hobbyIcon").style.background= color4;
  document.getElementById("jobTitleT").style.color= color4;
}
function light1() {
  const color5 = document.getElementById("spanCol1").innerHTML;

  document.getElementById("lastName").style.color=color5;
  document.getElementById("experienceIcon").style.background = color5;
  document.getElementById("summaryExperience").style.background = color5;
  document.getElementById("educationIcon").style.background = color5;
  document.getElementById("projectIcon").style.background = color5;
  document.getElementById("languageIcon").style.background = color5;
  document.getElementById("acchivementIcon").style.background= color5;
  document.getElementById("skillsIcon").style.background= color5;
  document.getElementById("hobbyIcon").style.background= color5;
  document.getElementById("jobTitleT").style.color= color5;
}

function changeBackgroundColor() {
  let input = document.getElementById("favcolor").value;

  document.getElementById("lastName").style.color=input;
  document.getElementById("experienceIcon").style.background = input;
  document.getElementById("summaryExperience").style.background = input;
  document.getElementById("educationIcon").style.background = input;
  document.getElementById("projectIcon").style.background = input;
  document.getElementById("languageIcon").style.background = input;
  document.getElementById("acchivementIcon").style.background= input;
  document.getElementById("skillsIcon").style.background= input;
  document.getElementById("hobbyIcon").style.background= input;
  document.getElementById("jobTitleT").style.color= input;
}
function resetBackgroundColor() {
  document.getElementById("lastName").style.color="#0d6efd";
  document.getElementById("experienceIcon").style.background = "#0d6efd";
  document.getElementById("summaryExperience").style.background = "#0d6efd";
  document.getElementById("educationIcon").style.background = "#0d6efd";
  document.getElementById("projectIcon").style.background = "#0d6efd";
  document.getElementById("languageIcon").style.background = "#0d6efd";
  document.getElementById("acchivementIcon").style.background= "#0d6efd";
  document.getElementById("skillsIcon").style.background= "#0d6efd";
  document.getElementById("hobbyIcon").style.background= "#0d6efd";
  document.getElementById("jobTitleT").style.color= "#0d6efd";

  document.getElementById("nameT2").style.color = "#f0f8ff";
  document.getElementById("summaryBar").style.background="#f0f8ff";
  document.getElementById("experienceBar").style.background="#f0f8ff";
  document.getElementById("educationBar").style.background="#f0f8ff";
  document.getElementById("skillsBar").style.background="#f0f8ff";
  document.getElementById("languageBar").style.background="#f0f8ff";
  document.getElementById("hobbyBar").style.background="#f0f8ff";
  document.getElementById("achivementBar").style.background="#f0f8ff";
  document.getElementById("projectBar").style.background="#f0f8ff";
  
}

// for template fontC colour
function fontdark() {
  const dark = document.getElementById("fontSpanCol6").innerHTML;
  document.getElementById("nameT2").style.color = dark;

  document.getElementById("summaryBar").style.background=dark;
  document.getElementById("experienceBar").style.background=dark;
  document.getElementById("educationBar").style.background=dark;
  document.getElementById("skillsBar").style.background=dark;
  document.getElementById("languageBar").style.background=dark;
  document.getElementById("hobbyBar").style.background=dark;
  document.getElementById("achivementBar").style.background=dark;
  document.getElementById("projectBar").style.background=dark;
}
function fontLightBlue() {
  const blue = document.getElementById("fontSpanCol5").innerHTML;
  document.getElementById("nameT2").style.color = blue;

  document.getElementById("summaryBar").style.background=blue;
  document.getElementById("experienceBar").style.background=blue;
  document.getElementById("educationBar").style.background=blue;
  document.getElementById("skillsBar").style.background=blue;
  document.getElementById("languageBar").style.background=blue;
  document.getElementById("hobbyBar").style.background=blue;
  document.getElementById("achivementBar").style.background=blue;
  document.getElementById("projectBar").style.background=blue;
}
function fontEucalyptus() {
  const eucalyptus = document.getElementById("fontSpanCol4").innerHTML;
  document.getElementById("nameT2").style.color = eucalyptus;

  document.getElementById("summaryBar").style.background=eucalyptus;
  document.getElementById("experienceBar").style.background=eucalyptus;
  document.getElementById("educationBar").style.background=eucalyptus;
  document.getElementById("skillsBar").style.background=eucalyptus;
  document.getElementById("languageBar").style.background=eucalyptus;
  document.getElementById("hobbyBar").style.background=eucalyptus;
  document.getElementById("achivementBar").style.background=eucalyptus;
  document.getElementById("projectBar").style.background=eucalyptus;
}
function fontLight3() {
  const colo3r = document.getElementById("fontSpanCol3").innerHTML;
  document.getElementById("nameT2").style.color = colo3r;

  document.getElementById("summaryBar").style.background=colo3r;
  document.getElementById("experienceBar").style.background=colo3r;
  document.getElementById("educationBar").style.background=colo3r;
  document.getElementById("skillsBar").style.background=colo3r;
  document.getElementById("languageBar").style.background=colo3r;
  document.getElementById("hobbyBar").style.background=colo3r;
  document.getElementById("achivementBar").style.background=colo3r;
  document.getElementById("projectBar").style.background=colo3r;
}
function fontLight2() {
  const color4 = document.getElementById("fontSpanCol2").innerHTML;
  document.getElementById("nameT2").style.color = color4;

  document.getElementById("summaryBar").style.background=color4;
  document.getElementById("experienceBar").style.background=color4;
  document.getElementById("educationBar").style.background=color4;
  document.getElementById("skillsBar").style.background=color4;
  document.getElementById("languageBar").style.background=color4;
  document.getElementById("hobbyBar").style.background=color4;
  document.getElementById("achivementBar").style.background=color4;
  document.getElementById("projectBar").style.background=color4;
}
function fontLight1() {
  const color5 = document.getElementById("fontSpanCol1").innerHTML;
  document.getElementById("nameT2").style.color = color5;

  document.getElementById("summaryBar").style.background=color5;
  document.getElementById("experienceBar").style.background=color5;
  document.getElementById("educationBar").style.background=color5;
  document.getElementById("skillsBar").style.background=color5;
  document.getElementById("languageBar").style.background=color5;
  document.getElementById("hobbyBar").style.background=color5;
  document.getElementById("achivementBar").style.background=color5;
  document.getElementById("projectBar").style.background=color5;
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
