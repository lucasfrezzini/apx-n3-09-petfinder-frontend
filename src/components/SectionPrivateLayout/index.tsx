interface SectionPrivateLayoutProps {
  children: React.ReactNode;
}

export default function SectionPrivateLayout({
  children,
}: SectionPrivateLayoutProps) {
  return (
    <section className="p-5 w-full mx-auto">
      <div className="bg-white shadow-xl rounded-xl mx-auto p-8">
        {children}
      </div>
    </section>
  );
}
