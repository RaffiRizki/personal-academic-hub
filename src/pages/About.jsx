import React from 'react'

export default function About() {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left: Photo */}
          <div className="md:col-span-1">
            <div className="aspect-[3/4] w-full rounded-2xl bg-slate-200 overflow-hidden ring-1 ring-slate-100">
              <img
                src="public\profile.jpg"
                alt="Foto Profil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content from CV */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Raffi Rizki Nugraha
            </h1>
            <p className="text-slate-600 mt-1">
              Bandar Lampung • 085972582829 • <a href="mailto:converse7091@gmail.com" className="underline">converse7091@gmail.com</a>
            </p>
            <p className="text-slate-600">
              <a href="https://github.com/RaffiRizki/RAFFIRIZKI" className="underline" target="_blank" rel="noreferrer">
                github.com/RaffiRizki/RAFFIRIZKI
              </a>
            </p>

            <div className="mt-6 space-y-6">
              <section>
                <h2 className="text-xl font-semibold">Profil</h2>
                <p className="text-slate-700 mt-2">
                  Mahasiswa Teknik Informatika Universitas Lampung dengan minat pada Cloud Computing, Jaringan Komputer,
                  dan Cyber Security. Menguasai HTML, CSS, PHP, JavaScript, dan Python, serta pengalaman membuat website.
                  Terbiasa manajemen waktu, kolaborasi, dan memiliki motivasi tinggi untuk berbagi ilmu.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">Pendidikan</h2>
                <ul className="mt-2 text-slate-700">
                  <li className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium">S1 Teknik Informatika — Universitas Lampung</p>
                      <p className="text-sm">IPK 3.54 / 4.00</p>
                    </div>
                    <span className="text-sm text-slate-500">2022 — Sekarang</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">Kemampuan</h2>
                <div className="mt-2 grid md:grid-cols-2 gap-4 text-slate-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bahasa: Indonesia, Inggris</li>
                    <li>Teknik: Pemrograman, SQL, Virtualisasi, Cloud, Network</li>
                    <li>Tools: VS Code, Jupyter, GitHub, VMWare</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bahasa Pemrograman: Python, HTML, CSS, JavaScript</li>
                    <li>Soft Skills: Manajemen waktu, Adaptif, Kolaboratif</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
