var tp = window.outerWidth;
(() => {
    setInterval(verifica, 100);
})()

function abc() {
    let a = document.getElementById('pl');
    let b = document.getElementById('vidId').value;
    if (b != '') {
        a.style.visibility = 'visible';
        a.src = `https://www.youtube.com/embed/${b}?autoplay=1`;
    }
    else {
        alert("Nenhum código inserido!");
    }
}

function busca() {
    let b = document.getElementById('pesq').value;
    if (b != '') {
        window.open(`https://www.youtube.com/results?search_query=${b}`);
    }
    else {
        alert("Nenhum elemento a buscar!");
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
    if (tp != t) {
        console.log(t);
        console.log(tp);
        tamanho(t);
        tp = t;
    }
}



