const inputPass = document.getElementById("inputPass");
const btnVisiblility = document.getElementById("btnVisiblility");

btnVisiblility.addEventListener("click", () => {
  if (inputPass.type == "password") {
    inputPass.type = "text";
    btnVisiblility.children[0].textContent = "visibility_off";
  } else {
    inputPass.type = "password";
    btnVisiblility.children[0].textContent = "visibility";
  }
});
