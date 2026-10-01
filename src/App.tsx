import { useState } from 'react'
import { INTERESSES } from './content'
import { Header, Hero, Marquee } from './sections/Top'
import { Casa, Convidados, Episodios, Frases, Hosts, Publicos, Sobre } from './sections/Conteudo'
import { Contato, Fechamento, Numeros, Patrocinio, Rodape } from './sections/Comercial'

export default function App() {
  const [interesse, setInteresse] = useState(INTERESSES[0])
  return (
    <>
      <a href="#sobre" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Sobre />
        <Hosts />
        <Episodios />
        <Frases />
        <Publicos />
        <Convidados />
        <Casa />
        <Numeros />
        <Patrocinio />
        <Fechamento />
        <Contato interesse={interesse} setInteresse={setInteresse} />
      </main>
      <Rodape />
    </>
  )
}
