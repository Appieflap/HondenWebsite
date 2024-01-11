// JS om banner op te halen
fetch('/shared/banner/banner.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#banner");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })
