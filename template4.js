
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
  let nameField = document.getElementById("nameField").value;
  document.getElementById("nameT2").innerText = nameField;

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


  //Intrest
  let intrest = document.getElementsByClassName("intrestField");
  let intrst = "";
  for (let e of intrest) {
    intrst = intrst + `<li>${e.value}</li>`;
  }
  document.getElementById("intrests").innerHTML = intrst;

  //hobby
  let hobbies = document.getElementsByClassName("hobbyField");
  let hobby = "";
  for (let e of hobbies) {
    hobby = hobby + `<li>${e.value}</li>`;
  }
  document.getElementById("hobbys").innerHTML = hobby;
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
  document.getElementById("iconSummaryColor").style.background=dark;
  document.getElementById("iconProjectColor").style.background=dark;
  document.getElementById("iconEducationColor").style.background=dark;
  document.getElementById("iconSkillsColor").style.background=dark;
  document.getElementById("iconLanguageColor").style.background=dark;
  document.getElementById("iconHobbiesColor").style.background=dark;
  document.getElementById("iconAchivementsColor").style.background=dark;
  document.getElementById("iconExperienceColor").style.background=dark;
 }
function LightBlue() {
  const blue = document.getElementById("spanCol5").innerHTML;
  document.getElementById("headingColourChange").style.background = blue;
  document.getElementById("iconSummaryColor").style.background=blue;
  document.getElementById("iconProjectColor").style.background=blue;
  document.getElementById("iconEducationColor").style.background=blue;
  document.getElementById("iconSkillsColor").style.background=blue;
  document.getElementById("iconLanguageColor").style.background=blue;
  document.getElementById("iconHobbiesColor").style.background=blue;
  document.getElementById("iconAchivementsColor").style.background=blue;
  document.getElementById("iconExperienceColor").style.background=blue;
}
function Eucalyptus() {
  const eucalyptus = document.getElementById("spanCol4").innerHTML;
  document.getElementById("headingColourChange").style.background = eucalyptus;
  document.getElementById("iconSummaryColor").style.background=eucalyptus;
  document.getElementById("iconProjectColor").style.background=eucalyptus;
  document.getElementById("iconEducationColor").style.background=eucalyptus;
  document.getElementById("iconSkillsColor").style.background=eucalyptus;
  document.getElementById("iconLanguageColor").style.background=eucalyptus;
  document.getElementById("iconHobbiesColor").style.background=eucalyptus;
  document.getElementById("iconAchivementsColor").style.background=eucalyptus;
  document.getElementById("iconExperienceColor").style.background=eucalyptus;
}
function light3() {
  const colo3r = document.getElementById("spanCol3").innerHTML;
  document.getElementById("headingColourChange").style.background = colo3r;
  document.getElementById("iconSummaryColor").style.background=colo3r;
  document.getElementById("iconProjectColor").style.background=colo3r;
  document.getElementById("iconEducationColor").style.background=colo3r;
  document.getElementById("iconSkillsColor").style.background=colo3r;
  document.getElementById("iconLanguageColor").style.background=colo3r;
  document.getElementById("iconHobbiesColor").style.background=colo3r;
  document.getElementById("iconAchivementsColor").style.background=colo3r;
  document.getElementById("iconExperienceColor").style.background=colo3r;
}
function light2() {
  const color4 = document.getElementById("spanCol2").innerHTML;
  document.getElementById("headingColourChange").style.background = color4;
  document.getElementById("iconSummaryColor").style.background=color4;
  document.getElementById("iconProjectColor").style.background=color4;
  document.getElementById("iconEducationColor").style.background=color4;
  document.getElementById("iconSkillsColor").style.background=color4;
  document.getElementById("iconLanguageColor").style.background=color4;
  document.getElementById("iconHobbiesColor").style.background=color4;
  document.getElementById("iconAchivementsColor").style.background=color4;
  document.getElementById("iconExperienceColor").style.background=color4;
}
function light1() {
  const color5 = document.getElementById("spanCol1").innerHTML;
  document.getElementById("headingColourChange").style.background = color5;
  document.getElementById("iconSummaryColor").style.background=color5;
  document.getElementById("iconProjectColor").style.background=color5;
  document.getElementById("iconEducationColor").style.background=color5;
  document.getElementById("iconSkillsColor").style.background=color5;
  document.getElementById("iconLanguageColor").style.background=color5;
  document.getElementById("iconHobbiesColor").style.background=color5;
  document.getElementById("iconAchivementsColor").style.background=color5;
  document.getElementById("iconExperienceColor").style.background=color5;
}

function changeBackgroundColor() {
  let input = document.getElementById("favcolor").value;
 
  document.getElementById("headingColourChange").style.background = input;
  document.getElementById("iconSummaryColor").style.background=input;
  document.getElementById("iconProjectColor").style.background=input;
  document.getElementById("iconEducationColor").style.background=input;
  document.getElementById("iconSkillsColor").style.background=input;
  document.getElementById("iconLanguageColor").style.background=input;
  document.getElementById("iconHobbiesColor").style.background=input;
  document.getElementById("iconAchivementsColor").style.background=input;
  document.getElementById("iconExperienceColor").style.background=input;
}
function resetBackgroundColor() {
  document.getElementById("headingColourChange").style.background = "#C200FF";
  document.getElementById("iconSummaryColor").style.background="#C200FF";
  document.getElementById("iconProjectColor").style.background="#C200FF";
  document.getElementById("iconEducationColor").style.background="#C200FF";
  document.getElementById("iconSkillsColor").style.background="#C200FF";
  document.getElementById("iconLanguageColor").style.background="#C200FF";
  document.getElementById("iconHobbiesColor").style.background="#C200FF";
  document.getElementById("iconAchivementsColor").style.background="#C200FF";
  document.getElementById("iconExperienceColor").style.background="#C200FF";
  document.getElementById("nameT2").style.color = "#c0c0c0";
  document.getElementById("jobTitleT").style.color ="#c0c0c0";
}

// for template fontC colour
function fontdark() {
  const dark = document.getElementById("fontSpanCol6").innerHTML;
  document.getElementById("nameT2").style.color = dark;
  document.getElementById("jobTitleT").style.color = dark;
}
function fontLightBlue() {
  const blue = document.getElementById("fontSpanCol5").innerHTML;
  document.getElementById("nameT2").style.color = blue;
  document.getElementById("jobTitleT").style.color = blue;
}
function fontEucalyptus() {
  const eucalyptus = document.getElementById("fontSpanCol4").innerHTML;
  document.getElementById("nameT2").style.color = eucalyptus;
  document.getElementById("jobTitleT").style.color = eucalyptus;
}
function fontLight3() {
  const colo3r = document.getElementById("fontSpanCol3").innerHTML;
  document.getElementById("nameT2").style.color = colo3r;
  document.getElementById("jobTitleT").style.color = colo3r;
}
function fontLight2() {
  const color4 = document.getElementById("fontSpanCol2").innerHTML;
  document.getElementById("nameT2").style.color = color4;
  document.getElementById("jobTitleT").style.color = color4;
}
function fontLight1() {
  const color5 = document.getElementById("fontSpanCol1").innerHTML;
  document.getElementById("nameT2").style.color = color5;
  document.getElementById("jobTitleT").style.color = color5;
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
