 var tp = window.outerWidth;
 var k = 0;
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
    let key = ['AIzaSyCjup6-py50inE76mNX_gEtlqda_MU6-mQ','AIzaSyCOtqSGBoFHE3XfJ9Uyj7FimxiCFFRfGNo','AIzaSyA3GUXoWpOWJEKK7pW0-N9GHGwT_lCpFJA','AIzaSyCpHUkyNw90HFoEU08VY3iQ0mM0l5NLZeU'];
    if(ytQuery.length === 0) alert("Nada a pesquisar!");
    else{
        let formatedQuery = ytQuery.replace(' ', '+');
            fetch(`https://www.googleapis.com/youtube/v3/search?key=${key[k]}&q=${formatedQuery}`)
            .then(response => response.json())
            .then(data => loadVideo(data,key))
    }
}

function loadVideo(data,key){
    let i = 0;
    while(true){
        let ver = typeof data.error === "undefined" ? 0 : data.error.code;
        if (k === key.length){
            alert("A busca não foi concluída. O limite de pesquisas de hoje foi excedido!");
            break;
        }

        if (ver === 403) {
            k++;
            console.log(k);
            console.log(key.length);
            fetchAPI();
            break;
        }
        else{
            let item = data.items[i].id;
            console.log(item);
            if(item.kind === "youtube#video") {
                abc(item.videoId);
                break;
            }
            if(item.kind === "youtube#playlist"){
                alert("Atualmente playlists não são suportadas!");
                break;
            }
            i++;
        }
    }
}

function esconde(){
    let a = document.getElementById('esconde');
    let b = document.getElementById('mostra');
    let c = document.getElementById('pl');
    a.style.visibility = 'hidden';
    b.style.visibility = 'visible';
    c.style.visibility = 'hidden';
}

function mostra(){
    let a = document.getElementById('esconde');
    let b = document.getElementById('mostra');
    let c = document.getElementById('pl');
    a.style.visibility = 'visible';
    b.style.visibility = 'hidden';
    c.style.visibility = 'visible';
}


function troca(n){
    let a = document.getElementById("eye");
    let b = document.getElementById("vid");
    let c = document.getElementById("vid2");
    let d = document.getElementById("eye2");
    switch(n){
        case 0:
            if(a.className === "fas fa-eye"){
                a.classList = "fas fa-eye-slash";
                b.style.visibility = "hidden";
            }
            else{
                a.classList = "fas fa-eye";
                b.style.visibility = "visible";
            }
            break;
        case 1:
            if(d.className === "fas fa-eye"){
                d.classList = "fas fa-eye-slash";
                c.style.visibility = "hidden";
            }
            else{
                d.classList = "fas fa-eye";
                c.style.visibility = "visible";
            }
            break;
    }
}

function roda(n){

}