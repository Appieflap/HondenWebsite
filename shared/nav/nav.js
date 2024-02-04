// JS om navbar op te halen
fetch('/shared/nav/nav.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navbar-container').innerHTML = html;

        // After loading the content, run the script to make the navigation bar sticky
        fixNavbarOnScroll();
    })
    .catch(error => console.error('Error handeling navbar:', error));

function fixNavbarOnScroll() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function handleScroll() {
        if (window.scrollY >= sticky) {
            navbar.classList.add("fixed-nav");
            window.removeEventListener('scroll', handleScroll);
            window.addEventListener('scroll', unstickNavbar);
        }
    }

    function unstickNavbar() {
        if (window.scrollY < sticky) {
            navbar.classList.remove("fixed-nav");
            window.removeEventListener('scroll', unstickNavbar);
            window.addEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
}
