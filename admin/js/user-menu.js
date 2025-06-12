window.onload = function () {
    const loggedUserJSON = sessionStorage.getItem("loggedUser");
    if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON);
        const loginMenuItem = document.getElementById("loginMenuItem");
        if (loginMenuItem) {
            loginMenuItem.innerHTML = `
                <a href="#"><i class="fa fa-user"></i> ${user.name}</a>
                <button id="logoutBtn" style="background:none;border:none;cursor:pointer;color:#fff;margin-left:10px;">Đăng xuất</button>
            `;

            const logoutBtn = document.getElementById("logoutBtn");
            logoutBtn.addEventListener("click", () => {
                sessionStorage.removeItem("loggedUser");
                window.location.href = "login.html";
            });
        }
    }
};
