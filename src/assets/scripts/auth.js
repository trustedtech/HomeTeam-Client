document.getElementById("login-submit").addEventListener("click", function(){
    const username = document.getElementById("login-username").value();
    const password = document.getElementById("login-password").value();
    const login = { username, password };

    console.log(login);
});