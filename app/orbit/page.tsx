import FloatingPlanets from "../../components/FloatingPlanets";
import EmailSignup from "../../components/EmailSignup";

export default function Orbit() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 relative">
      <FloatingPlanets />
      <div className="relative z-10">
        <h1 className="text-7xl md:text-9xl font-black text-white text-center mb-16">
          orbit
        </h1>
        <div className="max-w-3xl mx-auto text-white text-center space-y-6 text-lg font-inter">
          <p>Habits are easier when they&apos;re shared. Orbit transforms daily routines into a social experience, where you and your friends grow a planet together with every streak. With Orbit, motivation feels less like a chore and more like a shared journey.</p>

          <p className="pt-4">Coming to an app store near you.</p>

          <EmailSignup />
        </div>
      </div>
    </div>
  );
}