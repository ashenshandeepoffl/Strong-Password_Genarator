function generatePasswords() {
    const length = document.getElementById("length").value;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const beginWithLetter = document.getElementById("beginWithLetter").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const noSimilarChars = document.getElementById("noSimilarChars").checked;
    const noDuplicateChars = document.getElementById("noDuplicateChars").checked;
    const noSequentialChars = document.getElementById("noSequentialChars").checked;
    const autoGenerate = document.getElementById("autoGenerate").checked;
    const quantity = document.getElementById("quantity").value;

    const passwordTable = document.getElementById("passwordTable");
    const tbody = passwordTable.querySelector("tbody");
    tbody.innerHTML = ""; // Clear previous passwords

    for (let i = 0; i < quantity; i++) {
        const password = generatePassword(length, includeNumbers, includeLowercase, includeUppercase, beginWithLetter, includeSymbols, noSimilarChars, noDuplicateChars, noSequentialChars);
        const row = tbody.insertRow();
        const cell = row.insertCell(0);
        cell.textContent = password;
    }

    if (autoGenerate) {
        // If autoGenerate is checked, reset the checkbox for the next call
        document.getElementById("autoGenerate").checked = false;
    }
}

function generatePassword(length, includeNumbers, includeLowercase, includeUppercase, beginWithLetter, includeSymbols, noSimilarChars, noDuplicateChars, noSequentialChars) {
    // Password generation logic goes here (you can use any algorithm or library)
    // For simplicity, let's use a basic example here
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let password = "";
    let lastChar = "";

    while (password.length < length) {
        let randomChar = chars[Math.floor(Math.random() * chars.length)];

        if (noSimilarChars) {
            // Ensure the character is not similar to the last one
            while (randomChar === lastChar) {
                randomChar = chars[Math.floor(Math.random() * chars.length)];
            }
        }

        password += randomChar;
        lastChar = randomChar;
    }

    return password;
}