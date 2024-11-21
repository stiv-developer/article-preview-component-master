
const links = document.getElementById("links2");
const bg_img = document.getElementById("bg-img");
const icon_img = document.getElementById("icon-img");

function myFunction() {

    if (links.style.display === "none" || links.style.display === "") {
        links.style.display = "flex";
        bg_img.classList.add("change-bg");
        icon_img.classList.add("change-icon");
    } else {
        links.style.display = "none"
        bg_img.classList.remove("change-bg");
        icon_img.classList.remove("change-icon");
    }
}