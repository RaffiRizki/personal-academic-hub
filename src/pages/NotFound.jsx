import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="text-slate-600 mb-6">Halaman tidak ditemukan.</p>
      <Link to="/" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Kembali</Link>
    </section>
  )
}
