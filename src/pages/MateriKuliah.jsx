import React from 'react'
import Section from '../components/Section.jsx'
import { BookOpen, Target, TrendingUp, Box, FileText, Briefcase, Code } from 'lucide-react'

export default function MateriKuliah() {
  return (
    <div>
      <Section title="Pengantar Kapita Selekta" icon={<BookOpen className="w-8 h-8 text-blue-600" />}>
        <p className="text-slate-700 mb-4">
          Kapita Selekta adalah mata kuliah yang merangkum topik‑topik pilihan TI dan bisnis untuk
          mempersiapkan mahasiswa menghadapi dunia kerja dan penelitian.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Tujuan Pembelajaran</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Memahami analisis bisnis/strategis</li>
              <li>Menguasai metodologi penelitian</li>
              <li>Mempersiapkan tugas akhir</li>
              <li>Mengembangkan berpikir kritis</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Manfaat</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Persiapan karir profesional</li>
              <li>Keterampilan analisis</li>
              <li>Pemahaman teknologi</li>
              <li>Networking & kolaborasi</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Fungsi Kapita Selekta" icon={<Target className="w-8 h-8 text-blue-600" />}>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: '1', title: 'Fungsi Edukatif', desc: 'Pengetahuan mendalam topik khusus terkini.' },
            { n: '2', title: 'Fungsi Preparatif', desc: 'Menyiapkan KP, skripsi, dan dunia profesional.' },
            { n: '3', title: 'Fungsi Integratif', desc: 'Menggabungkan multi‑disiplin untuk solusi holistik.' },
          ].map((c) => (
            <div key={c.n} className="bg-white p-6 rounded-xl shadow-sm ring-1 ring-slate-100">
              <div className="w-12 h-12 rounded-full grid place-items-center bg-blue-100 mb-3">
                <span className="font-bold text-blue-600">{c.n}</span>
              </div>
              <h4 className="text-lg font-semibold mb-1">{c.title}</h4>
              <p className="text-slate-700">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Analisis SWOT & Five Forces" icon={<TrendingUp className="w-8 h-8 text-blue-600" />}>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            ['Strengths', 'Faktor internal positif yang memberi keunggulan.','green'],
            ['Weaknesses', 'Faktor internal yang menghambat kinerja.','red'],
            ['Opportunities', 'Faktor eksternal yang bisa dimanfaatkan.','blue'],
            ['Threats', 'Faktor eksternal yang mengancam.','yellow'],
          ].map(([title, desc, color]) => (
            <div key={title} className={`bg-${color}-50 p-6 rounded-lg border-l-4 border-${color}-500`}>
              <h4 className="text-lg font-semibold mb-1">{title}</h4>
              <p className="text-slate-700">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 p-6 rounded-xl space-y-4">
          {[
            ['Ancaman Pendatang Baru','Kemudahan pesaing baru masuk industri.'],
            ['Kekuatan Tawar Pemasok','Pengaruh pemasok terhadap harga/kualitas.'],
            ['Kekuatan Tawar Pembeli','Kemampuan pelanggan menekan harga.'],
            ['Ancaman Produk Substitusi','Adanya produk alternatif pengganti.'],
            ['Persaingan Industri','Tingkat rivalitas antar pemain.'],
          ].map(([title, desc], idx) => (
            <div key={title} className="flex items-start gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 grid place-items-center flex-shrink-0">
                {idx + 1}
              </div>
              <div>
                <h5 className="font-semibold">{title}</h5>
                <p className="text-slate-700">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="SWEBoK" icon={<Box className="w-8 h-8 text-blue-600" />}>
        <p className="text-slate-700 mb-4">
          SWEBoK merangkum body of knowledge rekayasa perangkat lunak yang umum diterima.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ['Software Requirements','Analisis & spesifikasi kebutuhan'],
            ['Software Design','Prinsip & metode perancangan'],
            ['Software Construction','Implementasi & praktik coding'],
            ['Software Testing','Pengujian & quality assurance'],
          ].map(([title, desc], i) => (
            <div key={i} className="p-4 rounded-lg bg-slate-50">
              <h4 className="font-semibold mb-1">{title}</h4>
              <p className="text-sm text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Business Strategic Plan untuk Tugas Akhir" icon={<FileText className="w-8 h-8 text-blue-600" />}>
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-semibold mb-2">Mengapa Perlu Strategic Plan?</h3>
          <p className="text-slate-700">Membantu perencanaan TA secara sistematis dan terstruktur.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-blue-200 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Tahap Perencanaan</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Identifikasi masalah/peluang</li>
              <li>Analisis kelayakan & relevansi</li>
              <li>Penentuan metodologi</li>
              <li>Timeline & milestone</li>
            </ul>
          </div>
          <div className="border-2 border-green-200 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Komponen Penting</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Visi & misi</li>
              <li>Analisis SWOT topik</li>
              <li>Strategic objectives</li>
              <li>Action plan & resources</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Persiapan KP & Skripsi" icon={<Briefcase className="w-8 h-8 text-blue-600" />}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 p-6">
            <h3 className="text-xl font-semibold mb-3">Kerja Praktik</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold mb-1">Persiapan Awal</h4>
                <p className="text-sm text-slate-700">Riset perusahaan, siapkan CV & portofolio, bangun jejaring.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold mb-1">Selama KP</h4>
                <p className="text-sm text-slate-700">Dokumentasi, proaktif minta feedback, bangun relasi.</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-100 p-6">
            <h3 className="text-xl font-semibold mb-3">Skripsi</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold mb-1">Tahap Persiapan</h4>
                <p className="text-sm text-slate-700">Eksplorasi topik, konsultasi pembimbing, susun proposal.</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold mb-1">Tahap Pelaksanaan</h4>
                <p className="text-sm text-slate-700">Kumpulkan data, analisis, implementasi metodologi.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Open Source Philosophy" icon={<Code className="w-8 h-8 text-blue-600" />}>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-semibold mb-2">Filosofi Open Source</h3>
          <p className="text-slate-700">
            Bukan sekadar kode terbuka, tetapi kolaborasi, transparansi, dan pemberdayaan komunitas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-green-200 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Prinsip Dasar</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Kebebasan menggunakan</li>
              <li>Mempelajari & memodifikasi</li>
              <li>Mendistribusikan</li>
              <li>Meningkatkan & berbagi</li>
            </ul>
          </div>
          <div className="border-2 border-blue-200 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Manfaat</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Kolaborasi global</li>
              <li>Inovasi cepat</li>
              <li>Kualitas kode lebih baik</li>
              <li>Pembelajaran komunitas</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}
