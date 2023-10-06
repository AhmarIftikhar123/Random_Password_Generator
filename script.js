const generate_btn = document.getElementById("generate_btn");

const password_input = document.getElementById("password");

const copy_btn = document.querySelector("section img");

generate_btn.addEventListener("click", generate_password);

copy_btn.addEventListener("click", Copy_Clipboard);

function generate_password() {
  const length = 12;
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";
  let password = "";
  for (let i = 0; i < length; i++) {
    let password_index = Math.floor(Math.random() * charset.length);
    password += charset[password_index];
  }
  password_input.value = password;
}

function Copy_Clipboard() {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(password_input.value)
      .then(() => {
        console.log("Password copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying to clipboard:", err);
      });
  } else {
    alert("Clipboard API not supported in this environment");
  }
}
