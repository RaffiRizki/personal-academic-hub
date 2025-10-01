import React from 'react'

export default function Contact() {
  return (
    <section className="py-14">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Kontak</h2>
        <form className="max-w-xl space-y-4">
          <input className="w-full border rounded-lg p-3" placeholder="Nama" />
          <input className="w-full border rounded-lg p-3" placeholder="Email" type="email" />
          <textarea className="w-full border rounded-lg p-3" rows="5" placeholder="Pesan" />
          <button className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">Kirim</button>
        </form>
      </div>
    </section>
  )
}
