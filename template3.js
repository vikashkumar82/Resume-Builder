
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

// dynamically Qualification textarea
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

  console.log(file2);

  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  

  let reader2 = new FileReader();
  reader2.readAsDataURL(file2);
  console.log(reader2.result);


  // Set The Image To Template
  reader.onloadend = function () {
    document.getElementById("imgTemplate3").src = reader.result;
  };

  // Set The Image To Template
  reader2.onloadend = function () {
    document.getElementById("showImgTemplate3").src = reader.result;
  };


  // name
  let nameField = document.getElementById("nameField").value;
  document.getElementById("nameT2").innerHTML = nameField;
  document.getElementById("showNameT2").innerHTML = nameField;
  
  
  
  // Email
  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;
  document.getElementById("showEmailT").innerHTML =
    document.getElementById("emailField").value;
  
  // contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

    document.getElementById("showCountryContactT").innerText=document.getElementById("countryCode").value
    document.getElementById("countryContactTs").innerText=document.getElementById("countryCode").value
    
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

  //  Job Title
  document.getElementById("jobTitleT").innerHTML =
  document.getElementById("jobTitle").value;
  document.getElementById("showJobTitleT").innerHTML =
  document.getElementById("jobTitle").value;

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


     // label update
     const designRange=document.getElementById("designRange").value;
     document.getElementById("designProgress").style.width=designRange+"%";
     document.getElementById("showDesignProgress").style.width=designRange+"%";
     document.getElementById("designProgress").innerHTML=designRange+"%";
     document.getElementById("showDesignProgress").innerHTML=designRange+"%";

     const projectRange=document.getElementById("projectManagementRange").value;
     document.getElementById("projectProgress").style.width=projectRange+"%";
     document.getElementById("showProjectProgress").style.width=projectRange+"%";
     document.getElementById("projectProgress").innerHTML=projectRange+"%";
     document.getElementById("showProjectProgress").innerHTML=projectRange+"%";


  


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
  document.getElementById("dummyExperience").style.display="none";
  const forms = document.querySelectorAll(".form-group:not(#weTemplate)"); // Exclude the template
  const resultSection = document.getElementById("resultSection");
  const showResultSection = document.getElementById("showResultSection"); // Ensure this ID exists in your HTML

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

      // Append to first section
      resultSection.appendChild(resultDiv);

      // Clone the resultDiv and append to second section
      const resultDivClone = resultDiv.cloneNode(true); // true means deep clone including all children
      showResultSection.appendChild(resultDivClone);
    } else {
      console.error("One or more fields are missing in the form.");
    }
  });
}


// --------------------------------------------------------------------------------------------

