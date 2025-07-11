// app/page.js

import Header from './components/Header'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header fijo */}
      <Header />

      {/* Contenido principal con padding superior para evitar que lo tape el header */}
      <main className="flex-grow pt-24" id="inicio">
        {/* Hero */}
        <section className="bg-blue-600 text-white py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido a ECC Ltda</h1>
            <p className="text-lg md:text-xl">
              Ingeniería, construcción y mantenimiento con tecnología y experiencia.
            </p>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Nuestros Servicios</h2>
            <p className="text-gray-700 mb-10">
              Soluciones integrales con enfoque técnico, cumplimiento y calidad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Consultoría</h3>
                <p className="text-gray-600">
                  Diagnóstico, planeación y asesoría técnica para optimizar tus proyectos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Construcción</h3>
                <p className="text-gray-600">
                  Ejecución de obras civiles y eléctricas con estándares de alta calidad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">Mantenimiento</h3>
                <p className="text-gray-600">
                  Servicios preventivos y correctivos para infraestructura y equipos críticos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certificaciones */}
        <section id="certificaciones" className="bg-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Certificaciones</h2>
            <p className="text-gray-700 mb-8">
              Respaldados por normas internacionales de calidad y seguridad.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-gray-100 px-6 py-4 rounded-lg shadow">
                <p className="font-semibold text-gray-800">ISO 9001</p>
              </div>
              <div className="bg-gray-100 px-6 py-4 rounded-lg shadow">
                <p className="font-semibold text-gray-800">ISO 45001</p>
              </div>
              <div className="bg-gray-100 px-6 py-4 rounded-lg shadow">
                <p className="font-semibold text-gray-800">Registro RUC</p>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de contacto */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
