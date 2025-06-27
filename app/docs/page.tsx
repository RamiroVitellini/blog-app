import Image from "next/image";

const lugares = [
  {
    nombre: "Playa del Carmen",
    descripcion:
      "Playa del Carmen 🇲🇽 es un tesoro del Caribe mexicano, famoso por sus aguas turquesas cristalinas 🌊💎, playas de arena blanca y fina 🤍, y arrecifes de coral llenos de vida marina 🐠🐢. Ideal para una escapada tanto de aventura como de relax, combina cenotes místicos 💧, cercanas ruinas mayas 🛕 y una vibrante Quinta Avenida repleta de tiendas, restaurantes y bares 🎶🍹. Su clima es tropical: en verano las temperaturas oscilan entre 26 °C y 32 °C 🌡️, perfectas para bucear, tomar el sol y disfrutar de inolvidables amaneceres y atardeceres sobre el mar 🌅.",
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
  {
    nombre: "Bali",
    descripcion:
      "Bali 🇮🇩 es un paraíso tropical en Indonesia, célebre por sus terrazas de arroz esmeralda 🌾, templos hindúes milenarios 🛕 y playas de arena dorada 🏖️. Perfecta para surfistas, amantes del yoga y buscadores de culturas exóticas, combina rituales tradicionales, spas de clase mundial y vibrante vida nocturna 🎶. Su clima ecuatorial mantiene temperaturas cálidas entre 26 °C y 31 °C durante la estación seca (mayo-septiembre) 🌡️, ideales para explorar volcanes, cascadas y arrecifes de coral.",
    imagen: "https://i.pinimg.com/736x/38/e5/c7/38e5c784036d0d789c37a50e3e634432.jpg",
  },
  {
    nombre: "Kyoto",
    descripcion:
      "Kyoto 🇯🇵 atesora la esencia del Japón tradicional ⛩️: geishas, callejones de madera y más de 1 600 templos zen 🙏. En primavera, los cerezos en flor pintan la ciudad de rosa 🌸, mientras que en otoño los arces se tornan rojo fuego 🍁. Es un destino para saborear la alta cocina kaiseki 🍱 y perderse en jardines de musgo. El clima es templado, con veranos de 27 °C-33 °C y primaveras suaves de 13 °C-22 °C 🌡️.",
    imagen: "https://i.pinimg.com/736x/af/5a/33/af5a33cd0caaec862960469ec82d9749.jpg",
  },
  {
    nombre: "Queenstown",
    descripcion:
      "Queenstown 🇳🇿 es la capital mundial de la aventura ⛰️, situada a orillas del lago Wakatipu y rodeada de los Alpes del Sur 🏔️. Ofrece bungee jumping, esquí y rutas de senderismo épicas 🚵. Ideal para adictos a la adrenalina y amantes de los paisajes cinematográficos (¡hola, Tierra Media!) 🎬. Los veranos (diciembre-febrero) son frescos, 20 °C-28 °C 🌡️; los inviernos, fríos pero perfectos para esquiar, 1 °C-10 °C.",
    imagen: "https://i.pinimg.com/736x/8a/02/04/8a020453fbafdf6e365778e083b867ab.jpg",
  },
  {
    nombre: "Ciudad del Cabo",
    descripcion:
      "Ciudad del Cabo 🇿🇦 presume de la majestuosa Table Mountain 🏞️, viñedos de clase mundial en Stellenbosch 🍷 y playas donde se avistan pingüinos africanos 🐧. Perfecta para combinar naturaleza, gastronomía y cultura urbana. El clima mediterráneo regala veranos de 20 °C-28 °C (diciembre-marzo) 🌡️, óptimos para rutas panorámicas por el Cabo de Buena Esperanza.",
    imagen: "https://i.pinimg.com/736x/5d/9d/0d/5d9d0d74b89dd3808908cf76bf6762e3.jpg",
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

