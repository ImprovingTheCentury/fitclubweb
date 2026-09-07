import comunidad1 from '../../recursos/imagenes/comunidad/comunidad-default-1.jpg'
import comunidad2 from '../../recursos/imagenes/comunidad/comunidad-default-2.jpg'
import comunidad3 from '../../recursos/imagenes/comunidad/comunidad-default-3.jpg'

// Fotos default de comunidad (placeholder) — reemplazar por fotos reales de socios de FitClub
// entrenando juntos apenas el gym las mande.
const fotos = [
  { src: comunidad1, alt: 'Grupo de socios chocando las manos después de entrenar' },
  { src: comunidad2, alt: 'Grupo corriendo juntos al aire libre' },
  { src: comunidad3, alt: 'Socios compartiendo un café después de entrenar' },
]

export default function Comunidad() {
  return (
    <section id="comunidad" className="bg-carbon py-24">
      <div className="contenedor grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="titulo-seccion">
            Más que un gym, <span className="resaltado">una comunidad</span>
          </h2>
          <p className="mt-6 text-white/70">
            En FitClub creemos que el mejor resultado se logra acompañado. Por eso cada clase es
            también un lugar de encuentro: te reciben por tu nombre, entrenás en grupo y salís con
            más amigos de los que entraste.
          </p>
          <p className="mt-4 text-white/70">
            Ese es nuestro "training &amp; friends": entrenamiento en serio, con la energía de un
            grupo que te empuja a llegar más lejos.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={fotos[0].src}
            alt={fotos[0].alt}
            className="col-span-2 h-64 w-full rounded-2xl object-cover"
          />
          <img src={fotos[1].src} alt={fotos[1].alt} className="h-48 w-full rounded-2xl object-cover" />
          <img src={fotos[2].src} alt={fotos[2].alt} className="h-48 w-full rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  )
}
