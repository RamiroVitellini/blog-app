import { auth } from "@/auth";
import { getAllBlog } from "@/components/blog/actions/blog-action";
import { Card, CardHeader, CardBody } from "@heroui/card";
import Image from "next/image";
import Link from "next/link"; // 👈 Asegurate de importar esto

export default async function Home() {
  const blogs = await getAllBlog();
  const session = await auth();

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] gap-4 py-2 px-2">
      {/* Hero/Header glassy */}
      <div className="backdrop-blur-md bg-white/50 rounded-2xl shadow-xl p-6 max-w-2xl w-full flex flex-col items-center mt-2 mb-2">
        <h1 className="text-3xl font-bold mb-1 text-[#2196f3]">¡Bienvenido a nuestro blog!</h1>
        <p className="mb-2 text-gray-700">
          Compartí tus experiencias, descubrí lugares y conectá con viajeros como vos.
        </p>
        {session?.user?.name && (
          <div className="flex items-center gap-2 text-md text-gray-600 mb-1">
            <span className="font-semibold">Hola, {session.user.name} 👋</span>
          </div>
        )}
        <span className="text-base text-gray-600">¡Contanos tu experiencia!</span>
      </div>

      {/* Blog Cards grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="flex flex-col h-full rounded-3xl overflow-hidden shadow-2xl bg-white/70 backdrop-blur-lg transition-all hover:scale-[1.025] hover:shadow-3xl"
          >
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  style={{ borderTopLeftRadius: "1.5rem", borderTopRightRadius: "1.5rem" }}
                />
              </div>
            </CardHeader>
            <CardBody className="flex flex-col p-6 flex-1">
              <h2 className="text-xl font-semibold text-[#1976d2] mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4 flex-1">{blog.content}</p>
            </CardBody>
          </Card>
        ))}

        {/* CARD "Agrega tu experiencia" */}
        <Link
          href="/blog"
          className="flex flex-col items-center justify-center h-full rounded-3xl overflow-hidden shadow-2xl bg-white/70 backdrop-blur-lg transition-all hover:scale-[1.025] hover:shadow-3xl min-h-[288px] p-6"
        >
          <div className="flex flex-col items-center justify-center flex-1">
            {/* Ícono SVG grande */}
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="40" fill="#2196f3" fillOpacity="0.15"/>
              <path d="M40 45a12 12 0 100-24 12 12 0 000 24z" fill="#2196f3"/>
              <path d="M56 58c0-8-8-12-16-12s-16 4-16 12" stroke="#2196f3" strokeWidth="2"/>
              <circle cx="59" cy="59" r="10" fill="#fff"/>
              <path d="M59 54v10M54 59h10" stroke="#2196f3" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-bold text-blue-600 text-lg mt-4 text-center">
              Agrega tu experiencia
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

