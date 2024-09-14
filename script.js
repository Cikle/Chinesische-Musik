function showContent(sectionId, button) {
    // Alle Content-Sections ausblenden
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Die ausgewählte Section anzeigen
    document.getElementById(sectionId).style.display = 'block';

    // Alle Buttons zurücksetzen
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // Den aktiven Button hervorheben
    button.classList.add('active');
}
function showPopup(instrumentId) {
    document.getElementById(instrumentId + '-popup').style.display = 'flex';
}

function closePopup(instrumentId) {
    document.getElementById(instrumentId + '-popup').style.display = 'none';
}
