// JS om navbar op te halen
fetch('/shared/nav.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#nav");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })
