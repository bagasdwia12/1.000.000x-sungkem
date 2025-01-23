function displayEmotes() {
    const emoteContainer = document.getElementById("emoteContainer");
    const emote = "🙏";
    const totalEmotes = 1000000;

    let emoteHTML = '';
    for (let i = 0; i < totalEmotes; i++) {
        emoteHTML += `<p class="emote">${emote}</p>`;
    }

    emoteContainer.innerHTML = emoteHTML;
}

// Call the function to display 1000 emotes
displayEmotes();
