function showSurprise() {
    // Hide the button
    document.getElementById('gift-btn').style.display = 'none';
    
    // Show the hidden message box
    const messageBox = document.getElementById('message-box');
    messageBox.classList.remove('hidden');
    
    // Simple alert for extra effect
    alert("Happy Birthday Sweetheart! 💖");

    // Dynamic background change
    document.body.style.backgroundColor = "#ffb6c1";
}

// Console wish (just for fun)
console.log("%cHappy Birthday to the most special person! 🎂✨", "color: #d63384; font-size: 20px; font-weight: bold;");
