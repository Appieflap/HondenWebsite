// JS om banner op te halen
fetch('/shared/banner/banner.html')
.then(response => response.text())
.then(html => {
    document.getElementById('banner-container').innerHTML = html;
})
.catch(error => console.error('Error handeling banner:', error));
