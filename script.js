const openBtn = document.getElementById("openBtn");
const inviteScreen = document.getElementById("inviteScreen");
const mainScreen = document.getElementById("mainScreen");

openBtn.addEventListener("click", () => {

    inviteScreen.style.transform = "scale(1.2)";
    inviteScreen.style.opacity = "0";

    setTimeout(() => {
        inviteScreen.classList.remove("active");
        mainScreen.classList.add("active");
    }, 600);
});

// FLOATING EMOJIS (ONLY MAIN SCREEN)
const emojis = ["❤️", "🥰"];
const heartsContainer = document.querySelector("#mainScreen .hearts");

let emojiInterval = null;

function startEmojis() {
    if (emojiInterval) return;

    emojiInterval = setInterval(() => {
        const emoji = document.createElement("span");
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.fontSize = (Math.random() * 14 + 12) + "px";
        emoji.style.animationDuration = (Math.random() * 3 + 4) + "s";

        heartsContainer.appendChild(emoji);

        setTimeout(() => emoji.remove(), 7000);

    }, 800);
}

openBtn.addEventListener("click", () => {

    inviteScreen.style.transform = "scale(1.1)";
    inviteScreen.style.opacity = "0";

    setTimeout(() => {
        inviteScreen.classList.remove("active");
        mainScreen.classList.add("active");

        startEmojis(); // ✅ start AFTER screen visible

    }, 600);
});

// run continuously
setInterval(startEmojis, 400);