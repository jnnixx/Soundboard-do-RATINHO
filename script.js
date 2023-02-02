let audios = [
    {
        caminho:'audios/cavalo-ratinho.mp3',
        legenda: 'Cavalo'
    },
    {
        caminho:'audios/grito2.mp3',
        legenda: 'GRITO'
    },
    {
        caminho:'audios/jesus-ratinho.mp3',
        legenda: 'Jesus'
    },
    {
        caminho:'audios/maisemuitoviado.mp3',
        legenda: 'Mais é mto viado'
    },
    {
        caminho:'audios/nao-e-o-pai.mp3',
        legenda: 'Não é o pai'
    },
    {
        caminho:'audios/pare.mp3',
        legenda: 'PARE'
    },
    {
        caminho:'audios/ratinho-nho-nho-por-jota.mp3',
        legenda: 'RATINHO'
    },
    {
        caminho:'audios/uepa-mp3cut.mp3',
        legenda: 'UEPA'
    },
    {
        caminho:'audios/vixi-ratinho.mp3',
        legenda: 'VIXI'
    }
];

//Seleciona todos os elementos que ele encontrar no html
let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');
let audioTag = document.querySelector('audio')

for(let i = 0; i < 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}


//Eventos

//ForEach() => vai pegar a lista de botoões qu e comando document.querySelectorAll('.botao'); retornar e vai fazer algo
botoes.forEach(botao =>{
    botao.addEventListener('click', ()=>{
    let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', ()=>{
            audioTag.play();
        });
});
});