// for template color
function dark() {


  document.getElementById("changeBlueColor").style.backgroundImage = "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";

  document.getElementById("imgTemplate3").style.borderColor  = "#297FF7";
  document.getElementById("experiencecolorChange").style.background = "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("educationColorChange").style.background = "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("skillsColorChange").style.background = "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("designProgress").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("projectProgress").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("tabSkillColor").style.borderColor= "#297FF7";
  document.getElementById("tabLanguageColor").style.borderColor= "#297FF7";
  document.getElementById("tabIntrestColor").style.borderColor= "#297FF7";
  document.getElementById("tabHobbiesColor").style.borderColor= "#297FF7";
  document.getElementById("iconAddress").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("iconEmail").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("iconContact").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";

  // show template
  document.getElementById("showIconAddress").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("showIconContact").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("showIconEmail").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("showTabSkillColor").style.borderColor= "#297FF7";
  document.getElementById("showTabHobbiesColor").style.borderColor= "#297FF7";
  document.getElementById("showTabLanguageColor").style.borderColor= "#297FF7";
  document.getElementById("showTabIntrestColor").style.borderColor= "#297FF7";
  document.getElementById("showChangeBlueColor").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("showSkillsColorChange").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("showExperiencecolorChange").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("showEducationColorChange").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("showDesignProgress").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";
  document.getElementById("showProjectProgress").style.background= "radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,221,214,1) 0%, rgba(51,102,255,1) 90% )";

}
function LightBlue() {
  
  document.getElementById("changeBlueColor").style.background = "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("imgTemplate3").style.borderColor  = "#611446";
  document.getElementById("experiencecolorChange").style.background = "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("educationColorChange").style.background = "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("skillsColorChange").style.background = "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("designProgress").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("projectProgress").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("tabSkillColor").style.borderColor= "#611446";
  document.getElementById("tabLanguageColor").style.borderColor= "#611446";
  document.getElementById("tabIntrestColor").style.borderColor= "#611446";
  document.getElementById("tabHobbiesColor").style.borderColor= "#611446";
  document.getElementById("iconAddress").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("iconEmail").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("iconContact").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";

  // show template
  document.getElementById("showIconAddress").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("showIconContact").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("showIconEmail").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("showTabSkillColor").style.borderColor= "#611446";
  document.getElementById("showTabHobbiesColor").style.borderColor= "#611446";
  document.getElementById("showTabLanguageColor").style.borderColor= "#611446";
  document.getElementById("showTabIntrestColor").style.borderColor= "#611446";
  document.getElementById("showChangeBlueColor").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("showSkillsColorChange").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("showExperiencecolorChange").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("showEducationColorChange").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("showDesignProgress").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";
  document.getElementById("showProjectProgress").style.background= "linear-gradient( 99deg,  rgba(115,18,81,1) 10.6%, rgba(28,28,28,1) 118% )";

}
function Eucalyptus() {
  
  document.getElementById("changeBlueColor").style.background = "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("imgTemplate3").style.borderColor  = "#51297A";
  document.getElementById("experiencecolorChange").style.background = "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("educationColorChange").style.background = "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("skillsColorChange").style.background = "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("designProgress").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("projectProgress").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("tabSkillColor").style.borderColor= "#51297A";
  document.getElementById("tabLanguageColor").style.borderColor= "#51297A";
  document.getElementById("tabIntrestColor").style.borderColor= "#51297A";
  document.getElementById("tabHobbiesColor").style.borderColor= "#51297A";
  document.getElementById("iconAddress").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("iconEmail").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("iconContact").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  
  // show template
  document.getElementById("showIconAddress").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("showIconContact").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("showIconEmail").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("showTabSkillColor").style.borderColor="#51297A";
  document.getElementById("showTabHobbiesColor").style.borderColor="#51297A";
  document.getElementById("showTabLanguageColor").style.borderColor= "#51297A";
  document.getElementById("showTabIntrestColor").style.borderColor= "#51297A";
  document.getElementById("showChangeBlueColor").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("showSkillsColorChange").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("showExperiencecolorChange").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("showEducationColorChange").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("showDesignProgress").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";
  document.getElementById("showProjectProgress").style.background= "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% )";

}
function light3() {
  document.getElementById("changeBlueColor").style.background = "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("imgTemplate3").style.borderColor  = "#980707";
  document.getElementById("experiencecolorChange").style.background = "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("educationColorChange").style.background = "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("skillsColorChange").style.background = "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("designProgress").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("projectProgress").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("tabSkillColor").style.borderColor= "#980707";
  document.getElementById("tabLanguageColor").style.borderColor= "#980707";
  document.getElementById("tabIntrestColor").style.borderColor= "#980707";
  document.getElementById("tabHobbiesColor").style.borderColor= "#980707";
  document.getElementById("iconAddress").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("iconEmail").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("iconContact").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  
  // show template
  document.getElementById("showIconAddress").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("showIconContact").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("showIconEmail").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("showTabSkillColor").style.borderColor="#980707";
  document.getElementById("showTabHobbiesColor").style.borderColor="#980707";
  document.getElementById("showTabLanguageColor").style.borderColor= "#980707";
  document.getElementById("showTabIntrestColor").style.borderColor= "#980707";
  document.getElementById("showChangeBlueColor").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("showSkillsColorChange").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("showExperiencecolorChange").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("showEducationColorChange").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("showDesignProgress").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";
  document.getElementById("showProjectProgress").style.background= "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )";

}
function light2() {
  document.getElementById("changeBlueColor").style.background = "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("imgTemplate3").style.borderColor  = "#A3E6FF";
  document.getElementById("experiencecolorChange").style.background = "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("educationColorChange").style.background = "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("skillsColorChange").style.background = "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("designProgress").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("projectProgress").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("tabSkillColor").style.borderColor= "#A3E6FF";
  document.getElementById("tabLanguageColor").style.borderColor= "#A3E6FF";
  document.getElementById("tabIntrestColor").style.borderColor= "#A3E6FF";
  document.getElementById("tabHobbiesColor").style.borderColor= "#A3E6FF";
  document.getElementById("iconAddress").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("iconEmail").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("iconContact").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";

  // show template
  document.getElementById("showIconAddress").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("showIconContact").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("showIconEmail").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("showTabSkillColor").style.borderColor="#A3E6FF";
  document.getElementById("showTabHobbiesColor").style.borderColor="#A3E6FF";
  document.getElementById("showTabLanguageColor").style.borderColor= "#A3E6FF";
  document.getElementById("showTabIntrestColor").style.borderColor= "#A3E6FF";
  document.getElementById("showChangeBlueColor").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("showSkillsColorChange").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("showExperiencecolorChange").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("showEducationColorChange").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("showDesignProgress").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";
  document.getElementById("showProjectProgress").style.background= "linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% )";

 
}


