import { useState, type FormEvent } from 'react'
import { CONTATO, FECHAMENTO, INTERESSES, LINKS, NAV, NUMEROS, PATROCINIO } from '../content'
import { Logo, Symbol } from '../components/brand'
import { Eyebrow, IconArrow, Reveal, useCountUp, useReveal } from '../components/ui'
import { Platforms } from './Top'

/* ===== Números ===== */
function Stat({ item, i }: { item: (typeof NUMEROS.itens)[number]; i: number }) {
  const [ref, v] = useCountUp(item.valor)
  const big = item.destaque
  return (
    <Reveal delay={i * 80} className={big ? 'sm:col-span-2 lg:row-span-2' : ''}>
      <div
        className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] p-7 md:p-8 ${
          big ? 'min-h-[18rem] bg-gradient-to-br from-orange via-pink to-magenta' : 'min-h-[12rem] border border-white/10 bg-ink-2'
        }`}
      >
        {big && <div className="halftone-pink absolute inset-0 opacity-50" />}
        <p className={`eyebrow relative ${big ? 'text-white/90' : 'text-pink'}`}>{item.fonte}</p>
        <div className="relative">
          <p className={`display tabular-nums ${big ? 'whitespace-nowrap text-[clamp(4rem,9vw,8rem)]' : 'whitespace-nowrap text-[clamp(2.6rem,4vw,3.6rem)]'}`}>
            {item.prefixo === '+' ? item.prefixo : <span className="mb-[0.35em] block text-[0.3em] tracking-[0.08em]">{item.prefixo}</span>}
            <span ref={ref}>{v}</span>
            <span className="ml-[0.12em] text-[0.48em]">{item.sufixo.trim()}</span>
          </p>
          <p className={`mt-2 ${big ? 'text-xl font-semibold' : 'text-white/70'}`}>{item.rotulo}</p>
        </div>
      </div>
    </Reveal>
  )
}

export function Numeros() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="numeros" ref={ref} className="relative overflow-hidden py-24 md:py-36">
      <div className="halftone halftone-fade absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Alcance</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2rem,4.2vw,3.5rem)]">{NUMEROS.titulo}</h2>
          <p className="mt-5 text-lg text-mute">{NUMEROS.apoio}</p>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NUMEROS.itens.map((it, i) => (
            <Stat key={it.rotulo} item={it} i={i} />
          ))}
        </div>
        <Reveal className="mt-4">
          <div className="flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-ink-2 p-6 md:p-7">
            <Symbol className="h-9 w-auto shrink-0" />
            <p className="text-white/80">{NUMEROS.convidados}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ===== Patrocínio ===== */
export function Patrocinio() {
  const ref = useReveal<HTMLElement>()
  const cores = ['text-orange', 'text-coral', 'text-pink', 'text-magenta']
  return (
    <section id="patrocinio" ref={ref} className="relative overflow-hidden bg-ink-2 py-24 md:py-36">
      <div className="absolute -right-40 top-20 h-[32rem] w-[32rem] rounded-full bg-magenta/20 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <Reveal>
            <Eyebrow>{PATROCINIO.selo}</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2rem,4.2vw,3.5rem)]">
              Sua marca <span className="text-spectrum">dentro da conversa.</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xl font-semibold leading-snug">A conversa que movimenta o mercado de palestras.</p>
            <p className="mt-4 text-lg leading-relaxed text-white/75">{PATROCINIO.apoio}</p>
            <p className="mt-4 text-lg text-white/75">Mais do que exposição: a marca não fica ao lado do conteúdo, ela entra nele.</p>
          </Reveal>
        </div>

        {/* Pilares */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {PATROCINIO.pilares.map((p, i) => (
            <Reveal key={p.nome} delay={i * 90}>
              <div className="h-full rounded-[1.75rem] border border-white/10 bg-ink p-7 md:p-8">
                <span className={`display text-4xl ${cores[i]}`}>+</span>
                <h3 className="display mt-6 text-2xl">{p.nome}</h3>
                <p className="mt-3 text-white/70">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Doze formas */}
        <Reveal className="mt-20">
          <h3 className="display text-[clamp(1.6rem,3vw,2.4rem)]">
            Doze formas de estar <span className="text-spectrum">dentro</span>
          </h3>
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {PATROCINIO.formas.map((f, i) => (
            <Reveal key={f.grupo} delay={i * 80} className="bg-ink p-7">
              <p className={`display-light text-sm ${cores[i]}`}>0{i + 1}</p>
              <p className="display mt-4 text-xl">{f.grupo}</p>
              <ul className="mt-5 space-y-2.5 text-white/75">
                {f.itens.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-current ${cores[i]}`} />
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ===== Fechamento ===== */
export function Fechamento() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} className="grain relative isolate overflow-hidden py-28 md:py-40">
      <div className="halftone halftone-fade absolute inset-0 -z-10" />
      <Symbol className="absolute -right-24 top-1/2 -z-10 h-[30rem] w-auto -translate-y-1/2 opacity-[0.12] md:h-[42rem]" />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <h2 className="display text-[clamp(2.2rem,5vw,4.6rem)]">{FECHAMENTO.linha1}</h2>
          <p className="mt-8 max-w-3xl text-[clamp(1.4rem,2.6vw,2.2rem)] font-bold leading-tight">
            A pergunta é: sua marca vai assistir ou <span className="text-spectrum">fazer parte?</span>
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <a href="#contato" className="btn btn-primary !px-8 !py-4 text-base">
              Quero fazer parte <IconArrow />
            </a>
            <a href="#episodios" className="btn btn-ghost !px-8 !py-4 text-base">
              Ouvir antes
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ===== Contato ===== */
export function Contato({ interesse, setInteresse }: { interesse: string; setInteresse: (s: string) => void }) {
  const ref = useReveal<HTMLElement>()
  const [enviado, setEnviado] = useState(false)

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const linhas = [
      `Interesse: ${interesse}`,
      `Nome: ${f.get('nome')}`,
      `Empresa: ${f.get('empresa') || '-'}`,
      `E-mail: ${f.get('email')}`,
      `WhatsApp: ${f.get('whatsapp') || '-'}`,
      '',
      String(f.get('mensagem') || ''),
    ]
    const assunto = `PodPalco · ${interesse} · ${f.get('empresa') || f.get('nome')}`
    window.location.href = `mailto:${CONTATO.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(linhas.join('\n'))}`
    setEnviado(true)
  }

  const campo =
    'w-full rounded-2xl border border-white/15 bg-ink px-5 py-4 text-white placeholder:text-white/35 transition focus:border-pink focus:outline-none'

  return (
    <section id="contato" ref={ref} className="relative bg-ink-2 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <Eyebrow>Fale com a gente</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2rem,4.2vw,3.5rem)]">Vamos conversar.</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Patrocínio, episódio especial, investimento no projeto ou uma ideia de pauta. Conte o que você tem em mente e o time do PodPalco monta a proposta junto com você.
          </p>
          <div className="mt-10 space-y-4 text-white/80">
            <p>
              <span className="eyebrow block text-white/45">Instagram</span>
              <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-pink">
                {CONTATO.instagram}
              </a>
            </p>
            <p>
              <span className="eyebrow block text-white/45">E-mail</span>
              <a href={`mailto:${CONTATO.email}`} className="text-lg font-semibold hover:text-pink">
                {CONTATO.email}
              </a>
            </p>
          </div>
          <p className="mt-10 text-sm text-mute">Uma produção Palestras Academy · Ecossistema Polo Palestrantes</p>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-ink p-6 md:p-10">
            <fieldset>
              <legend className="eyebrow text-white/60">Qual o interesse?</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {INTERESSES.map((i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setInteresse(i)}
                    aria-pressed={interesse === i}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      interesse === i ? 'border-transparent bg-gradient-to-r from-orange to-pink text-white' : 'border-white/20 text-white/70 hover:border-white/60 hover:text-white'
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Seu nome</span>
                <input required name="nome" placeholder="Seu nome*" autoComplete="name" className={campo} />
              </label>
              <label className="block">
                <span className="sr-only">Empresa ou marca</span>
                <input name="empresa" placeholder="Empresa ou marca" autoComplete="organization" className={campo} />
              </label>
              <label className="block">
                <span className="sr-only">E-mail</span>
                <input required type="email" name="email" placeholder="E-mail*" autoComplete="email" className={campo} />
              </label>
              <label className="block">
                <span className="sr-only">WhatsApp</span>
                <input name="whatsapp" type="tel" placeholder="WhatsApp" autoComplete="tel" className={campo} />
              </label>
              <label className="block sm:col-span-2">
                <span className="sr-only">Mensagem</span>
                <textarea name="mensagem" rows={4} placeholder="Conte um pouco sobre a sua marca e o que você imagina" className={`${campo} resize-none`} />
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-6 w-full !py-4 text-base">
              Enviar mensagem <IconArrow />
            </button>
            <p className="mt-4 text-center text-sm text-mute" aria-live="polite">
              {enviado ? 'Abrimos o seu e-mail com a mensagem pronta. É só enviar.' : 'Ao enviar, abrimos o seu e-mail com a mensagem pronta.'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

/* ===== Rodapé ===== */
export function Rodape() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="text-2xl" />
            <p className="display-light mt-5 text-sm tracking-[0.25em] text-white/70">Bastidores · Ideias · Pessoas</p>
            <p className="mt-5 max-w-sm text-mute">O mercado de palestras sai do palco e vai para a conversa.</p>
            <Platforms className="mt-6" />
          </div>
          <nav aria-label="Rodapé">
            <p className="eyebrow text-white/45">Navegue</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-white/75 hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contato" className="text-white/75 hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <p className="eyebrow text-white/45">Ecossistema</p>
            <a href={LINKS.palestrasAcademy} target="_blank" rel="noreferrer" className="mt-5 block opacity-80 transition hover:opacity-100" aria-label="Palestras Academy">
              <img src="/assets/palestras-academy-branco.svg" alt="Palestras Academy" className="-ml-3 h-28 w-auto" />
            </a>
            <p className="mt-5 text-sm text-mute">Uma produção Palestras Academy, do ecossistema Polo Palestrantes. 3ª temporada gravada no Sales Village.</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row">
          <p>© 2026 PodPalco · {CONTATO.site}</p>
          <p>A conversa continua.</p>
        </div>
      </div>
    </footer>
  )
}
