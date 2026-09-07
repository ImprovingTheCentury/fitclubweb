import Navegacion from './componentes/Navegacion.jsx'
import Encabezado from './componentes/Encabezado.jsx'
import Comunidad from './componentes/Comunidad.jsx'
import Clases from './componentes/Clases.jsx'
import Profes from './componentes/Profes.jsx'
import Galeria from './componentes/Galeria.jsx'
import Contacto from './componentes/Contacto.jsx'
import PiePagina from './componentes/PiePagina.jsx'

export default function App() {
  return (
    <>
      <Navegacion />
      <main>
        <Encabezado />
        <Comunidad />
        <Clases />
        <Profes />
        <Galeria />
        <Contacto />
      </main>
      <PiePagina />
    </>
  )
}
