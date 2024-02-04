// JS om footer op te halen
fetch('/shared/footer/footer.html')
.then(response => response.text())
.then(html => {
    document.getElementById('footer-container').innerHTML = html;
})
.catch(error => console.error('Error handeling footer:', error));
