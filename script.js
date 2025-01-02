
function toggleArticle(button) {
    const fullText = button.previousElementSibling;
    fullText.classList.toggle('hidden');
    button.textContent = fullText.classList.contains('hidden') ? 'Читати далі' : 'Приховати';
}