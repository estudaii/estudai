const todasFontes = [
	'Quicksand',
	'Quicksand:400',
	'Quicksand:500',
	'Quicksand:600',
	'Quicksand:700',
	'Cutive Mono',
	'Dokdo',
	'Jockey One',
	'Kalam'
];

const fontesParaTrocar = [
  'Cutive Mono',
  'Dokdo',
  'Jockey One',
  'Kalam'
];

WebFont.load({
  google: {
    families: todasFontes
  },
  active: () => {
    let fontesDisponiveis = [...fontesParaTrocar];

    setInterval(() => {
      if (fontesDisponiveis.length === 0) {
        fontesDisponiveis = [...fontesParaTrocar];
      }
      const i = Math.floor(Math.random() * fontesDisponiveis.length);
      const fonte = fontesDisponiveis.splice(i, 1)[0];
      const elem = document.getElementById('em');
      if (elem) {
        elem.style.fontFamily = `'${fonte}', sans-serif`;
      }
    }, 1000);
  },
  inactive: () => {
    console.error('Falha ao carregar as fontes do Google Fonts');
  }
});
