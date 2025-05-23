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

const params = new URLSearchParams(window.location.search);
const c = params.get("c");
const title = document.getElementById("title");

if (c === "exps") {
	document.getElementById("por").href = "Português/Explicação/index.html";
	document.getElementById("mat").href = "Matemática/Explicação";
	document.getElementById("ing").href = "Inglês/Explicação";
	document.getElementById("sci").href = "Ciências/Explicação";
	document.getElementById("geo").href = "Geografia/Explicação";
	document.getElementById("his").href = "História/Explicação";
	document.getElementById("fil").href = "Filosofia/Explicação";
	document.getElementById("art").href = "Artes/Explicação";
	document.getElementById("edf").href = "Educação-Física/Explicação";
	title.textContent = "Explicações";
} else if (c === "rsms") {
	title.textContent = "Resumos";
} else if (c === "vids") {
	title.textContent = "Vídeos";
} else if (c === "quiz") {
	title.textContent = "Quizzes";
}

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

const chaps = document.getElementById("chaps");

window.addEventListener("scroll", () => {
	if (chaps) {
		if (window.scrollY >= 150) {
			chaps.classList.add("fixed");
			chaps.classList.remove("absolute");
		} else {
			chaps.classList.remove("fixed");
			chaps.classList.add("absolute");
		}
	}
});
