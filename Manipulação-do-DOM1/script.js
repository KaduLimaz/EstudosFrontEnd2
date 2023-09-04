const btn = document.getElementById('btn-aqui').addEventListener('click', function(){
    let nome = prompt("Digite seu nome aqui: ");
    const paragrafo = document.getElementById('meuParagrafo');
    paragrafo.innerHTML = `E ai ${nome} Você está deixando o seu site
    dinâmico.`;
    
})

let valor = 0;
const btnIncremento = document.getElementById('btn-incrementar').addEventListener('click', function(){
    valor++;
    const paragrafo = document.getElementById('paragrafoContador');
    paragrafo.innerHTML = `O contador está com ${valor} cliques.`;

    
})

const btnZerar = document.getElementById('btn-zerar').addEventListener('click', function(){
    valor = 0;
    const paragrafo = document.getElementById('paragrafoContador');
    paragrafo.innerHTML = `O contador está com ${valor} cliques.`;
})

