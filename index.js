let usernameInput = document.getElementById("bd-input")
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")
let pass3 = document.getElementById("pass3")
// let passAn = [3,5,0]
// let passPhuc = [9,2,0]
// let passTaho = [5,6,0]

function checkPass(num1, num2, num3) {
    if (pass1.value == num1 && pass2.value == num2 && pass3.value == num3) {
        return true
    } else {
        return false
    }
}

function submit() {
    if (usernameInput.value == "03/03/2006") {
        if (checkPass("3", "5", "0")) {
            window.open("./an.html")
        } else {
            document.getElementById("error").innerHTML = "Sai mật khẩu rồi! Ở ngoài đi bạn:))"
        }
    } else if (usernameInput.value == "04/03/2005") {
        if (checkPass("5", "6", "0")) {
            window.open("./phuc.html")
        } else {
            document.getElementById("error").innerHTML = "Sai mật khẩu rồi! Ở ngoài đi bạn:))"
        }
    } else if (usernameInput.value == "09/03/2005") {
        if (checkPass("9", "2", "0")) {
            window.open("./thao.html")
        } else {
            document.getElementById("error").innerHTML = "Sai mật khẩu rồi! Ở ngoài đi bạn:))"
        }
    } else if (usernameInput.value == "") {
        document.getElementById("error2").innerHTML = "Chưa nhập ngày sinh mà đòi vào:))"
    } else if (usernameInput.value !== "03/03/2006" && usernameInput.value !== "04/03/2006" && usernameInput.value !== "09/03/2006") {
        document.getElementById("error2").innerHTML = "Chưa đến ngày sinh nhật của bạn đâu:))"
    }
    else if (pass1.value == "" || pass2.value == "" || pass3.value == "") {
        document.getElementById("error").innerHTML = "Chưa điền hết mật khẩu mà đòi vào:))"
    }




    // switch (usernameInput.value){
    //     case "03/03/2006":
    //         if (checkPass(3,5,0)) {
    //             window.open("./loichuc.html")
    //         } else {
    //             document.getElementById("error").innerHTML = "Sai mật khẩu rồi! Ở ngoài đi bạn:))"
    //         }
    //         break
    //     case "04/03/2005":
    //         if (checkPass(9,2,0)) {
    //             window.open("./loichuc.html")
    //         } else {
    //             document.getElementById("error").innerHTML = "Sai mật khẩu rồi! Ở ngoài đi bạn:))"
    //         }
    //         break
    //     case "09/03/2005":
    //         if (checkPass(5,6,0)) {
    //             window.open("./loichuc.html")
    //         } else {
    //             document.getElementById("error").innerHTML = "Sai mật khẩu rồi! Ở ngoài đi bạn:))"
    //         }
    //         break
    //     case "":
    //         document.getElementById("error2").innerHTML = "Chưa nhập ngày sinh mà đòi vào:))"
}






