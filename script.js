
document.addEventListener("DOMContentLoaded", () => {
    const txtInput = document.querySelector(".inputs input"),
      checkBtn = document.querySelector(".inputs button"),
      infoTxt = document.querySelector(".info");
let filterInput = "";

checkBtn.addEventListener("click", () => {
    let reversedInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if (filterInput !== reversedInput) {
        infoTxt.innerHTML = `No, '<span>${txtInput.value}</span>' is not a palindrome`;
    } else {
        infoTxt.innerHTML = `Yes, '<span>${txtInput.value}</span>' is a palindrome`;
    }
});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
        checkBtn.classList.add("active");
    } else {
        checkBtn.classList.remove("active");
        infoTxt.style.display = "none";
    }
});
});




