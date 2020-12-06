function toggleSound(action) {
    if (action === "mute") {
        document.getElementById("mute").classList.add("active");
        document.getElementById("unmute").classList.remove("active");
    } else {
        document.getElementById("mute").classList.remove("active");
        document.getElementById("unmute").classList.add("active");
    }
}

function toogleLHM(action) {
    if (action === "lhm") {
        document.getElementById("lhm").classList.add("active");
        document.getElementById("rhm").classList.remove("active");
    } else {
        document.getElementById("lhm").classList.remove("active");
        document.getElementById("rhm").classList.add("active");
    }
}

// Popup feature
const openSettingButton = document.getElementById("openSettingButton");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

openSettingButton.addEventListener("click", () => {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
