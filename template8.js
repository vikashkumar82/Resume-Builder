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



  //Expertise
  let skills = document.getElementsByClassName("TechField");
  let techSkills = "";
  for (let e of skills) {
    techSkills = techSkills + `<li>${e.value}</li>`;
  }
  document.getElementById("keySkills").innerHTML = techSkills;

  

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
      resultDiv.innerHTML = `
      <p><strong><span style="font-size: 19px;">${company}</span> </strong><span style="color: blue; font-size: 12px; font-weight:500;">(<span>${from}</span> - <span>${to}</span>)</span></p>
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
      <h5>${projectName}</h5>
      <div style="dislay:flex;">
      <span><strong>${proPosition}</strong></span><span style="color: blue; font-size: x-small; font-weight:500"> &nbsp;<span>${proFrom}</span> - <span>${proTo}</span> </span>
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
  document.getElementById("jobTitleT").style.color=dark;
  document.getElementById("colorSummary").style.color=dark;
  document.getElementById("colorSkills").style.color=dark;
  document.getElementById("colorProject").style.color=dark;
  document.getElementById("colorExperience").style.color=dark;
  document.getElementById("colorHobbies").style.color=dark;
  document.getElementById("colorEducation").style.color=dark;
  document.getElementById("colorLink").style.color=dark;
  document.getElementById("colorContact").style.color=dark;
  document.getElementById("colorMail").style.color=dark;
  document.getElementById("colorLocation").style.color=dark;
 
}
function LightBlue() {
  const blue = document.getElementById("spanCol5").innerHTML;
  document.getElementById("lastName").style.color=blue;
  document.getElementById("jobTitleT").style.color=blue;
  document.getElementById("colorSummary").style.color=blue;
  document.getElementById("colorSkills").style.color=blue;
  document.getElementById("colorProject").style.color=blue;
  document.getElementById("colorExperience").style.color=blue;
  document.getElementById("colorHobbies").style.color=blue;
  document.getElementById("colorEducation").style.color=blue;
  document.getElementById("colorLink").style.color=blue;
  document.getElementById("colorContact").style.color=blue;
  document.getElementById("colorMail").style.color=blue;
  document.getElementById("colorLocation").style.color=blue;
}
function Eucalyptus() {
  const eucalyptus = document.getElementById("spanCol4").innerHTML;
  document.getElementById("lastName").style.color=eucalyptus;
  document.getElementById("jobTitleT").style.color=eucalyptus;
  document.getElementById("colorSummary").style.color=eucalyptus;
  document.getElementById("colorSkills").style.color=eucalyptus;
  document.getElementById("colorProject").style.color=eucalyptus;
  document.getElementById("colorExperience").style.color=eucalyptus;
  document.getElementById("colorHobbies").style.color=eucalyptus;
  document.getElementById("colorEducation").style.color=eucalyptus;
  document.getElementById("colorLink").style.color=eucalyptus;
  document.getElementById("colorContact").style.color=eucalyptus;
  document.getElementById("colorMail").style.color=eucalyptus;
  document.getElementById("colorLocation").style.color=eucalyptus;
}
function light3() {
  const colo3r = document.getElementById("spanCol3").innerHTML;
  document.getElementById("lastName").style.color=colo3r;
  document.getElementById("jobTitleT").style.color=colo3r;
  document.getElementById("colorSummary").style.color=colo3r;
  document.getElementById("colorSkills").style.color=colo3r;
  document.getElementById("colorProject").style.color=colo3r;
  document.getElementById("colorExperience").style.color=colo3r;
  document.getElementById("colorHobbies").style.color=colo3r;
  document.getElementById("colorEducation").style.color=colo3r;
  document.getElementById("colorLink").style.color=colo3r;
  document.getElementById("colorContact").style.color=colo3r;
  document.getElementById("colorMail").style.color=colo3r;
  document.getElementById("colorLocation").style.color=colo3r;
}
function light2() {
  const color4 = document.getElementById("spanCol2").innerHTML;
  document.getElementById("lastName").style.color=color4;
  document.getElementById("jobTitleT").style.color=color4;
  document.getElementById("colorSummary").style.color=color4;
  document.getElementById("colorSkills").style.color=color4;
  document.getElementById("colorProject").style.color=color4;
  document.getElementById("colorExperience").style.color=color4;
  document.getElementById("colorHobbies").style.color=color4;
  document.getElementById("colorEducation").style.color=color4;
  document.getElementById("colorLink").style.color=color4;
  document.getElementById("colorContact").style.color=color4;
  document.getElementById("colorMail").style.color=color4;
  document.getElementById("colorLocation").style.color=color4;
}

function changeBackgroundColor() {
  let input = document.getElementById("favcolor").value;

  document.getElementById("lastName").style.color=input;
  document.getElementById("jobTitleT").style.color=input;
  document.getElementById("colorSummary").style.color=input;
  document.getElementById("colorSkills").style.color=input;
  document.getElementById("colorProject").style.color=input;
  document.getElementById("colorExperience").style.color=input;
  document.getElementById("colorHobbies").style.color=input;
  document.getElementById("colorEducation").style.color=input;
  document.getElementById("colorLink").style.color=input;
  document.getElementById("colorContact").style.color=input;
  document.getElementById("colorMail").style.color=input;
  document.getElementById("colorLocation").style.color=input;
}
function resetBackgroundColor() {
  document.getElementById("lastName").style.color="#0081CF";
  document.getElementById("jobTitleT").style.color="#0081CF";
  document.getElementById("colorSummary").style.color="#0081CF";
  document.getElementById("colorSkills").style.color="#0081CF";
  document.getElementById("colorProject").style.color="#0081CF";
  document.getElementById("colorExperience").style.color="#0081CF";
  document.getElementById("colorHobbies").style.color="#0081CF";
  document.getElementById("colorEducation").style.color="#0081CF";
  document.getElementById("colorLink").style.color="#0081CF";
  document.getElementById("colorContact").style.color="#0081CF";
  document.getElementById("colorMail").style.color="#0081CF";
  document.getElementById("colorLocation").style.color="#0081CF";
  
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
