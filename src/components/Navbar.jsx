import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, BookOpen } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Tentang' },
  { to: '/materi', label: 'Materi' },
  { to: '/portfolio', label: 'Portofolio' },
  { to: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur shadow">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-blue-600" />
          <span className="font-bold">Kapita Selekta</span>
        </Link>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 ${isActive ? 'text-blue-700' : 'text-slate-700'}`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <ul className="container py-2 space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 ${isActive ? 'text-blue-700' : 'text-slate-700'}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
