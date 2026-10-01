# PodPalco — site

Landing page do PodPalco, o podcast do Palestras Academy. Objetivo: apresentar o podcast como produto e captar patrocinadores e investidores para a 3ª temporada (2026).

Vite + React + TypeScript + Tailwind CSS 4. Página estática, pronta para Vercel.

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # gera dist/
```

## Onde mexer

- **Textos, episódios, números, cotas e links:** `src/content.ts` — nada de copy espalhado nos componentes.
- **Cores e fontes da marca:** bloco `@theme` em `src/index.css` (paleta do SIV: Flame Orange, Strawberry Red, Neon Pink, Hyper Magenta, Electric Indigo, Ink Black).
- **Símbolo (os dois balões):** `src/components/brand.tsx`.
- **Fotos:** `public/assets/`.

## Pendências

- E-mail comercial (`CONTATO.email`) — hoje `contato@podpalco.com.br`, a confirmar. O formulário abre o e-mail da pessoa com a mensagem pronta para esse endereço.
- Link do Spotify (`LINKS.spotify`) — vazio esconde o botão.
- Fotos e confirmação dos convidados da 3ª temporada.
