const acceptButton = document.getElementById("acceptButton");
const declineButton = document.getElementById("declineButton");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const acceptButtonSound = new Audio("audio/yey.mp3");
const declineButtonButtonSound = new Audio("audio/wrong.mp3");

// Event listener for "Maafin" button
acceptButton.addEventListener("click", () => {
    acceptButtonSound.play();
    title.textContent = "Yeey kamu baik banget, ini ada hadiah buat kamu! 🎁"; // Change the title text
    message.textContent = "Terima kasih! ❤️";
    declineButton.style.display = "none"; // Hide the "Nggak Mau" button
    acceptButton.textContent = "Buka Kado"; // Change the button text to "Buka Kado"

    // Remove "Maafin dong 🙏" text if it exists
    const maafinText = document.getElementById("maafinText");
    if (maafinText) {
        maafinText.remove();
    }

    // Change the functionality of the "Buka Kado" button
    acceptButton.addEventListener("click", () => {
        window.open("https://www.tiktok.com/", "_blank"); // Replace with your TikTok video link
    });
});

// Event listener for "Nggak Mau" button
declineButton.addEventListener("click", () => {
    declineButtonButtonSound.play();
    // Reduce the size of the button
    const currentSize = parseFloat(window.getComputedStyle(declineButton).fontSize);
    if (currentSize > 1) {
        declineButton.style.fontSize = `${currentSize - 1}px`;
    } else {
        // Change the button text and functionality
        declineButton.textContent = "Maafin";
        declineButton.style.fontSize = "16px"; // Reset the size
        declineButton.style.backgroundColor = "#4caf50"; // Change to green

        // Create "Maafin dong" text if not already created
        if (!document.getElementById("maafinText")) {
            const maafinText = document.createElement("p");
            maafinText.id = "maafinText";
            maafinText.textContent = "Maafin dong 🙏";
            maafinText.style.color = "#333";
            maafinText.style.fontSize = "16px";
            maafinText.style.marginTop = "10px";

            // Append "Maafin dong" below the buttons
            const buttonsDiv = document.querySelector(".buttons");
            buttonsDiv.parentElement.insertBefore(maafinText, message);
        }

        declineButton.addEventListener("click", () => {
            title.textContent = "Yeey kamu baik banget, ini ada hadiah buat kamu! 🎁"; // Change the title text
            message.textContent = "Terima kasih! ❤️";
            declineButton.style.display = "none"; // Hide "Nggak Mau"
            acceptButton.textContent = "Buka Kado"; // Change to "Buka Kado"

            // Remove "Maafin dong 🙏" text if it exists
            const maafinText = document.getElementById("maafinText");
            if (maafinText) {
                maafinText.remove();
            }

            acceptButton.addEventListener("click", () => {
                window.open("https://vt.tiktok.com/ZS6skW8D1/"); // Replace with your TikTok video link
            });
        });
    }
});
