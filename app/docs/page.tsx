import Image from "next/image";

const lugares = [
  {
    nombre: "Playa de Copacabana, Brasil - Ana (29 años, Sevilla) ★★★★★",
    descripcion:
      "Llegar un 31 de diciembre y ver toda la playa vestida de blanco para el Réveillon fue mágico. Bailé samba con desconocidos, comí bolinhos de bacalao recién hechos y, cuando explotaron los fuegos artificiales sobre el mar, entendí por qué todos dicen que en Río la vida se celebra a lo grande.",
    imagen: "https://i.pinimg.com/736x/ab/62/06/ab62066361c4a53192695fd537e2b0c7.jpg",
  },
  {
    nombre: "Santorini",
    descripcion:
      "Santorini 🇬🇷 es una joya del mar Egeo, famosa por sus casas blancas con cúpulas azules 🏘️, paisajes volcánicos 🌋 y atardeceres inolvidables 🌅. Ideal para una escapada romántica o de relax, combina historia, playas únicas de arena negra 🖤 y excelente gastronomía 🍷🍽️. El clima es mediterráneo, con temperaturas agradables entre 23 °C y 30 °C en verano 🌡️, perfectas para pasear y disfrutar del mar.",
    imagen: "https://i.pinimg.com/736x/7c/60/5d/7c605d0b19ca207f73efa204f75721de.jpg",
  },
  {
    nombre: "Suiza",
    descripcion:
      "Suiza 🇨🇭 es un destino de ensueño en el corazón de Europa 🏔️, conocido por sus paisajes alpinos, lagos cristalinos 💧 y ciudades elegantes como Zúrich, Ginebra y Lucerna 🏙️. Es ideal tanto para amantes de la naturaleza como de la cultura. En verano, las temperaturas van de 18 °C a 28 °C 🌤️, perfectas para hacer senderismo, recorrer pueblos pintorescos 🥾🚞 y disfrutar del chocolate y el queso suizo 🍫🧀.",
    imagen: "https://i.pinimg.com/736x/db/67/65/db6765cdcb54b48b47cb0bb9aaf3d980.jpg",
  },
];

export default function DocsPage() {
  return (
    <section className="flex flex-col items-center min-h-[80vh] pt-4 pb-10 px-4">
      {/* HEADER estilo glass */}
      <div className="mb-4 w-full flex justify-center">
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md px-6 md:px-16 py-4 max-w-4xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">
            Lugares turísticos para visitar
          </h1>
          <p className="text-gray-700 mb-1">
            No dudes en sacar tus vacaciones soñadas
          </p>
          <p className="text-gray-700">¡Luego contanos tu experiencia!</p>
        </div>
      </div>
      {/* FIN HEADER */}

      {/* Grilla de lugares */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
        {lugares.map((lugar) => (
          <div
            key={lugar.nombre}
            className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden flex flex-col hover:scale-[1.025] transition-transform"
          >
            {/* Imagen grande y ancha */}
            <div className="relative w-full h-48">
              <Image
                src={lugar.imagen}
                alt={lugar.nombre}
                fill
                className="object-cover"
                unoptimized
                style={{
                  borderTopLeftRadius: '1rem',
                  borderTopRightRadius: '1rem',
                }}
              />
            </div>
            {/* Contenido */}
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-base md:text-lg font-bold mb-2 text-blue-800">{lugar.nombre}</h2>
              <p className="text-gray-700 text-base">{lugar.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}