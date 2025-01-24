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
    if (currentSize > 10) {
        // Kurangi ukuran font selama masih lebih besar dari 10px
        declineButton.style.fontSize = `${currentSize - 2}px`;
    } else {
        // Jika tombol terlalu kecil, ubah menjadi tombol "Maafin"
        declineButton.style.display = "none"; // Sembunyikan tombol "Nggak Mau"

        // Ganti tombol "Nggak Mau" dengan tombol "Maafin"
        const maafinButton = document.createElement("button");
        maafinButton.textContent = "Maafin";
        maafinButton.style.fontSize = "16px"; // Ukuran tombol "Maafin"
        maafinButton.style.backgroundColor = "#4caf50"; // Warna tombol "Maafin"
        maafinButton.style.color = "#fff";
        maafinButton.style.padding = "10px 20px";
        maafinButton.style.border = "none";
        maafinButton.style.borderRadius = "5px";
        maafinButton.style.cursor = "pointer";

        // Ganti tombol "Nggak Mau" dengan tombol baru "Maafin"
        const buttonsDiv = document.querySelector(".buttons");
        buttonsDiv.appendChild(maafinButton);

        // Tambahkan teks "Maafin dong" di bawah tombol
        const maafinText = document.createElement("p");
        maafinText.id = "maafinText";
        maafinText.textContent = "Maafin dong 🙏";
        maafinText.style.color = "#333";
        maafinText.style.fontSize = "16px";
        maafinText.style.marginTop = "10px";
        buttonsDiv.parentElement.insertBefore(maafinText, message);

        // Mainkan suara tombol "Maafin"
        maafinButton.addEventListener("click", () => {
            acceptButtonSound.play(); // Suara tombol "Maafin"
            title.textContent = "Yeey kamu baik banget, ini ada hadiah buat kamu! 🎁"; // Ganti teks di atas
            message.textContent = "Terima kasih! 😁";

            // Sembunyikan kedua tombol dan hanya tampilkan tombol "Buka Kado"
            declineButton.style.display = "none"; // Sembunyikan tombol "Nggak Mau"
            maafinButton.style.display = "none"; // Sembunyikan tombol "Maafin"
            maafinText.style.display = "none"; // Sembunyikan teks "Maafin dong"

            // Ganti tombol "Maafin" menjadi "Buka Kado"
            acceptButton.textContent = "Buka Kado";
            acceptButton.addEventListener("click", () => {
                window.open("https://vt.tiktok.com/ZS6skW8D1/", "_blank"); // Link hadiah
            });
        });
    }
});
