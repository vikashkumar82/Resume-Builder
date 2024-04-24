
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
    document.getElementById("showImgTemplate2").src = reader2.result;
  };

  // name
  let nameField = document.getElementById("nameField").value;
  document.getElementById("nameT2").innerText = nameField;
  document.getElementById("showName").innerText = nameField;

  //  Job Title
  document.getElementById("jobTitleT").innerHTML =
    document.getElementById("jobTitle").value;
  document.getElementById("showJobTitle").innerHTML =
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

  document.getElementById("showCountryContactT").innerHTML =
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
  document.getElementById("showAqT").innerHTML = str1;


  //  Social media Links
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
  document.getElementById("showKeySkills").innerHTML = techSkills;

  //Language
  let language = document.getElementsByClassName("languageField");
  let lang = "";
  for (let e of language) {
    lang = lang + `<li>${e.value}</li>`;
  }
  document.getElementById("languages").innerHTML = lang;
  document.getElementById("showLanguages").innerHTML = lang;


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
  alert("vikash")
  document.getElementById("eperience-dummyData").style.display="none";
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

      // Create the result structure for the first section
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

      // Append the result to the first section
      resultSection.appendChild(resultDiv);

      // Create a clone of the result for the second section
      const resultDivClone = resultDiv.cloneNode(true); // 'true' indicates deep cloning (clone the element and its content)
      
      // Append the clone to the second section
      resultSection2.appendChild(resultDivClone);
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
  document.getElementById("project-dummyData").style.display="none";
  const proForms = document.querySelectorAll(".form-group:not(#proTemplate)"); // Exclude the template
  const resultProjectSection = document.getElementById("ProjectResult");
  const resultProjectSection2 = document.getElementById("showProjectResult");

  proForms.forEach((projectForm, index) => {
    const fromProField = projectForm.querySelector(".fromProField");
    const toProField = projectForm.querySelector(".toProField");
    const projectField = projectForm.querySelector(".projectField");
    const descriptionProField = projectForm.querySelector(".proDesc");
    const proPositionField = projectForm.querySelector(".projectPositionField");

    // Check if all required fields exist
    if (fromProField && toProField && projectField && descriptionProField && proPositionField) {
      const proFrom = fromProField.value;
      const proTo = toProField.value;
      const projectName = projectField.value;
      const proDescription = descriptionProField.value;
      const proPosition = proPositionField.value;

      // Create result structure for the first section
      const resultProDiv = document.createElement("div");
      resultProDiv.className = "projectResultSection mt-4";
      resultProDiv.innerHTML = `
        <h4>${projectName}</h4>
        <div style="display:flex;"> <!-- Fixed typo in 'display' -->
          <span><strong>${proPosition}</strong></span>
          <span style="color: rgb(82, 82, 82); font-size: x-small;"> &nbsp;<i><span>${proFrom}</span> - <span>${proTo}</span></i></span>
        </div>
        <p style="text-align:justify;">${proDescription}</p>
      `;

      // Append the result to the first section
      resultProjectSection.appendChild(resultProDiv);

      // Create a clone of the result for the second section
      const resultProDivClone = resultProDiv.cloneNode(true); // 'true' indicates deep cloning

      // Append the clone to the second section
      resultProjectSection2.appendChild(resultProDivClone);
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
  
  document.getElementById("achivementsHeading").style.borderBottomColor = dark;
  document.getElementById("hobbiesHeading").style.borderBottomColor = dark;
  document.getElementById("languageHeading").style.borderBottomColor = dark;
  document.getElementById("skillsHeading").style.borderBottomColor = dark;
  document.getElementById("educationHeading").style.borderBottomColor = dark;
  document.getElementById("projectHeading").style.borderBottomColor = dark;
  document.getElementById("experienceHeading").style.borderBottomColor = dark;
  document.getElementById("summaryHeading").style.borderBottomColor = dark;

  document.getElementById("showSummaryHeading").style.borderBottomColor = dark;
  document.getElementById("showExperienceHeading").style.borderBottomColor = dark;
  document.getElementById("showEducationHeading").style.borderBottomColor = dark;
  document.getElementById("showSkillsHeading").style.borderBottomColor = dark;
  document.getElementById("showlanguageHeading").style.borderBottomColor = dark;
  document.getElementById("showHobbiesHeading").style.borderBottomColor = dark;
  document.getElementById("showAchivementsHeading").style.borderBottomColor = dark;
  document.getElementById("showProjectHeading").style.borderBottomColor = dark;

  document.getElementById("showIconAchivementsColor").style.background = dark;
  document.getElementById("showIconHobbiesColor").style.background=dark;
  document.getElementById("showIconLanguageColor").style.background=dark;
  document.getElementById("showIconSkillsColor").style.background=dark;
  document.getElementById("showIconEducationColor").style.background=dark;
  document.getElementById("showIconProjectColor").style.background=dark;
  document.getElementById("showIconExperienceColor").style.background=dark;
  document.getElementById("showIconExperienceColor").style.background=dark;
  document.getElementById("showIconSummaryColor").style.background=dark;
  document.getElementById("showHeaderSection").style.background=dark;
 }


function LightBlue() {
  const blue = document.getElementById("spanCol5").innerHTML;
  document.getElementById("headingColourChange").style.background =blue; 
  document.getElementById("iconSummaryColor").style.background=blue;
  document.getElementById("iconProjectColor").style.background=blue;
  document.getElementById("iconEducationColor").style.background=blue;
  document.getElementById("iconSkillsColor").style.background=blue;
  document.getElementById("iconLanguageColor").style.background=blue;
  document.getElementById("iconHobbiesColor").style.background=blue;
  document.getElementById("iconAchivementsColor").style.background=blue;
  document.getElementById("iconExperienceColor").style.background=blue;
  
  document.getElementById("achivementsHeading").style.borderBottomColor = blue;
  document.getElementById("hobbiesHeading").style.borderBottomColor = blue;
  document.getElementById("languageHeading").style.borderBottomColor = blue;
  document.getElementById("skillsHeading").style.borderBottomColor = blue;
  document.getElementById("educationHeading").style.borderBottomColor = blue;
  document.getElementById("projectHeading").style.borderBottomColor = blue;
  document.getElementById("experienceHeading").style.borderBottomColor = blue;
  document.getElementById("summaryHeading").style.borderBottomColor = blue;

  document.getElementById("showExperienceHeading").style.borderBottomColor = blue;
  document.getElementById("showEducationHeading").style.borderBottomColor = blue;
  document.getElementById("showSkillsHeading").style.borderBottomColor = blue;
  document.getElementById("showlanguageHeading").style.borderBottomColor = blue;
  document.getElementById("showHobbiesHeading").style.borderBottomColor = blue;
  document.getElementById("showAchivementsHeading").style.borderBottomColor =blue;
  document.getElementById("showSummaryHeading").style.borderBottomColor = blue;
  document.getElementById("showProjectHeading").style.borderBottomColor = blue;

  document.getElementById("showIconAchivementsColor").style.background = blue;
  document.getElementById("showIconHobbiesColor").style.background=blue;
  document.getElementById("showIconLanguageColor").style.background=blue;
  document.getElementById("showIconSkillsColor").style.background=blue;
  document.getElementById("showIconEducationColor").style.background=blue;
  document.getElementById("showIconProjectColor").style.background=blue;
  document.getElementById("showIconExperienceColor").style.background=blue;
  document.getElementById("showIconExperienceColor").style.background=blue;
  document.getElementById("showIconSummaryColor").style.background=blue;
  document.getElementById("showHeaderSection").style.background=blue;
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
  
  document.getElementById("achivementsHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("hobbiesHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("languageHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("skillsHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("educationHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("projectHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("experienceHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("summaryHeading").style.borderBottomColor = eucalyptus;

  document.getElementById("showSummaryHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("showExperienceHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("showEducationHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("showSkillsHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("showlanguageHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("showHobbiesHeading").style.borderBottomColor = eucalyptus;
  document.getElementById("showAchivementsHeading").style.borderBottomColor =eucalyptus;
  document.getElementById("showProjectHeading").style.borderBottomColor = eucalyptus;

  document.getElementById("showIconAchivementsColor").style.background = eucalyptus;
  document.getElementById("showIconHobbiesColor").style.background=eucalyptus;
  document.getElementById("showIconLanguageColor").style.background=eucalyptus;
  document.getElementById("showIconSkillsColor").style.background=eucalyptus;
  document.getElementById("showIconEducationColor").style.background=eucalyptus;
  document.getElementById("showIconProjectColor").style.background=eucalyptus;
  document.getElementById("showIconExperienceColor").style.background=eucalyptus;
  document.getElementById("showIconExperienceColor").style.background=eucalyptus;
  document.getElementById("showIconSummaryColor").style.background=eucalyptus;
  document.getElementById("showHeaderSection").style.background=eucalyptus;
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
  
  document.getElementById("achivementsHeading").style.borderBottomColor = colo3r;
  document.getElementById("hobbiesHeading").style.borderBottomColor = colo3r;
  document.getElementById("languageHeading").style.borderBottomColor = colo3r;
  document.getElementById("skillsHeading").style.borderBottomColor = colo3r;
  document.getElementById("educationHeading").style.borderBottomColor = colo3r;
  document.getElementById("projectHeading").style.borderBottomColor = colo3r;
  document.getElementById("experienceHeading").style.borderBottomColor = colo3r;
  document.getElementById("summaryHeading").style.borderBottomColor = colo3r;

  document.getElementById("showSummaryHeading").style.borderBottomColor = colo3r;
  document.getElementById("showExperienceHeading").style.borderBottomColor = colo3r;
  document.getElementById("showEducationHeading").style.borderBottomColor = colo3r;
  document.getElementById("showSkillsHeading").style.borderBottomColor = colo3r;
  document.getElementById("showlanguageHeading").style.borderBottomColor = colo3r;
  document.getElementById("showHobbiesHeading").style.borderBottomColor = colo3r;
  document.getElementById("showAchivementsHeading").style.borderBottomColor =colo3r;
  document.getElementById("showProjectHeading").style.borderBottomColor = colo3r;

  document.getElementById("showIconAchivementsColor").style.background = colo3r;
  document.getElementById("showIconHobbiesColor").style.background=colo3r;
  document.getElementById("showIconLanguageColor").style.background=colo3r;
  document.getElementById("showIconSkillsColor").style.background=colo3r;
  document.getElementById("showIconEducationColor").style.background=colo3r;
  document.getElementById("showIconProjectColor").style.background=colo3r;
  document.getElementById("showIconExperienceColor").style.background=colo3r;
  document.getElementById("showIconExperienceColor").style.background=colo3r;
  document.getElementById("showIconSummaryColor").style.background=colo3r;
  document.getElementById("showHeaderSection").style.background=colo3r;
}
function light2() {
  const color4 = document.getElementById("spanCol2").innerHTML;
  document.getElementById("headingColourChange").style.background = colo3r;
  document.getElementById("iconSummaryColor").style.background=colo3r;
  document.getElementById("iconProjectColor").style.background=colo3r;
  document.getElementById("iconEducationColor").style.background=colo3r;
  document.getElementById("iconSkillsColor").style.background=colo3r;
  document.getElementById("iconLanguageColor").style.background=colo3r;
  document.getElementById("iconHobbiesColor").style.background=colo3r;
  document.getElementById("iconAchivementsColor").style.background=colo3r;
  document.getElementById("iconExperienceColor").style.background=colo3r;

  document.getElementById("achivementsHeading").style.borderBottomColor = colo3r;
  document.getElementById("hobbiesHeading").style.borderBottomColor = colo3r;
  document.getElementById("languageHeading").style.borderBottomColor = colo3r;
  document.getElementById("skillsHeading").style.borderBottomColor = colo3r;
  document.getElementById("educationHeading").style.borderBottomColor = colo3r;
  document.getElementById("projectHeading").style.borderBottomColor = colo3r;
  document.getElementById("experienceHeading").style.borderBottomColor = colo3r;
  document.getElementById("summaryHeading").style.borderBottomColor = colo3r;

  document.getElementById("showSummaryHeading").style.borderBottomColor = colo3r
  document.getElementById("showExperienceHeading").style.borderBottomColor=colo3r
  document.getElementById("showEducationHeading").style.borderBottomColor=colo3r
  document.getElementById("showSkillsHeading").style.borderBottomColor = colo3r
  document.getElementById("showlanguageHeading").style.borderBottomColor = colo3r
  document.getElementById("showHobbiesHeading").style.borderBottomColor = colo3r
  document.getElementById("showAchivementsHeading").style.borderBottomColor = colo3r
  document.getElementById("showProjectHeading").style.borderBottomColor = colo3r

  document.getElementById("showIconAchivementsColor").style.background = colo3r;
  document.getElementById("showIconHobbiesColor").style.background=colo3r;
  document.getElementById("showIconLanguageColor").style.background=colo3r;
  document.getElementById("showIconSkillsColor").style.background=colo3r;
  document.getElementById("showIconEducationColor").style.background=colo3r;
  document.getElementById("showIconProjectColor").style.background=colo3r;
  document.getElementById("showIconExperienceColor").style.background=colo3r;
  document.getElementById("showIconExperienceColor").style.background=colo3r;
  document.getElementById("showIconSummaryColor").style.background=colo3r;
  document.getElementById("showHeaderSection").style.background=colo3r;
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
  
  document.getElementById("achivementsHeading").style.borderBottomColor = color5;
  document.getElementById("hobbiesHeading").style.borderBottomColor = color5;
  document.getElementById("languageHeading").style.borderBottomColor = color5;
  document.getElementById("skillsHeading").style.borderBottomColor = color5;
  document.getElementById("educationHeading").style.borderBottomColor = color5;
  document.getElementById("projectHeading").style.borderBottomColor = color5;
  document.getElementById("experienceHeading").style.borderBottomColor = color5;
  document.getElementById("summaryHeading").style.borderBottomColor = color5;

  document.getElementById("showSummaryHeading").style.borderBottomColor =     color5;
  document.getElementById("showExperienceHeading").style.borderBottomColor = color5;
  document.getElementById("showEducationHeading").style.borderBottomColor = color5;
  document.getElementById("showSkillsHeading").style.borderBottomColor = color5;
  document.getElementById("showlanguageHeading").style.borderBottomColor = color5;
  document.getElementById("showHobbiesHeading").style.borderBottomColor = color5;
  document.getElementById("showAchivementsHeading").style.borderBottomColor = color5;
  document.getElementById("showProjectHeading").style.borderBottomColor = color5;

  document.getElementById("showIconAchivementsColor").style.background = color5;
  document.getElementById("showIconHobbiesColor").style.background=color5;
  document.getElementById("showIconLanguageColor").style.background=color5;
  document.getElementById("showIconSkillsColor").style.background=color5;
  document.getElementById("showIconEducationColor").style.background=color5;
  document.getElementById("showIconProjectColor").style.background=color5;
  document.getElementById("showIconExperienceColor").style.background=color5;
  document.getElementById("showIconExperienceColor").style.background=color5;
  document.getElementById("showIconSummaryColor").style.background=color5;
  document.getElementById("showHeaderSection").style.background=color5;
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
  
  document.getElementById("achivementsHeading").style.borderBottomColor = input;
  document.getElementById("hobbiesHeading").style.borderBottomColor = input;
  document.getElementById("languageHeading").style.borderBottomColor = input;
  document.getElementById("skillsHeading").style.borderBottomColor = input;
  document.getElementById("educationHeading").style.borderBottomColor = input;
  document.getElementById("projectHeading").style.borderBottomColor = input;
  document.getElementById("experienceHeading").style.borderBottomColor = input;
  document.getElementById("summaryHeading").style.borderBottomColor = input;

  document.getElementById("showSummaryHeading").style.borderBottomColor =    input;
  document.getElementById("showExperienceHeading").style.borderBottomColor = input;
  document.getElementById("showEducationHeading").style.borderBottomColor = input;
  document.getElementById("showSkillsHeading").style.borderBottomColor = input;
  document.getElementById("showlanguageHeading").style.borderBottomColor = input;
  document.getElementById("showHobbiesHeading").style.borderBottomColor = input;
  document.getElementById("showAchivementsHeading").style.borderBottomColor = input;
  document.getElementById("showProjectHeading").style.borderBottomColor = input;

  document.getElementById("showIconAchivementsColor").style.background = input;
  document.getElementById("showIconHobbiesColor").style.background=input;
  document.getElementById("showIconLanguageColor").style.background=input;
  document.getElementById("showIconSkillsColor").style.background=input;
  document.getElementById("showIconEducationColor").style.background=input;
  document.getElementById("showIconProjectColor").style.background=input;
  document.getElementById("showIconExperienceColor").style.background=input;
  document.getElementById("showIconExperienceColor").style.background=input;
  document.getElementById("showIconSummaryColor").style.background=input;
  document.getElementById("showHeaderSection").style.background=input;
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
  
  document.getElementById("achivementsHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("hobbiesHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("languageHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("skillsHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("educationHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("projectHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("experienceHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("summaryHeading").style.borderBottomColor = "#C200FF";

  document.getElementById("showSummaryHeading").style.borderBottomColor =     "#C200FF";
  document.getElementById("showExperienceHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("showEducationHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("showSkillsHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("showlanguageHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("showHobbiesHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("showAchivementsHeading").style.borderBottomColor = "#C200FF";
  document.getElementById("showProjectHeading").style.borderBottomColor = "#C200FF";

  document.getElementById("showIconAchivementsColor").style.background = "#C200FF";
  document.getElementById("showIconHobbiesColor").style.background="#C200FF";
  document.getElementById("showIconLanguageColor").style.background="#C200FF";
  document.getElementById("showIconSkillsColor").style.background="#C200FF";
  document.getElementById("showIconEducationColor").style.background="#C200FF";
  document.getElementById("showIconProjectColor").style.background="#C200FF";
  document.getElementById("showIconExperienceColor").style.background="#C200FF";
  document.getElementById("showIconExperienceColor").style.background="#C200FF";
  document.getElementById("showIconSummaryColor").style.background="#C200FF";
  document.getElementById("showHeaderSection").style.background="#C200FF";
}

// for template fontC colour

function fontLight2() {
  document.getElementById("nameT2").style.color = "black";
  document.getElementById("jobTitleT").style.color = "black";
  document.getElementById("showJobTitle").style.color = "black";
  document.getElementById("showName").style.color = "black";
}
function fontLight1() {
  document.getElementById("nameT2").style.color = "white";
  document.getElementById("jobTitleT").style.color = "white";
  document.getElementById("showJobTitle").style.color = "white";
  document.getElementById("showName").style.color = "white";
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
