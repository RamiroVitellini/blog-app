export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10 min-h-[80vh]">
      <div className="w-full max-w-5xl px-4">{children}</div>
    </section>
  );
}

