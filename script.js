//document.getElementById("hpb").width = 75;
//document.getElementById("hpb").height = 75;

const fontes = [
    'Courier New',           // monoespaçada (sem serifa)
    'Comic Sans MS',         // sans-serif
    'Impact',                // sans-serif
    'Lucida Handwriting',    // cursiva
    'Futura'
];


// Cria uma cópia da lista original para controle dos itens não usados
let fontesDisponiveis = [...fontes];

// Função para escolher uma fonte aleatória não usada
function escolherFonte() {
    if (fontesDisponiveis.length === 0) {
        // Se todos os itens já foram usados, reinicia a lista
        fontesDisponiveis = [...fontes];
    }

    // Escolhe um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * fontesDisponiveis.length);
    
    // Escolhe a fonte e remove ela da lista de fontes disponíveis
    const fonteEscolhida = fontesDisponiveis.splice(indiceAleatorio, 1)[0];
    
    return fonteEscolhida;
}

// Função para mudar a fonte aleatoriamente
function mudarFonte(fonte) {
	document.getElementById('em').style.fontFamily = fonte;
}

// Mudar a fonte a cada segundo
setInterval(() => {
	mudarFonte(escolherFonte());
}, 1000);