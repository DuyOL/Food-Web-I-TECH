// Khi nhấn vào đăng nhập font sẽ hiện lên
document.getElementById("loginLink").addEventListener("click", function (event) {
    event.preventDefault();
    var loginFolder = document.getElementById("loginFolder");

    if (loginFolder.style.display === "none") {
        loginFolder.style.display = "block";
    } else {
        loginFolder.style.display = "none";
    }
});
// Đóng Đăng kí
document.getElementById("closeButton").addEventListener("click", function () {
    document.getElementById("loginFolder").style.display = "none";
});

// Khi nhấn vào nút Đăng kí font đăng kí hiện lên
document.getElementById('registerButton').addEventListener('click', function () {
    var loginFolder = document.getElementById('loginFolder');
    var registerFolder = document.getElementById('registerFolder');
    // Ẩn font đăng nhập
    loginFolder.style.display = 'none';
    // Hiện font đăng kí
    registerFolder.style.display = 'block';
});

