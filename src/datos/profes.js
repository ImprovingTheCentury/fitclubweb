// Datos de los profes. Nombres y videos son placeholders (FitClub todavía no los mandó) —
// reemplazar por los reales cuando lleguen. La foto default vive en
// recursos/imagenes/entrenadores/entrenador-default.jpg hasta tener las fotos de cada uno.

import fotoDefault from '../../recursos/imagenes/entrenadores/entrenador-default.jpg'

export const profes = [
  {
    id: 'nico',
    nombre: 'Nicolás Ferreyra',
    especialidad: 'Crosstraining',
    foto: fotoDefault,
    video: null, // reemplazar por el video real del profe contando su clase
  },
  {
    id: 'valen',
    nombre: 'Valentina Sosa',
    especialidad: 'Hiit',
    foto: fotoDefault,
    video: null,
  },
  {
    id: 'bruno',
    nombre: 'Bruno Aguirre',
    especialidad: 'Musculación y Calistenia',
    foto: fotoDefault,
    video: null,
  },
  {
    id: 'cami',
    nombre: 'Camila Herrera',
    especialidad: 'Running y Group Training',
    foto: fotoDefault,
    video: null,
  },
]
