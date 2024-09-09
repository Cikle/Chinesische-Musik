function showContent(sectionId) {
    // Alle Content-Sections ausblenden
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Die ausgewählte Section anzeigen
    document.getElementById(sectionId).style.display = 'block';
}
