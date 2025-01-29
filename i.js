AOS.init({ duration: 1000 });

// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Contact Modal Logic
function showContact() {
    document.getElementById('contactModal').style.display = "block";
}

function hideContact() {
    document.getElementById('contactModal').style.display = "none";
}

function revealContact() {
    const email = document.getElementById('userEmail').value;
    if (validateEmail(email)) {
        document.getElementById('myContacts').style.display = "block";
    }
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
