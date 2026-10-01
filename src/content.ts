/**
 * Todo o texto e todos os links da página vivem aqui.
 *
 * Fontes: proposta da 3ª temporada (SIV/pptx/PodPalco_Proposta_3aTemporada_2026.pptx),
 * apresentação v2, briefing da identidade (SIV/txt) e a playlist
 * "PodPalco | Episódios Completos" no canal do Palestras Academy.
 *
 * Itens marcados com PENDENTE ainda não foram confirmados pelo projeto.
 */

export const LINKS = {
  youtubePlaylist: 'https://www.youtube.com/playlist?list=PLsQ_fvKpmkJZ6LkWsfRGumjx3VA1S8DNB',
  youtubeCanal: 'https://www.youtube.com/@palestras.academy',
  instagram: 'https://www.instagram.com/podpalco',
  /** PENDENTE: link do Spotify do PodPalco. Vazio esconde o botão. */
  spotify: '',
  palestrasAcademy: 'https://palestrasacademy.vercel.app',
}

/** PENDENTE: e-mail comercial. O formulário monta um e-mail para este endereço. */
export const CONTATO = {
  email: 'contato@podpalco.com.br',
  site: 'podpalco.com.br',
  instagram: '@podpalco',
}

export const NAV = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#hosts', label: 'Hosts' },
  { href: '#episodios', label: 'Episódios' },
  { href: '#numeros', label: 'Números' },
  { href: '#patrocinio', label: 'Patrocínio' },
]

export const HERO = {
  selo: 'Gravando a 3ª temporada · 2026',
  linhas: ['Bastidores.', 'Ideias.', 'Pessoas.'],
  frase: 'O mercado de palestras sai do palco e vai para a conversa.',
  apoio:
    'O podcast do Palestras Academy sobre carreira, bastidores, estratégia e vida real de palestrante. De palestrante para palestrante. Sem roteiro engessado e com boas doses de humor.',
}

export const MARQUEE = [
  'Bastidores',
  'Ideias',
  'Pessoas',
  'Carreira',
  'Mercado',
  'Estratégia',
  'Humor inteligente',
  'Histórias reais',
]

export const SOBRE = {
  titulo: 'Sobre o PodPalco',
  destaque: 'É conversa de quem conhece esse universo para quem quer entendê-lo de verdade.',
  paragrafos: [
    'O PodPalco é o podcast do Palestras Academy, ecossistema da Polo Palestrantes, criado para ampliar as conversas que acontecem dentro do mercado de palestras. Principalmente aquelas que quase nunca chegam ao palco.',
    'Mais do que entrevistar palestrantes, o PodPalco abre espaço para falar sobre carreira, preparação, estratégia, posicionamento, erros, acertos e tudo o que existe por trás de uma trajetória profissional no mercado de palestras.',
    'A cada episódio, nomes que já trilharam esse caminho contam o que funcionou, o que deu errado e aquilo que normalmente ninguém vê quando as luzes do palco se apagam.',
  ],
  territorios: [
    { nome: 'Bastidores', texto: 'O que acontece antes de subir e depois de descer do palco.' },
    { nome: 'Mercado', texto: 'Como o negócio de palestras funciona de verdade: cachê, agenda, contratante.' },
    { nome: 'Estratégia', texto: 'Posicionamento, preparação e as decisões que constroem uma carreira.' },
    { nome: 'Histórias reais', texto: 'O que funcionou, o que deu errado e as dificuldades que ninguém conta.' },
  ],
}

export const HOSTS = {
  titulo: 'Dois lados da mesma conversa',
  apoio: 'Quem conhece o mercado por dentro e quem vive dele no palco.',
  pessoas: [
    {
      nome: 'Dennis Penna',
      papel: 'Fundador da Polo Palestrantes',
      bio: 'Há mais de 15 anos acompanha de perto o mercado de palestras, seus bastidores, negociações e carreiras.',
      numero: '+15 anos',
      legenda: 'vivendo o mercado de palestras',
      foto: '/assets/dennis-riso.webp',
      cor: 'orange',
    },
    {
      nome: 'Fábio Borges',
      papel: 'Palestrante e criador de conteúdo',
      bio: 'Ativador de emoções, conhecido por usar o humor como ferramenta para falar de comportamento, felicidade e inteligência emocional.',
      numero: '+600 mil',
      legenda: 'seguidores nas redes',
      foto: '/assets/fabio.webp',
      cor: 'magenta',
    },
  ],
  lema: ['De palestrante para palestrante.', 'Sem pose. Com bastante história para contar.'],
}

export type Episodio = {
  numero: string
  titulo: string
  convidado: string
  sobre: string
  duracao: string
  youtube: string
  tema: string
}

