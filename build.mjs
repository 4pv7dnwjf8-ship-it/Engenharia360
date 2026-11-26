
import {
  mkdirSync,
  copyFileSync,
  cpSync,
  existsSync
} from 'node:fs';

mkdirSync('dist', { recursive: true });

const arquivos = [
  'index.html',
  'apresentacao.html',
  'app.js',
  'styles.css',
  'atividade.js',
  'dados.csv',
  'sessao.csv',
  'trabalho.pdf',
  'trabalho.docx',
  'slides.pdf',
  'slides.pptx'
];

for (const arquivo of arquivos) {
  copyFileSync(arquivo, 'dist/' + arquivo);
}

if (existsSync('materiais')) {
  cpSync('materiais', 'dist/materiais', {
    recursive: true
  });
}
