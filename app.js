const quizDialog = document.querySelector('#quiz-dialog');
const quizIntro = document.querySelector('#quiz-intro');
const questionView = document.querySelector('#question-view');
const resultView = document.querySelector('#result-view');
const progressWrap = document.querySelector('#quiz-progress-wrap');
const questionTitle = document.querySelector('#question-title');
const questionNumber = document.querySelector('#question-number');
const answerList = document.querySelector('#answer-list');
const nextButton = document.querySelector('#next-question');
const previousButton = document.querySelector('#previous-question');
const progressText = document.querySelector('#progress-text');
const progressBar = document.querySelector('#progress-bar');

const questions = [
  {
    "title": "Sua escola ganhou um espaço vazio. O que você gostaria de criar ali?",
    "answers": [
      [
        "civil",
        "Um ambiente bem planejado, seguro e acessível para todos."
      ],
      [
        "electrical",
        "Um laboratório inteligente com energia solar e sensores."
      ],
      [
        "mechanical",
        "Uma oficina maker com máquinas e protótipos em movimento."
      ],
      [
        "chemical",
        "Um laboratório para investigar materiais e transformar matérias-primas em produtos."
      ],
      [
        "environmental",
        "Um projeto para acompanhar a água, separar resíduos e cuidar do ambiente."
      ]
    ]
  },
  {
    "title": "Qual tipo de desafio mais prende a sua atenção?",
    "answers": [
      [
        "civil",
        "Descobrir como construir algo firme, útil e duradouro."
      ],
      [
        "electrical",
        "Fazer componentes se comunicarem e responderem sozinhos."
      ],
      [
        "chemical",
        "Controlar uma transformação e descobrir como melhorar um produto."
      ],
      [
        "environmental",
        "Investigar uma contaminação e propor uma solução para recuperar o ambiente."
      ],
      [
        "mechanical",
        "Entender como uma peça ou mecanismo pode funcionar melhor."
      ]
    ]
  },
  {
    "title": "Em um trabalho em grupo, qual papel surge naturalmente para você?",
    "answers": [
      [
        "civil",
        "Planejar as etapas, o espaço e como tudo ficará de pé."
      ],
      [
        "chemical",
        "Comparar materiais, misturas e condições para melhorar o processo."
      ],
      [
        "environmental",
        "Avaliar o impacto ambiental e planejar o uso responsável dos recursos."
      ],
      [
        "electrical",
        "Organizar a lógica, as conexões e a parte tecnológica."
      ],
      [
        "mechanical",
        "Testar, ajustar e fazer o protótipo ganhar movimento."
      ]
    ]
  },
  {
    "title": "Qual destas transformações você teria mais orgulho de realizar?",
    "answers": [
      [
        "chemical",
        "Criar um processo que produza materiais com menos desperdício."
      ],
      [
        "environmental",
        "Recuperar um igarapé e melhorar a qualidade da água da comunidade."
      ],
      [
        "civil",
        "Ver uma ponte, uma casa ou um bairro melhorando a vida das pessoas."
      ],
      [
        "mechanical",
        "Ver uma máquina criada por mim operando com precisão."
      ],
      [
        "electrical",
        "Ver um sistema inteligente economizando e distribuindo energia."
      ]
    ]
  },
  {
    "title": "Quando alguma coisa para de funcionar, qual é seu primeiro impulso?",
    "answers": [
      [
        "environmental",
        "Investigar como água, solo, resíduos ou poluentes estão afetando o sistema."
      ],
      [
        "mechanical",
        "Abrir, observar as peças e descobrir onde o movimento falhou."
      ],
      [
        "electrical",
        "Verificar energia, comandos, sinais e conexões."
      ],
      [
        "civil",
        "Analisar a base, os materiais e se houve desgaste ou sobrecarga."
      ],
      [
        "chemical",
        "Investigar se temperatura, mistura ou composição alteraram o processo."
      ]
    ]
  },
  {
    "title": "Que problema da sua cidade você gostaria de ajudar a resolver?",
    "answers": [
      [
        "electrical",
        "Falta de energia eficiente, iluminação e automação."
      ],
      [
        "civil",
        "Alagamentos, mobilidade, moradia e saneamento."
      ],
      [
        "mechanical",
        "Transporte, produção e manutenção de equipamentos."
      ],
      [
        "chemical",
        "Reduzir perdas e melhorar os processos de fabricação de produtos."
      ],
      [
        "environmental",
        "Combater a poluição dos igarapés e melhorar a gestão de resíduos."
      ]
    ]
  },
  {
    "title": "Qual ferramenta você teria mais curiosidade de aprender a usar?",
    "answers": [
      [
        "electrical",
        "Sensores, circuitos e programação de sistemas automáticos."
      ],
      [
        "mechanical",
        "Modelagem 3D para criar peças, motores e máquinas."
      ],
      [
        "chemical",
        "Um simulador de processos para estudar misturas, reações e separações."
      ],
      [
        "environmental",
        "Mapas digitais e instrumentos para acompanhar a qualidade da água."
      ],
      [
        "civil",
        "Um programa para desenhar prédios e visualizar estruturas."
      ]
    ]
  },
  {
    "title": "Qual conteúdo parece mais interessante para você?",
    "answers": [
      [
        "electrical",
        "Eletricidade, lógica, ondas e tecnologia digital."
      ],
      [
        "chemical",
        "Química, transformações da matéria e processos industriais."
      ],
      [
        "environmental",
        "Ecologia, qualidade da água, saneamento e impactos ambientais."
      ],
      [
        "mechanical",
        "Movimento, forças, calor e transformação de energia."
      ],
      [
        "civil",
        "Geometria, materiais, solos e organização das cidades."
      ]
    ]
  },
  {
    "title": "Em qual cenário profissional você mais consegue se imaginar?",
    "answers": [
      [
        "chemical",
        "Desenvolvendo processos e produtos em indústrias de alimentos, materiais ou química."
      ],
      [
        "environmental",
        "Planejando tratamento de água, gestão de resíduos e recuperação ambiental."
      ],
      [
        "electrical",
        "Criando redes de energia, automação ou dispositivos eletrônicos."
      ],
      [
        "mechanical",
        "Projetando soluções para indústria, veículos ou robótica."
      ],
      [
        "civil",
        "Acompanhando projetos que mudam a paisagem e a infraestrutura."
      ]
    ]
  }
];