/** Os mais recentes primeiro. IDs do YouTube conferidos na playlist em 01.10.2026. */
export const EPISODIOS: Episodio[] = [
  {
    numero: '038',
    titulo: 'Como se comunicar com cada geração',
    convidado: 'Alexandre Correa Lima',
    sobre: 'Palestrante, mentor e especialista em comportamento organizacional, sobre o encontro de gerações no trabalho e na plateia.',
    duracao: '1h06',
    youtube: '6KvVlXz1Gs0',
    tema: 'Comunicação',
  },
  {
    numero: '037',
    titulo: 'Agilidade emocional: transformando emoções',
    convidado: 'Haila Santuá',
    sobre: 'Empresária, palestrante e mentora de mulheres empreendedoras, sobre transformar emoção em resultado.',
    duracao: '1h10',
    youtube: 'hmTdA_37cN0',
    tema: 'Comportamento',
  },
  {
    numero: '036',
    titulo: 'Sua voz está sabotando sua carreira de palestrante?',
    convidado: 'Dr. Luiz Cantoni',
    sobre: 'Referência nacional em saúde vocal, sobre a voz como ferramenta de trabalho de quem vive de palco.',
    duracao: '1h21',
    youtube: '3Dt35EXmJdI',
    tema: 'Preparação',
  },
  {
    numero: '035',
    titulo: 'Encantar é preciso: o poder da experiência nas palestras',
    convidado: 'Manoel Carlos Jr.',
    sobre: 'O que diferencia palestrantes bons de palestrantes memoráveis: a experiência que fica depois do aplauso.',
    duracao: '1h03',
    youtube: 'vRRWnr5iVrU',
    tema: 'Experiência',
  },
  {
    numero: '034',
    titulo: 'Palestrando com performance: o poder do Google Ads',
    convidado: 'Bruno Silveira',
    sobre: 'O fundador da Sumaúma mostra como usar mídia paga a favor da agenda — no palco e nos bastidores.',
    duracao: '1h04',
    youtube: 'pKMJqYV5r0Y',
    tema: 'Mercado',
  },
  {
    numero: '029',
    titulo: 'O que o contratante espera do palestrante?',
    convidado: 'Adriana Rebecchi',
    sobre: 'Do lado de quem contrata: o que o Sebrae-SP observa antes, durante e depois de uma palestra.',
    duracao: '1h03',
    youtube: 'SMXhRSZYiXc',
    tema: 'Contratante',
  },
  {
    numero: '028',
    titulo: 'Autenticidade na carreira do palestrante',
    convidado: 'Rafael Cortez',
    sobre: 'Como ser verdadeiro vira o maior diferencial para se destacar no mercado.',
    duracao: '1h06',
    youtube: 'FtVAVElLKe4',
    tema: 'Carreira',
  },
  {
    numero: '023',
    titulo: 'Dicas de um dos palestrantes mais vendidos em 2024',
    convidado: 'Igor Drudi',
    sobre: 'Um dos nomes mais requisitados do país abre o que sustenta uma agenda cheia.',
    duracao: '1h02',
    youtube: 'sVNUuRFezKU',
    tema: 'Carreira',
  },
  {
    numero: '012',
    titulo: 'Usando o humor para conectar e engajar',
    convidado: 'Fábio Rabin',
    sobre: 'Um dos pioneiros do stand-up no Brasil, sobre o humor como ferramenta de conexão com a plateia.',
    duracao: '1h08',
    youtube: 'c0dl_A1Kr5M',
    tema: 'Humor',
  },
  {
    numero: '002',
    titulo: 'Roteiro da palestra perfeita',
    convidado: 'Joni Galvão',
    sobre: 'O fundador da SOAP e da The Plot Company sobre storytelling e estrutura de apresentações inesquecíveis.',
    duracao: '58min',
    youtube: 'iZGdCacSmaw',
    tema: 'Roteiro',
  },
  {
    numero: '001',
    titulo: 'Segredos do mercado de palestras',
    convidado: 'Dennis Penna',
    sobre: 'O episódio que abriu tudo: os bastidores do mercado de palestras no Brasil, por quem negocia mais de 2.000 palestras por ano.',
    duracao: '1h09',
    youtube: 'Z40_e3Vurz8',
    tema: 'Bastidores',
  },
]

/** Frases da própria marca — nenhuma é atribuída a um convidado. */
export const FRASES = [
  'As conversas que constroem uma carreira acontecem muito além do palco.',
  'O que normalmente ninguém vê quando as luzes do palco se apagam.',
  'De palestrante para palestrante. Sem roteiro engessado.',
  'O que funcionou, o que deu errado e as dificuldades que ninguém conta.',
  'Mais do que exposição: presença dentro da conversa.',
]

