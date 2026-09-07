import { useEffect, useState } from 'react'
import { contacto, mensajeWhatsapp } from '../datos/contacto.js'

const enlaces = [
  { href: '#comunidad', texto: 'Comunidad' },
  { href: '#clases', texto: 'Clases' },
  { href: '#profes', texto: 'Profes' },
  { href: '#galeria', texto: 'Galería' },
  { href: '#contacto', texto: 'Contacto' },
]

export default function Navegacion() {
  const [conFondo, setConFondo] = useState(false)

  useEffect(() => {
    const alScrollear = () => setConFondo(window.scrollY > 12)
    window.addEventListener('scroll', alScrollear)
    return () => window.removeEventListener('scroll', alScrollear)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        conFondo ? 'bg-carbon/95 backdrop-blur shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav className="contenedor flex items-center justify-between py-4">
        <a href="#inicio" className="text-xl font-extrabold tracking-tight">
          <span className="text-amarillo">fit</span>club
        </a>

        <ul className="hidden gap-8 text-sm font-semibold uppercase tracking-wide text-white/80 md:flex">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a href={enlace.href} className="transition-colors hover:text-amarillo">
                {enlace.texto}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={mensajeWhatsapp('Hola! Quiero sumarme a FitClub')}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-amarillo px-5 py-2 text-sm font-bold text-carbon transition-transform hover:scale-105"
        >
          Sumate
        </a>
      </nav>
    </header>
  )
}
