function abc(){
          let a = document.getElementById('pl');
          let b = document.getElementById('vidId').value;
          if(b != ''){
	        a.style.visibility = 'visible';
            a.src = `https://www.youtube.com/embed/${b}?autoplay=1`;
          }
          else{
              alert("Nenhum código inserido!");
          }
      }
      
function busca(){
    let b = document.getElementById('pesq').value;
    if(b != ''){
      window.open(`https://www.youtube.com/results?search_query=${b}`);
    }
    else{
        alert("Nenhum elemento a buscar!");
    }
}