/** "Escolha o que você precisa hoje", adaptado ao público do briefing. */
export const PUBLICOS = [
  {
    id: 'palestrante',
    nome: 'Palestrantes',
    titulo: 'Para quem já vive de palco',
    texto: 'Agenda, posicionamento, cachê e reinvenção. Conversa franca com quem já passou pelos mesmos dilemas.',
    episodio: '023',
  },
  {
    id: 'comecando',
    nome: 'Quem está começando',
    titulo: 'Para quem quer subir no palco',
    texto: 'Roteiro, método, oratória e o primeiro contrato. O caminho contado por quem já trilhou.',
    episodio: '002',
  },
  {
    id: 'contratante',
    nome: 'Contratantes',
    titulo: 'Para quem decide a contratação',
    texto: 'O que avaliar, o que perguntar e o que faz uma palestra conversar com o evento.',
    episodio: '029',
  },
  {
    id: 'produtor',
    nome: 'Produtores de evento',
    titulo: 'Para quem monta o evento',
    texto: 'Experiência, entrega e os bastidores que separam um evento comum de um evento lembrado.',
    episodio: '035',
  },
  {
    id: 'admirador',
    nome: 'Admiradores',
    titulo: 'Para quem gosta de boas histórias',
    texto: 'O lado que não aparece no palco: trajetórias, tropeços e muito humor.',
    episodio: '012',
  },
]

export const CONVIDADOS = {
  titulo: 'Convidados da 3ª temporada',
  apoio: 'Nomes que vivem de palco e compartilham experiências reais, sem verniz.',
  nomes: ['João Branco', 'Marcos Piangers', 'Murilo Gun'],
  aDefinir: 2,
}

export const CASA = {
  selo: 'Sales Village',
  titulo: 'O PodPalco ganha uma nova casa.',
  texto: [
    'A terceira temporada será gravada no Sales Village, um ambiente pensado para negócios, eventos e produção de conteúdo.',
    'Mais do que um cenário, o espaço cria a atmosfera ideal para as conversas do PodPalco: mercado, relacionamento, conteúdo e novas conexões acontecendo no mesmo lugar.',
  ],
  destaque: 'O palco fora do palco desta nova fase.',
  chip: 'Estrutura profissional de áudio e vídeo',
}

export const NUMEROS = {
  titulo: 'Um projeto. Várias camadas de alcance.',
  apoio: 'Conteúdo próprio, hosts com audiência e o maior ecossistema de palestras do país por trás.',
  itens: [
    { valor: 2, prefixo: '+', sufixo: ' mi', rotulo: 'de pessoas alcançadas por ano', fonte: 'Eventos do ecossistema Polo', destaque: true },
    { valor: 35, prefixo: '+', sufixo: '', rotulo: 'episódios publicados', fonte: 'Conteúdo' },
    { valor: 600, prefixo: '+', sufixo: ' mil', rotulo: 'seguidores nas redes', fonte: 'Fábio Borges' },
    { valor: 17, prefixo: '+', sufixo: ' mil', rotulo: 'eventos realizados', fonte: 'Ecossistema Polo' },
    { valor: 15, prefixo: '+', sufixo: ' anos', rotulo: 'vivendo o mercado de palestras', fonte: 'Dennis Penna' },
  ],
  convidados: 'Cada convidado chega com alcance próprio: admiradores e seguidores que acompanham o episódio.',
}

export const PATROCINIO = {
  selo: 'Patrocínio',
  titulo: 'Sua marca dentro da conversa que movimenta o mercado de palestras.',
  apoio:
    'Quem ouve o PodPalco contrata, produz ou vive de palestras. Uma audiência de nicho, de alta intenção — o oposto de mídia de massa.',
  pilares: [
    { nome: 'Recorrência', texto: 'Presença ao longo de todos os episódios: abertura, encerramento e menções dos hosts.' },
    { nome: 'Integração', texto: 'Inserções dentro da experiência visual e da comunicação, no cenário e nos vídeos.' },
    { nome: 'Cocriação', texto: 'Editoria própria, episódios proprietários e conteúdo construído com a marca.' },
  ],
  formas: [
    { grupo: 'Áudio', itens: ['Abertura e encerramento', 'Menções dos hosts', 'Episódios proprietários'] },
    { grupo: 'Visual', itens: ['Presença no cenário', 'Inserção nos vídeos', 'Identidade na vinheta'] },
    { grupo: 'Social', itens: ['Cortes para redes', 'Posts colaborativos', 'Bastidores'] },
    { grupo: 'Relação', itens: ['Ativações especiais', 'Conteúdos customizados', 'Convidados e comunidade'] },
  ],
}

export const INTERESSES = [
  'Patrocínio da temporada',
  'Episódio especial',
  'Apoio',
  'Patrocínio de quadro',
  'Investir no projeto',
  'Quero ser convidado',
  'Outro assunto',
]

export const FECHAMENTO = {
  linha1: 'O mercado de palestras já está conversando.',
  linha2: 'A pergunta é: sua marca vai assistir ou fazer parte?',
}
