export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-7xl md:text-9xl font-black text-white text-center mb-8">
        contact
      </h1>
      <a
        href="mailto:hi@invisiblethings.ai"
        className="text-white underline hover:opacity-70 transition-opacity duration-200 text-lg md:text-xl font-bold"
      >
        hi@invisiblethings.ai
      </a>
    </div>
  );
}