function light1() {
  document.getElementById("changeBlueColor").style.background ="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("imgTemplate3").style.borderColor  ="#DAE4E9";
  document.getElementById("experiencecolorChange").style.background = "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("educationColorChange").style.background = "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("skillsColorChange").style.background ="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("designProgress").style.background= "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("projectProgress").style.background="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("tabSkillColor").style.borderColor= "#DAE4E9";
  document.getElementById("tabLanguageColor").style.borderColor= "#DAE4E9";
  document.getElementById("tabIntrestColor").style.borderColor= "#DAE4E9";
  document.getElementById("tabHobbiesColor").style.borderColor= "#DAE4E9";
  document.getElementById("iconAddress").style.background= "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("iconEmail").style.background="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("iconContact").style.background="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";

  // show template
  document.getElementById("showIconAddress").style.background= "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("showIconContact").style.background= "#DAE4E9";
  document.getElementById("showIconEmail").style.background= "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("showTabSkillColor").style.borderColor="#DAE4E9";
  document.getElementById("showTabHobbiesColor").style.borderColor="#DAE4E9";
  document.getElementById("showTabLanguageColor").style.borderColor= "#DAE4E9";
  document.getElementById("showTabIntrestColor").style.borderColor= "#DAE4E9";
  document.getElementById("showChangeBlueColor").style.background= "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("showSkillsColorChange").style.background= "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("showExperiencecolorChange").style.background= "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("showEducationColorChange").style.background= "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("showDesignProgress").style.background= "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
  document.getElementById("showProjectProgress").style.background= "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";

}

function changeBackgroundColor() {
  let input = document.getElementById("favcolor").value;
  document.getElementById("changeBlueColor").style.background = input;
  document.getElementById("imgTemplate3").style.borderColor  = input;
  document.getElementById("experiencecolorChange").style.background = input;
  document.getElementById("educationColorChange").style.background = input;
  document.getElementById("skillsColorChange").style.background = input;
  document.getElementById("designProgress").style.background= input;
  document.getElementById("projectProgress").style.background= input;
  document.getElementById("tabSkillColor").style.borderColor= input;
  document.getElementById("tabLanguageColor").style.borderColor=input;
  document.getElementById("tabIntrestColor").style.borderColor= input;
  document.getElementById("tabHobbiesColor").style.borderColor= input;
  document.getElementById("iconAddress").style.background= input;
  document.getElementById("iconEmail").style.background= input;
  document.getElementById("iconContact").style.background= input;

  
  

  // show template
  document.getElementById("showIconAddress").style.background= input;
  document.getElementById("showIconContact").style.background= input;
  document.getElementById("showIconEmail").style.background= input;
  document.getElementById("showTabSkillColor").style.borderColor=input;
  document.getElementById("showTabHobbiesColor").style.borderColor=input;
  document.getElementById("showTabLanguageColor").style.borderColor= input;
  document.getElementById("showTabIntrestColor").style.borderColor= input;
  document.getElementById("showChangeBlueColor").style.background= input;
  document.getElementById("showSkillsColorChange").style.background= input;
  document.getElementById("showExperiencecolorChange").style.background= input;
  document.getElementById("showEducationColorChange").style.background= input;
  document.getElementById("showDesignProgress").style.background= input;
  document.getElementById("showProjectProgress").style.background= input;

}
function resetBackgroundColor() {

  document.getElementById("changeBlueColor").style.background ="linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("imgTemplate3").style.borderColor  ="#0000FF";
  document.getElementById("experiencecolorChange").style.background = "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("educationColorChange").style.background = "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("skillsColorChange").style.background ="linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("designProgress").style.background= "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("projectProgress").style.background="linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("tabSkillColor").style.borderColor= "#0000FF";
  document.getElementById("tabLanguageColor").style.borderColor= "#0000FF";
  document.getElementById("tabIntrestColor").style.borderColor= "#0000FF";
  document.getElementById("tabHobbiesColor").style.borderColor= "#0000FF";
  document.getElementById("iconAddress").style.background= "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("iconEmail").style.background="linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("iconContact").style.background="linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("iconAddress").style.color = "white";
  document.getElementById("iconEmail").style.color = "white";
  document.getElementById("iconContact").style.color = "white";
  document.getElementById("jobTitleT").style.color = "white";
  document.getElementById("nameT2").style.color = "white";
  document.getElementById("projectProgress").style.color = "white";
  document.getElementById("skillsColorChange").style.color = "white";
  document.getElementById("experiencecolorChange").style.color = "white";
  document.getElementById("educationColorChange").style.color = "white";
  document.getElementById("designProgress").style.color = "white";
  document.getElementById("showIconAddress").style.color = "white";
  document.getElementById("showIconEmail").style.color = "white";
  document.getElementById("showIconContact").style.color = "white";


  
  // show template
  document.getElementById("showIconAddress").style.background= "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("showIconContact").style.background= "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("showIconEmail").style.background= "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("showTabSkillColor").style.borderColor="#0000FF";
  document.getElementById("showTabHobbiesColor").style.borderColor="#0000FF";
  document.getElementById("showTabLanguageColor").style.borderColor= "#0000FF";
  document.getElementById("showTabSkillColor").style.borderColor= "#0000FF";
  document.getElementById("showChangeBlueColor").style.background= "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("showSkillsColorChange").style.background= "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("showExperiencecolorChange").style.background= "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("showEducationColorChange").style.background= "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("showDesignProgress").style.background= "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";
  document.getElementById("showProjectProgress").style.background= "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 29%, rgba(0, 212, 255, 1) 100%)";

  document.getElementById("showIconAddress").style.color = "white";
  document.getElementById("showIconEmail").style.color = "white";
  document.getElementById("showIconContact").style.color = "white";
  document.getElementById("showDesignProgress").style.color = "white";
  document.getElementById("showProjectProgress").style.color = "white";
  document.getElementById("showClrExp").style.color = "white";
  document.getElementById("showClrSkills").style.color = "white";
  document.getElementById("showProjectProgress").style.color = "white";
  document.getElementById("showClrEdu").style.color = "white";


}

