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
    document.getElementById("showImgTemplate2").src = reader2.result;
  };


  // name
  document.getElementById("firstName").innerText=document.getElementById("firstNameField").value;
  document.getElementById("showFirstName").innerText=document.getElementById("firstNameField").value;
  document.getElementById("lastName").innerText=document.getElementById("lastNameField").value;
  document.getElementById("showlastName").innerText=document.getElementById("lastNameField").value;

  //  Job Title
  document.getElementById("jobTitleT").innerHTML =
    document.getElementById("jobTitle").value;
  document.getElementById("showTitle").innerHTML =
    document.getElementById("jobTitle").value;

  // Email
  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;
  document.getElementById("showEmailT").innerHTML =
    document.getElementById("emailField").value;

  // contact
  document.getElementById("countryContactT").innerHTML =
    document.getElementById("countryCode").value;
  document.getElementById("showCountryContactT").innerHTML =
    document.getElementById("countryCode").value;

  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
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
  document.getElementById("showSummary").innerHTML =
    document.getElementById("ObjectiveField").value;

  // Qe (QUALIFICATION)
  let aqs = document.getElementsByClassName("eqField");
  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li>${e.value}</li>`;
  }

  document.getElementById("aqT").innerHTML = str1;
  document.getElementById("showAqT").innerHTML = str1;

  //Expertise
  let skills = document.getElementsByClassName("TechField");
  let techSkills = "";
  for (let e of skills) {
    techSkills = techSkills + `<li>${e.value}</li>`;
  }
  document.getElementById("keySkills").innerHTML = techSkills;
  document.getElementById("showKeySkills").innerHTML = techSkills;

  

  //hobby
  let hobbies = document.getElementsByClassName("hobbyField");
  let hobby = "";
  for (let e of hobbies) {
    hobby = hobby + `<li>${e.value}</li>`;
  }
  document.getElementById("hobbys").innerHTML = hobby;
  document.getElementById("showHobbys").innerHTML = hobby;

  

}

  
// --------------------------------------------------------------------------------------------




function duplicateProjectForm() {
  const template = document.getElementById("proTemplate");
  const clone = template.cloneNode(true);
  clone.style.display = "block";
  clone.removeAttribute("id"); // Remove ID to avoid duplicates
  document.getElementById("formProjectClone").appendChild(clone);
}

function showProjectData() {
  // document.getElementById("dummyExperienceData").style.display="none";
  document.getElementById("showDummyExperienceData").style.display="none";
  const proForms = document.querySelectorAll(".form-group:not(#proTemplate)"); // Exclude the template
  const resultProjectSection = document.getElementById("ProjectResult");
  const ShowResultProjectSection = document.getElementById("showProjectResult");

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

    if (fromProField && toProField && projectField && descriptionProField && proPositionField) {
      const proFrom = fromProField.value;
      const proTo = toProField.value;
      const projectName = projectField.value;
      const proDescription = descriptionProField.value;
      const proPosition = proPositionField.value;

      // Create result structure
      const resultProDiv = document.createElement("div");
      resultProDiv.className = "projectResultSection mt-1";
      resultProDiv.innerHTML = `
        <div class="row" style="align-items: center !important;">
          <div class="col-md-4">
            <div class="title-section mt-2" style="line-height: 5px;">
              <p style="font-size: 30px; margin-bottom: 23px;" class="nameProject">${projectName}</p>
              <p style="font-size: 15px; color: #565555;">${proPosition}</p>
              <p style="font-size: 15px; color: #565555;"><span>${proFrom}</span> - <span>${proTo}</span></p>
            </div>
          </div>
          <div class="col-md-8">
            <p style="text-align: justify; font-size: larger;">${proDescription}</p>
          </div>
        </div>
      `;

      // Append a clone of the resultProDiv to ShowResultProjectSection
      ShowResultProjectSection.appendChild(resultProDiv.cloneNode(true));
      // Append the original resultProDiv to resultProjectSection
      resultProjectSection.appendChild(resultProDiv);

    } else {
      console.error("One or more fields are missing in the form.");
    }
  });
}



async function captureDivAndDownloadPdf() {
  document.getElementById("cv-template").style.display="block";
  const content = document.getElementById("cvTemplate");
  if (!content) {
    console.error("Content element not found");
    document.getElementById("cv-template").style.display="none";
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
    document.getElementById("cv-template").style.display="none";
  } catch (error) {
    document.getElementById("cv-template").style.display="none";
    console.error("Error capturing content or generating PDF:", error);
  }
}

//
