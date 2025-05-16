const fontes = [
    { nome: 'Courier New' }, // já é web-safe
    { nome: 'Comic Sans MS' }, // web-safe
    { nome: 'Impact' }, // web-safe
    { nome: 'Lucida Handwriting' }
];

WebFont.load({
	google:{
		families: ["Quicksand","Courier New","Comic Sans MS","Impact","Lucida Handwriting"]
	}
});

// Guardar só as que foram carregadas com sucesso
let fontesCarregadas = [];

// Carregar fontes do Google Fonts se necessário
const fontesGoogle = fontes
  .filter(f => f.google)
  .map(f => f.google);

if (fontesGoogle.length > 0) {
    WebFont.load({
        google: {
            families: fontesGoogle
        },
        active: () => {
            // Após carregamento, considerar todas como carregadas
            fontesCarregadas = fontes.map(f => f.nome);
        },
        inactive: () => {
            // Caso não consiga carregar do Google, usa só as locais
            fontesCarregadas = fontes
                .filter(f => !f.google)
                .map(f => f.nome);
        }
    });
} else {
    // Se não tem nenhuma fonte externa, usa todas locais direto
    fontesCarregadas = fontes.map(f => f.nome);
}

// Trocar a fonte a cada segundo
let fontesDisponiveis = [];

function escolherFonte() {
    if (fontesDisponiveis.length === 0) {
        fontesDisponiveis = [...fontesCarregadas];
    }
    const i = Math.floor(Math.random() * fontesDisponiveis.length);
    return fontesDisponiveis.splice(i, 1)[0];
}

function mudarFonte(fonte) {
    const elem = document.getElementById('em');
    if (elem) elem.style.fontFamily = `'${fonte}', sans-serif`;
}

setInterval(() => {
    if (fontesCarregadas.length > 0) {
        mudarFonte(escolherFonte());
    }
}, 1000);
