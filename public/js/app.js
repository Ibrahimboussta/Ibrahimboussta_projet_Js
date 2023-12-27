let dataBase = [
    {
        askNa: "med",
        emailUser: "ibrahimboussta@gmail.com",
        ageUser: 20,
        passUser: "password",
    }

];
console.table(dataBase);


//* name check :
let profilUser = prompt('sign-up Or login Or change password')

if (profilUser == 'sign-up') {
    let askNa = prompt(`enter your name`);

    while (true || askNa == 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) {
        if (askNa == "") {
            askNa = prompt(`enter your name`);
        } else {
            break;
        }
    }
    let removeName = askNa.trim();
    let removeSpaces = askNa.replace(/\s+/g, "");
    let lenthName = removeSpaces.split("");
    let pushName = [];
    let specialCaracter = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
    let spechCaracter = specialCaracter.split("")
    while (true) {
        if (removeSpaces.length > 5) {
            for (let index = 0; index < spechCaracter.length; index++) {
                let element = spechCaracter[index];
                if (removeSpaces.includes(element)) {
                    break
                } else {
                    continue
                }
            }
            let splitName = removeName.split(" ");
            console.log(`yes`);
            for (let index = 0; index < splitName.length; index++) {
                let element = splitName[index];
                let lowerName = element.toLowerCase()
                let second_name = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
                pushName.push(second_name)
            }
            break
        } else {
            askNa = prompt(`enter your name`);
            removeSpaces = askNa.replace(/\s+/g, "");
            removeName = askNa.trim();
        }
    }
    // console.table(pushName);
    let sec_Name = pushName.join(" ")
    console.table(sec_Name);

    // let putEmail = prompt('entre your email')
    // console.log(putEmail.trim().toLowerCase());
    //* email checked : 

    let emailUser = prompt('entre your email')

    while (emailUser.includes(" ") || emailUser.length < 10 || emailUser.includes("@") == false) {
        emailUser = prompt('entre your email again')
        // break;
    }

    for (let index = 0; index < dataBase.length; index++) {
        const element = dataBase[index];
        while (askNa == element.askNa) {
            askNa = prompt(" the  email should be unique")
        }
    }

    let tableau = emailUser.trim().toLowerCase()
    // console.table(tableau);

    // //* age checked : 

    let ageUser = prompt('please entre your age')
    // let alphaExp = /^[0-9a-zA-Z]+$/;
    while ((ageUser.includes(" ")) || (ageUser == "") || (ageUser.length >= 3) || (ageUser == 0) || (isNaN(ageUser))) {
        ageUser = prompt('try again')
        // if (isNaN(ageUser)) {
        //     ageUser = prompt('try again')
        // }
    }

    // console.log(Number(ageUser.trim()));

    let passUser = prompt('entre password')
    // let syboleUser = ["@", "#", "-", "+", "*", "/"]

    while ((passUser.includes(" ")) || (passUser.length <= 7) || passUser.includes("@" || "#" || "-" || "+" || "*" || "/") == false) {
        passUser = prompt('entre your password without spaces')
        // break;
    }

    //* pass confirm : 
    let passConfirm = prompt('Please confirm your password')
    let syboleConfirm = ["@", "#", "-", "+", "*", "/"]

    while ((passConfirm.includes(" ")) || (passConfirm.length <= 7)) {
        passConfirm = prompt('entre your password without spaces')
        // break;
    }

    if (passUser != passConfirm) {
        alert('you wrong please entre a correct password')
    }

    // while (syboleUser.test(passUser)) {
    //     alert('done')
    // }

    // console.log(passConfirm.trim());

    const createUserProfile = (name, email, age, password) => {
        let profile = {
            askNa: name,
            emailUser: email,
            ageUser: age,
            passUser: password
        }

        dataBase.push(profile)

        console.table(dataBase)
    }

    createUserProfile(askNa, emailUser, Number(ageUser), passUser)

} else if (profilUser == 'login') {
    let currentUser = [];

    let login = (email, password) => {
        let userFilter = dataBase.filter(element => (element.emailUser == email) && (element.passUser == password))
        console.log(userFilter);

        if (currentUser.length == 0 && userFilter) {
            currentUser.push(userFilter)
            console.log("you are connected");
        } else {
            alert("the provided info does not match our")
        }
    }

    let loginUser = prompt("Insert your email to login")
    while (loginUser.length == 0 || loginUser.includes("@") == false) {
        loginUser = prompt("email cannot be empty  Insert your username to login")
    }
    let loginPassword = prompt("Insert your password to login")
    while (loginPassword.length == 0) {
        loginPassword = prompt("password cannot be empty Insert your password to login")
    }

    // currentUser.push(dataBase)
    console.log(currentUser);
    login(loginUser, loginPassword)
    
}else{
    let emailCheck = prompt('Please entre your existing email')
    let emailFilter = dataBase.filter(element => (element.emailUser == emailCheck))
        console.log(emailFilter);
}