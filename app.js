const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  // if (document.querySelector("input").value == "") {
  //   alert("please fill all required fields");
  // }
  // name
  let name = document.getElementById("Name").value;
  document.getElementById("display-name").innerHTML = name;
  document.getElementById("Name").value = "";

  // email
  let email = document.getElementById("Email").value;
  document.getElementById("display-email").innerHTML = email + " |";
  document.getElementById("Email").value = "";
  if (document.getElementById("Email").value == null) {
    document.getElementById("display-email").innerHTML = "";
  }
  // phone
  let phone = document.getElementById("Phone").value;
  document.getElementById("display-phone").innerHTML = phone + " |";
  document.getElementById("Phone").value = "";
  if (document.getElementById("Phone").value == null) {
    document.getElementById("display-phone").innerHTML = "";
  }

  // github
  let github = document.getElementById("Github").value;
  document.getElementById("display-github").innerHTML = github + " |";
  document.getElementById("Github").value = "";
  if (document.getElementById("Github").value == null) {
    document.getElementById("display-github").innerHTML = "";
  }
  // linkedin
  let linkedin = document.getElementById("Linkedin").value;
  document.getElementById("display-linkedin").innerHTML = linkedin;
  document.getElementById("Linkedin").value = "";

  // education
  // degree
  let degree = document.getElementById("Degree").value;
  document.getElementById("display-degree").innerHTML = degree;
  document.getElementById("Degree").value = "";
  // college
  let college = document.getElementById("College").value;
  document.getElementById("display-college").innerHTML = college;
  document.getElementById("College").value = "";
  // startingyear
  let startingyear = document.getElementById("StartingYear").value;
  document.getElementById("display-startingyear").innerHTML = startingyear;
  document.getElementById("StartingYear").value = "";
  // passingyear
  let passingyear = document.getElementById("PassingYear").value;
  document.getElementById("display-passingyear").innerHTML =
    " - " + passingyear;
  document.getElementById("PassingYear").value = "";
  if (document.getElementById("PassingYear").value == null) {
    document.getElementById("display-passingyear").innerHTML = "";
  }
  // cgpa
  let cgpa = document.getElementById("CGPA").value;
  document.getElementById("display-cgpa").innerHTML = "CGPA : " + cgpa;
  document.getElementById("CGPA").value = "";
  if (document.getElementById("CGPA").value == "") {
    document.getElementById("display-cgpa").innerHTML = "";
  }

  // skills
  let skills = document.getElementById("Skills").value;
  document.getElementById("display-skills").innerHTML = skills;
  document.getElementById("Skills").value = "";
  // project
  let project = document.getElementById("Project").value;
  document.getElementById("display-project").innerHTML = project;
  document.getElementById("Project").value = "";
  // description;
  let description = document.getElementById("Description").value;
  document.getElementById("display-description").innerHTML = description;
  document.getElementById("Description").value = "";
  // link
  let link = document.getElementById("Link").value;
  document.getElementById("display-link").innerHTML = "Link - " + link;
  document.getElementById("Link").value = "";
  if (document.getElementById("Link").value == null) {
    document.getElementById("display-link").innerHTML = "";
  }

  // company
  let company = document.getElementById("Company").value;
  document.getElementById("display-company").innerHTML = company;
  document.getElementById("Company").value = "";
  // designation
  let designation = document.getElementById("Designation").value;
  document.getElementById("display-designation").innerHTML = designation;
  document.getElementById("Designation").value = "";
  // duration
  let duration = document.getElementById("Duration").value;
  document.getElementById("display-duration").innerHTML = duration;
  document.getElementById("Duration").value = "";
  // description2
  let description2 = document.getElementById("Description2").value;
  document.getElementById("display-description2").innerHTML = description2;
  document.getElementById("Description2").value = "";
}

function handleLeft() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  // write more codes here
}
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  // write more codes here
}
