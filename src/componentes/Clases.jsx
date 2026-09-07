import { clases } from '../datos/clases.js'

export default function Clases() {
  return (
    <section id="clases" className="bg-black/20 py-24">
      <div className="contenedor">
        <h2 className="titulo-seccion mb-2">
          Nuestras <span className="resaltado">clases</span>
        </h2>
        <p className="mb-12 max-w-2xl text-white/70">
          Ocho formas distintas de entrenar, para que encuentres la que va con vos. Elegí una o
          combiná varias.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clases.map((clase) => (
            <article
              key={clase.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-amarillo/50"
            >
              <h3 className="text-lg font-bold text-amarillo">{clase.nombre}</h3>
              <p className="mt-3 flex-1 text-sm text-white/70">{clase.descripcion}</p>
              <ul className="mt-5 space-y-1 border-t border-white/10 pt-4 text-xs text-white/60">
                {clase.horarios.map((horario) => (
                  <li key={horario}>{horario}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
