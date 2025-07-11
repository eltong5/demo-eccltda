// app/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección 1: Empresa */}
        <div>
          <h3 className="text-xl font-semibold mb-4">ECC Ltda</h3>
          <p className="text-sm leading-6">
            Expertos en consultoría, construcción y mantenimiento. Ofrecemos soluciones integrales
            con respaldo, calidad y tecnología.
          </p>
        </div>

        {/* Sección 2: Enlaces rápidos */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            <li><a href="#proyectos" className="hover:underline">Proyectos</a></li>
            <li><a href="#certificaciones" className="hover:underline">Certificaciones</a></li>
          </ul>
        </div>

        {/* Sección 3: Contacto */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
          <ul className="text-sm space-y-2">
            <li><strong>Email:</strong> <a href="mailto:contacto@eccltda.com" className="hover:underline">contacto@eccltda.com</a></li>
            <li><strong>Teléfono:</strong> <a href="tel:+573001234567" className="hover:underline">+57 300 123 4567</a></li>
            <li><strong>Dirección:</strong> Cra. 00 #00-00, Barranquilla, Colombia</li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-blue-500 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} ECC Ltda. Todos los derechos reservados.
      </div>
    </footer>
  )
}
