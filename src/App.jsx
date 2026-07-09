import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { EnrollmentProvider } from './context/EnrollmentContext'
import Home from './pages/Home'
import Cursos from './pages/Cursos'
import Servicos from './pages/Servicos'
import Sobre from './pages/Sobre'
import Testemunhos from './pages/Testemunhos'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <EnrollmentProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/testemunhos" element={<Testemunhos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </EnrollmentProvider>
  )
}
