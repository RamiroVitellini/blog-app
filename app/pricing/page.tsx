"use client";
import { useState } from "react";

// Datos de costos
const costos = [
  {
    destino: "Playa del Carmen 🇲🇽",
    alojamientoMin: 30,
    alojamientoMax: 80,
    alojamiento: "USD 30-80 / noche",
    comida: "USD 10-25 / día",
    transporte: "USD 1-2 por viaje en colectivo",
    extra: "Excursión cenotes: USD 30-60",
    nota: "En la Quinta Avenida encontrás opciones económicas y gourmet.",
  },
  {
    destino: "Suiza 🇨🇭",
    alojamientoMin: 100,
    alojamientoMax: 200,
    alojamiento: "USD 100-200 / noche",
    comida: "USD 30-50 / día",
    transporte: "USD 4-8 por viaje en tren/metro",
    extra: "Pase Suiza Travel Pass: USD 90-120/día",
    nota: "El agua del grifo es potable y gratuita en casi todos lados.",
  },
  {
    destino: "Bali 🇮🇩",
    alojamientoMin: 15,
    alojamientoMax: 60,
    alojamiento: "USD 15-60 / noche",
    comida: "USD 5-15 / día",
    transporte: "USD 3-7 alquiler moto/día",
    extra: "Entrada templo: USD 2-5",
    nota: "Alquilá moto para moverte barato, ¡pero manejá con precaución!",
  },
  {
    destino: "Santorini 🇬🇷",
    alojamientoMin: 40,
    alojamientoMax: 120,
    alojamiento: "USD 40-120 / noche",
    comida: "USD 15-30 / día",
    transporte: "USD 2-3 bus local",
    extra: "Tour volcán: USD 25-40",
    nota: "Reservá con anticipación en temporada alta.",
  },
  {
    destino: "Kyoto 🇯🇵",
    alojamientoMin: 50,
    alojamientoMax: 120,
    alojamiento: "USD 50-120 / noche",
    comida: "USD 10-25 / día",
    transporte: "USD 2-4 tren/subte",
    extra: "Templos: USD 2-5 por entrada",
    nota: "El Japan Rail Pass puede ayudarte a ahorrar mucho.",
  },
  {
    destino: "Queenstown 🇳🇿",
    alojamientoMin: 50,
    alojamientoMax: 150,
    alojamiento: "USD 50-150 / noche",
    comida: "USD 15-30 / día",
    transporte: "USD 2-4 bus",
    extra: "Bungee jumping: USD 100-180",
    nota: "¡Probá los deportes extremos, pero reservá online para mejores precios!",
  },
  {
    destino: "Ciudad del Cabo 🇿🇦",
    alojamientoMin: 30,
    alojamientoMax: 80,
    alojamiento: "USD 30-80 / noche",
    comida: "USD 10-20 / día",
    transporte: "USD 1-2 bus/taxi",
    extra: "Excursión pingüinos: USD 20-35",
    nota: "Movete con apps de taxi seguras. ¡Cuidado con el sol!",
  },
];

// Para gráfico de barras: obtenemos máximos para escalar
const maxAlojamiento = Math.max(...costos.map((c) => c.alojamientoMax));

export default function PricingPage() {
  // Para mostrar gráfico interactivo de alojamiento
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div>
      {/* Tip de ahorro global */}
      <div className="bg-blue-50 rounded-xl px-6 py-4 mt-2 mb-8 shadow text-blue-800 font-medium text-center">
        💡 <b>Tip:</b> Viajá en temporada baja y buscá alojamiento con cancelación gratuita para mejores precios. Usá transporte público y reservá excursiones online para ahorrar aún más.
      </div>

      {/* Header */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md px-6 md:px-16 py-4 mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2 tracking-wide drop-shadow">
          Travel Costs
        </h1>
        <p className="text-gray-700">
          Estimación de gastos diarios y extras en destinos turísticos populares.
        </p>
      </div>

      {/* Comparador visual: gráfico de barras de alojamiento */}
      <div className="bg-white/60 rounded-2xl shadow px-6 py-6 mb-10">
        <h2 className="text-lg font-bold text-blue-700 mb-4 text-center">Compará el costo de alojamiento (USD/noche)</h2>
        <div className="space-y-3">
          {costos.map((costo, idx) => (
            <div key={costo.destino} className="flex items-center gap-4">
              <span className="w-44 truncate text-sm font-semibold">{costo.destino}</span>
              <div
                className="flex-1 relative h-6 rounded-lg bg-blue-100/60 overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-blue-700 transition-all"
                  style={{
                    width: `${(costo.alojamientoMax / maxAlojamiento) * 100}%`,
                  }}
                />
                {/* Mostrar rango arriba de la barra si está hovered */}
                {hovered === idx && (
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs bg-white rounded px-2 py-1 shadow">
                    {costo.alojamiento}
                  </div>
                )}
              </div>
              <span className="ml-2 text-blue-700 font-medium text-sm">
                {costo.alojamiento}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {costos.map((costo) => (
          <div
            key={costo.destino}
            className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col items-center hover:scale-[1.025] transition-transform"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2 text-center">{costo.destino}</h2>
            <div className="w-full text-gray-800 text-base">
              <div className="mb-1">
                <span className="font-semibold">🏨 Alojamiento:</span> {costo.alojamiento}
              </div>
              <div className="mb-1">
                <span className="font-semibold">🍽️ Comida:</span> {costo.comida}
              </div>
              <div className="mb-1">
                <span className="font-semibold">🚌 Transporte:</span> {costo.transporte}
              </div>
              <div className="mb-1">
                <span className="font-semibold">🎫 Extra:</span> {costo.extra}
              </div>
              {/* Notas importantes (6) */}
              <div className="mt-3 text-xs text-blue-500 italic">
                {costo.nota}
              </div>
              {/* Enlace a blogs relacionados (7) */}
              <a
  href="/"
  className="text-blue-600 underline text-sm mt-4 inline-block hover:text-blue-800 transition"
>
  Ver experiencias de viajeros
</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

