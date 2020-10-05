var tp = window.outerWidth;
(() => {
    setInterval(verifica, 100);
})()

function abc(b) {
    let a = document.getElementById('pl');
    if (b !== '') {
        a.style.visibility = 'visible';
        a.src = `https://www.youtube.com/embed/${b}?autoplay=1`;
    }
    else {
        alert("Nenhum código inserido!");
    }
}

function tamanho(c) {
    let t = document.getElementById('vidId');
    if (c < 600) {
        t.size = 8;
    }
    else {
        t.size = 15;
    }
}

function verifica() {
    let t = window.outerWidth;
    if (tp !== t) {
        tamanho(t);
        tp = t;
    }
}

function fetchAPI(){
    let ytQuery = document.getElementById('vidId').value;
    let formatedQuery = ytQuery.replace(' ', '+');
    fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCjup6-py50inE76mNX_gEtlqda_MU6-mQ&q=${formatedQuery}`)
        .then(response => response.json())
        .then(data => loadVideo(data))
}

function loadVideo(data){
    let i = 0;
    while(true){
        let item = data.items[i].id;
        if(item.kind === "youtube#video") {
            abc(item.videoId);
            break;
        }
        i++;
    }
}