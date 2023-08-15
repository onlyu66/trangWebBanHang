// Bước 1: Lấy ra btn đăng ký
const btnRegister = document.querySelector(".signUp-signInButton");
// console.log(btnRegister);
// Bước 3: Lâý các ô input ra
const inputUserRegister = document.querySelector(".input-signUp-email");
const inputPasswordRegister = document.querySelector(".input-signUp-password");

// Bước 2: Viết sự kiện cho btnRegister
btnRegister.addEventListener("click", function(e){
    e.preventDefault();
    // validate cho các ô input
    if(inputUserRegister.value === "" || inputPasswordRegister.value === ""){
        alert("Vui lòng không để trống");
    }else{
        // Lấy dữ liệu ô input và thêm vào localStorage
        const user = {
            email: inputUserRegister.value,
            password: inputPasswordRegister.value
        };

        // const updateUser
        // Thêm dữ liệu user vào localStorage
        localStorage.setItem("users", JSON.stringify(user));
        alert("Đăng ký thành công");
        window.location.href="login.html";
    }
})
