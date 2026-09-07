// Catálogo de actividades de FitClub, con su descripción y horarios.
// Cuando el gym confirme cambios de horario, se actualiza solo este archivo.

export const clases = [
  {
    id: 'musculacion',
    nombre: 'Musculación',
    descripcion:
      'Sala de pesas libre con equipamiento completo. Entrenás a tu ritmo, con acceso corrido todo el día.',
    horarios: ['Lunes a viernes: 6 a 21:30 hs (corrido)', 'Sábados: 9 a 17 hs'],
  },
  {
    id: 'crosstraining',
    nombre: 'Crosstraining',
    descripcion:
      'Entrenamiento funcional de alta intensidad: pesas, cardio y movimientos gimnásticos combinados en clases grupales.',
    horarios: ['Lunes, miércoles y viernes: 6 y 17 hs', 'Martes y jueves: 17 hs'],
  },
  {
    id: 'hiit',
    nombre: 'Hiit',
    descripcion:
      'Intervalos de alta intensidad: ráfagas cortas y muy intensas con descanso. Ideal para rendir mucho en poco tiempo.',
    horarios: ['Miércoles y viernes: 13 hs', 'Martes y jueves: 6 y 18 hs'],
  },
  {
    id: 'hybrid',
    nombre: 'Hybrid',
    descripcion:
      'Combina distintos métodos de entrenamiento —fuerza y resistencia— en una misma sesión.',
    horarios: ['Martes y jueves: 14, 19 y 20 hs', 'Lunes y miércoles: 20 hs'],
  },
  {
    id: 'calistenia',
    nombre: 'Calistenia',
    descripcion:
      'Entrenamiento con el propio peso corporal: dominadas, fondos y control corporal.',
    horarios: ['Lunes, miércoles y viernes: 13 hs', 'Miércoles y viernes: 19 hs'],
  },
  {
    id: 'running',
    nombre: 'Running',
    descripcion:
      'Grupos de running guiados, con nivel para quienes arrancan y para quienes ya corren hace tiempo.',
    horarios: ['Lunes y miércoles (iniciantes): 19:30 hs', 'Martes y jueves: 14:30 y 20 hs'],
  },
  {
    id: 'group-training',
    nombre: 'Group Training',
    descripcion: 'Clases grupales de acondicionamiento general, guiadas por un coach.',
    horarios: ['Lunes, miércoles y viernes: 14 y 19 hs'],
  },
  {
    id: 'adultos-mayores',
    nombre: 'Adultos mayores',
    descripcion: 'Clase de bajo impacto, pensada especialmente para ese público.',
    horarios: ['Lunes, miércoles y viernes: 10 hs'],
  },
]