const courseData = {
  civil: {
    name: 'Engenharia Civil',
    tagline: 'Você pensa em estrutura, espaço e impacto coletivo.',
    description: 'Suas escolhas mostram interesse em planejar soluções concretas, organizar recursos e transformar os lugares onde as pessoas vivem. É um perfil que combina visão espacial, responsabilidade e atenção ao todo.',
    complement: 'Sua visão de espaço, planejamento e impacto coletivo complementa bem projetos de outras áreas.',
    technologies: ['BIM', 'Modelagem 3D', 'Drones', 'Gestão de obras'],
    careers: ['Estruturas', 'Construção', 'Saneamento', 'Mobilidade', 'Geotecnia'],
    skills: ['Visão espacial', 'Planejamento', 'Comunicação técnica', 'Gestão de projetos'],
    plan: [['0–30 dias', 'Explorar', 'Mapeie um problema urbano e pesquise soluções.'], ['31–60 dias', 'Praticar', 'Crie um croqui, maquete ou modelo digital simples.'], ['61–90 dias', 'Conectar', 'Converse com um profissional e registre o projeto no portfólio.']],
    officialUrl: 'https://www.ulbra.br/manaus/graduacao/presencial/engenharia-civil',
    actions: {
      medio: ['Observe uma obra ou problema urbano do seu bairro e esboce uma solução.', 'Experimente uma maquete de ponte, acessibilidade ou drenagem.', 'Fortaleça matemática, física e desenho — elas serão suas ferramentas.'],
      faculdade: ['Explore estruturas, BIM, mobilidade ou sustentabilidade em um projeto curto.', 'Converse com alguém que atue em obra e alguém que trabalhe com projetos.', 'Monte um portfólio simples com croquis, cálculos e decisões do projeto.'],
      explorando: ['Visite uma obra ou projeto urbano com olhar de investigação.', 'Teste uma ferramenta de modelagem ou faça uma maquete simples.', 'Compare estruturas, saneamento, transportes e gestão de obras.']
    },
    icon: '<svg viewBox="0 0 32 32"><path d="M4 27h24M7 27V13l9-6 9 6v14M12 27v-7h8v7M11 14h2m6 0h2"/></svg>'
  },
  mechanical: {
    name: 'Engenharia Mecânica',
    tagline: 'Você gosta de entender, testar e colocar ideias em movimento.',
    description: 'Suas escolhas indicam curiosidade por mecanismos, energia e desempenho. Você tende a aprender colocando a mão na massa, observando como as partes interagem e ajustando até o sistema funcionar melhor.',
    complement: 'Sua curiosidade por mecanismos, testes e desempenho acrescenta uma perspectiva prática ao seu perfil.',
    technologies: ['CAD e CAE', 'Impressão 3D', 'Robótica', 'Manufatura digital'],
    careers: ['Projetos mecânicos', 'Manutenção', 'Indústria', 'Energia', 'Robótica'],
    skills: ['Prototipagem', 'Análise de sistemas', 'Precisão', 'Resolução de problemas'],
    plan: [['0–30 dias', 'Explorar', 'Observe mecanismos e descubra como suas partes interagem.'], ['31–60 dias', 'Praticar', 'Modele uma peça ou construa um protótipo com movimento.'], ['61–90 dias', 'Conectar', 'Participe de uma oficina, equipe maker ou visita técnica.']],
    officialUrl: 'https://www.ulbra.br/manaus/graduacao/ead/engenharia-mecanica',
    actions: {
      medio: ['Desmonte com segurança um objeto sem uso e identifique a função das peças.', 'Crie um protótipo simples com alavancas, engrenagens ou movimento.', 'Aproxime-se de física, matemática e desenho técnico de forma prática.'],
      faculdade: ['Explore CAD, manufatura, robótica ou eficiência energética em um projeto.', 'Participe de uma equipe de prototipagem, competição ou iniciação científica.', 'Registre testes e melhorias para começar seu portfólio técnico.'],
      explorando: ['Observe um mecanismo cotidiano e desenhe como as forças atuam.', 'Faça um pequeno projeto de automação mecânica ou modelagem 3D.', 'Compare indústria, energia, manutenção, veículos e robótica.']
    },
    icon: '<svg viewBox="0 0 32 32"><path d="M16 4v4m0 16v4M4 16h4m16 0h4M7.5 7.5l3 3m11 11 3 3m0-17-3 3m-11 11-3 3"/><circle cx="16" cy="16" r="7"/><circle cx="16" cy="16" r="2.5"/></svg>'
  },
  electrical: {
    name: 'Engenharia Elétrica',
    tagline: 'Você enxerga conexões, lógica e possibilidades de automação.',
    description: 'Suas respostas revelam afinidade com sistemas conectados, energia e tecnologia. É um perfil que gosta de seguir sinais, criar lógica e transformar comandos invisíveis em soluções que respondem no mundo real.',
    complement: 'Sua atenção à lógica, aos sinais e às conexões fortalece soluções inteligentes e integradas.',
    technologies: ['Energia solar', 'Sensores e IoT', 'Microcontroladores', 'Automação'],
    careers: ['Sistemas de potência', 'Eletrônica', 'Automação', 'Telecomunicações', 'Energia limpa'],
    skills: ['Raciocínio lógico', 'Programação', 'Análise de circuitos', 'Integração de sistemas'],
    plan: [['0–30 dias', 'Explorar', 'Pesquise circuitos, energia renovável e automação.'], ['31–60 dias', 'Praticar', 'Simule um circuito ou monte um projeto de baixa tensão.'], ['61–90 dias', 'Conectar', 'Conheça um laboratório e documente o que aprendeu.']],
    officialUrl: 'https://www.ulbra.br/manaus/graduacao/presencial/engenharia-eletrica',
    actions: {
      medio: ['Monte um circuito de baixa tensão com LED, bateria e interruptor.', 'Explore um projeto introdutório com sensor ou energia solar.', 'Pratique matemática, física e lógica por meio de experiências.'],
      faculdade: ['Explore eletrônica, automação, potência ou energias renováveis.', 'Monte um projeto curto com microcontrolador, sensor e documentação.', 'Conheça laboratórios e converse com profissionais de áreas diferentes.'],
      explorando: ['Observe como energia e informação circulam em um objeto cotidiano.', 'Experimente um simulador de circuitos ou um projeto simples com sensor.', 'Compare potência, eletrônica, telecomunicações e automação.']
    },
    icon: '<svg viewBox="0 0 32 32"><path d="m18 3-9 14h7l-2 12 9-15h-7z"/></svg>'
  }
};

