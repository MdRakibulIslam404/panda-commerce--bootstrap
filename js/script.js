//1. change color h2 tags
const titles = document.getElementsByTagName("h2");
for (const title of titles) {
    title.style.color = "lightblue";
};

//2. change bg color backpack section
const backpackBgColor = document.getElementById("backpack");
backpackBgColor.style.backgroundColor = "tomato";
backpackBgColor.style.paddingBottom = "20px";
backpackBgColor.style.borderRadius = "10px";

//3. set border radius 30px with dom
const cardRadius = document.getElementsByClassName("card");
for (const card of cardRadius) {
    card.style.borderRadius = "30px";
}

//4. click any button to console.log some text
function clickToLog() {
    console.log("This is a product");
}

//5. click to remove any button
/* const buttons = document.getElementsByClassName("clickToRemove");
for (const button of buttons) {
    button.addEventListener("click", function (event) {
        event.target.parentNode.removeChild(button); // removeChild(event.target) o deya jabe
    })
}; */

//5.5 click button to remove a card
const btns = document.getElementsByClassName("clickToRemove");
for (const btn of btns) {
    btn.addEventListener("click", function (event) {
        event.target.parentNode.parentNode.style.display = "none";
    })
}

//6. validation to working button
document.getElementById("submit-box").addEventListener("keyup", function (event) {
    const inputValue = event.target.value;

    const submitButton = document.getElementById("submitBtn");

    if (inputValue == "email") {
        submitButton.removeAttribute("disabled");
    }
    else {
        submitButton.setAttribute("disabled", true);
    }
});
const submitButton = document.getElementById("submitBtn").addEventListener("click", function () {
    console.log("Button is working");
});

// 7. mouseenter to change image
const images = document.getElementsByClassName("change-img");
for (const image of images) {
    image.addEventListener("mouseenter", function () {
        image.style.display = "none";
        const img = document.createElement("img");
        img.src = "images/bags/baggKids.jpg";
        img.style.width = "400px";
        image.parentNode.appendChild(img);
    })
};

// 8. double click to color / background change
document.getElementById("subscribe").addEventListener("dblclick", function (event) {
    event.target.style.backgroundColor = "skyblue";
});