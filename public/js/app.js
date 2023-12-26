//* name check :
let profilUser = prompt('sign-up Or login Or change password')

if (profilUser == 'sign-up') {
    // let askNa = prompt(`enter your name`);
    // while (true) {
    //     if (askNa == "") {
    //         askNa = prompt(`enter your name`);
    //     } else {
    //         break;
    //     }
    // }
    // let removeName = askNa.trim();
    // let removeSpaces = askNa.replace(/\s+/g, "");
    // let lenthName = removeSpaces.split("");
    // let pushName = [];
    // let specialCaracter = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
    // let spechCaracter = specialCaracter.split("")
    // while (true) {
    //     if (removeSpaces.length > 5) {
    //         for (let index = 0; index < spechCaracter.length; index++) {
    //             let element = spechCaracter[index];
    //             if (removeSpaces.includes(element)) {
    //                 break
    //             } else {
    //                 continue
    //             }
    //         }
    //         let splitName = removeName.split(" ");
    //         console.log(`yes`);
    //         for (let index = 0; index < splitName.length; index++) {
    //             let element = splitName[index];
    //             let lowerName = element.toLowerCase()
    //             let second_name = lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
    //             pushName.push(second_name)
    //         }
    //         break
    //     } else {
    //         askNa = prompt(`enter your name`);
    //         removeSpaces = askNa.replace(/\s+/g, "");
    //         removeName = askNa.trim();
    //     }
    // }
    // console.table(pushName);
    // let sec_Name = pushName.join(" ")
    // console.table(sec_Name);

    // let putEmail = prompt('entre your email')
    // console.log(putEmail.trim().toLowerCase());

    let emailUser = prompt('entre your email')
    // if (emailUser.includes(' ')) {
    //     prompt('please entre whitout spaces')
    // }

    while (emailUser.includes(" ") || emailUser.length < 10) {
        emailUser = prompt('entre your email')
        // break;
    }
    
    console.log(emailUser.trim().toLowerCase());
}