Object.assign(courseData, {
  "chemical": {
    "name": "Engenharia Química",
    "tagline": "Você se interessa por materiais, transformações e processos.",
    "description": "Suas escolhas apontam curiosidade por transformar matérias-primas em produtos, compreender condições de operação e melhorar processos com qualidade e menor desperdício.",
    "complement": "Seu interesse por materiais e transformações contribui para projetos que integram diferentes engenharias.",
    "technologies": [
      "Simulação de processos",
      "Controle de qualidade",
      "Instrumentação",
      "Desenvolvimento de materiais"
    ],
    "careers": [
      "Processos industriais",
      "Alimentos",
      "Materiais",
      "Tratamento de efluentes",
      "Pesquisa e desenvolvimento"
    ],
    "skills": [
      "Análise de processos",
      "Raciocínio quantitativo",
      "Investigação",
      "Trabalho em equipe"
    ],
    "plan": [
      [
        "0–30 dias",
        "Explorar",
        "Pesquise como uma matéria-prima se transforma em um produto."
      ],
      [
        "31–60 dias",
        "Praticar",
        "Desenhe o fluxograma desse processo e identifique suas etapas."
      ],
      [
        "61–90 dias",
        "Conectar",
        "Conheça projetos de pesquisa e registre o que aprendeu."
      ]
    ],
    "officialUrl": "https://www.ulbra.br/manaus/graduacao/presencial/engenharia-quimica",
    "actions": {
      "medio": [
        "Desenhe as etapas de produção de um alimento ou material cotidiano.",
        "Explore simulações educativas de mistura e separação.",
        "Relacione química, física e matemática aos processos que observou."
      ],
      "faculdade": [
        "Compare rotas de produção e suas necessidades de energia.",
        "Explore simulação de processos em um projeto orientado.",
        "Registre hipóteses, resultados e melhorias no seu portfólio."
      ],
      "explorando": [
        "Investigue a origem e a fabricação de um produto cotidiano.",
        "Compare processos quanto a consumo de recursos e resíduos.",
        "Conheça as áreas de alimentos, materiais e processos químicos."
      ]
    },
    "icon": "<svg viewBox=\"0 0 32 32\"><path d=\"M12 4h8m-6 0v9L6 26h20l-8-13V4M10 20h12\"/></svg>"
  },
  "environmental": {
    "name": "Engenharia Ambiental e Sanitária",
    "tagline": "Você conecta qualidade de vida, recursos naturais e soluções ambientais.",
    "description": "Suas escolhas apontam interesse em compreender impactos sobre água, solo e ecossistemas e em desenvolver soluções para saneamento, resíduos e recuperação ambiental.",
    "complement": "Sua atenção aos recursos naturais e aos impactos ambientais amplia a visão de projetos de outras áreas.",
    "technologies": [
      "Geoprocessamento",
      "Sensoriamento remoto",
      "Monitoramento da água",
      "Modelagem ambiental"
    ],
    "careers": [
      "Saneamento",
      "Recursos hídricos",
      "Gestão de resíduos",
      "Recuperação ambiental",
      "Gestão ambiental"
    ],
    "skills": [
      "Visão sistêmica",
      "Análise de dados",
      "Planejamento ambiental",
      "Comunicação"
    ],
    "plan": [
      [
        "0–30 dias",
        "Explorar",
        "Observe um problema de água ou resíduos no seu bairro."
      ],
      [
        "31–60 dias",
        "Praticar",
        "Crie um mapa com observações e propostas de melhoria."
      ],
      [
        "61–90 dias",
        "Conectar",
        "Converse com profissionais e registre uma proposta no portfólio."
      ]
    ],
    "officialUrl": "https://www.ulbra.br/manaus/graduacao/presencial/engenharia-ambiental-e-sanitaria",
    "actions": {
      "medio": [
        "Observe o caminho da água da chuva sem entrar em locais contaminados.",
        "Mapeie oportunidades para separar e reduzir resíduos na escola.",
        "Relacione biologia, química e matemática aos problemas ambientais."
      ],
      "faculdade": [
        "Explore geoprocessamento, saneamento ou resíduos em um projeto.",
        "Analise dados ambientais disponíveis e documente suas conclusões.",
        "Converse com profissionais de tratamento de água e gestão ambiental."
      ],
      "explorando": [
        "Observe como água e resíduos são gerenciados na sua comunidade.",
        "Elabore um mapa de problemas e possíveis melhorias.",
        "Compare saneamento, recuperação ambiental e recursos hídricos."
      ]
    },
    "icon": "<svg viewBox=\"0 0 32 32\"><path d=\"M16 3S6 15 6 21a10 10 0 0 0 20 0C26 15 16 3 16 3ZM11 22a5 5 0 0 0 5 5\"/></svg>"
  }
});


