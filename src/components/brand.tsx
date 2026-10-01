import { useId } from 'react'

/**
 * O símbolo do PodPalco: dois balões de fala que se sobrepõem — o laranja e o
 * magenta são os dois lados da conversa, e o pink é o ponto de encontro.
 * Geometria redesenhada a partir de SIV/img/260824_siv_icone.png.
 */
export const BUBBLE = 'M0 62A62 62 0 0 1 62 0H88A62 62 0 0 1 150 62V87L12 156Q0 162 0 149Z'
const ROT = 'rotate(180 108 90)'

export function Symbol({ className = '', mono }: { className?: string; mono?: string }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="-2 -2 220 184" className={className} aria-hidden="true">
      <defs>
        <clipPath id={`c${id}`}>
          <path d={BUBBLE} transform={ROT} />
        </clipPath>
      </defs>
      <path d={BUBBLE} fill={mono ?? 'var(--color-orange)'} />
      <path d={BUBBLE} fill={mono ?? 'var(--color-magenta)'} transform={ROT} opacity={mono ? 0.6 : 1} />
      {!mono && <path d={BUBBLE} fill="var(--color-pink)" clipPath={`url(#c${id})`} />}
    </svg>
  )
}

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-display uppercase leading-none ${className}`} style={{ fontStretch: '125%' }}>
      <span className="font-black tracking-[-0.01em]">Pod</span>
      <span className="font-light tracking-[0.02em]">Palco</span>
    </span>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Symbol className="h-[1.6em] w-auto" />
      <Wordmark />
    </span>
  )
}

/**
 * O hero: o símbolo vira moldura. Cada balão leva um host, e a sobreposição
 * (pink) é literalmente onde a conversa acontece.
 */
export function HostBubbles({ className = '' }: { className?: string }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="-6 -6 228 192" className={className} role="img" aria-label="Dennis Penna e Fábio Borges, hosts do PodPalco">
      <defs>
        <clipPath id={`a${id}`}>
          <path d={BUBBLE} />
        </clipPath>
        <clipPath id={`b${id}`}>
          <path d={BUBBLE} transform={ROT} />
        </clipPath>
        <linearGradient id={`ga${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.45" stopColor="#fd5202" stopOpacity="0" />
          <stop offset="1" stopColor="#fd5202" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id={`gb${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.35" stopColor="#bc0cdd" stopOpacity="0" />
          <stop offset="1" stopColor="#bc0cdd" stopOpacity="0.65" />
        </linearGradient>
      </defs>

      {/* Balão magenta — Fábio */}
      <g clipPath={`url(#b${id})`}>
        <rect x="60" y="14" width="160" height="170" fill="#bc0cdd" />
        <image href="/assets/fabio.webp" x="92" y="20" width="162" height="162" preserveAspectRatio="xMidYMid slice" style={{ filter: 'grayscale(1) contrast(1.1)', mixBlendMode: 'luminosity' }} />
        <rect x="60" y="14" width="160" height="170" fill={`url(#gb${id})`} />
      </g>

      {/* Balão laranja — Dennis */}
      <g clipPath={`url(#a${id})`}>
        <rect x="-4" y="-4" width="160" height="170" fill="#fd5202" />
        <image href="/assets/dennis-riso.webp" x="-70" y="-6" width="260" height="173" preserveAspectRatio="xMidYMid slice" style={{ filter: 'grayscale(1) contrast(1.1)', mixBlendMode: 'luminosity' }} />
        <rect x="-4" y="-4" width="160" height="170" fill={`url(#ga${id})`} />
      </g>

      {/* Encontro — pink */}
      <g clipPath={`url(#a${id})`}>
        <path d={BUBBLE} transform={ROT} fill="#fa2077" opacity="0.82" style={{ mixBlendMode: 'multiply' }} />
      </g>
    </svg>
  )
}
