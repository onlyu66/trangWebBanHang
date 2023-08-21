// Bước 1: Lấy ra btn đăng ký
const btnRegister = document.querySelector(".signUp-signInButton");
// console.log(btnRegister);
// Bước 3: Lâý các ô input ra
const inputUserRegister = document.querySelector(".input-signUp-account");
const inputEmailRegister = document.querySelector(".input-signUp-email");
const inputPasswordRegister = document.querySelector(".input-signUp-password");
const inputConfirmPasswordRegister = document.querySelector(".input-confirm-signUp-password");
const userLocal = JSON.parse(localStorage.getItem("users")) || [];
// Bước 2: Viết sự kiện cho btnRegister
btnRegister.addEventListener("click", function (e) {
  e.preventDefault();
  // validate cho các ô input
  if (inputUserRegister.value === "" || inputPasswordRegister.value === "") {
    alert("Vui lòng không để trống");
  } else if(inputPasswordRegister.value !== inputConfirmPasswordRegister.value){
    alert("Mật khâủ nhập lại phải trùng với mật khẩu đã nhập");
  } else {
    // Lấy dữ liệu ô input và thêm vào localStorage
    const user = {
      account: inputUserRegister.value,
      email: inputEmailRegister.value,
      password: inputPasswordRegister.value
    };

    const updateUser = [...userLocal, user];
    // console.log(updateUser);

    // Thêm dữ liệu user vào localStorage
    localStorage.setItem("users", JSON.stringify(updateUser));
    alert("Đăng ký thành công");
    window.location.href = "login.html";
  }
});
