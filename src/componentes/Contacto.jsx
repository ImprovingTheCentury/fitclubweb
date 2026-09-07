import { contacto, mensajeWhatsapp } from '../datos/contacto.js'

export default function Contacto() {
  return (
    <section id="contacto" className="bg-carbon py-24">
      <div className="contenedor grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="titulo-seccion mb-6">
            Sumate a <span className="resaltado">FitClub</span>
          </h2>
          <p className="mb-8 max-w-md text-white/70">
            Escribinos y te contamos todo: planes, primera clase de prueba y cualquier duda que
            tengas. Te esperamos.
          </p>

          <div className="space-y-4 text-sm">
            <a
              href={mensajeWhatsapp('Hola! Quiero info de FitClub')}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-amarillo px-8 py-3 font-bold text-carbon transition-transform hover:scale-105"
            >
              Escribinos por WhatsApp
            </a>
            <p className="text-white/60">{contacto.whatsappVisible}</p>
          </div>

          <ul className="mt-8 space-y-2 text-sm text-white/70">
            <li>
              <a href={contacto.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-amarillo">
                {contacto.instagramHandle}
              </a>
            </li>
            <li>{contacto.email}</li>
            <li>
              <a href={contacto.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-amarillo">
                {contacto.direccion}
              </a>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Ubicación de FitClub"
            src={`https://www.google.com/maps?q=${encodeURIComponent(contacto.direccion)}&output=embed`}
            className="h-full min-h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
