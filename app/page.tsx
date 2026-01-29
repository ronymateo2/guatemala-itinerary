import Image from 'next/image';
import { itineraryData, contactSummary } from './data';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center transition-all">
        <div className="text-2xl font-black uppercase tracking-tighter">Guatemala</div>
        <div className="flex gap-8 text-sm font-medium uppercase tracking-widest hidden md:flex">
          <a href="#itinerary" className="hover:text-[var(--accent)] transition-colors">Itinerario</a>
          <a href="#contacts" className="hover:text-[var(--accent)] transition-colors">Contactos</a>
        </div>
        <a href="#itinerary" className="btn-primary text-xs">Ver Viaje</a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="Lake Atitlan"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <span className="text-xs uppercase tracking-[0.5em] mb-4 block font-semibold text-[var(--accent)]">Tu Aventura Inolvidable</span>
          <h1 className="hero-text mb-6">Explora<br />Guatemala</h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl opacity-90 mb-10 font-light">
            Un viaje de 9 días por el corazón del mundo Maya, desde las selvas de Tikal hasta las aguas mágicas de Atitlán.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#itinerary" className="btn-primary text-lg px-10 py-4">Explorar Itinerario</a>
            <a href="#contacts" className="glass py-4 px-8 rounded-full text-lg border border-white/20 hover:bg-white/10 transition-all">Datos de Reserva</a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 px-6 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2">09</h3>
            <p className="text-[var(--text-muted)] uppercase tracking-widest text-xs">Días Totales</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2">04</h3>
            <p className="text-[var(--text-muted)] uppercase tracking-widest text-xs">Destinos Clave</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-2">05</h3>
            <p className="text-[var(--text-muted)] uppercase tracking-widest text-xs">Vuelos Incluidos</p>
          </div>
        </div>
      </section>

      {/* Reservation & Contact Table */}
      <section id="contacts" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Resumen de Contactos y Reservas</h2>
          <p className="text-[var(--text-muted)]">Toda la información clave en un solo lugar.</p>
          <div className="w-20 h-1 bg-[var(--accent)] mt-4" />
        </div>
        <div className="overflow-x-auto card">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--primary)] text-white">
                <th className="p-4 text-xs uppercase tracking-widest font-bold">Servicio</th>
                <th className="p-4 text-xs uppercase tracking-widest font-bold">Nombre / Anfitrión</th>
                <th className="p-4 text-xs uppercase tracking-widest font-bold">Teléfono</th>
                <th className="p-4 text-xs uppercase tracking-widest font-bold">Referencia / PIN</th>
              </tr>
            </thead>
            <tbody>
              {contactSummary.map((item, idx) => (
                <tr key={idx} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                  <td className="p-4 font-bold text-sm whitespace-nowrap">{item.service}</td>
                  <td className="p-4 text-sm">{item.name}</td>
                  <td className="p-4 text-sm font-mono">{item.phone}</td>
                  <td className="p-4 text-sm font-mono text-[var(--accent)] font-bold">{item.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900">
            <h4 className="font-bold flex items-center gap-2 text-amber-800 dark:text-amber-400 mb-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
              Recordatorio: Equipaje TAG
            </h4>
            <p className="text-sm text-amber-700 dark:text-amber-500">
              Vuelos a Flores son en tarifa <strong>LIGHT</strong> (solo un objeto personal de 10 lb). Cargos extra en el aeropuerto por maleta adicional.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900">
            <h4 className="font-bold flex items-center gap-2 text-blue-800 dark:text-blue-400 mb-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" /></svg>
              Efectivo en Flores
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-500">
              Recuerda tener <strong>GTQ 200 en efectivo</strong> para el depósito de daños en Casa Ramona.
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section id="itinerary" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Itinerario Detallado</h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto" />
        </div>

        <div className="space-y-12">
          {itineraryData.map((day, idx) => (
            <div key={idx} className="relative pl-12">
              <div className="absolute left-0 top-0 bottom-0">
                <div className="timeline-dot" />
                {idx < itineraryData.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="mb-2">
                <span className="text-sm font-bold text-[var(--accent)] uppercase tracking-widest">{day.date}</span>
                <h3 className="text-2xl font-bold mt-1">{day.title}</h3>
              </div>
              <div className="card p-6 md:p-8 mt-4 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  {day.activities.map((activity, aIdx) => (
                    <div key={aIdx} className="flex gap-4">
                      {activity.time && <span className="text-xs font-mono font-bold text-[var(--text-muted)] pt-1 whitespace-nowrap">{activity.time}</span>}
                      <div>
                        <h4 className="font-bold">{activity.title}</h4>
                        <p className="text-[var(--text-muted)] text-sm">{activity.description}</p>
                      </div>
                    </div>
                  ))}

                  {day.flights && (
                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                      <h4 className="text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                        Información de Vuelos
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {day.flights.map((flight, fIdx) => (
                          <div key={fIdx} className="text-xs glass p-3 rounded-lg border border-[var(--accent)]/10">
                            <div className="font-black mb-1 text-[var(--primary)] dark:text-white uppercase tracking-tighter">{flight.airline} {flight.number}</div>
                            <div className="text-[var(--text-muted)] mb-2 font-medium">{flight.from} → {flight.to}</div>
                            <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-black/5 dark:border-white/5">
                              <div>
                                <span className="opacity-50 block mb-0.5">PNR:</span>
                                <span className="font-bold text-[var(--accent)]">{flight.pnr || "N/A"}</span>
                              </div>
                              <div>
                                <span className="opacity-50 block mb-0.5">Hora:</span>
                                <span className="font-bold">{flight.time}</span>
                              </div>
                            </div>
                            {flight.tickets && (
                              <div className="mt-2 text-[10px] opacity-60">
                                Tickets: {flight.tickets.join(", ")}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {day.accommodation && (
                  <div className="glass p-6 rounded-xl border border-[var(--accent)]/10 h-fit">
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                      Alojamiento
                    </h4>
                    <div className="text-lg font-bold mb-1 leading-tight">{day.accommodation.name}</div>
                    <div className="text-sm text-[var(--text-muted)] mb-3">{day.accommodation.location}</div>
                    <div className="space-y-3">
                      <div className="text-xs p-2 bg-[var(--accent)]/5 rounded border border-[var(--accent)]/20">
                        <span className="font-bold block mb-1">Check-in:</span> {day.accommodation.checkIn}
                        {day.accommodation.notes && <p className="mt-2 italic opacity-80">{day.accommodation.notes}</p>}
                      </div>

                      {day.accommodation.phone && (
                        <div className="text-xs">
                          <span className="font-bold block mb-1 opacity-50 uppercase tracking-widest text-[10px]">Contacto:</span>
                          <a href={`tel:${day.accommodation.phone}`} className="text-[var(--accent)] font-bold hover:underline">{day.accommodation.phone}</a>
                        </div>
                      )}

                      {(day.accommodation.confirmation || day.accommodation.pin) && (
                        <div className="text-xs space-y-1">
                          {day.accommodation.confirmation && (
                            <div>
                              <span className="font-bold block mb-1 opacity-50 uppercase tracking-widest text-[10px]">Confirmación:</span>
                              <span className="font-mono bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded">{day.accommodation.confirmation}</span>
                            </div>
                          )}
                          {day.accommodation.pin && (
                            <div>
                              <span className="font-bold block mb-1 opacity-50 uppercase tracking-widest text-[10px]">PIN:</span>
                              <span className="font-mono bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded">{day.accommodation.pin}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {day.accommodation.address && (
                        <div className="text-[10px] opacity-70 border-t border-black/5 dark:border-white/5 pt-2">
                          <span className="font-bold uppercase tracking-widest block mb-1">Dirección:</span>
                          {day.accommodation.address}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-[var(--primary)] text-white/60 px-6 text-center border-t border-white/5">
        <div className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Guatemala</div>
        <p className="text-sm max-w-md mx-auto mb-8">
          Creado con pasión para que vivas la experiencia más auténtica en la tierra del Quetzal.
        </p>
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold">
          Buen Viaje • 2026
        </div>
      </footer>
    </main>
  );
}
