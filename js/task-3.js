const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
    const trimmedInput = nameInput.value.trim();
    nameOutput.textContent = trimmedInput || "Anonymous";
});



