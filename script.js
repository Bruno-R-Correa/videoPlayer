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
    let key1= 'AIzaSyCOtqSGBoFHE3XfJ9Uyj7FimxiCFFRfGNo';
    let key2= 'AIzaSyCjup6-py50inE76mNX_gEtlqda_MU6-mQ';
    if(ytQuery.length === 0) alert("Nada a pesquisar!");
    else{
        let formatedQuery = ytQuery.replace(' ', '+');
        if(k === 0){
            fetch(`https://www.googleapis.com/youtube/v3/search?key=${key2}&q=${formatedQuery}`)
            .then(response => response.json())
            .then(data => loadVideo(data))
        }
        else if(k ===1){
            fetch(`https://www.googleapis.com/youtube/v3/search?key=${key1}&q=${formatedQuery}`)
            .then(response => response.json())
            .then(data => loadVideo(data))
        }
    }
}

function loadVideo(data){
    let i = 0;
    while(true){
        let ver = typeof data.error === "undefined" ? 0 : data.error.code;
        if (k === 2){
            alert("A busca não foi concluída. O limite de pesquisas de hoje foi excedido!");
            break;
        }

        if (ver === 403) {
            k++;
            fetchAPI();
            break;
        }
        else{
            let item = data.items[i].id;
            if((item.kind === "youtube#video")  || (item.kind === "youtube#playlist")) {
                abc(item.videoId);
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

