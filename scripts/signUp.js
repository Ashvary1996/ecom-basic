document.getElementById("submit").addEventListener("click", save);

let formData = JSON.parse(localStorage.getItem("formData")) || [];

console.log(formData);
function save(e) {
  e.preventDefault();
  let obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    phone: document.getElementById("phonenumber").value,
  };

  if (obj.name.length == 0) {
    document.getElementById("submit").Disabled, alert("Please Fill Name");
  } else if (obj.password.length == 0) {
    document.getElementById("submit").Disabled, alert("Please Fill Password");
  } else {
    formData.push(obj);
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location = "/signIn.html";
  }
}
