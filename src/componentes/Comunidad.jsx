import grupoPostClase from '../../recursos/imagenes/comunidad/comunidad-grupo-post-clase.jpg'
import claseGrupal from '../../recursos/imagenes/comunidad/comunidad-clase-grupal.jpg'
import bandaElastica from '../../recursos/imagenes/comunidad/comunidad-banda-elastica.jpg'
import sledEntrenador from '../../recursos/imagenes/comunidad/comunidad-sled-entrenador.jpg'
import chicosPulgar from '../../recursos/imagenes/comunidad/comunidad-chicos-pulgar.jpg'

// Fotos reales de socios de FitClub entrenando (reemplazan las de muestra que había antes).
const fotos = [
  { src: grupoPostClase, alt: 'Grupo de socios de FitClub charlando después de entrenar' },
  { src: claseGrupal, alt: 'Clase grupal con la coach guiando ejercicios de zancada' },
  { src: sledEntrenador, alt: 'Socio entrenando con el trineo, guiado por su entrenador' },
  { src: bandaElastica, alt: 'Socia entrenando con banda elástica' },
  { src: chicosPulgar, alt: 'Dos socios jóvenes de FitClub sonriendo' },
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
          <img src={fotos[3].src} alt={fotos[3].alt} className="h-40 w-full rounded-2xl object-cover" />
          <img src={fotos[4].src} alt={fotos[4].alt} className="h-40 w-full rounded-2xl object-cover" />
        </div>
      </div>
    </section>
  )
}
