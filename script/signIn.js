document.querySelector("form").addEventListener("submit",signFun)
    var signinList = JSON.parse(localStorage.getItem("signInData")) || [];
    function signFun(){
        event.preventDefault();

        var email = document.querySelector("#email").value;
        var pass = document.querySelector("#pass").value;
        // console.log(name,email,pass)
        var signObj={
            userEmail:email,
            userPass:pass
        }
        // console.log(signObj)
        signinList.push(signObj);
         console.log(signinList)

        localStorage.setItem("signInData",JSON.stringify(signinList))
    }