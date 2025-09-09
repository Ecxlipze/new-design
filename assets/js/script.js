function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}

function toggleDropdown(element) {
    element.nextElementSibling.classList.toggle('hidden');
}

function changeLanguage(lang, flagSrc) {
    document.getElementById('selected-lang').textContent = lang;
    document.getElementById('selected-flag').src = flagSrc;
    document.getElementById('selected-flag').alt = lang;
    // Add actual language switch logic here, e.g., load translations or redirect to /?lang=lang
    // For now, it just updates the UI
    // Close the dropdown
    const dropdown = document.querySelector('.dropdown-menu');
    if (dropdown) dropdown.classList.add('hidden');
}

function toggleSearch() {
    document.getElementById('search-menu').classList.toggle('hidden');
}