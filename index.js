let usernameInput = document.getElementById("bd-input")
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")
let pass3 = document.getElementById("pass3")
// let passAn = [3,5,0]
// let passPhuc = [9,2,0]
// let passTaho = [5,6,0]

function checkPass(num1, num2, num3) {
    if (pass1.value == num1 && pass2.value == num2 &&  pass3.value  == num3) {
        return true
    } else {
        return false
    }
}

function submit(){
    switch (usernameInput.value){
        case "3/3/2006":
            if (checkPass(3,5,0)) {
                window.open("./loichuc.html")
            } else {
                document.getElementById("error").innerHTML = "Sai mật khẩu rồi! Ở ngoài đi bạn:))"
            }
        case "4/3/2005":
            if (checkPass(9,2,0)) {
                window.open("./loichuc.html")
            } else {
                document.getElementById("error").innerHTML = "Sai mật khẩu rồi! Ở ngoài đi bạn:))"
            }
        case "9/3/2005":
            if (checkPass(5,6,0)) {
                window.open("./loichuc.html")
            } else {
                document.getElementById("error").innerHTML = "Sai mật khẩu rồi! Ở ngoài đi bạn:))"
            }
}
}





