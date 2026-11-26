(() => {
  const questions = [
    'Qual é a diferença entre a atuação da Engenharia Civil e a da Engenharia Ambiental e Sanitária em um problema de alagamento na cidade?',
    'Cite uma área da engenharia e descreva um exemplo concreto de sua atuação.',
    'Qual atividade de engenharia desperta seu interesse e por quê? Cite também outra área ou atividade que você consideraria explorar.'
  ];
  const ratings = ['A linguagem foi clara.', 'A navegação foi fácil.', 'As explicações ajudaram a distinguir as áreas.', 'A atividade incentivou a conhecer mais sobre engenharias.'];
  const scale = ['Discordo totalmente','Discordo','Nem concordo nem discordo','Concordo','Concordo totalmente'];
  const panel = document.querySelector('#activity-work');
  const begin = document.querySelector('#begin-session');
  let stage = 0;
  let record;
  function heading(step,title) {
    return '<p class="eyebrow eyebrow-dark">'+step+'</p><h3 tabindex="-1">'+title+'</h3>';
  }
  function focusPanel() {
    panel.querySelector('h3').focus({preventScroll:true});
    panel.scrollIntoView({block:'start'});
  }
  function form(final) {
    const fields = questions.map((q,i)=>'<label>'+q+'<textarea name="q'+i+'" maxlength="1600" required></textarea></label>').join('');
    const perception = final ? '<h3>Percepção de uso</h3><p>Itens opcionais.</p>'+ratings.map((q,i)=>'<label>'+q+'<select name="r'+i+'"><option value="">Prefiro não responder</option>'+scale.map((s,j)=>'<option value="'+(j+1)+'">'+(j+1)+' · '+s+'</option>').join('')+'</select></label>').join('')+'<label>Dificuldade ou sugestão (opcional)<textarea name="suggestion" maxlength="800"></textarea></label>' : '';
    panel.innerHTML = heading(final?'Etapa final':'Diagnóstico inicial',final?'Retome as três perguntas':'O que você já sabe?')+'<p>Use suas palavras. Se não souber, escreva “não sei”. Evite nomes e contatos. As respostas ficam nesta página até você sair. A participação é voluntária.</p><form>'+fields+perception+'<button class="button button-primary">'+(final?'Concluir atividade':'Explorar o caso')+'</button></form>';
    const element=panel.querySelector('form');
    element.addEventListener('submit',e=>{
      e.preventDefault();
      const values = new FormData(element);
      const texts=questions.map((pergunta,i)=>({pergunta,resposta:values.get('q'+i).trim()}));
      const empty=texts.findIndex(item=>!item.resposta);
      if(empty!==-1){element.elements['q'+empty].focus();return;}
      if(final){
        record.final=texts;
        record.percepcao=ratings.map((item,i)=>({item,nota:Number(values.get('r'+i))||null}));
        record.sugestao=values.get('suggestion').trim();
        finish();
      }else{record.inicial=texts;explore();}
    });
    focusPanel();
  }
  function explore(){
    stage=2;
    panel.innerHTML=heading('Exploração e mediação','Uma rua alaga após o temporal')+'<p>A Civil dimensiona a galeria. A Ambiental e Sanitária investiga os resíduos levados ao igarapé. Se a água precisar ser bombeada, a Mecânica seleciona a bomba e a Elétrica cuida da alimentação e dos controles. A Química pode estudar um processo de tratamento se houver contaminantes.</p><p><b>Converse:</b> uma galeria maior resolve o problema de quem mora perto do igarapé? O que a equipe precisaria investigar?</p><button class="button button-primary" id="guided-quiz">Explorar minhas afinidades</button> <button class="button secondary" id="guided-final">Responder às perguntas finais</button><p id="guided-status" role="status">O teste reúne nove situações. Ao terminar, feche o resultado para voltar à atividade.</p>';
    panel.querySelector('#guided-quiz').onclick=openQuiz;
    panel.querySelector('#guided-final').onclick=()=>{stage=3;form(true);};
    focusPanel();
  }
  document.addEventListener('affinity-result',e=>{
    if(stage===2){record.afinidades_percentuais={...e.detail};panel.querySelector('#guided-status').textContent='Resultado de afinidade incluído nesta sessão.';}
  });
  function finish(){
    stage=4;
    panel.innerHTML=heading('Registro da sessão','Atividade concluída')+'<p>Você pode baixar suas respostas iniciais e finais, as percepções e o resultado do teste, se concluído durante a exploração. A classificação das respostas abertas cabe aos avaliadores.</p><button class="button button-primary" id="guided-export">Baixar respostas em JSON</button> <a class="button secondary" href="#resultados">Consultar o exemplo didático</a>';
    panel.querySelector('#guided-export').onclick=()=>{
      const uri=URL.createObjectURL(new Blob([JSON.stringify(record,null,2)],{type:'application/json'}));
      const link=document.createElement('a');link.href=uri;link.download='Engenharia360_sessao.json';link.click();setTimeout(()=>URL.revokeObjectURL(uri),1000);
    };
    begin.textContent='Iniciar nova atividade';
    focusPanel();
  }
  begin.onclick=()=>{
    if(stage>0&&stage<4){focusPanel();return;}
    record={origem:'Sessão individual neste dispositivo',inicial:[],final:[],afinidades_percentuais:null};stage=1;panel.hidden=false;begin.textContent='Retomar atividade';form(false);
  };
})();
