const res = document.getElementById("res");
const params = new URLSearchParams(window.location.search);
if (res){
res.innerHTML = "&nbsp;O resultado foi "+params.get("n")+"/10 !";
}
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
	por.href = "Português/Explicação/index.html";
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

function nelo(a) {
	if (a) {
		return a
	} else {
		return 0
	}
}

function btoa2(str) {
  const base64 = btoa(str); // base64 normal
  // troca + por -, / por _, remove =
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function atob2(base64Url) {
  // troca - por +, _ por /
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  // adiciona = para completar o padding (múltiplo de 4)
  while (base64.length % 4) {
    base64 += '=';
  }
  return atob(base64);
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

let porguntas = 0;
let str_final; 
const qmkr = document.getElementById("qmkr");
if (qmkr) {str_final = "https://estudaii.github.io/estudai/Quiz?tp=" + porguntas + "&t1=" + btoa2(document.getElementById("p1").innerText) + "&desc1=" + btoa2("&nbsp;A:" + document.getElementById("a1").innerText + "<br>&nbsp;B:" + document.getElementById("b1").innerText + "<br>&nbsp;C:" + document.getElementById("c1").innerText + "<br>&nbsp;D:" + document.getElementById("d1").innerText) + "&rc1=" + btoa2(document.getElementById("rc1").innerText);}

if (qmkr) {
	porguntas++;
}

function atualizarStrFinal() {
	str_final = "https://estudaii.github.io/estudai/Quiz?tp=" + porguntas;
	for (let i = 1; i <= porguntas; i++) {
		let pergunta = document.getElementById("p" + i)?.innerText || "";
		let a = document.getElementById("a" + i)?.innerText || "";
		let b = document.getElementById("b" + i)?.innerText || "";
		let c = document.getElementById("c" + i)?.innerText || "";
		let d = document.getElementById("d" + i)?.innerText || "";
		let rc = document.getElementById("rc" + i)?.innerText || "";

		str_final += "&t" + i + "=" + btoa2(pergunta);
		str_final += "&desc" + i + "=" + btoa2(
			"&nbsp;A:" + a + "<br>&nbsp;B:" + b + "<br>&nbsp;C:" + c + "<br>&nbsp;D:" + d
		);
		str_final += "&rc" + i + "=" + btoa2(rc);
	}
}


function copiar() {
	atualizarStrFinal();
	navigator.clipboard.writeText(str_final);
}

function add() {
	let a = qmkr.innerHTML;
	a = a.replace('<button style="margin: 32px 0;" onclick="add()">Adicionar pergunta</button>',"");
	a = a.replace('<button style="width: 100%; margin: 32px 0;" onclick="copiar()">https://estudaii.github.io/estudai/Quiz</button>',"");
	porguntas++;
	qmkr.innerHTML = a + " " + '<div style="width: 100%; height: 74px;"></div><div class="paginad" style="width: 100%; margin: 0 0; aspect-ratio: 2 / 1;"><h1 class="qst">Pergunta ' + porguntas + '</h1><p>&nbsp;</p><p>Pergunta:</p><p id="p' + porguntas + '" contenteditable="true" style="width: 100%;">Qual é a cor do céu?</p><p>A:</p><p id="a' + porguntas+ '" contenteditable="true" style="width: 100%;">Vermelho</p><p>B:</p><p id="b' + porguntas+ '" contenteditable="true" style="width: 100%;">Verde</p><p>C:</p><p id="c' + porguntas+ '" contenteditable="true" style="width: 100%;">Azul</p><p>D:</p><p id="d' + porguntas+ '" contenteditable="true" style="width: 100%;">Amarelo</p><p>Resposta Certa:</p><p id="rc' + porguntas+ '" contenteditable="true" style="width: 100%;">C</p></div><button style="margin: 32px 0;" onclick="add()">Adicionar pergunta</button><button style="width: 100%; margin: 32px 0;" onclick="copiar()">https://estudaii.github.io/estudai/Quiz</button>';
}

//linha bugadaasdewiodpq__$&S(!@!#!

const leQuiz = document.getElementById("quiz");
let titulo = document.getElementById("titulo");
let desc = document.getElementById("desc");
const tp = params.get("tp");
const t1 = atob2(params.get("t1"));
const desc1 = atob2(params.get("desc1"));
const rc1 = atob2(params.get("rc1"));
let qa = 1;
let rc = rc1;
let pontos = 0;

if (leQuiz) {
	titulo.innerText = atob2(params.get("t1"));
	desc.innerHTML = atob2(params.get("desc1"));
}

function tome(a) {
	if (a === rc) {
		pontos++
	}
	
	qa++
	if (qa > tp) {
		location.href = "QuizResultado/index.html?n="+(pontos/tp*10);
	} else {
		rc=atob2(params.get("rc"+qa));
		titulo.innerText = atob2(params.get("t"+qa));
		desc.innerHTML = atob2(params.get("desc"+qa));
	}
}
