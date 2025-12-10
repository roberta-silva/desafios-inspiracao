const desafios = {
  corpo: [
    "Beba um copo de água💧",
    "Faça 10 minutos de alongamento 🧘‍♀️",
    "Caminhe observando o céu por alguns minutos 🌤",
    "Suba e desça uma escada ao invés de usar elevador 🪜",
    "Dance uma música inteira que você gosta 🎶",
    "Alongue os ombros e pescoço durante o dia 💪",
    "Faça 15 agachamentos (no seu ritmo) 🏋️‍♀️",
    "Alongue os braços como se estivesse espreguiçando 🤸‍♂️",
    "Dê uma caminhada curta e preste atenção na sua respiração 🚶‍♀️",
    "Faça 10 flexões de braço (ou adaptadas, encostando na parede 💪)",
    "Caminhe descalço(a) por alguns minutos em casa 🦶",
    "Gire os tornozelos em círculos para aliviar a tensão 🔄",
    "Alongue as pernas sentado, tocando a ponta dos pés 🦵",
    "Suba e desça do sofá 10 vezes como exercício 🛋️",
    "Pule corda (ou simule) por 1 minuto 🤾‍♀️",
    "Respire fundo e encha os pulmões 5 vezes 🌬️",
    "Sente-se com a coluna ereta e mantenha por 1 minuto 🪑",
    "Faça rotações com os punhos para soltar as mãos ✊",
    "Caminhe mais rápido que o normal por 3 minutos 🏃‍♂️",
    "Espreguice-se como se estivesse acordando agora 🌅",
  ],

  mente: [
    "Escreva 3 coisas boas que aconteceram na última semana 📝",
    "Respire profundamente por 1 minuto, com olhos fechados 🌬️",
    "Leia uma frase inspiradora em voz alta 📖",
    "Escreva em um papel algo que você quer conquistar este mês ✍️",
    "Passe 10 minutos lendo algo fora do celular 📚",
    "Liste 3 coisas pelas quais você é grata hoje 🙏",
    "Desenhe algo simples, sem se preocupar em ficar bonito 🎨",
    "Escreva uma palavra que represente como você quer se sentir hoje 🌟",
    "Pense em alguém querido e mentalize coisas boas para essa pessoa 💭",
    "Ouça uma música instrumental com atenção total 🎵",
    "Anote uma ideia criativa que você teve hoje 💡",
    "Escreva um elogio para si mesma(o) 🌸",
    "Feche os olhos e imagine um lugar calmo onde gostaria de estar 🌴",
    "Escreva algo que você aprendeu recentemente 📖",
    "Monte uma mini-lista de 'coisas que me fazem sorrir' 😄",
    "Descreva em uma frase algo que admira em si mesma(o) 💖",
    "Escreva qual foi o momento mais leve do seu dia ☀️",
    "Imagine uma situação futura que deseja muito e visualize os detalhes 🔮",
    "Escreva uma frase de incentivo como se fosse para um amigo 💌",
    "Pense em uma dificuldade atual e escreva 1 pequeno passo para resolvê-la 🛠️",
  ],

  vida: [
    "Tire uma foto de algo bonito que você vê agora 📸",
    "Organize um pequeno espaço da sua casa (mesa, gaveta, prateleira) 🗂️",
    "Escute uma música nova, de um estilo diferente do habitual 🎶",
    "Desligue o celular por 15 minutos e aproveite o silêncio 🔕",
    "Escreva uma frase que você gostaria de ouvir hoje ✍️",
    "Separe 10 minutos para planejar algo para o fim de semana 📅",
    "Experimente preparar uma bebida diferente ☕",
    "Relembre uma conquista sua e anote como se sentiu 🏆",
    "Escolha uma palavra positiva para guiar seu dia 🌈",
    "Envie uma mensagem positiva para um amigo 💌",
    "Ligue para alguém que você não fala há um tempo 📞",
    "Elogie alguém de forma sincera 😊",
    "Compartilhe uma música que você gosta com alguém 🎧",
    "Diga 'obrigada' de forma mais consciente no seu dia 🙏",
    "Pergunte a alguém como ela realmente está, e ouça com atenção 🗣️",
    "Faça um pequeno gesto de gentileza 🤝",
    "Doe uma peça de roupa que não usa mais 👕",
    "Coloque uma planta em destaque no seu espaço e aprecie-a 🌱",
    "Escreva uma carta curta (ou bilhete) para alguém especial 💌",
    "Sorria para alguém que você encontrar no caminho 😄",
  ],
};

function pegarDesafio(categoria) {
  const lista = desafios[categoria];
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

function desafioAcaso() {
  const categorias = ["corpo", "mente", "vida"];
  const categoriaAleatoria =
    categorias[Math.floor(Math.random() * categorias.length)];
  return pegarDesafio(categoriaAleatoria);
}

function atualizarTexto(novoTexto) {
  resultadoTexto.style.opacity = 0;

  setTimeout(() => {
    resultadoTexto.textContent = novoTexto;
    resultadoTexto.style.opacity = 1;
  }, 200);
}

const resultadoTexto = document.querySelector(".resultado-texto");

document.getElementById("corpo").addEventListener("click", () => {
  atualizarTexto(pegarDesafio("corpo"));
});

document.getElementById("mente").addEventListener("click", () => {
  atualizarTexto(pegarDesafio("mente"));
});

document.getElementById("vida").addEventListener("click", () => {
  atualizarTexto(pegarDesafio("vida"));
});

document.getElementById("acaso").addEventListener("click", () => {
  atualizarTexto(desafioAcaso());
});
