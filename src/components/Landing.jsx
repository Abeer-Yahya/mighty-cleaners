import Features from "./Features";
import Feedback from "./Feedback";
import Hero from "./Hero";
import RegisterCTA from "./RegisterCTA";
import ServicesCTA from "./ServicesCTA";

export default function Landing() {
  return (
    <div className="Landing">
      <Hero />
      <Features />
      <Feedback />
      <RegisterCTA />
      <ServicesCTA />
    </div>
  );
}
