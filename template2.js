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
    // name
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;
  
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
  
    //  Social media Links
    document.getElementById("githubT").innerHTML =
      document.getElementById("fbField").value;
    document.getElementById("twitterT").innerHTML =
      document.getElementById("twitterField").value;
    document.getElementById("linkedinT").innerHTML =
      document.getElementById("linkedinField").value;
  
    //  Job Title
    document.getElementById("jobTitleT").innerHTML =
      document.getElementById("jobTitle").value;
  
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
    document.getElementById("leftheadingdiv").style.background = dark;
    document.getElementById("rightHeadingDiv").style.background = dark;
    document.getElementById("fontClrHobby").style.color = dark;
    document.getElementById("fontClrLang").style.color = dark;
    document.getElementById("fontClrIntrst").style.color = dark;
    document.getElementById("fontClrLinks").style.color = dark;
    document.getElementById("fontClrSkills").style.color = dark;
    document.getElementById("fontClrContact").style.color = dark;
    document.getElementById("fontClrEdu").style.color = dark;
    document.getElementById("fontClrExp").style.color = dark;
    document.getElementById("fontClrObjective").style.color = dark;
  }
  function LightBlue() {
    const blue = document.getElementById("spanCol5").innerHTML;
    document.getElementById("leftheadingdiv").style.background = blue;
    document.getElementById("rightHeadingDiv").style.background = blue;
    document.getElementById("fontClrHobby").style.color = blue;
    document.getElementById("fontClrLang").style.color = blue;
    document.getElementById("fontClrIntrst").style.color = blue;
    document.getElementById("fontClrLinks").style.color = blue;
    document.getElementById("fontClrSkills").style.color = blue;
    document.getElementById("fontClrContact").style.color = blue;
    document.getElementById("fontClrEdu").style.color = blue;
    document.getElementById("fontClrExp").style.color = blue;
    document.getElementById("fontClrObjective").style.color = blue;
  }
  function Eucalyptus() {
    const eucalyptus = document.getElementById("spanCol4").innerHTML;
    document.getElementById("leftheadingdiv").style.background  = eucalyptus;
    document.getElementById("rightHeadingDiv").style.background = eucalyptus;
    document.getElementById("fontClrHobby").style.color = eucalyptus;
    document.getElementById("fontClrLang").style.color = eucalyptus;
    document.getElementById("fontClrIntrst").style.color = eucalyptus;
    document.getElementById("fontClrLinks").style.color = eucalyptus;
    document.getElementById("fontClrSkills").style.color = eucalyptus;
    document.getElementById("fontClrContact").style.color = eucalyptus;
    document.getElementById("fontClrEdu").style.color = eucalyptus;
    document.getElementById("fontClrExp").style.color = eucalyptus;
    document.getElementById("fontClrObjective").style.color = eucalyptus;
  }
  function light3() {
    const colo3r = document.getElementById("spanCol3").innerHTML;
    document.getElementById("leftheadingdiv").style.background = colo3r;
    document.getElementById("rightHeadingDiv").style.background= colo3r;
    document.getElementById("fontClrHobby").style.color = colo3r;
    document.getElementById("fontClrLang").style.color = colo3r;
    document.getElementById("fontClrIntrst").style.color = colo3r;
    document.getElementById("fontClrLinks").style.color = colo3r;
    document.getElementById("fontClrSkills").style.color = colo3r;
    document.getElementById("fontClrContact").style.color = colo3r;
    document.getElementById("fontClrEdu").style.color = colo3r;
    document.getElementById("fontClrExp").style.color = colo3r;
    document.getElementById("fontClrObjective").style.color = colo3r;
  }
  function light2() {
    const color4 = document.getElementById("spanCol2").innerHTML;
    document.getElementById("leftheadingdiv").style.background  = color4;
    document.getElementById("rightHeadingDiv").style.background = color4;
    document.getElementById("fontClrHobby").style.color = color4;
    document.getElementById("fontClrLang").style.color = color4;
    document.getElementById("fontClrIntrst").style.color = color4;
    document.getElementById("fontClrLinks").style.color = color4;
    document.getElementById("fontClrSkills").style.color = color4;
    document.getElementById("fontClrContact").style.color = color4;
    document.getElementById("fontClrEdu").style.color = color4;
    document.getElementById("fontClrExp").style.color = color4;
    document.getElementById("fontClrObjective").style.color = color4;
  }
  function light1() {
    const color5 = document.getElementById("spanCol1").innerHTML;
    document.getElementById("leftheadingdiv").style.background  = color5;
    document.getElementById("rightHeadingDiv").style.background = color5;
    document.getElementById("fontClrHobby").style.color = color5;
    document.getElementById("fontClrLang").style.color = color5;
    document.getElementById("fontClrIntrst").style.color = color5;
    document.getElementById("fontClrLinks").style.color = color5;
    document.getElementById("fontClrSkills").style.color = color5;
    document.getElementById("fontClrContact").style.color = color5;
    document.getElementById("fontClrEdu").style.color = color5;
    document.getElementById("fontClrExp").style.color = color5;
    document.getElementById("fontClrObjective").style.color = color5;
  }
  
  function changeBackgroundColor() {
    let input = document.getElementById("favcolor").value;
    const res =  document.getElementById("leftheadingdiv");
    const res2 =  document.getElementById("rightHeadingDiv");
    res.style.backgroundColor = input;
    res2.style.backgroundColor = input;
    document.getElementById("fontClrHobby").style.color = input;
    document.getElementById("fontClrLang").style.color = input;
    document.getElementById("fontClrIntrst").style.color = input;
    document.getElementById("fontClrLinks").style.color = input;
    document.getElementById("fontClrSkills").style.color = input;
    document.getElementById("fontClrContact").style.color = input;
    document.getElementById("fontClrEdu").style.color = input;
    document.getElementById("fontClrExp").style.color = input;
    document.getElementById("fontClrObjective").style.color = input;
  }
  function resetBackgroundColor() {
    document.getElementById("leftheadingdiv").style.background  = "#ADD8E6";
    document.getElementById("rightHeadingDiv").style.background = "#ADD8E6";
    document.getElementById("fontClrHobby").style.color ="#03031C";
    document.getElementById("fontClrLang").style.color = "#03031C";
    document.getElementById("fontClrIntrst").style.color = "#03031C";
    document.getElementById("fontClrLinks").style.color = "#03031C";
    document.getElementById("fontClrSkills").style.color = "#03031C";
    document.getElementById("fontClrContact").style.color = "#03031C";
    document.getElementById("fontClrEdu").style.color = "#03031C";
    document.getElementById("fontClrExp").style.color = "#03031C";
    document.getElementById("fontClrObjective").style.color = "#03031C";
  }
  
  // for template fontC colour
  function fontdark() {
    const dark = document.getElementById("fontSpanCol6").innerHTML;
    document.getElementById("nameT2").style.color= dark;
  }
  function fontLightBlue() {
    const blue = document.getElementById("fontSpanCol5").innerHTML;
    document.getElementById("nameT2").style.color= blue;
  }
  function fontEucalyptus() {
    const eucalyptus = document.getElementById("fontSpanCol4").innerHTML;
    document.getElementById("nameT2").style.color= eucalyptus;
  }
  function fontLight3() {
    const colo3r = document.getElementById("fontSpanCol3").innerHTML;
    document.getElementById("nameT2").style.color= colo3r;
  }
  function fontLight2() {
    const color4 = document.getElementById("fontSpanCol2").innerHTML;
    document.getElementById("nameT2").style.color= color4;
  }
  function fontLight1() {
    const color5 = document.getElementById("fontSpanCol1").innerHTML;
    document.getElementById("nameT2").style.color= color5;
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
  