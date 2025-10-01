import React from 'react'

export default function Section({ title, children, icon }) {
  return (
    <section className="py-14">
      <div className="container">
        <div className="flex items-center gap-3 mb-6">
          {icon}
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm ring-1 ring-slate-100">
          {children}
        </div>
      </div>
    </section>
  )
}
