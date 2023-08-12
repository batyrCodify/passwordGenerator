function generatePassword(length, excludeUppercase, digitsOnly) {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (!excludeUppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (digitsOnly) {
        charset = "0123456789";
    }
    
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const passwordDisplay = document.getElementById("passwordDisplay");
const passwordLengthInput = document.getElementById("passwordLength");
const excludeUppercaseCheckbox = document.getElementById("excludeUppercase");
const digitsOnlyCheckbox = document.getElementById("digitsOnly");

function generateAndDisplayPassword() {
    const passwordLength = parseInt(passwordLengthInput.value, 10);
    const excludeUppercase = excludeUppercaseCheckbox.checked;
    const digitsOnly = digitsOnlyCheckbox.checked;

    const password = generatePassword(passwordLength, excludeUppercase, digitsOnly);
    passwordDisplay.textContent = `Сгенерированный пароль: ${password}`;
    copyButton.disabled = false;
}

generateButton.addEventListener("click", generateAndDisplayPassword);

copyButton.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    textArea.value = passwordDisplay.textContent.split(": ")[1];
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
});
