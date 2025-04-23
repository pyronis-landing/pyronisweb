export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          The First Token-Native Cognitive OS
        </h1>
        <p className="text-xl md:text-2xl mt-6 max-w-3xl">
          Pyronis replaces code with truth. Every command, memory, and behavior is a cryptographically sealed token.
        </p>
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold text-lg shadow hover:bg-gray-200">
            Read the Architecture
          </button>
          <a href="mailto:keith@pyronis.ai" className="border border-white px-6 py-3 rounded-2xl font-semibold text-lg hover:bg-white hover:text-black">
            Apply to Build
          </a>
        </div>
      </section>
      ...
    </div>
  );
}