import heroImg from '../../recursos/imagenes/gym/hero-recepcion.jpg'
import { mensajeWhatsapp } from '../datos/contacto.js'

export default function Encabezado() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Recepción de FitClub, con vista a la sala de musculación"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/70 to-carbon/20" />

      <div className="contenedor relative z-10 pb-24 pt-40">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amarillo">
          San Francisco, Córdoba
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold uppercase leading-[0.95] sm:text-7xl">
          Training <span className="text-amarillo">&amp;</span> Friends
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">
          Acá no hay lugar para el "empiezo el lunes". Sumáte a la comunidad que ya eligió
          entrenar en serio —y que te va a estar esperando en cada clase para que no bajes los
          brazos.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={mensajeWhatsapp('Hola! Quiero sumarme a FitClub')}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-amarillo px-8 py-3 text-base font-bold text-carbon transition-transform hover:scale-105"
          >
            Sumate ahora
          </a>
          <a
            href="#clases"
            className="rounded-full border border-white/30 px-8 py-3 text-base font-bold text-white transition-colors hover:border-amarillo hover:text-amarillo"
          >
            Ver clases
          </a>
        </div>
      </div>
    </section>
  )
}
