// Bước 1: Lấy btn đăng nhập
const btnLogin = document.querySelector(".login-signInButton");

// Bước 3: Lấy các ô input
const inputUserLogin = document.querySelector(".input-login-email");
const inputPasswordLogin = document.querySelector(".input-login-password");
// Bước 2: Viết sự kiện cho btn đăng nhập
btnLogin.addEventListener("click", function(e){
    // Chặn sự kiện mặc định trong form
    e.preventDefault();

    if(inputUserLogin.value === "" || inputPasswordLogin === ""){
        alert("Vui lòng không để trống");
    }else{
        const userLocal = JSON.parse(localStorage.getItem("users"));
        let flag=false
        for(let i = 0; i < userLocal.length; i++ ){
            if(
                userLocal[i].email == inputUserLogin.value &&
                userLocal[i].password == inputPasswordLogin.value
            ){
               flag=true;
                break;
            }else{
               flag=false;
               break;
            }
        }
        if (flag) {
            alert("Đăng nhập thành công");
            window.location.href="index.html";
        }else{
            alert("Đăng nhập thất bại");
        }
    }
});