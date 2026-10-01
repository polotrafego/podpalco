import { useId } from 'react'

/**
 * Vetores oficiais da marca, extraídos de SIV/ai/podpalco.ai (prancha do logo
 * horizontal) e conferidos com SIV/260824_siv_icone_icone.svg. Nada aqui é
 * redesenhado: são os paths do arquivo, com a transformação embutida.
 *
 * O símbolo são três formas: o balão laranja e o magenta (cada um sem a área
 * de encontro) e a lente pink, que é a sobreposição dos dois.
 */
const ORANGE =
  'M0 0C0 45.484 36.49 82.557 81.968 83.278L114.287 83.79C106.006 121.063 72.77 148.941 33.003 148.941H-3.93C-49.929 148.941-87.218 111.652-87.218 65.653V-55.059C-87.218-61.686-81.845-67.059-75.218-67.059-73.556-67.059-71.921-66.629-70.474-65.81L0-25.939 2.004-25.907C.706-20.066 0-14.003 0-7.771Z'
const ORANGE_T = 'matrix(1,0,0,-1,87.221,148.943)'
const MAGENTA =
  'M0 0C-1.663 0-3.297-.43-4.744-1.249L-75.218-41.12-77.222-41.151C-75.924-46.992-75.218-53.056-75.218-59.288V-67.059C-75.218-112.543-111.708-149.615-157.186-150.336L-189.505-150.849C-181.224-188.122-147.988-216-108.221-216H-71.288C-25.289-216 12-178.711 12-132.712V-12C12-5.373 6.627 0 0 0'
const MAGENTA_T = 'matrix(1,0,0,-1,278.73,24.001)'
const LENS =
  'M0 0V7.771C0 14.003-.706 20.066-2.004 25.907L-34.323 25.395C-79.801 24.674-116.291-12.398-116.291-57.882V-65.653C-116.291-71.885-115.585-77.949-114.287-83.79L-81.968-83.278C-36.49-82.557 0-45.484 0 0'
const LENS_T = 'matrix(1,0,0,-1,203.511,91.06)'

/** Wordmark POD (black) + PALCO (light), em curvas. */
const WORD: [string, string][] = [
  ['matrix(1,0,0,-1,431.408,118.423)', 'M0 0C10.105 0 15.634 2.37 15.634 12.632 15.634 23.053 10.105 25.263 0 25.263H-44.526V0ZM-81.632 55.423H7.106C35.369 55.423 52.58 39.476 52.58 12.632 52.58-13.577 34.739-29.525 6.474-29.525H-44.526V-58.263H-81.632Z'],
  ['matrix(1,0,0,-1,605.209,119.842)', 'M0 0C0 17.052-15.947 28.263-41.054 28.263-66.001 28.263-81.791 17.052-81.791 0-81.791-17.371-65.842-28.738-41.054-28.738-15.947-28.738 0-17.371 0 0M-120.475 0C-120.475 35.998-89.211 59.368-41.054 59.368 7.263 59.368 38.527 35.998 38.527 0 38.527-36.476 7.263-60.003-41.054-60.003-89.37-60.003-120.475-36.476-120.475 0'],
  ['matrix(1,0,0,-1,715.553,145.422)', 'M0 0C22.421 0 33.315 8.525 33.315 25.736 33.315 42.632 22.421 51.157 0 51.157H-28.895V0ZM-66.001 82.421H15.001C47.844 82.421 71.686 58.579 71.686 25.736 71.686-7.265 47.844-31.264 15.001-31.264H-66.001Z'],
  ['matrix(1,0,0,-1,869.349,132.949)', 'M0 0C21 0 35.528 10.105 35.528 30.632 35.528 51.475 20.843 61.421 0 61.421H-64.104V0ZM-73.737 69.949H1.265C28.106 69.949 45.317 54.947 45.317 30.632 45.317 6.633 28.106-8.368 1.265-8.368H-64.104V-43.737H-73.737Z'],
  ['matrix(1,0,0,-1,1017.792,139.107)', 'M0 0-39.16 69.949-78.317 0ZM-45.318 76.106H-32.843L31.737-37.579H21L4.42-7.895H-82.737L-99.316-37.579H-110.054Z'],
  ['matrix(1,0,0,-1,1061.028,63.001)', 'M0 0H9.633V-105.158H99.949V-113.685H0Z'],
  ['matrix(1,0,0,-1,1160.49,119.685)', 'M0 0C0 36.158 30.316 59.684 71.054 59.684 106.579 59.684 133.739 39.789 137.212 15.474H127.266C124.107 31.894 104.053 51.316 71.054 51.316 33.948 51.316 9.949 29.368 9.949 0 9.949-29.527 34.107-51.475 71.054-51.475 104.053-51.475 124.107-32.053 127.266-15.474H137.212C133.896-39.949 106.579-60.159 71.054-60.159 30.316-60.159 0-36.317 0 0'],
  ['matrix(1,0,0,-1,1438.961,119.685)', 'M0 0C0 30-22.58 51.316-60.316 51.316-98.211 51.316-120.632 30.159-120.632 0-120.632-30.473-98.054-51.632-60.316-51.632-22.58-51.632 0-30.159 0 0M-130.581 0C-130.581 36.158-103.423 59.684-60.316 59.684-17.368 59.684 9.946 36.001 9.946 0 9.946-36.317-17.368-60.316-60.316-60.316-103.423-60.316-130.581-36.474-130.581 0'],
]

