import {
  Users,
  Sparkles,
  Network,
  ShieldCheck,
  Database,
  Lock,
  Activity,
  UserMinus,
  ShieldOff,
  CheckCircle,
  Stethoscope,
  Microscope,
  Building2,
} from "lucide-react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import HeroVisual from "./components/HeroVisual";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

const modules = [
  { title: "Cohort Browser", body: "Explore patient groups without exposing identity.", icon: Users },
  { title: "Insight Studio", body: "Ask clinical questions in natural language.", icon: Sparkles },
  { title: "Federation Layer", body: "Query across systems without moving data.", icon: Network },
  { title: "Audit & Consent", body: "Full traceability and compliance by design.", icon: ShieldCheck },
];

const steps = [
  { num: "1", title: "Data stays at the source", body: "Patient identity remains inside the originating system.", icon: Database },
  { num: "2", title: "Data is structured and pseudonymised", body: "Only necessary clinical data enters the LumkoMDX federation layer.", icon: Lock },
  { num: "3", title: "Insight flows back", body: "Only aggregated, compliant intelligence is returned to authorised users.", icon: Activity },
];

const privacyPoints = [
  { text: "Identity never enters the platform.", icon: UserMinus },
  { text: "Certain breaches are structurally impossible.", icon: ShieldOff },
  { text: "Compliance is continuous, not enforced later.", icon: CheckCircle },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-muted-gray bg-white">
          <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-8 py-[140px] lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-[56px] leading-[1.18] font-medium tracking-tight text-charcoal">
                The infrastructure that <span className="text-teal">unlocks the power</span> of healthcare data while <span className="text-teal">protecting</span> what matters most
              </h1>
              <p className="mt-10 max-w-xl text-xl leading-relaxed text-charcoal/72">
                Use healthcare data across systems while patient identity never leaves its source.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-5">
                <Button href="#demo" variant="primary">
                  Request demo
                </Button>
                <Button href="#how-it-works" variant="link">
                  Explore sample cohort →
                </Button>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <Section subtitle="LumkoMDX removes it." title="Healthcare data has always required a tradeoff.">
          <div className="grid gap-10 lg:grid-cols-[1fr_120px_1fr]">
            <div className="rounded-xl border border-muted-gray bg-white p-10">
              <p className="text-lg font-semibold text-charcoal">The old reality</p>
              <ul className="mt-6 space-y-5 text-charcoal/78">
                <li><strong className="text-charcoal">Fragmented systems</strong><br />Data siloed across institutions and technologies.</li>
                <li><strong className="text-charcoal">Risk in sharing</strong><br />Identity, exposure, compliance burden, and breach risk.</li>
                <li><strong className="text-charcoal">Delayed insight</strong><br />Slow access to the data needed to improve outcomes.</li>
              </ul>
            </div>
            <div className="hidden items-center justify-center lg:flex">
              <span className="text-5xl text-charcoal/25">→</span>
            </div>
            <div className="rounded-xl border border-teal/30 bg-[#f8fcfc] p-10">
              <p className="text-lg font-semibold text-teal">The new reality</p>
              <ul className="mt-6 space-y-6 text-charcoal">
                <li className="text-3xl leading-snug">Data can be used where it exists.</li>
                <li className="text-3xl leading-snug">Identity never enters the system.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="how-it-works" title="How LumkoMDX works" tone="soft">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map(({ title, body, icon: Icon }) => (
              <div className="flex gap-4" key={title}>
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-charcoal">{title}</p>
                  <p className="mt-2 text-base text-charcoal/70">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="modules" title="A platform for safe, real-time clinical collaboration">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {modules.map(({ title, body, icon: Icon }) => (
              <article className="rounded-xl border border-muted-gray bg-white p-6" key={title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10">
                  <Icon className="h-5 w-5 text-teal" />
                </div>
                <p className="mt-4 text-2xl font-semibold text-charcoal">{title}</p>
                <p className="mt-3 text-lg text-charcoal/70">{body}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="relative overflow-hidden border-b border-muted-gray bg-[#021b43]" id="privacy">
          <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_85%_25%,rgba(31,138,138,0.45),transparent_34%),radial-gradient(circle_at_30%_80%,rgba(31,93,153,0.35),transparent_36%)]" />
          <div className="relative mx-auto grid w-full max-w-[1240px] gap-8 px-8 py-[120px] lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
            <h3 className="text-[42px] leading-tight font-semibold text-white">Privacy is not a feature. It is a property of the system.</h3>
            {privacyPoints.map(({ text, icon: Icon }) => (
              <div className="flex items-start gap-4 self-center" key={text}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-5 w-5 text-teal" />
                </div>
                <p className="text-xl text-white/90">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <Section id="roles" title="Built for every role across the healthcare ecosystem" tone="soft">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              {[
                { role: "Clinicians", icon: Stethoscope, items: ["Identify cohorts faster", "Collaborate across systems", "Make decisions with broader insight"] },
                { role: "Researchers", icon: Microscope, items: ["Compliant access to population insights", "Real-world data for clinical studies", "Federated queries across institutions"] },
                { role: "Executives", icon: Building2, items: ["System-wide visibility without risk", "Data-driven strategic decisions", "Compliance without operational burden"] },
              ].map(({ role, icon: Icon, items }) => (
                <div className="rounded-xl border border-muted-gray bg-white p-6" key={role}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue/10">
                      <Icon className="h-5 w-5 text-blue" />
                    </div>
                    <p className="text-lg font-semibold text-blue">{role}</p>
                  </div>
                  <ul className="mt-4 space-y-2 text-base text-charcoal/80">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-muted-gray bg-white p-8">
              <p className="text-4xl font-semibold text-charcoal">See your data — safely — in minutes.</p>
              <p className="mt-3 text-lg text-charcoal/70">You&apos;re entering a working environment.</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Button href="#demo" variant="primary">
                  Request demo
                </Button>
                <Button href="#" variant="link">
                  Access sample cohort →
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <section className="border-b border-muted-gray bg-white" id="demo">
          <div className="mx-auto max-w-[1240px] px-6 py-16 text-center">
            <h2 className="text-[44px] font-semibold tracking-tight text-charcoal">Bring your data together — without giving it away.</h2>
            <div className="mt-8 flex justify-center">
              <Button href="#" variant="primary">
                Request demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-charcoal/70">No files. No identity transfer.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