let currentQuestion = 0;
let answers = Array(questions.length).fill(null);
let audience = 'medio';


function openQuiz() {
  resetToIntro();
  quizDialog.showModal();
  document.body.classList.add('dialog-open');
}

function closeQuiz() {
  quizDialog.close();
  document.body.classList.remove('dialog-open');
}

function resetToIntro() {
  quizIntro.hidden = false;
  questionView.hidden = true;
  resultView.hidden = true;
  progressWrap.hidden = true;
  document.querySelector('#share-feedback').textContent = '';
}

function startQuiz() {
  audience = document.querySelector('input[name="audience"]:checked').value;
  currentQuestion = 0;
  answers = Array(questions.length).fill(null);
  quizIntro.hidden = true;
  questionView.hidden = false;
  progressWrap.hidden = false;
  renderQuestion();
}

function renderQuestion() {
  const item = questions[currentQuestion];
  questionNumber.textContent = `Situação ${String(currentQuestion + 1).padStart(2, '0')}`;
  questionTitle.textContent = item.title;
  progressText.textContent = `${currentQuestion + 1} de ${questions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  progressBar.parentElement.setAttribute('aria-valuenow', String(currentQuestion + 1));
  previousButton.style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';
  nextButton.innerHTML = currentQuestion === questions.length - 1 ? 'Ver meu resultado <span>→</span>' : 'Continuar <span>→</span>';
  nextButton.disabled = answers[currentQuestion] === null;

  answerList.innerHTML = '';
  item.answers.forEach(([course, label], index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `answer-option${answers[currentQuestion] === course ? ' selected' : ''}`;
    button.setAttribute('aria-pressed', answers[currentQuestion] === course ? 'true' : 'false');
    button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${label}</span><span class="answer-check" aria-hidden="true"></span>`;
    button.addEventListener('click', () => selectAnswer(course));
    answerList.appendChild(button);
  });
  questionView.animate([{opacity:.35, transform:'translateX(10px)'},{opacity:1, transform:'translateX(0)'}], {duration:220, easing:'ease-out'});
  questionTitle.focus?.({preventScroll:true});
}