function SymbolPaths({ mono }: { mono?: string }) {
  return (
    <>
      <path fill={mono ?? '#fd5202'} transform={ORANGE_T} d={ORANGE} />
      <path fill={mono ?? '#bc0cdd'} transform={MAGENTA_T} d={MAGENTA} opacity={mono ? 0.7 : 1} />
      <path fill={mono ?? '#fa2077'} transform={LENS_T} d={LENS} opacity={mono ? 0.85 : 1} />
    </>
  )
}

/** Só o símbolo. `mono` pinta as três formas de uma cor (com leve variação de opacidade). */
export function Symbol({ className = '', mono }: { className?: string; mono?: string }) {
  return (
    <svg viewBox="0 0 290.73 240" className={className} aria-hidden="true">
      <SymbolPaths mono={mono} />
    </svg>
  )
}

/** Logo horizontal oficial. O wordmark usa currentColor: branco no fundo escuro, preto no claro. */
export function Logo({ className = '', title = 'PodPalco' }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 1448.9 240" className={`h-[1.6em] w-auto ${className}`} role="img" aria-label={title}>
      <SymbolPaths />
      {WORD.map(([t, d]) => (
        <path key={t} fill="currentColor" transform={t} d={d} />
      ))}
    </svg>
  )
}

/**
 * O hero: o símbolo vira moldura dos hosts. Cada um, recortado e em P&B, fica
 * sobre a cor do próprio balão — Dennis no laranja, Fábio no magenta — e as
 * cabeças saem pelo topo. A lente pink continua por cima, tingindo o ponto
 * onde os dois se encontram: é a sobreposição do logo acontecendo nos rostos.
 *
 * Ordem: balões sólidos → Fábio → Dennis → lente pink translúcida.
 */
export function HostBubbles({ className = '' }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  const a = `a${id}`
  const b = `b${id}`
  const l = `l${id}`
  return (
    <svg viewBox="-12 -52 316 298" className={className} role="img" aria-label="Dennis Penna e Fábio Borges, hosts do PodPalco">
      <defs>
        {/* Balão laranja inteiro (forma + lente) e a área por onde a cabeça sai */}
        <clipPath id={a}>
          <path transform={ORANGE_T} d={ORANGE} />
          <path transform={LENS_T} d={LENS} />
          <rect x="-12" y="-60" width="196" height="92" rx="40" />
        </clipPath>
        {/* Balão magenta (sem a lente) e a área da cabeça */}
        <clipPath id={b}>
          <path transform={MAGENTA_T} d={MAGENTA} />
          <rect x="168" y="-40" width="122.73" height="110" rx="40" />
        </clipPath>
        <clipPath id={l}>
          <path transform={LENS_T} d={LENS} />
        </clipPath>
      </defs>

      <SymbolPaths />

      <g clipPath={`url(#${b})`}>
        <image href="/assets/hero-fabio.webp" x="104" y="10" width="244" height="229" preserveAspectRatio="xMidYMin meet" />
      </g>
      <g clipPath={`url(#${a})`}>
        <image href="/assets/hero-dennis.webp" x="-18" y="-36" width="230" height="276" preserveAspectRatio="xMidYMin meet" />
      </g>
      <g clipPath={`url(#${l})`}>
        <rect x="80" y="60" width="130" height="120" fill="#fa2077" opacity="0.74" />
      </g>
    </svg>
  )
}
