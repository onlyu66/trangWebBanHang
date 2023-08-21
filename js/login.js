// Bước 1: Lấy btn đăng nhập
const btnLogin = document.querySelector(".login-signInButton");
// const login = document.querySelector("#login");
// const signUp = document.querySelector("#sign-up");
// console.log(login);
// Bước 3: Lấy các ô input
const inputUserLogin = document.querySelector(".input-login-account");
const inputPasswordLogin = document.querySelector(".input-login-password");
// Bước 2: Viết sự kiện cho btn đăng nhập
btnLogin.addEventListener("click", function (e) {
  // Chặn sự kiện mặc định trong form
  e.preventDefault();
  const userLocal = JSON.parse(localStorage.getItem("users"));
  if (inputUserLogin.value === "" || inputPasswordLogin === "") {
    alert("Vui lòng không để trống");
  } else {
    let flag = false;
    for (let i = 0; i < userLocal.length; i++) {
      if (
        (userLocal[i].account === inputUserLogin.value || userLocal[i].email === inputUserLogin.value) &&
        userLocal[i].password === inputPasswordLogin.value
      ) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    if (flag) {
      alert("Đăng nhập thành công");
      if (inputUserLogin.value==="admin" && inputPasswordLogin.value==="admin") {
        window.location.href = "adminProducts.html";
      } else {
        window.location.href = "index.html";
      }
    } else {
      alert("Đăng nhập thất bại");
    }
  }
});
// login.addEventListener("click", function () {
//   document.login.style.display="none";
// });