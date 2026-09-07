import { profes } from '../datos/profes.js'

export default function Profes() {
  return (
    <section id="profes" className="bg-carbon py-24">
      <div className="contenedor">
        <h2 className="titulo-seccion mb-2">
          Los <span className="resaltado">profes</span>
        </h2>
        <p className="mb-12 max-w-2xl text-white/70">
          El equipo que te acompaña en cada clase. (Nombres y videos de muestra — se actualizan
          cuando FitClub nos pase los definitivos.)
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profes.map((profe) => (
            <article key={profe.id} className="overflow-hidden rounded-2xl bg-white/5">
              <div className="relative aspect-[3/4]">
                <img src={profe.foto} alt={profe.nombre} className="h-full w-full object-cover" />
                {profe.video ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={profe.video}
                    controls
                    playsInline
                  />
                ) : (
                  <div className="absolute inset-x-0 bottom-0 bg-black/60 px-3 py-2 text-center text-[11px] uppercase tracking-wide text-white/70">
                    Video próximamente
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold">{profe.nombre}</h3>
                <p className="text-sm text-amarillo">{profe.especialidad}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
