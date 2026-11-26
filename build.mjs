import {mkdirSync,copyFileSync,cpSync,existsSync} from 'node:fs';
mkdirSync('dist',{recursive:true});
for (const file of ['index.html','apresentacao.html','app.js','styles.css','atividade.js','dados.csv','sessao.csv']) copyFileSync(file,'dist/'+file);
if (existsSync('materiais')) cpSync('materiais','dist/materiais',{recursive:true});
