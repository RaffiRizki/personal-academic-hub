import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()
  return (
    <header className="pt-16 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookOpen className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Pembelajaran Kapita Selekta
          </h1>
        </div>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Dokumentasi lengkap materi Kapita Selekta: pengantar, fungsi, analisis SWOT & Porter, SWEBoK,
          rencana tugas akhir, KP & skripsi, dan filosofi open‑source.
        </p>
        <button
          onClick={() => navigate('/materi')}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-lg"
        >
          Mulai Belajar
        </button>
      </div>
    </header>
  )
}
