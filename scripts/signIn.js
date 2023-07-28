console.log("Sign In Script");

document.getElementById("c_login").addEventListener("click", checkData);

let formData = JSON.parse(localStorage.getItem("formData")) || [];
let cacheUsername = JSON.parse(localStorage.getItem("cacheUsername")) || [];

function checkData(e) {
  e.preventDefault();
  console.log("Verifing..");
  for (i = 0; i < formData.length; i++) {
    let check_name = document.getElementById("login_name").value;
    let check_password = document.getElementById("login_password").value;

    if (
      check_name == formData[i].name &&
      check_password == formData[i].password
    ) {
      console.log("Successfully Verified");
      window.location = "./home.html";
      ////////////////////////////

      function cun() {
        let cuobj = {
          cacheUsername: check_name,
        };
        cacheUsername.unshift(cuobj);
        localStorage.setItem("cacheUsername", JSON.stringify(cacheUsername));
      }
      cun();
    } else {
      document.querySelector(".red").style.display = "flex";
      console.log("Verification Failed");
    }
  }
  document.getElementById("login_name").value = null;
  document.getElementById("login_password").value = null;
}
