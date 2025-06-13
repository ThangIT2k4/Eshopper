const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// 1. Tạo tài khoản mặc định nếu chưa tồn tại
function initializeDefaultAccounts() {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    const defaultAccounts = [
        { name: "Trần Duy Khánh", email: "admin@example.com", password: "admin123", role: "admin" },
        { name: "Nông Đức Thịnh", email: "user@example.com", password: "user123", role: "user" }
    ];

    let added = false;

    defaultAccounts.forEach(defaultUser => {
        if (!existingUsers.some(u => u.email === defaultUser.email)) {
            existingUsers.push(defaultUser);
            added = true;
        }
    });

    if (added) {
        localStorage.setItem("users", JSON.stringify(existingUsers));
    }
}
initializeDefaultAccounts();

function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// 2. Đăng ký
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = registerForm.name.value.trim();
        const email = registerForm.email.value.trim();
        const password = registerForm.password.value;

        const users = getUsers();

        if (users.some(u => u.email === email)) {
            alert("Email đã được sử dụng.");
            return;
        }

        const newUser = {
            name,
            email,
            password,
            role: "user"
        };

        users.push(newUser);
        saveUsers(users);

        alert("Đăng ký thành công! Mời bạn đăng nhập.");
        registerForm.reset();
        container.classList.remove("right-panel-active"); // Chuyển về form đăng nhập
    });
}

// 3. Đăng nhập
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = loginForm.email.value.trim();
        const password = loginForm.password.value;

        const users = getUsers();
        const foundUser = users.find(u => u.email === email && u.password === password);

        if (foundUser) {
            sessionStorage.setItem("loggedUser", JSON.stringify(foundUser));
            alert(`Chào ${foundUser.name}!`);

            if (foundUser.role === "admin") {
                window.location.href = "admin/pages/charts/chartjs.html";
            } else {
                window.location.href = "index.html";
            }
        } else {
            alert("Sai email hoặc mật khẩu.");
        }
    });
}

// 4. Tự động đăng nhập lại nếu chưa đóng tab (sessionStorage)
window.onload = function () {
    // Kiểm tra user đăng nhập trong sessionStorage
    const loggedUserJSON = sessionStorage.getItem("loggedUser");
    if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON);
        const loginMenuItem = document.getElementById("loginMenuItem");
        if (loginMenuItem) {
            // Thay đổi nội dung <li> thành tên user + nút đăng xuất
            loginMenuItem.innerHTML = `
                <a href="#"><i class="fa fa-user"></i> ${user.name}</a>
                <button id="logoutBtn" style="background:none;border:none;cursor:pointer;color:#fff;margin-left:10px;">Đăng xuất</button>
            `;

            // Xử lý sự kiện đăng xuất
            const logoutBtn = document.getElementById("logoutBtn");
            logoutBtn.addEventListener("click", () => {
                sessionStorage.removeItem("loggedUser");
                // Reload trang hoặc chuyển hướng về trang login
                window.location.href = "login.html";
            });
        }
    }
    //
    const loggedUser = sessionStorage.getItem("loggedUser");
    if (loggedUser) {
        const user = JSON.parse(loggedUser);
        alert(`Bạn đã đăng nhập với tài khoản ${user.email} (vai trò: ${user.role})`);
        if (user.role === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "user.html";
        }
    }
};
