import Button from "./components/Button";
import Footer from "./components/Footer";
import HeroVisual from "./components/HeroVisual";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="border-b border-muted-gray bg-soft-gray">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
            <div className="space-y-7">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue">LumkoMDX</p>
              <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-charcoal sm:text-5xl">
                Data can be used. Identity is never exposed.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-charcoal/80">
                LumkoMDX enables safe, real-time clinical collaboration by keeping patient identity at its source while intelligence flows across boundaries.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="#final-cta" variant="primary">
                  Request a Demo
                </Button>
                <Button href="#how-it-works">Explore the Platform</Button>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <Section id="problem" title="Problem">
          Clinical data sharing often forces a harmful trade-off: teams either restrict collaboration to protect privacy, or expose identity to move quickly.
        </Section>

        <Section id="shift" title="Shift">
          LumkoMDX changes the model. Data can be used without being exposed. Institutions retain control of patient identity while authorized intelligence moves in real time.
        </Section>

        <Section id="how-it-works" title="How it works">
          LumkoMDX keeps identifying data anchored at origin systems. Policy-aware coordination enables cross-boundary clinical workflows, so care teams can act with confidence without copying identity into external channels.
        </Section>

        <section id="final-cta" className="border-b border-muted-gray bg-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center sm:py-20">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal">Sovereign by design</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
              Data can be used without being exposed.
            </h2>
            <div className="mt-8 flex justify-center">
              <Button href="#" variant="primary">
                Request a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