// for template fontC colour

function fontLight2() {
  
  document.getElementById("iconAddress").style.color = "white";
  document.getElementById("iconEmail").style.color = "white";
  document.getElementById("iconContact").style.color = "white";
  document.getElementById("jobTitleT").style.color = "white";
  document.getElementById("nameT2").style.color = "white";
  document.getElementById("projectProgress").style.color = "white";
  document.getElementById("skillsColorChange").style.color = "white";
  document.getElementById("experiencecolorChange").style.color = "white";
  document.getElementById("educationColorChange").style.color = "white";
  document.getElementById("designProgress").style.color = "white";


  document.getElementById("showIconAddress").style.color = "white";
  document.getElementById("showIconEmail").style.color = "white";
  document.getElementById("showIconContact").style.color = "white";
  document.getElementById("showDesignProgress").style.color = "white";
  document.getElementById("showProjectProgress").style.color = "white";
  document.getElementById("showClrExp").style.color = "white";
  document.getElementById("showClrSkills").style.color = "white";
  document.getElementById("showProjectProgress").style.color = "white";
  document.getElementById("showClrEdu").style.color = "white";



}
function fontLight1() {
 
  document.getElementById("iconAddress").style.color = "black";
  document.getElementById("iconEmail").style.color = "black";
  document.getElementById("iconContact").style.color = "black";
  document.getElementById("jobTitleT").style.color = "black";
  document.getElementById("nameT2").style.color = "black";
  document.getElementById("projectProgress").style.color = "black";
  document.getElementById("skillsColorChange").style.color = "black";
  document.getElementById("experiencecolorChange").style.color = "black";
  document.getElementById("educationColorChange").style.color = "black";
  document.getElementById("designProgress").style.color = "black";

  document.getElementById("showIconAddress").style.color = "black";
  document.getElementById("showIconEmail").style.color = "black";
  document.getElementById("showIconContact").style.color = "black";
  document.getElementById("showDesignProgress").style.color = "black";
  document.getElementById("showProjectProgress").style.color = "black";
  document.getElementById("showClrExp").style.color = "black";
  document.getElementById("showClrSkills").style.color = "black";
  document.getElementById("showProjectProgress").style.color = "black";
  document.getElementById("showClrEdu").style.color = "black";
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
