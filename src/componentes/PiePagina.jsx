import { contacto } from '../datos/contacto.js'

export default function PiePagina() {
  return (
    <footer className="border-t border-white/10 bg-carbon py-10">
      <div className="contenedor flex flex-col items-center gap-4 text-sm text-white/50 sm:flex-row sm:justify-between">
        <p className="text-base font-extrabold text-white">
          <span className="text-amarillo">fit</span>club
        </p>
        <p>&copy; {new Date().getFullYear()} FitClub — Training & Friends</p>
        <a href={contacto.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-amarillo">
          {contacto.instagramHandle}
        </a>
      </div>

      <div className="contenedor mt-6 border-t border-white/5 pt-4 text-center text-xs text-white/30">
        <a href="mailto:improvingthecentury@gmail.com" className="hover:text-amarillo">
          Desarrollado por ImprovingTheCentury
        </a>
      </div>
    </footer>
  )
}
