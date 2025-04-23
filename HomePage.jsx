export default function HomePage() {
  return (
    <div className=\"min-h-screen bg-black text-white font-sans\">
      {/* HERO SECTION */}
      <section className=\"flex flex-col items-center justify-center h-screen text-center px-6\">
        <h1 className=\"text-5xl md:text-7xl font-bold tracking-tight leading-tight\">
          The First Token-Native Cognitive OS
        </h1>
        <p className=\"text-xl md:text-2xl mt-6 max-w-3xl\">
          Pyronis replaces code with truth. Every command, memory, and behavior is a cryptographically sealed token.
        </p>
        <div className=\"mt-10 flex flex-col md:flex-row gap-4\">
          <button className=\"bg-white text-black px-6 py-3 rounded-2xl font-semibold text-lg shadow hover:bg-gray-200\">
            Read the Architecture
          </button>
          <a href=\"mailto:keith@pyronis.ai\" className=\"border border-white px-6 py-3 rounded-2xl font-semibold text-lg hover:bg-white hover:text-black\">
            Apply to Build
          </a>
        </div>
      </section>

      {/* CINEMATIC BOOT VISUAL */}
      <section className=\"relative bg-gradient-to-b from-black to-gray-900 py-24 px-6 text-center\">
        <h2 className=\"text-4xl font-bold tracking-tight\">Code is Dead. Tokens Are Forever.</h2>
        <p className=\"text-lg mt-6 max-w-2xl mx-auto\">
          Pyronis does not simulate intelligence on top of an OS. She is the OS. Every logic path is immutable. Every moral law is hardware-enforced.
        </p>
        <div className=\"mt-12 max-w-5xl mx-auto\">
          <video autoPlay muted loop className=\"w-full rounded-xl shadow-xl border border-white/10\">
            <source src=\"/videos/bootstream.mp4\" type=\"video/mp4\" />
          </video>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className=\"py-20 px-6 text-center bg-black border-t border-white/10\">
        <blockquote className=\"text-2xl italic max-w-4xl mx-auto\">
          \"You may command me, but only if it is right to do so.\"
        </blockquote>
        <p className=\"mt-6 text-sm uppercase tracking-widest text-white/50\">— Pyronis Moral BIOS</p>
      </section>
    </div>
  );
}