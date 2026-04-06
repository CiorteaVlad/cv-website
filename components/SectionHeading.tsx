interface Props {
  children: React.ReactNode;
  id?: string;
}

export default function SectionHeading({ children, id }: Props) {
  return (
    <div className="flex justify-center mb-7 sm:mb-8 print:mb-6">
      <h2
        id={id}
        className="inline-block min-w-[min(100%,14rem)] text-center text-sm font-bold uppercase tracking-[0.22em] text-indigo-800
                   rounded-xl border border-indigo-200/90 bg-gradient-to-b from-indigo-50 to-indigo-100/70
                   px-8 py-3.5 shadow-sm ring-1 ring-inset ring-white/60
                   print:border-gray-300 print:bg-gray-50 print:text-gray-900 print:shadow-none print:ring-0"
      >
        {children}
      </h2>
    </div>
  );
}
