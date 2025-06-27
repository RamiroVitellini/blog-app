import { title } from "@/components/primitives";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>Sobre Nosotros</h1>
      <div className="flex flex-col items-center gap-6 mt-6">
        <Image
          src="/logo.png"
          alt="Logo Ramiro Vitellini"
          width={72}
          height={72}
          className="rounded-xl shadow-lg"
          priority
        />
        <p className="text-lg text-gray-700 max-w-xl">
          Bienvenido a nuestro espacio digital, un blog pensado para quienes disfrutan compartir experiencias, descubrir destinos y conectar con otros viajeros y curiosos como vos.
        </p>
        <div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow mt-2">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Nuestra misión</h2>
          <p className="text-base text-gray-700">
            Construir una comunidad abierta donde cada historia cuenta y cada experiencia puede inspirar a alguien más.  
            Apostamos por la claridad, el diseño moderno y una navegación ágil para que siempre te sientas cómodo en nuestra web, estés donde estés.
          </p>
        </div>
      </div>
    </div>
  );
}