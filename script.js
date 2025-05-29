location.reload();
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
const por = document.getElementById("por");
const mat = document.getElementById("mat");
const ing = document.getElementById("ing");
const sci = document.getElementById("sci");
const geo = document.getElementById("geo");
const his = document.getElementById("his");
const fil = document.getElementById("fil");
const art = document.getElementById("art");
const edf = document.getElementById("edf");

function irr(min,max) { /*integerRandomRange*/
	return Math.floor(min + Math.random()*(max-min+1))
};

if (c === "exps") {
	por.href = "Português/Explicação";
	title.textContent = "Explicações";
} else if (c === "rsms") {
	//por.href = "Português/Resumo/index.html";
	title.textContent = "Resumos";
} else if (c === "vids") {
	//por.href = "Português/Vídeo/index.html";
	title.textContent = "Vídeos";
} else if (c === "quiz") {
	por.href = "../Quiz/index.html?m=por";
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

function isMobile() {
	return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

const chaps = document.getElementById("chaps");
const qmleuegay = document.getElementById("qmleuegay");
const menu = document.getElementById("menu");
const quizzesMat = {
	"basica": [
		{
			"titulo": "Quanto é 1+1?",
			"desc": "&nbsp;A:2<br>&nbsp;B:11<br>&nbsp;C:3<br>&nbsp;D:4",
			"respostaCorreta": "A"
		},
		{
			"titulo": "Quanto é 3x6?",
			"desc": "&nbsp;A:9<br>&nbsp;B:18<br>&nbsp;C:12<br>&nbsp;D:36",
			"respostaCorreta": "B"
		}
	],
	"avancada": [
		{
			"titulo": "Se x²=16 e x é positivo, x=?",
			"desc": "&nbsp;A:8<br>&nbsp;B:14<br>&nbsp;C:16<br>&nbsp;D:4",
			"respostaCorreta": "D"
		}
	]
}

let state = false;
let f = true;

window.addEventListener("scroll", () => {
	if (chaps) {
		if (window.scrollY >= 150) {
			chaps.classList.add("fixed");
			chaps.classList.remove("absolute");
			menu.classList.add("fixed2");
			menu.classList.remove("absolute2");
		} else {
			chaps.classList.remove("fixed");
			chaps.classList.add("absolute");
			menu.classList.remove("fixed2");
			menu.classList.add("absolute2");
		}
	}
});

function sh() {
	if (state) {
		menu.classList.remove("anim2r");
		chaps.classList.remove("anim1r");
		qmleuegay.classList.remove("anim1r");
		menu.classList.add("anim2");
		chaps.classList.add("anim1");
		qmleuegay.classList.add("anim1");
	} else {
		if (f) {
			menu.classList.remove("anim2");
			chaps.classList.remove("anim1");
			qmleuegay.classList.remove("anim1");
			f=false;
		}
		menu.classList.add("anim2r");
		chaps.classList.add("anim1r");
		qmleuegay.classList.add("anim1r");
	}
	state = !state;
}

const leQuiz = document.getElementById("quiz");
const quizu = 0;
const nivel = document.getElementById("nivel");
const ir = quizzesMat.basica.length - 1;
const ir2 = quizzesMat.avancada.length - 1;
nivel.value = "basica";
let qa = irr(0,ir);
const gatito = document.getElementById("gatito");
const fader = document.getElementById("fader");
const desc2 = document.getElementById("desc2");

if (leQuiz) {
	let titulo = document.getElementById("titulo");
	let desc = document.getElementById("desc");
	
	titulo.innerText = quizzesMat.basica[qa].titulo;
	desc.innerHTML = quizzesMat.basica[qa].desc;
}

function tome(a) {
	if (a === quizzesMat[nivel.value][qa].respostaCorreta) {
		gatito.src = "../Imagens/happy_cat.jpg";
		desc2.innerHTML = "você acertou!!!";
	} else {
		gatito.src = "../Imagens/sad_cat.jpg";
		desc2.innerHTML = "você errou :(";
	}
	fader.style.backgroundColor = "rgba(0,0,0,0.5)";
	gatito.style.opacity = "1";
	setTimeout(() => {
		fader.style.backgroundColor = "rgba(0,0,0,0)"
		gatito.style.opacity = "0";
		desc2.innerHTML = "";
	}, 5000);
}

nivel.addEventListener("change",function() {
	let titulo = document.getElementById("titulo");
	let desc = document.getElementById("desc");
	qa = irr(0,quizzesMat[nivel.value].length - 1);
	
	titulo.innerText = quizzesMat[nivel.value][qa].titulo;
	desc.innerHTML = quizzesMat[nivel.value][qa].desc;
});

if (isMobile()) {
	let sectioner = document.querySelectorAll(".sectioner");
	let qst = document.querySelectorAll(".qst");
	let materia = document.querySelectorAll(".materia");
	sectioner.forEach(i => {
		console.log(i);
		i.classList.add("sectionerm");
	});
	
	qst.forEach(i => {
		i.style.fontSize = "28px";
	});
	
	materia.forEach(i => {
		i.classList.add("materiam");
	});
}

function ajustarImagem() {
  const img = document.getElementById("gatito");
  const largura = window.innerWidth;
  const altura = window.innerHeight;

  if (largura > altura) {
    img.style.height = "80vh";
    img.style.width = "auto";
  } else {
    img.style.width = "80vw";
    img.style.height = "auto";
  }
}

// Chamar ao carregar e ao redimensionar
ajustarImagem();
window.addEventListener("resize", ajustarImagem);
