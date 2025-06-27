import { auth } from "@/auth";
import { getAllBlog } from "@/components/blog/actions/blog-action";
import FormNewBlog from "@/components/blog/components/FormNewBlog";
import TableBlogs from "@/components/blog/components/TableBlogs";
import { title } from "@/components/primitives";
import { redirect } from "next/navigation";

export default async function BlogPage() {
  const blogs = await getAllBlog();
  const session = await auth();
  if (!session) {
  redirect('/login')
  }

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8 py-8">
      {/* Header glassy */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-6 md:p-8 w-full text-center mb-4">
        <h1
          className="
            text-4xl md:text-5xl font-extrabold mb-2 
            bg-gradient-to-r from-[#1e90ff] via-[#64b5f6] to-[#00c6ff]
            bg-clip-text text-transparent 
            drop-shadow-lg tracking-wide uppercase
          "
        >
          Gestión de Blogs
        </h1>
        <p className="text-gray-700">
          ¡Compartinos tus experiencias!
        </p>
      </div>
      {/* Tabla glassy */}
      <div className="w-full bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-4 md:p-8">
        <TableBlogs blogs={blogs} />
      </div>
    </div>
  );
}

