// dynamically workExperience textaea
function addNewWeField() {
  // Description
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-3");
  // newNode.setAttribute("rows" , 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

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
    document.getElementById("imgTemplate3").src = reader.result;
  };

  // name
  let nameField = document.getElementById("nameField").value;
  document.getElementById("nameT2").innerHTML = nameField;
  // Email
  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;
  
  // contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
     document.getElementById("countryContactT").innerHTML =
    document.getElementById("countryCode").value;
  
  // Address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;
   
      // Objective
  document.getElementById("objectiveT").innerHTML =
  document.getElementById("ObjectiveField").value;

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


    //  Job Title
  document.getElementById("jobTitleT").innerHTML =
  document.getElementById("jobTitle").value;

  //  Social media Links
  document.getElementById("githubT").innerHTML =
    document.getElementById("fbField").value;
  document.getElementById("twitterT").innerHTML =
    document.getElementById("twitterField").value;
  document.getElementById("linkedinT").innerHTML =
    document.getElementById("linkedinField").value;

  
   



  // Qe (QUALIFICATION)
  let aqs = document.getElementsByClassName("eqField");
  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li>${e.value}</li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

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

// --------------------------------------------------------------------------------------------

// for template color
function dark() {
  const dark = document.getElementById("spanCol6").innerHTML;
  document.getElementById("templateColourChange").style.background = dark;
}
function LightBlue() {
  const blue = document.getElementById("spanCol5").innerHTML;
  document.getElementById("templateColourChange").style.background = blue;
}
function Eucalyptus() {
  const eucalyptus = document.getElementById("spanCol4").innerHTML;
  document.getElementById("templateColourChange").style.background = eucalyptus;
}
function light3() {
  const colo3r = document.getElementById("spanCol3").innerHTML;
  document.getElementById("templateColourChange").style.background = colo3r;
}
function light2() {
  const color4 = document.getElementById("spanCol2").innerHTML;
  document.getElementById("templateColourChange").style.background = color4;
}
function light1() {
  const color5 = document.getElementById("spanCol1").innerHTML;
  document.getElementById("templateColourChange").style.background = color5;
}

function changeBackgroundColor() {
  let input = document.getElementById("favcolor").value;
  const res = document.getElementById("templateColourChange");
  res.style.backgroundColor = input;
}
function resetBackgroundColor() {
  const res = document.getElementById("templateColourChange");
  res.style.backgroundColor = "#3492E4";

  document.getElementById("templateColourChange").style.color = "#030303";
  document.getElementById("githubT").style.color = "#030303";
  document.getElementById("twitterT").style.color = "#030303";
  document.getElementById("linkedinT").style.color = "#030303";
}

// for template fontC colour
function fontdark() {
  const dark = document.getElementById("fontSpanCol6").innerHTML;
  document.getElementById("templateColourChange").style.color = dark;
  document.getElementById("githubT").style.color = dark;
  document.getElementById("twitterT").style.color = dark;
  document.getElementById("linkedinT").style.color = dark;
}
function fontLightBlue() {
  const blue = document.getElementById("fontSpanCol5").innerHTML;
  document.getElementById("templateColourChange").style.color = blue;
  document.getElementById("githubT").style.color = blue;
  document.getElementById("twitterT").style.color = blue;
  document.getElementById("linkedinT").style.color = blue;
}
function fontEucalyptus() {
  const eucalyptus = document.getElementById("fontSpanCol4").innerHTML;
  document.getElementById("templateColourChange").style.color = eucalyptus;
  document.getElementById("githubT").style.color = eucalyptus;
  document.getElementById("twitterT").style.color = eucalyptus;
  document.getElementById("linkedinT").style.color = eucalyptus;
}
function fontLight3() {
  const colo3r = document.getElementById("fontSpanCol3").innerHTML;
  document.getElementById("templateColourChange").style.color = colo3r;
  document.getElementById("githubT").style.color = colo3r;
  document.getElementById("twitterT").style.color = colo3r;
  document.getElementById("linkedinT").style.color = colo3r;
}
function fontLight2() {
  const color4 = document.getElementById("fontSpanCol2").innerHTML;
  document.getElementById("templateColourChange").style.color = color4;
  document.getElementById("githubT").style.color = color4;
  document.getElementById("twitterT").style.color = color4;
  document.getElementById("linkedinT").style.color = color4;
}
function fontLight1() {
  const color5 = document.getElementById("fontSpanCol1").innerHTML;
  document.getElementById("templateColourChange").style.color = color5;
  document.getElementById("githubT").style.color = color5;
  document.getElementById("twitterT").style.color = color5;
  document.getElementById("linkedinT").style.color = color5;
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
