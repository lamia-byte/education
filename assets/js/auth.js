document.addEventListener("DOMContentLoaded", () => {
    const storageKey = "Users";
    const activeUserKey = "ActiveUser";

    const getUsers = () => {
        try {
            return JSON.parse(localStorage.getItem(storageKey)) || [];
        } catch (error) {
            return [];
        }
    };

    const saveUsers = (users) => {
        localStorage.setItem(storageKey, JSON.stringify(users));
    };

    const showMessage = (form, text, type = "success") => {
        const message = form.querySelector(".auth-message");
        if (!message) return;

        message.textContent = text;
        message.classList.toggle("error", type === "error");
    };

    const setFieldState = (field, hasError) => {
        if (field) {
            field.classList.toggle("error", hasError);
        }
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    document.querySelectorAll(".password-toggle").forEach((button) => {
        button.addEventListener("click", () => {
            const input = button.parentElement.querySelector("input");
            const icon = button.querySelector("i");
            if (!input || !icon) return;

            const shouldShow = input.type === "password";
            input.type = shouldShow ? "text" : "password";
            icon.className = shouldShow ? "fa-regular fa-eye-slash" : "fa-regular fa-eye";
            button.setAttribute("aria-label", shouldShow ? "Masquer le mot de passe" : "Afficher le mot de passe");
        });
    });

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(registerForm);
            const firstName = formData.get("firstName").trim();
            const lastName = formData.get("lastName").trim();
            const email = formData.get("email").trim().toLowerCase();
            const phone = formData.get("phone").trim();
            const language = formData.get("formation");
            const password = formData.get("password");
            const confirmPassword = formData.get("confirmPassword");
            const terms = formData.get("terms");

            const requiredFields = registerForm.querySelectorAll("input[required], select[required]");
            let hasError = false;

            requiredFields.forEach((field) => {
                const fieldHasError = !field.value.trim();
                setFieldState(field, fieldHasError);
                if (fieldHasError) hasError = true;
            });

            if (hasError) {
                showMessage(registerForm, "Veuillez remplir tous les champs.", "error");
                return;
            }

            if (!isValidEmail(email)) {
                setFieldState(registerForm.querySelector("#registerEmail"), true);
                showMessage(registerForm, "Veuillez entrer un email valide.", "error");
                return;
            }

            if (password.length < 6) {
                setFieldState(registerForm.querySelector("#registerPassword"), true);
                showMessage(registerForm, "Le mot de passe doit contenir au moins 6 caracteres.", "error");
                return;
            }

            if (password !== confirmPassword) {
                setFieldState(registerForm.querySelector("#confirmPassword"), true);
                showMessage(registerForm, "Les mots de passe ne correspondent pas.", "error");
                return;
            }

            if (!terms) {
                showMessage(registerForm, "Veuillez accepter les conditions d'inscription.", "error");
                return;
            }

            const users = getUsers();
            const userExists = users.some((user) => user.email === email);

            if (userExists) {
                showMessage(registerForm, "Un compte existe deja avec cet email.", "error");
                return;
            }

            users.push({
                firstName,
                lastName,
                email,
                phone,
                language,
                password,
                createdAt: new Date().toISOString()
            });

            saveUsers(users);
            localStorage.setItem(activeUserKey, JSON.stringify({ firstName, lastName, email, language }));
            showMessage(registerForm, "Compte cree avec succes. Redirection vers la connexion...");
            registerForm.reset();

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1200);
        });
    }

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(loginForm);
            const email = formData.get("email").trim().toLowerCase();
            const password = formData.get("password");
            const emailInput = loginForm.querySelector("#loginEmail");
            const passwordInput = loginForm.querySelector("#loginPassword");

            setFieldState(emailInput, !email);
            setFieldState(passwordInput, !password);

            if (!email || !password) {
                showMessage(loginForm, "Veuillez remplir votre email et votre mot de passe.", "error");
                return;
            }

            if (!isValidEmail(email)) {
                setFieldState(emailInput, true);
                showMessage(loginForm, "Veuillez entrer un email valide.", "error");
                return;
            }

            const users = getUsers();
            const user = users.find((item) => item.email === email && item.password === password);

            if (!user) {
                showMessage(loginForm, "Email ou mot de passe incorrect.", "error");
                return;
            }

            localStorage.setItem(activeUserKey, JSON.stringify({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                language: user.language
            }));

            showMessage(loginForm, `Bienvenue ${user.firstName}. Connexion reussie.`);
            loginForm.reset();
        });
    }
});
