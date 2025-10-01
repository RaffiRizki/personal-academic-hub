import React from 'react'

export default function Portfolio() {
  const sertifikat = [
    'Bangkit - Specializing in Cloud Computing (2024)',
    'Menjadi Google Cloud Engineer (2024)',
    'CCNA: Introduction to Networks (2024)',
  ]

  const projects = [
    {
      title: 'Analisis Sentimen Komentar TikTok (2025)',
      desc: 'Sistem analisis sentimen publik dari komentar TikTok.',
      link: ''
    },
    {
      title: 'SmartLifestyle Eating for Efficient Calories (2024)',
      desc: 'Aplikasi perhitungan kebutuhan kalori & rekomendasi menu.',
      link: 'https://github.com/andrewuwuu/SLEEK'
    },
    {
      title: 'Sistem Prediksi Banjir Sederhana (IoT + Node-RED) (2024)',
      desc: 'Perangkat IoT multi-sensor untuk prediksi banjir.',
      link: 'https://github.com/andrewuwuu/UAS_IoT'
    },
  ]

  return (
    <section className="py-14">
      <div className="container space-y-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Sertifikat</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {sertifikat.map((s, i) => (
              <li key={i} className="p-4 rounded-xl ring-1 ring-slate-200 bg-white">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Project</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <div key={p.title} className="p-5 rounded-xl ring-1 ring-slate-200 bg-white">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-slate-700">{p.desc}</p>
                {p.link && <a className="text-blue-600 underline" href={p.link} target="_blank" rel="noreferrer">Repository</a>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
