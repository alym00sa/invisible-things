import AnimatedText from "../components/AnimatedText";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <AnimatedText text="invisible things" />
      <p className="text-white text-center mt-8 max-w-2xl text-lg font-inter">
        A launchpad for innovative ideas that center around social connection—all for that invisible thing.
      </p>
    </div>
  );
}
