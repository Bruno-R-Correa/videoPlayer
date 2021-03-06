 var tp = window.outerWidth;
 var k = 0;
 var ind = 2;
 var pid= '';
(() => {
    setInterval(verifica, 100);
})()

function abc(b) {
    let a = document.getElementById('pl');
    let c = document.getElementById('but');
    c.className = "btn btn-dark disabled";
    if (b !== '') {
        a.style.visibility = 'visible';
        a.src = `https://www.youtube.com/embed/${b}?autoplay=1`;
    }
    else {
        alert("Nenhum código inserido!");
    }
}

function listPlay(){
    let a = document.getElementById('pl');
    let c = document.getElementById('but');
    c.className = "btn btn-dark";
    if (pid !== '') {
        a.src = `https://www.youtube.com/embed/watch?v=T_1Nx5YSuOA&list=${pid}&index=${ind}?autoplay=1`;
        a.style.visibility = 'visible';
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
            fetchAPI();
            break;
        }
        else{
            let item;
            if(data.items.length !== 0) item = data.items[i].id;
            if(item.kind === "youtube#video") {
                abc(item.videoId);
                break;
            }
            if(item.kind === "youtube#playlist"){
                pid = item.playlistId;
                listPlay();
                break;
            }
            i++;
        }
    }
}

function troca(n){
    let a = document.getElementById("eye");
    let b = document.getElementById("vid");
    let c = document.getElementById("vid2");
    let d = document.getElementById("eye2");
    let e = document.getElementById("pl");
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
        default:
            if(d.className === "fas fa-eye"){
                d.classList = "fas fa-eye-slash";
                e.style.visibility = "hidden";
            }
            else{
                d.classList = "fas fa-eye";
                e.style.visibility = "visible";
            }
            break;
    }
}

function pula(){
    let c = document.getElementById('but');
    if(!c.className === "btn btn-dark disabled")
    {
        ind++;
        listPlay();
    }
}

function limpar() { 
  document.getElementById('vidId').value = "";
  document.getElementById('vidId').focus();
}

function verifica(e) {
  if (e !== undefined) if(e.key === 'Enter' || e.keyCode === 13) fetchAPI();
}