function selectAnswer(course) {
  answers[currentQuestion] = course;
  [...answerList.children].forEach((button, index) => {
    const selected = questions[currentQuestion].answers[index][0] === course;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', selected ? 'true' : 'false');
  });
  nextButton.disabled = false;
}

function goNext() {
  if (answers[currentQuestion] === null) return;
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function goPrevious() {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
}

function calculateResult() {
  const counts = Object.fromEntries(Object.keys(courseData).map(key => [key, 0]));
  answers.forEach(answer => counts[answer] += 1);
  const order = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || Object.keys(courseData).indexOf(a) - Object.keys(courseData).indexOf(b));
  const raw = Object.fromEntries(Object.entries(counts).map(([key, value]) => [key, Math.round((value / questions.length) * 100)]));
  const difference = 100 - Object.values(raw).reduce((sum, value) => sum + value, 0);
  raw[order[0]] += difference;
  return {counts, percentages: raw, order};
}

function showResult() {
  const result = calculateResult();
  document.dispatchEvent(new CustomEvent("affinity-result", {detail: result.percentages}));
  const primary = result.order[0];
  const data = courseData[primary];
  const secondary = result.order[1];
  const secondaryData = courseData[secondary];
  questionView.hidden = true;
  resultView.hidden = false;
  progressWrap.hidden = true;
  document.querySelector('#result-emblem').className = `result-emblem ${primary}`;
  document.querySelector('#result-emblem').innerHTML = data.icon;
  document.querySelector('#result-title').textContent = data.name;
  const tied = result.order.filter(key => result.counts[key] === result.counts[primary]);
  document.querySelector('#result-tagline').textContent = tied.length > 1
    ? 'Empate em número de escolhas: ' + tied.map(key => courseData[key].name).join(' e ') + '. O arredondamento pode gerar um ponto de diferença no gráfico.'
    : data.tagline;
  document.querySelector('#result-description').textContent = data.description;
  document.querySelector('#result-actions').innerHTML = data.actions[audience].map(item => `<li>${item}</li>`).join('');
  document.querySelector('#result-secondary-title').textContent = secondaryData.name;
  document.querySelector('#result-secondary-copy').textContent = secondaryData.complement;
  document.querySelector('#result-tech-list').innerHTML = data.technologies.map(item => `<span>${item}</span>`).join('');
  document.querySelector('#result-careers').innerHTML = data.careers.map(item => `<span>${item}</span>`).join('');
  document.querySelector('#result-skills').innerHTML = data.skills.map(item => `<span>${item}</span>`).join('');
  document.querySelector('#result-plan').innerHTML = data.plan.map(([period, title, copy]) => `<article><b>${period}</b><strong>${title}</strong><p>${copy}</p></article>`).join('');
  document.querySelector('#result-course-link').href = data.officialUrl;
  document.querySelector('#score-bars').innerHTML = result.order.map(key => `<div class="score-row ${key}"><div class="score-row-top"><span>${courseData[key].name.replace('Engenharia ', '')}</span><b>${result.percentages[key]}%</b></div><div class="score-track"><i data-width="${result.percentages[key]}%"></i></div></div>`).join('');
  requestAnimationFrame(() => document.querySelectorAll('.score-track i').forEach(bar => { bar.style.width = bar.dataset.width; }));
  try { localStorage.setItem('engenharia360-last-result', JSON.stringify({primary, percentages: result.percentages, date: new Date().toISOString()})); } catch (_) {}
  resultView.scrollIntoView({block:'start'});
}

