// app/components/Header.jsx

'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">ECC Ltda</div>

        {/* Navegación */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium">Inicio</a>
          <a href="#servicios" className="text-gray-700 hover:text-blue-600 font-medium">Servicios</a>
          <a href="#certificaciones" className="text-gray-700 hover:text-blue-600 font-medium">Certificaciones</a>
          <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
