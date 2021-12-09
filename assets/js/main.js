// Change page product

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".product__tab-item");
const panes = $$(".product__tab-pane");

const tabActive = $(".product__tab-item.active");
const line = $(".product__tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function() {
        $(".product__tab-item.active").classList.remove("active");
        $(".product__tab-pane.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
    };
});

// button register, login
const registerBtn = $(".js-header__register-link");
const registerForm = $(".js-auth-form-register");

const loginBtn = $(".js-header__login-link");
const loginForm = $(".js-auth-form-login");

const backRegisterBtn = $(".js-auth-form__control-back--register");
const backLoginBtn = $(".js-auth-form__control-back--login");
const modal = $('.js-modal');

const switchToLoginBtn = $('.switch-btn__to-login-form');
const switchToRegisterBtn = $('.switch-btn__to-register-form');


// click mở form đăng ký
function showRegisterForm() {
    loginForm.classList.remove('open');

    modal.classList.add('open');
    registerForm.classList.add('open');
}

// click mở form login
function showLoginForm() {
    registerForm.classList.remove('open');

    modal.classList.add('open');
    loginForm.classList.add('open');
}

// nút trở lại (đóng form)
function closeForm() {
    modal.classList.remove('open');
}

// click chỉ đến nút đăng ký trên header
registerBtn.addEventListener('click', showRegisterForm);

// click chỉ đến nút đăng nhập trên header
loginBtn.addEventListener('click', showLoginForm);

// click đóng from đăng ký
backRegisterBtn.addEventListener('click', closeForm);

// click đóng from đăng nhập
backLoginBtn.addEventListener('click', closeForm);

// click chuyển từ form đăng ký đến đăng nhập
function switchToLoginForm() {
    registerForm.classList.remove('open');

    loginForm.classList.add('open');
}

// click chuyển từ form đăng nhập đến đăng ký
function switchToRegisterForm() {
    loginForm.classList.remove('open');

    registerForm.classList.add('open');
}

switchToLoginBtn.addEventListener('click', switchToLoginForm);

switchToRegisterBtn.addEventListener('click', switchToRegisterForm);