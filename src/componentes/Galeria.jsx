import marcaNeon1 from '../../recursos/imagenes/gym/marca-neon-1.jpg'
import salaMusculacion from '../../recursos/imagenes/gym/sala-musculacion.jpg'
import escaleraPiso1 from '../../recursos/imagenes/gym/escalera-piso1.jpg'
import zonaCardio from '../../recursos/imagenes/gym/zona-cardio.jpg'
import marcaNeon2 from '../../recursos/imagenes/gym/marca-neon-2.jpg'
import barFitclub from '../../recursos/imagenes/gym/bar-fitclub.jpg'

const fotos = [
  { src: salaMusculacion, alt: 'Sala de musculación de FitClub' },
  { src: marcaNeon1, alt: 'Cartel de neón de FitClub en la pared de entrada' },
  { src: zonaCardio, alt: 'Zona de cardio con cintas y bicicletas' },
  { src: escaleraPiso1, alt: 'Escalera de acceso al primer piso de FitClub' },
  { src: barFitclub, alt: 'Barra del FitClub Bar' },
  { src: marcaNeon2, alt: 'Detalle del logo de FitClub' },
]

export default function Galeria() {
  return (
    <section id="galeria" className="bg-black/20 py-24">
      <div className="contenedor">
        <h2 className="titulo-seccion mb-12">
          Conocé el <span className="resaltado">espacio</span>
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {fotos.map((foto) => (
            <img
              key={foto.src}
              src={foto.src}
              alt={foto.alt}
              loading="lazy"
              className="aspect-square w-full rounded-xl object-cover transition-transform duration-300 hover:scale-[1.03]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
