// app/page.js

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Bienvenido a ECC Ltda</h1>
          <p className="mt-2 text-lg">Consultoría, Construcción y Mantenimiento</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <section className="text-center">
            <h2 className="text-3xl font-bold text-blue-600">Nuestros Servicios</h2>
            <p className="mt-4 text-lg text-gray-700">
              Ofrecemos soluciones de alta calidad en consultoría, construcción y mantenimiento. Trabajamos con tecnología de vanguardia para garantizar la satisfacción de nuestros clientes.
            </p>
          </section>

          <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600">Consultoría</h3>
              <p className="mt-4 text-gray-700">
                Brindamos asesoría especializada en proyectos de ingeniería, optimización de procesos y más.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600">Construcción</h3>
              <p className="mt-4 text-gray-700">
                Ofrecemos servicios completos de construcción con alta calidad y cumplimiento de plazos.
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600">Mantenimiento</h3>
              <p className="mt-4 text-gray-700">
                Realizamos mantenimiento preventivo y correctivo para garantizar la seguridad y funcionalidad de las instalaciones.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} ECC Ltda. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="mailto:contacto@eccltda.com" className="hover:underline">
              contacto@eccltda.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
