import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './routes/Home'
import Services from './routes/Services'
import Layout from './components/Layout'
import About from './routes/About'
import Contact from './routes/Contact'
import NotFound from './routes/NotFound'
import LoginAdmin from './routes/LoginAdmin'
import { AuthProvider } from './context/AuthContext'
import Admin from './routes/Admin'
import { MainProvider } from './context/MainContext'

// import ModalComponent from './components/Modal'
// import ToastComponent from './components/Toast'

export default function App () {
  return (
    <div className="app">

      <AuthProvider>
        <MainProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                <Route path="services" element={<Services />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />

                <Route path="login" element={<LoginAdmin />} />

                <Route path="admin" element={<Admin />} />

                {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MainProvider>
      </AuthProvider>

    </div>
  )
}
