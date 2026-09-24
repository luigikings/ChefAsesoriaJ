import { Route, Routes } from 'react-router-dom'
import siteConfig from './siteConfig'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import SomosHosteleria from './pages/SomosHosteleria'
import Shop from './pages/Shop'
import Consulting from './pages/Consulting'
import ChefPrivado from './pages/ChefPrivado'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import LegalPlaceholder from './pages/LegalPlaceholder'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/somos-hosteleria" element={<SomosHosteleria />} />
        {siteConfig.features.shop && <Route path="/shop" element={<Shop />} />}
        <Route path="/consultoria" element={<Consulting />} />
        <Route path="/chef-privado" element={<ChefPrivado />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/aviso-legal" element={<LegalPlaceholder titulo="Aviso legal" />} />
        <Route path="/privacidad" element={<LegalPlaceholder titulo="Política de privacidad" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
