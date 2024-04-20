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
    document.getElementById("shownameT1").innerHTML = nameField;
    document.getElementById("showNameT2").innerHTML = nameField;

  
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
    document.getElementById("showCountryContactT").innerHTML =
      document.getElementById("countryCode").value;
    document.getElementById("showContactT").innerHTML =
      document.getElementById("contactField").value;
  
    // Address
    document.getElementById("addressT").innerHTML =
      document.getElementById("addressField").value;
    document.getElementById("showAddressT").innerHTML =
      document.getElementById("addressField").value;
  
    //  Social media Links
    document.getElementById("githubT").innerHTML =
      document.getElementById("fbField").value;
    document.getElementById("twitterT").innerHTML =
      document.getElementById("twitterField").value;
    document.getElementById("linkedinT").innerHTML =
      document.getElementById("linkedinField").value;

    document.getElementById("showGithubT").innerHTML =
      document.getElementById("fbField").value;
    document.getElementById("showTwitterT").innerHTML =
      document.getElementById("twitterField").value;
    document.getElementById("showLinkedinT").innerHTML =
      document.getElementById("linkedinField").value;
  
    //  Job Title
    document.getElementById("jobTitleT").innerHTML =
      document.getElementById("jobTitle").value;
    document.getElementById("showjobTitleT").innerHTML =
      document.getElementById("jobTitle").value;
  
    // Objective
    document.getElementById("objectiveT").innerHTML =
      document.getElementById("ObjectiveField").value;
    document.getElementById("showObjectiveT").innerHTML =
      document.getElementById("ObjectiveField").value;
  
    //Expertise
    let skills = document.getElementsByClassName("TechField");
    let techSkills = "";
    for (let e of skills) {
      techSkills = techSkills + `<li>${e.value}</li>`;
    }
    document.getElementById("keySkills").innerHTML = techSkills;
    document.getElementById("showKeySkills").innerHTML = techSkills;
  
    //Language
    let language = document.getElementsByClassName("languageField");
    let lang = "";
    for (let e of language) {
      lang = lang + `<li>${e.value}</li>`;
    }
    document.getElementById("languages").innerHTML = lang;
    document.getElementById("showLanguages").innerHTML = lang;
  
    // Qe (QUALIFICATION)
    let aqs = document.getElementsByClassName("eqField");
    let str1 = "";
  
    for (let e of aqs) {
      str1 = str1 + `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = str1;
    document.getElementById("showAqT").innerHTML = str1;
  
    //Intrest
    let intrest = document.getElementsByClassName("intrestField");
    let intrst = "";
    for (let e of intrest) {
      intrst = intrst + `<li>${e.value}</li>`;
    }
    document.getElementById("intrests").innerHTML = intrst;
    document.getElementById("showIntrests").innerHTML = intrst;
  
  
      //hobby
      let hobbies = document.getElementsByClassName("hobbyField");
      let hobby = "";
      for (let e of hobbies) {
          hobby = hobby + `<li>${e.value}</li>`;
      }
      document.getElementById("hobbys").innerHTML = hobby;
      document.getElementById("showHobbys").innerHTML = hobby;
  
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
    const resultSection2 = document.getElementById("showResultSection");

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

            // Create result structure for resultSection
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

            // Create result structure for resultSection2
            const resultDiv2 = resultDiv.cloneNode(true); // Clone the resultDiv
            resultSection2.appendChild(resultDiv2);
        } else {
            console.error("One or more fields are missing in the form.");
        }
    });
}

  
  // --------------------------------------------------------------------------------------------
  
  // for template color
  function dark() {
    const dark = document.getElementById("spanCol6").innerHTML;
    document.getElementById("fontClrContact").style.color=dark;
    document.getElementById("fontColorExpertise").style.color=dark;
    document.getElementById("fontColorLanguage").style.color=dark;
    document.getElementById("fontColorIntrests").style.color=dark;
    document.getElementById("fontColorHobbies").style.color=dark;
    document.getElementById("fontClrObjective").style.color=dark;
    document.getElementById("fontcolorExperience").style.color=dark;
    document.getElementById("fontClrEdu").style.color=dark;
    document.getElementById("fontColorImpLinks").style.color=dark;
   //  main
    document.getElementById("fontClrContactMain").style.color=dark;
    document.getElementById("fontClrSkillsMain").style.color=dark;
    document.getElementById("fontClrLinksMain").style.color=dark;
    document.getElementById("fontClrHobbyMain").style.color=dark;
    document.getElementById("fontClrIntrstMain").style.color=dark;
    document.getElementById("fontClrLangMain").style.color=dark;
    document.getElementById("fontClrObjectiveMain").style.color=dark;
    document.getElementById("fontClrEduMain").style.color=dark;
    document.getElementById("fontClrExpMain").style.color=dark;
    document.getElementById("fontClrExpMain").style.color=dark;

    document.getElementById("displayTemplate").style.background=dark;
    document.getElementById("rightHeadingDiv").style.background=dark;
    document.getElementById("leftheadingdiv").style.background=dark;
   
  }
  function LightBlue() {
    const blue = document.getElementById("spanCol5").innerHTML;
   document.getElementById("fontClrContact").style.color=blue;
   document.getElementById("fontColorExpertise").style.color=blue;
   document.getElementById("fontColorLanguage").style.color=blue;
   document.getElementById("fontColorIntrests").style.color=blue;
   document.getElementById("fontColorHobbies").style.color=blue;
   document.getElementById("fontClrObjective").style.color=blue;
   document.getElementById("fontcolorExperience").style.color=blue;
   document.getElementById("fontClrEdu").style.color=blue;
   document.getElementById("fontColorImpLinks").style.color=blue;
  //  main
   document.getElementById("fontClrContactMain").style.color=blue;
   document.getElementById("fontClrSkillsMain").style.color=blue;
   document.getElementById("fontClrLinksMain").style.color=blue;
   document.getElementById("fontClrHobbyMain").style.color=blue;
   document.getElementById("fontClrIntrstMain").style.color=blue;
   document.getElementById("fontClrLangMain").style.color=blue;
   document.getElementById("fontClrObjectiveMain").style.color=blue;
   document.getElementById("fontClrEduMain").style.color=blue;
   document.getElementById("fontClrExpMain").style.color=blue;
   document.getElementById("fontClrExpMain").style.color=blue;

   document.getElementById("displayTemplate").style.background=blue;
    document.getElementById("rightHeadingDiv").style.background=blue;
    document.getElementById("leftheadingdiv").style.background=blue;
  }
  function Eucalyptus() {
    
    document.getElementById("fontClrContact").style.color="#8B3DFF";
    document.getElementById("fontColorExpertise").style.color="#8B3DFF";
    document.getElementById("fontColorLanguage").style.color="#8B3DFF";
    document.getElementById("fontColorIntrests").style.color="#8B3DFF";
    document.getElementById("fontColorHobbies").style.color="#8B3DFF";
    document.getElementById("fontClrObjective").style.color="#8B3DFF";
    document.getElementById("fontcolorExperience").style.color="#8B3DFF";
    document.getElementById("fontClrEdu").style.color="#8B3DFF";
    document.getElementById("fontColorImpLinks").style.color="#8B3DFF";
   //  main
    document.getElementById("fontClrContactMain").style.color="#8B3DFF";
    document.getElementById("fontClrSkillsMain").style.color="#8B3DFF";
    document.getElementById("fontClrLinksMain").style.color="#8B3DFF";
    document.getElementById("fontClrHobbyMain").style.color="#8B3DFF";
    document.getElementById("fontClrIntrstMain").style.color="#8B3DFF";
    document.getElementById("fontClrLangMain").style.color="#8B3DFF";
    document.getElementById("fontClrObjectiveMain").style.color="#8B3DFF";
    document.getElementById("fontClrEduMain").style.color="#8B3DFF";
    document.getElementById("fontClrExpMain").style.color="#8B3DFF";
    document.getElementById("fontClrExpMain").style.color="#8B3DFF";

    document.getElementById("displayTemplate").style.background="#8B3DFF";
    document.getElementById("rightHeadingDiv").style.background="#8B3DFF";
    document.getElementById("leftheadingdiv").style.background="#8B3DFF";
    
  }
  function light3() {
    const colo3r = document.getElementById("spanCol3").innerHTML;
    document.getElementById("fontClrContact").style.color=colo3r;
    document.getElementById("fontColorExpertise").style.color=colo3r;
    document.getElementById("fontColorLanguage").style.color=colo3r;
    document.getElementById("fontColorIntrests").style.color=colo3r;
    document.getElementById("fontColorHobbies").style.color=colo3r;
    document.getElementById("fontClrObjective").style.color=colo3r;
    document.getElementById("fontcolorExperience").style.color=colo3r;
    document.getElementById("fontClrEdu").style.color=colo3r;
    document.getElementById("fontColorImpLinks").style.color=colo3r;
   //  main
    document.getElementById("fontClrContactMain").style.color=colo3r;
    document.getElementById("fontClrSkillsMain").style.color=colo3r;
    document.getElementById("fontClrLinksMain").style.color=colo3r;
    document.getElementById("fontClrHobbyMain").style.color=colo3r;
    document.getElementById("fontClrIntrstMain").style.color=colo3r;
    document.getElementById("fontClrLangMain").style.color=colo3r;
    document.getElementById("fontClrObjectiveMain").style.color=colo3r;
    document.getElementById("fontClrEduMain").style.color=colo3r;
    document.getElementById("fontClrExpMain").style.color=colo3r;
    document.getElementById("fontClrExpMain").style.color=colo3r;

    document.getElementById("displayTemplate").style.background=colo3r;
    document.getElementById("rightHeadingDiv").style.background=colo3r;
    document.getElementById("leftheadingdiv").style.background=colo3r;
    
  }
  function light2() {
    const color4 = document.getElementById("spanCol2").innerHTML;
    document.getElementById("fontClrContact").style.color=color4;
    document.getElementById("fontColorExpertise").style.color=color4;
    document.getElementById("fontColorLanguage").style.color=color4;
    document.getElementById("fontColorIntrests").style.color=color4;
    document.getElementById("fontColorHobbies").style.color=color4;
    document.getElementById("fontClrObjective").style.color=color4;
    document.getElementById("fontcolorExperience").style.color=color4;
    document.getElementById("fontClrEdu").style.color=color4;
    document.getElementById("fontColorImpLinks").style.color=color4;
   //  main
    document.getElementById("fontClrContactMain").style.color=color4;
    document.getElementById("fontClrSkillsMain").style.color=color4;
    document.getElementById("fontClrLinksMain").style.color=color4;
    document.getElementById("fontClrHobbyMain").style.color=color4;
    document.getElementById("fontClrIntrstMain").style.color=color4;
    document.getElementById("fontClrLangMain").style.color=color4;
    document.getElementById("fontClrObjectiveMain").style.color=color4;
    document.getElementById("fontClrEduMain").style.color=color4;
    document.getElementById("fontClrExpMain").style.color=color4;
    document.getElementById("fontClrExpMain").style.color=color4;
    document.getElementById("displayTemplate").style.background=color4;
    document.getElementById("rightHeadingDiv").style.background=color4;
    document.getElementById("leftheadingdiv").style.background=color4;
  }
  function light1() {
    const color5 = document.getElementById("spanCol1").innerHTML;
    document.getElementById("fontClrContact").style.color=color5;
    document.getElementById("fontColorExpertise").style.color=color5;
    document.getElementById("fontColorLanguage").style.color=color5;
    document.getElementById("fontColorIntrests").style.color=color5;
    document.getElementById("fontColorHobbies").style.color=color5;
    document.getElementById("fontClrObjective").style.color=color5;
    document.getElementById("fontcolorExperience").style.color=color5;
    document.getElementById("fontClrEdu").style.color=color5;
    document.getElementById("fontColorImpLinks").style.color=color5;
   //  main
    document.getElementById("fontClrContactMain").style.color=color5;
    document.getElementById("fontClrSkillsMain").style.color=color5;
    document.getElementById("fontClrLinksMain").style.color=color5;
    document.getElementById("fontClrHobbyMain").style.color=color5;
    document.getElementById("fontClrIntrstMain").style.color=color5;
    document.getElementById("fontClrLangMain").style.color=color5;
    document.getElementById("fontClrObjectiveMain").style.color=color5;
    document.getElementById("fontClrEduMain").style.color=color5;
    document.getElementById("fontClrExpMain").style.color=color5;
    document.getElementById("fontClrExpMain").style.color=color5;
    document.getElementById("displayTemplate").style.background=color5;
    document.getElementById("rightHeadingDiv").style.background=color5;
    document.getElementById("leftheadingdiv").style.background=color5;
  }
  
  function changeBackgroundColor() {
    let input = document.getElementById("favcolor").value;
    const res =  document.getElementById("leftheadingdiv");
    const res2 =  document.getElementById("rightHeadingDiv");
    res.style.backgroundColor = input;
    res2.style.backgroundColor = input;
    document.getElementById("fontClrContact").style.color=input;
    document.getElementById("fontColorExpertise").style.color=input;
    document.getElementById("fontColorLanguage").style.color=input;
    document.getElementById("fontColorIntrests").style.color=input;
    document.getElementById("fontColorHobbies").style.color=input;
    document.getElementById("fontClrObjective").style.color=input;
    document.getElementById("fontcolorExperience").style.color=input;
    document.getElementById("fontClrEdu").style.color=input;
    document.getElementById("fontColorImpLinks").style.color=input;
   //  main
    document.getElementById("fontClrContactMain").style.color=input;
    document.getElementById("fontClrSkillsMain").style.color=input;
    document.getElementById("fontClrLinksMain").style.color=input;
    document.getElementById("fontClrHobbyMain").style.color=input;
    document.getElementById("fontClrIntrstMain").style.color=input;
    document.getElementById("fontClrLangMain").style.color=input;
    document.getElementById("fontClrObjectiveMain").style.color=input;
    document.getElementById("fontClrEduMain").style.color=input;
    document.getElementById("fontClrExpMain").style.color=input;
    document.getElementById("fontClrExpMain").style.color=input;
    document.getElementById("displayTemplate").style.background=input;
    
  }
  function resetBackgroundColor() {
    document.getElementById("leftheadingdiv").style.background  = "#ADD8E6";
    document.getElementById("rightHeadingDiv").style.background = "#ADD8E6";
    document.getElementById("fontClrContact").style.color="black";
    document.getElementById("fontColorExpertise").style.color="black";
    document.getElementById("fontColorLanguage").style.color="black";
    document.getElementById("fontColorIntrests").style.color="black";
    document.getElementById("fontColorHobbies").style.color="black";
    document.getElementById("fontClrObjective").style.color="black";
    document.getElementById("fontcolorExperience").style.color="black";
    document.getElementById("fontClrEdu").style.color="black";
    document.getElementById("fontColorImpLinks").style.color="black";
   //  main
    document.getElementById("fontClrContactMain").style.color="black";
    document.getElementById("fontClrSkillsMain").style.color="black";
    document.getElementById("fontClrLinksMain").style.color="black";
    document.getElementById("fontClrHobbyMain").style.color="black";
    document.getElementById("fontClrIntrstMain").style.color="black";
    document.getElementById("fontClrLangMain").style.color="black";
    document.getElementById("fontClrObjectiveMain").style.color="black";
    document.getElementById("fontClrEduMain").style.color="black";
    document.getElementById("fontClrExpMain").style.color="black";
    document.getElementById("fontClrExpMain").style.color="black";
    document.getElementById("displayTemplate").style.background="#ADD8E6";


  }
  
  // for template fontC colour
  function fontDark() {
    
    document.getElementById("nameT2").style.color= "black";
    document.getElementById("jobTitleT").style.color= "black";
    document.getElementById("showjobTitleT").style.color= "black";
    document.getElementById("showNameT2").style.color= "black";
    
  }
  function fontLight1() {
    
    document.getElementById("nameT2").style.color= "white";
    document.getElementById("jobTitleT").style.color= "white";
    document.getElementById("showjobTitleT").style.color= "white";
    document.getElementById("showNameT2").style.color= "white";
    document.getElementById("fontcolorExperience").style.color= "black";
    document.getElementById("fontClrObjective").style.color= "black";
    document.getElementById("fontColorHobbies").style.color= "black";
    document.getElementById("fontColorIntrests").style.color= "black";
    document.getElementById("fontColorLanguage").style.color= "black";
    document.getElementById("fontColorExpertise").style.color= "black";
  }
  // --------------------------------------------------------------------------------------------
  
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
      console.error("Error capturing content or generating PDF:", error);
      document.getElementById("cv-template").style.display="none";

    }
  }
  
  //
  