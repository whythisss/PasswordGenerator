let words = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()`~-_=+;:?/>.<,";
let text = document.getElementById("input");

function createPassword(){
    let len = 12;
    let password = '';
    for (let i = 0; i < len; i++) {
        let rndIdx = Math.floor((Math.random() * (words.length - 1)) + 1);
        password += words[rndIdx];
    }
    console.log(password);

    text.placeholder = password;
    text.style.fontWeight = "bold";

    navigator.clipboard.writeText(password);
}
