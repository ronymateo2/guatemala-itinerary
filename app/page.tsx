"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { itineraryData, contactSummary } from './data';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass px-4 md:px-8 py-4 md:py-5 flex justify-between items-center transition-all bg-white/10 backdrop-blur-xl border-b border-white/10"
      >
        <div className="text-xl md:text-2xl font-black uppercase tracking-tighter family-playfair italic">Guatemala</div>
        <div className="flex gap-4 md:gap-10 text-[10px] md:text-[11px] items-center font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] hidden sm:flex">
          <a href="#itinerary" className="hover:text-[var(--accent)] transition-colors">Itinerario</a>
          <a href="#contacts" className="hover:text-[var(--accent)] transition-colors">Contactos</a>
          <a href="#locations" className="hover:text-[var(--accent)] transition-colors">Destinos</a>
        </div>
        <a href="#itinerary" className="btn-primary text-[10px] md:text-[11px] font-bold tracking-[0.1em] md:tracking-[0.2em] px-4 md:px-6 py-2 md:py-3">Reserva</a>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[110vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Lake Atitlan"
            fill
            priority
            className="object-cover scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--background)] z-1" />

        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.6em" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[10px] uppercase mb-6 block font-bold text-[var(--accent)] drop-shadow-md"
          >
            Edición Lujo 2026
          </motion.span>
          <h1 className="hero-text mb-8 tracking-tighter family-playfair italic lowercase drop-shadow-2xl">
            Guatemala<br />
            <span className="text-[var(--accent)] not-italic uppercase tracking-widest text-4xl block mt-4 font-black drop-shadow-xl">Inmortal</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl mb-12 font-light leading-relaxed drop-shadow-md">
            Una travesía curada por el corazón del mundo Maya.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#itinerary"
              className="btn-primary text-sm px-12 py-5"
            >
              Comenzar Aventura
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-50" />
        </motion.div>
      </section>

      {/* Stats Summary */}
      <section className="relative -mt-20 z-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-1 grid-cols-1 glass rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          {[
            { label: "Días de exploración", value: "09" },
            { label: "Experiencias Curadas", value: "12" },
            { label: "Vuelos de Conexión", value: "05" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 md:p-12 text-center bg-white/5 hover:bg-white/10 transition-colors border-b md:border-b-0 md:border-r border-white/5 last:border-0"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-3 family-playfair text-[var(--accent)]">{stat.value}</h3>
              <p className="text-[var(--text-muted)] uppercase tracking-[0.3em] text-xs font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Destination Showcase */}
      <section id="locations" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[var(--accent)] font-bold text-[10px] uppercase tracking-[0.4em]">Destinos Exclusivos</span>
              <h2 className="text-5xl font-black family-playfair italic mt-2">La Ruta Dorada</h2>
            </div>
            <p className="max-w-md text-[var(--text-muted)] text-right hidden md:block">
              Cada ubicación ha sido seleccionada por su valor histórico, natural y espiritual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { img: "/tikal.png", title: "Selva de Tikal", desc: "El amanecer del imperio Maya." },
              { img: "/hero.png", title: "Lago de Atitlán", desc: "El lugar más bello del mundo." },
              { img: "/antigua.png", title: "Antigua Mística", desc: "Historia viva entre volcanes." }
            ].map((loc, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-3xl"
              >
                <Image src={loc.img} alt={loc.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10 text-white">
                  <h4 className="text-2xl md:text-3xl font-bold family-playfair italic mb-1">{loc.title}</h4>
                  <p className="text-white/60 text-xs md:text-sm tracking-wide">{loc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation & Contact Table */}
      {/* Contact Summary Table */}
      <section id="contacts" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-16">
          <div className="lg:col-span-1">
            <span className="text-[var(--accent)] font-bold text-[10px] uppercase tracking-[0.4em]">Directorio</span>
            <h2 className="text-5xl font-black family-playfair italic mt-4 mb-8">Información Maestra</h2>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6 font-light">
              Soporte 24/7 y códigos de reserva centralizados para un acceso inmediato durante todo el trayecto.
            </p>
            <div className="space-y-4 border-t pt-8">
              <div className="text-xs">
                <span className="font-black block mb-2 opacity-40 uppercase tracking-[0.1em]">Emergencias</span>
                <span className="font-bold">+502 2380 9401 (Airlines)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-xl">
              <table className="w-full text-left border-collapse bg-white">
                <thead className="bg-[var(--primary)] text-white">
                  <tr className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-80">
                    <th className="p-4 md:p-8">Servicio</th>
                    <th className="p-4 md:p-8">Nombre</th>
                    <th className="p-4 md:p-8">Contacto</th>
                    <th className="p-4 md:p-8">Referencia</th>
                  </tr>
                </thead>
                <tbody>
                  {contactSummary.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 md:p-8 font-black text-[10px] md:text-xs family-playfair italic underline decoration-[var(--accent)]/30">{item.service}</td>
                      <td className="p-4 md:p-8 text-[11px] md:text-sm opacity-80">{item.name}</td>
                      <td className="p-4 md:p-8 text-[10px] md:text-xs font-bold leading-none">{item.phone}</td>
                      <td className="p-4 md:p-8 text-[10px] md:text-xs font-mono font-black text-[var(--accent)]">{item.ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section id="itinerary" className="py-32 bg-[var(--surface)] px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[var(--accent)]/5 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-24 text-center">
            <span className="text-[var(--accent)] font-bold text-[10px] uppercase tracking-[0.4em]">Calendario de Viaje</span>
            <h2 className="text-6xl font-black family-playfair italic mt-4">Inmersión Día a Día</h2>
          </div>

          <div className="space-y-24">
            {itineraryData.map((day, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative pl-24"
              >
                <div className="absolute left-0 top-0 bottom-[-5rem] w-px bg-slate-200">
                  <div className="w-3 h-3 bg-[var(--accent)] rounded-full -ml-[6px] mt-2 shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
                </div>

                <div className="absolute left-0 top-0 translate-x-[-150%] md:translate-x-[-120%] text-right pt-1 hidden md:block">
                  <span className="text-[var(--accent)] font-black text-4xl md:text-6xl opacity-40 family-playfair italic">{idx + 1}</span>
                </div>

                <div className="mb-6 md:mb-8">
                  <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-[0.3em] mb-2 block">{day.date}</span>
                  <h3 className="text-3xl md:text-4xl font-bold family-playfair lowercase tracking-tighter opacity-90">{day.title}</h3>
                </div>

                <div className="card p-6 md:p-14 overflow-hidden relative shadow-sm hover:shadow-xl group">
                  <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[var(--accent)]/5 rounded-bl-[100px] transition-all group-hover:scale-110" />

                  <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    <div className="md:col-span-2 space-y-8">
                      {day.activities.map((activity, aIdx) => (
                        <div key={aIdx} className="flex gap-6 items-start">
                          {activity.time && <span className="text-xs font-black text-[var(--text-muted)] bg-slate-100 px-3 py-1 rounded-full uppercase tracking-widest">{activity.time}</span>}
                          <div>
                            <h4 className="font-bold text-xl mb-1">{activity.title}</h4>
                            <p className="text-[var(--text-muted)] leading-relaxed text-base font-light">{activity.description}</p>
                          </div>
                        </div>
                      ))}

                      {day.flights && (
                        <div className="mt-10 pt-10 border-t border-slate-100">
                          <h4 className="text-[10px] uppercase tracking-[0.4em] font-black mb-6 text-[var(--accent)]">Protocolo Aéreo</h4>
                          <div className="grid sm:grid-cols-2 gap-6">
                            {day.flights.map((flight, fIdx) => (
                              <div key={fIdx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-base font-black mb-3 family-playfair italic underline decoration-[var(--accent)]">{flight.airline} {flight.number}</div>
                                <div className="text-sm text-[var(--text-muted)] opacity-80 font-bold mb-4">{flight.from} → {flight.to}</div>
                                <div className="flex justify-between items-center text-xs font-black tracking-widest leading-none">
                                  <div>
                                    <span className="opacity-40 block mb-1">PNR</span>
                                    <span className="text-[var(--accent)]">{flight.pnr || "---"}</span>
                                  </div>
                                  <div className="text-right">
                                    <span className="opacity-40 block mb-1">HORA</span>
                                    <span>{flight.time}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {day.accommodation && (
                      <div className="h-fit card p-6 md:p-8 bg-[var(--surface)] border-2 border-[var(--accent)]/10 shadow-lg md:sticky md:top-32 relative z-10">
                        <span className="text-[var(--accent)] font-bold text-xs uppercase tracking-[0.4em] mb-4 block underline">Residencia</span>
                        <h4 className="text-2xl md:text-3xl font-black family-playfair italic leading-tight mb-2 lowercase">{day.accommodation.name}</h4>
                        <p className="text-xs text-[var(--text-muted)] mb-6 opacity-100 font-medium">{day.accommodation.location}</p>

                        <div className="space-y-4">
                          <div className="text-xs p-5 bg-white rounded-xl border border-black/10 shadow-inner">
                            <span className="font-black block mb-2 opacity-60 tracking-[0.1em] text-[var(--text-muted)]">CHECK-IN</span>
                            <span className="font-bold text-[var(--text)]">{day.accommodation.checkIn}</span>
                          </div>

                          {day.accommodation.phone && (
                            <div className="flex justify-between items-center px-1">
                              <span className="text-[10px] font-black opacity-40">TEL</span>
                              <a href={`tel:${day.accommodation.phone}`} className="text-xs font-black hover:text-[var(--accent)] text-[var(--text)]">{day.accommodation.phone}</a>
                            </div>
                          )}

                          {day.accommodation.confirmation && (
                            <div className="flex justify-between items-center px-1">
                              <span className="text-[10px] font-black opacity-40">BOOKING</span>
                              <span className="text-xs font-mono font-bold tracking-tighter text-[var(--accent)]">{day.accommodation.confirmation}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 md:py-40 bg-[var(--primary)] text-white/60 px-6 text-center border-t border-white/5 overflow-hidden relative">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03]">
          <span className="text-[20vw] font-black family-playfair uppercase italic leading-none whitespace-nowrap">GUATEMALA</span>
        </div>
        <div className="relative z-10">
          <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter family-playfair italic leading-none mb-4 lowercase">guatemala.</div>
          <p className="text-xs max-w-md mx-auto mb-12 md:mb-16 tracking-widest font-light opacity-80 leading-relaxed uppercase">
            Curated by Elite Travel Agency • 2026 Edition
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] font-black tracking-[0.3em] md:tracking-[0.5em] mb-12 md:mb-16 text-white/70">
            <span className="text-[var(--accent)]">TIKAL</span>
            <span>ANTIGUA</span>
            <span>ATITLAN</span>
            <span className="text-[var(--accent)]">GUATEMALA</span>
          </div>
          <div className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-black border-t border-white/10 pt-12 md:pt-16 inline-block opacity-50">
            Explora Responsablemente • Vive Intensamente
          </div>
        </div>
      </footer>
    </main>
  );
}
