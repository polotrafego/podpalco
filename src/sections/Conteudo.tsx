import { useEffect, useRef, useState } from 'react'
import { CASA, CONVIDADOS, EPISODIOS, FRASES, HOSTS, LINKS, PUBLICOS, SOBRE, type Episodio } from '../content'
import { Symbol } from '../components/brand'
import { Eyebrow, IconArrow, IconChevron, IconPlay, IconYouTube, Reveal, useReveal } from '../components/ui'

const ACCENT = ['text-orange', 'text-coral', 'text-pink', 'text-magenta']
const ACCENT_BG = ['bg-orange', 'bg-coral', 'bg-pink', 'bg-magenta']

/* ===== Sobre ===== */
export function Sobre() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="sobre" ref={ref} className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>O podcast</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2rem,4.2vw,3.5rem)]">
              Sobre o <span className="text-spectrum">PodPalco</span>
            </h2>
            <p className="mt-8 border-l-2 border-pink pl-5 text-xl font-semibold leading-snug md:text-2xl">{SOBRE.destaque}</p>
          </Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-white/75">
            {SOBRE.paragrafos.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {SOBRE.territorios.map((t, i) => (
            <Reveal key={t.nome} delay={i * 90} className="group relative bg-ink p-7 transition-colors duration-500 hover:bg-ink-2 md:p-9">
              <span className={`display-light text-sm ${ACCENT[i]}`}>0{i + 1}</span>
              <h3 className="display mt-10 text-2xl md:text-[1.7rem]">{t.nome}</h3>
              <p className="mt-3 text-white/65">{t.texto}</p>
              <span className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${ACCENT_BG[i]}`} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== Hosts ===== */
export function Hosts() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="hosts" ref={ref} className="relative overflow-hidden bg-ink-2 py-24 md:py-36">
      <div className="halftone halftone-fade absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Quem conduz</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2rem,4.2vw,3.5rem)]">{HOSTS.titulo}</h2>
          <p className="mt-5 text-lg text-mute">{HOSTS.apoio}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {HOSTS.pessoas.map((h, i) => {
            const orange = h.cor === 'orange'
            return (
              <Reveal key={h.nome} delay={i * 120}>
                <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink">
                  <div className={`relative aspect-[4/3.4] overflow-hidden ${orange ? 'bg-orange' : 'bg-magenta'}`}>
                    <img
                      src={h.foto}
                      alt={`${h.nome}, ${h.papel}`}
                      loading="lazy"
                      className={`h-full w-full object-cover mix-blend-luminosity grayscale transition duration-700 group-hover:scale-105 group-hover:mix-blend-normal group-hover:grayscale-0 ${orange ? 'object-[40%_30%]' : 'object-[50%_35%]'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                      <div>
                        <p className={`eyebrow ${orange ? 'text-orange' : 'text-pink'}`}>{h.papel}</p>
                        <h3 className="display mt-2 text-3xl md:text-4xl">{h.nome}</h3>
                      </div>
                      <Symbol className="h-10 w-auto shrink-0 opacity-90" />
                    </div>
                  </div>
                  <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8">
                    <p className="text-white/75">{h.bio}</p>
                    <div className="md:text-right">
                      {h.antes && <p className={`eyebrow ${orange ? 'text-orange' : 'text-pink'}`}>{h.antes}</p>}
                      <p className={`display text-4xl ${orange ? 'text-orange' : 'text-pink'}`}>{h.numero}</p>
                      <p className="mt-1 text-sm text-mute">{h.legenda}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="display text-xl md:text-2xl">{HOSTS.lema[0]}</p>
          <p className="text-lg text-mute">{HOSTS.lema[1]}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ===== Episódios ===== */
/**
 * Capa do YouTube. Nem todo vídeo tem maxresdefault, e o 404 do YouTube vem com
 * uma imagem cinza de 120px no corpo — então a troca é feita pelo tamanho, não
 * pelo onError. As versões sd/hq são 4:3 com tarja; o object-cover corta a tarja.
 */
const QUALIDADES = ['maxresdefault', 'sddefault', 'hqdefault']
function Thumb({ id, alt, className }: { id: string; alt: string; className: string }) {
  const [q, setQ] = useState(0)
  const next = () => setQ((x) => Math.min(x + 1, QUALIDADES.length - 1))
  return (
    <img
      src={`https://i.ytimg.com/vi/${id}/${QUALIDADES[q]}.jpg`}
      alt={alt}
      loading="lazy"
      onLoad={(e) => e.currentTarget.naturalWidth <= 120 && next()}
      onError={next}
      className={className}
    />
  )
}
const watch = (id: string) => `https://www.youtube.com/watch?v=${id}`

function EpisodeCard({ ep, i }: { ep: Episodio; i: number }) {
  const badge = i === 0 ? 'Novo' : ep.numero === '001' ? 'Onde tudo começou' : null
  return (
    <a
      href={watch(ep.youtube)}
      target="_blank"
      rel="noreferrer"
      className="group flex w-[82vw] max-w-[24rem] shrink-0 snap-start flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-2 transition duration-500 hover:-translate-y-1.5 hover:border-pink/60 sm:w-[22rem]"
    >
      <div className="relative aspect-video overflow-hidden bg-ink-3">
        <Thumb id={ep.youtube} alt={`Capa do episódio ${ep.numero}: ${ep.titulo}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold backdrop-blur">#{ep.numero}</span>
        {badge && <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-orange to-pink px-3 py-1 text-xs font-bold uppercase tracking-wide">{badge}</span>}
        <span className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-white text-ink transition duration-500 group-hover:scale-110 group-hover:bg-pink group-hover:text-white">
          <IconPlay className="ml-0.5 h-5 w-5" />
        </span>
        <span className="absolute bottom-4 left-4 text-xs font-semibold text-white/80">{ep.duracao}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-pink">{ep.tema}</p>
        <h3 className="mt-3 text-xl font-bold leading-snug">{ep.titulo}</h3>
        <p className="mt-2 text-sm font-semibold text-white/85">com {ep.convidado}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-mute">{ep.sobre}</p>
      </div>
    </a>
  )
}

export function Episodios() {
  const ref = useReveal<HTMLElement>()
  const track = useRef<HTMLDivElement>(null)
  const scroll = (dir: number) => track.current?.scrollBy({ left: dir * 380, behavior: 'smooth' })
  return (
    <section id="episodios" ref={ref} className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <Eyebrow>No ar</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2rem,4.2vw,3.5rem)]">Últimos episódios</h2>
            <p className="mt-5 text-lg text-mute">Mais de 35 conversas com quem vive o mercado. Episódios completos, toda semana, no YouTube.</p>
          </Reveal>
          <Reveal className="flex items-center gap-3">
            <button onClick={() => scroll(-1)} aria-label="Episódios anteriores" className="grid h-12 w-12 place-items-center rounded-full border border-white/20 transition hover:border-white hover:bg-white/5">
              <IconChevron dir="left" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Próximos episódios" className="grid h-12 w-12 place-items-center rounded-full border border-white/20 transition hover:border-white hover:bg-white/5">
              <IconChevron />
            </button>
          </Reveal>
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-8 xl:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        style={{ scrollPaddingLeft: 'max(1.25rem, calc((100vw - 80rem) / 2 + 2rem))' }}
      >
        {EPISODIOS.map((ep, i) => (
          <EpisodeCard key={ep.youtube} ep={ep} i={i} />
        ))}
        <a
          href={LINKS.youtubePlaylist}
          target="_blank"
          rel="noreferrer"
          className="group relative flex w-[82vw] max-w-[24rem] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-orange via-pink to-magenta p-8 sm:w-[22rem]"
        >
          <div className="halftone-pink absolute inset-0 opacity-60" />
          <IconYouTube className="relative h-10 w-10" />
          <div className="relative">
            <p className="display text-6xl">+35</p>
            <p className="mt-3 text-xl font-bold">episódios completos esperando por você.</p>
            <span className="mt-8 inline-flex items-center gap-2 font-bold">
              Ver playlist <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}

/* ===== Frases ===== */
export function Frases() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % FRASES.length), 4200)
    return () => clearInterval(t)
  }, [])
  return (
    <section aria-label="Frases do PodPalco" className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-indigo/25 via-ink to-magenta/20 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        <p className="eyebrow text-white/50">A conversa continua</p>
        <div className="relative mt-8 grid min-h-[9rem] place-items-center md:min-h-[8rem]">
          {FRASES.map((f, k) => (
            <p
              key={f}
              aria-hidden={k !== i}
              className={`col-start-1 row-start-1 text-[clamp(1.6rem,3.6vw,3rem)] font-bold leading-tight transition-all duration-700 ${k === i ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
            >
              “{f}”
            </p>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {FRASES.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Frase ${k + 1}`} className={`h-1.5 rounded-full transition-all ${k === i ? 'w-8 bg-pink' : 'w-3 bg-white/25'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== Para quem é ===== */
export function Publicos() {
  const ref = useReveal<HTMLElement>()
  const [ativo, setAtivo] = useState(PUBLICOS[0].id)
  const p = PUBLICOS.find((x) => x.id === ativo)!
  const ep = EPISODIOS.find((e) => e.numero === p.episodio)!
  return (
    <section id="para-quem" ref={ref} className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Para quem é</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2rem,4.2vw,3.5rem)]">
            Escolha o seu <span className="text-spectrum">lugar na plateia</span>
          </h2>
          <p className="mt-5 text-lg text-mute">Palestrantes, quem está começando, produtores, contratantes e admiradores. Cada um sai com algo diferente da mesma conversa.</p>
        </Reveal>

        <Reveal className="no-scrollbar mt-12 -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0">
          {PUBLICOS.map((x) => (
            <button
              key={x.id}
              onClick={() => setAtivo(x.id)}
              aria-pressed={x.id === ativo}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${x.id === ativo ? 'border-transparent bg-white text-ink' : 'border-white/20 text-white/75 hover:border-white/60 hover:text-white'}`}
            >
              {x.nome}
            </button>
          ))}
        </Reveal>

        <Reveal className="mt-8">
          <div key={p.id} className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 lg:grid-cols-[1fr_1.1fr]" style={{ animation: 'fadeUp .5s ease both' }}>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h3 className="display text-3xl md:text-4xl">{p.titulo}</h3>
              <p className="mt-5 text-lg text-white/75">{p.texto}</p>
              <p className="eyebrow mt-10 text-white/45">Comece por este episódio</p>
              <p className="mt-3 text-xl font-bold">
                #{ep.numero} · {ep.titulo}
              </p>
              <p className="mt-1 text-white/65">com {ep.convidado}</p>
              <a href={watch(ep.youtube)} target="_blank" rel="noreferrer" className="btn btn-primary mt-8 self-start">
                <IconPlay /> Ver episódio
              </a>
            </div>
            <a href={watch(ep.youtube)} target="_blank" rel="noreferrer" className="group relative block min-h-[16rem] overflow-hidden" aria-label={`Assistir episódio ${ep.numero}`}>
              <Thumb id={ep.youtube} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink-2 via-ink-2/20 to-transparent max-lg:bg-gradient-to-t" />
              <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-ink transition group-hover:scale-110 group-hover:bg-pink group-hover:text-white">
                <IconPlay className="ml-1 h-7 w-7" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ===== Convidados ===== */
export function Convidados() {
  const ref = useReveal<HTMLElement>()
  const grad = ['from-orange to-coral', 'from-coral to-pink', 'from-pink to-magenta']
  return (
    <section id="convidados" ref={ref} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <Eyebrow>3ª temporada · 2026</Eyebrow>
            <h2 className="display mt-6 text-[clamp(2rem,4.2vw,3.5rem)]">{CONVIDADOS.titulo}</h2>
          </Reveal>
          <Reveal>
            <p className="max-w-sm text-lg text-mute">{CONVIDADOS.apoio}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_0.7fr_0.7fr]">
          {CONVIDADOS.nomes.map((n, i) => (
            <Reveal key={n} delay={i * 90}>
              <div className={`group relative flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-[1.5rem] sm:aspect-[3/4] bg-gradient-to-br p-6 ${grad[i]}`}>
                <div className="halftone-pink absolute inset-0 opacity-40 transition duration-700 group-hover:opacity-70" />
                <span className="relative eyebrow text-white/85">Confirmado</span>
                <span className="display pointer-events-none absolute -right-4 top-10 text-[7rem] leading-none text-white/15">
                  {n
                    .split(' ')
                    .map((w) => w[0])
                    .join('')}
                </span>
                <h3 className="display relative text-[clamp(1.5rem,2vw,1.85rem)] leading-[0.95]">
                  {n.split(' ').map((w) => (
                    <span key={w} className="block">
                      {w}
                    </span>
                  ))}
                </h3>
              </div>
            </Reveal>
          ))}
          {Array.from({ length: CONVIDADOS.aDefinir }).map((_, i) => (
            <Reveal key={i} delay={(CONVIDADOS.nomes.length + i) * 90}>
              <div className="relative flex aspect-[16/6] flex-col justify-between rounded-[1.5rem] border sm:aspect-[3/4] border-dashed border-white/25 p-6">
                <span className="eyebrow text-white/45">A definir</span>
                <Symbol className="mx-auto hidden h-16 w-auto opacity-25 sm:block" mono="#ffffff" />
                <p className="display text-2xl text-white/45">Em breve</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== Sales Village ===== */
export function Casa() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="estudio" ref={ref} className="relative overflow-hidden bg-ink-2 py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <Eyebrow>{CASA.selo}</Eyebrow>
          <h2 className="display mt-6 text-[clamp(2rem,4.2vw,3.5rem)]">{CASA.titulo}</h2>
          {CASA.texto.map((t) => (
            <p key={t} className="mt-6 text-lg leading-relaxed text-white/75">
              {t}
            </p>
          ))}
          <p className="mt-8 text-2xl font-bold">
            Com estrutura profissional de áudio e vídeo, o Sales Village será <span className="text-spectrum">{CASA.destaque.toLowerCase()}</span>
          </p>
        </Reveal>

        <div className="grid grid-cols-6 grid-rows-[auto_auto] gap-4">
          <Reveal className="col-span-6">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img src="/assets/estudio-podpalco.webp" alt="Estúdio do PodPalco com dois microfones e a marca na tela" loading="lazy" className="aspect-[16/10] w-full object-cover object-[50%_28%]" />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink/80 px-4 py-2 text-xs font-semibold backdrop-blur md:text-sm">
                <span className="rec-dot h-2 w-2 rounded-full bg-coral" /> {CASA.chip}
              </span>
            </div>
          </Reveal>
          <Reveal className="col-span-3" delay={100}>
            <img src="/assets/sv-podcast.webp" alt="Gravação de podcast vista pelo monitor da câmera" loading="lazy" className="aspect-square w-full rounded-[1.5rem] object-cover" />
          </Reveal>
          <Reveal className="col-span-3" delay={200}>
            <img src="/assets/sv-auditorio.webp" alt="Auditório do Sales Village com painel de LED" loading="lazy" className="aspect-square w-full rounded-[1.5rem] object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
