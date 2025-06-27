export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-10 px-4 bg-white/30 backdrop-blur-xl rounded-3xl shadow-xl mx-auto max-w-3xl">
      <div className="w-full text-center flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