async function shareResult() {
  const title = document.querySelector('#result-title').textContent;
  const values = [...document.querySelectorAll('.score-row-top')].map(row => row.innerText.replace('\n', ' ')).join(' • ');
  const text = `Meu resultado no Engenharia360: ${title}. ${values}.`;
  const feedback = document.querySelector('#share-feedback');
  try {
    if (navigator.share) {
      await navigator.share({title:'Meu perfil Engenharia360', text, url:window.location.href});
      feedback.textContent = 'Resultado compartilhado.';
    } else {
      await navigator.clipboard.writeText(`${text} ${window.location.href}`);
      feedback.textContent = 'Resultado copiado para a área de transferência.';
    }
  } catch (error) {
    if (error.name !== 'AbortError') feedback.textContent = 'Não foi possível compartilhar agora. Você pode fazer uma captura da tela.';
  }
}

document.querySelectorAll('.js-open-quiz').forEach(button => button.addEventListener('click', openQuiz));
document.querySelector('#start-quiz').addEventListener('click', startQuiz);
document.querySelector('#close-quiz').addEventListener('click', closeQuiz);
document.querySelector('#next-question').addEventListener('click', goNext);
document.querySelector('#previous-question').addEventListener('click', goPrevious);
document.querySelector('#restart-quiz').addEventListener('click', startQuiz);
document.querySelector('#share-result').addEventListener('click', shareResult);
document.querySelector('#explore-result').addEventListener('click', () => { closeQuiz(); document.querySelector('#engenharias').scrollIntoView(); });
document.querySelector('.back-top').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
document.querySelector('.quiz-brand').addEventListener('click', event => event.preventDefault());
quizDialog.addEventListener('cancel', event => { event.preventDefault(); closeQuiz(); });

document.addEventListener('keydown', event => {
  if (!quizDialog.open || questionView.hidden) return;
  if (['1','2','3','4','5'].includes(event.key)) answerList.children[Number(event.key) - 1]?.click();
  if (event.key === 'Enter' && !nextButton.disabled) goNext();
});



document.querySelectorAll('.course-detail').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('.course-detail').forEach(other => {
      if (other !== detail) other.open = false;
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
