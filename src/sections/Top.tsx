import { useEffect, useState } from 'react'
import { HERO, LINKS, MARQUEE, NAV } from '../content'
import { HostBubbles, Logo, Symbol } from '../components/brand'
import { Equalizer, IconArrow, IconInstagram, IconPlay, IconSpotify, IconYouTube } from '../components/ui'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-ink/80 py-3 backdrop-blur-xl' : 'py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#topo" className="text-[1.05rem] md:text-xl" aria-label="PodPalco, voltar ao topo">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-white/70 transition hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contato" className="btn btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">
            Seja patrocinador
          </a>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-white transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-white transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="h-[calc(100dvh-64px)] px-5 pt-10 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Menu">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="display border-b border-white/10 py-4 text-3xl">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contato" onClick={() => setOpen(false)} className="btn btn-primary mt-8 w-full">
            Seja patrocinador
          </a>
        </div>
      )}
    </header>
  )
}

export function Platforms({ className = '' }: { className?: string }) {
  const items = [
    { href: LINKS.youtubePlaylist, label: 'YouTube', Icon: IconYouTube },
    { href: LINKS.spotify, label: 'Spotify', Icon: IconSpotify },
    { href: LINKS.instagram, label: 'Instagram', Icon: IconInstagram },
  ].filter((i) => i.href)
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`PodPalco no ${label}`}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80 transition hover:-translate-y-0.5 hover:border-pink hover:text-white"
        >
          <Icon />
        </a>
      ))}
    </div>
  )
}

export function Hero() {
  const cores = ['text-white', 'text-outline', 'text-spectrum']
  return (
    <section id="topo" className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 md:pt-32">
      {/* halftone + brilho */}
      <div className="halftone halftone-fade absolute inset-0 -z-10" />
      <div className="absolute -top-40 right-[-10%] -z-10 h-[38rem] w-[38rem] rounded-full bg-indigo/30 blur-[140px]" />
      <div className="absolute bottom-[-20%] left-[-10%] -z-10 h-[30rem] w-[30rem] rounded-full bg-orange/20 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.95fr_1.2fr] lg:gap-10">
        <div>
          <p className="reveal in mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/85 backdrop-blur">
            <span className="rec-dot h-2 w-2 rounded-full bg-coral" />
            {HERO.selo}
          </p>

          <h1 className="display text-[clamp(1.9rem,8vw,3.4rem)] lg:text-[clamp(2.4rem,3.5vw,3.6rem)]">
            {HERO.linhas.map((l, i) => (
              <span key={l} className="block overflow-hidden pb-[0.06em]">
                <span className={`hero-line block ${cores[i]}`} style={{ animationDelay: `${120 + i * 140}ms` }}>
                  {l}
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-xl text-xl font-semibold leading-snug text-white md:text-2xl">{HERO.frase}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-mute md:text-lg">{HERO.apoio}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#episodios" className="btn btn-primary">
              <IconPlay /> Ouvir episódios
            </a>
            <a href="#patrocinio" className="btn btn-ghost">
              Quero patrocinar <IconArrow />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Platforms />
            <span className="hidden text-sm text-mute sm:block">Episódios completos no YouTube</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[40rem] lg:-mr-6 lg:max-w-none xl:-mr-12">
          <div className="float">
            <HostBubbles className="w-full drop-shadow-[0_40px_80px_rgba(188,12,221,0.35)]" />
          </div>
          <span className="absolute left-[2%] top-[4%] rounded-full bg-ink/80 px-3.5 py-1.5 text-xs font-bold tracking-wide backdrop-blur md:text-sm">
            Dennis Penna
          </span>
          <span className="absolute bottom-[4%] right-[2%] rounded-full bg-ink/80 px-3.5 py-1.5 text-xs font-bold tracking-wide backdrop-blur md:text-sm">
            Fábio Borges
          </span>
          <span className="absolute bottom-[14%] left-[6%] inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-ink md:text-sm">
            <Equalizer className="text-pink" /> No ar
          </span>
        </div>
      </div>

      <a href="#sobre" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] tracking-[0.3em] text-white/50 uppercase md:flex" aria-label="Rolar para Sobre">
        Role
        <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </a>
    </section>
  )
}

export function Marquee() {
  const row = (reverse: boolean, cls: string, sym: boolean) => (
    <div className={`overflow-hidden ${cls}`}>
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
            {MARQUEE.map((w) => (
              <span key={w + k} className="flex items-center">
                <span className="display whitespace-nowrap px-6 py-4 text-2xl md:px-8 md:text-4xl">{w}</span>
                {sym ? <Symbol className="h-6 w-auto md:h-8" /> : <Symbol className="h-6 w-auto md:h-8" mono="#060411" />}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
  return (
    <section aria-label="Temas do PodPalco" className="relative z-10 -my-4 py-10">
      <div className="-rotate-2 scale-105">{row(false, 'bg-gradient-to-r from-orange via-pink to-magenta text-ink', false)}</div>
      <div className="mt-[-6px] rotate-1 scale-105">{row(true, 'border-y border-white/10 bg-ink-2 text-white', true)}</div>
    </section>
  )
}
