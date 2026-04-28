import {
  Users,
  Sparkles,
  Network,
  ShieldCheck,
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
  { num: "1", title: "Data stays at the source", body: "Patient identity remains inside the originating system." },
  { num: "2", title: "Data is structured and pseudonymised", body: "Only necessary clinical data enters the LumkoMDX federation layer." },
  { num: "3", title: "Insight flows back", body: "Only aggregated, compliant intelligence is returned to authorised users." },
];

const privacyPoints = [
  { text: "Identity never enters the platform." },
  { text: "Certain breaches are structurally impossible." },
  { text: "Compliance is continuous, not enforced later." },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="border-b border-muted-gray"
          style={{ background: "linear-gradient(to right, #FFFFFF 0%, #F6F8FB 60%)" }}
        >
          <div className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-[1440px] grid-cols-1 items-center gap-16 px-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-[620px]">
              <h1 className="text-[56px] leading-[1.18] font-medium tracking-tight text-charcoal">
                Use healthcare data across systems while patient identity never leaves its source
              </h1>
              <p className="mt-10 max-w-xl text-xl leading-relaxed text-charcoal/72">
                LumkoMDX enables hospitals, researchers, and institutions to collaborate using real data without moving or exposing patient identity.
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
            <div className="justify-self-end">
              <HeroVisual />
            </div>
          </div>
        </section>

        <Section subtitle="LumkoMDX removes it." title="Healthcare data has always required a tradeoff.">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1fr_1px_1.3fr]">
            {/* Left: The old reality */}
            <div className="rounded-l-xl border border-r-0 border-muted-gray bg-soft-gray px-8 py-10">
              <p className="text-sm font-semibold text-charcoal/50">The old reality</p>
              <ul className="mt-6 space-y-6">
                <li>
                  <p className="text-base font-semibold text-charcoal">Fragmented systems</p>
                  <p className="mt-1 text-sm text-charcoal/60">Data siloed across institutions and technologies.</p>
                </li>
                <li>
                  <p className="text-base font-semibold text-charcoal">Risk in sharing</p>
                  <p className="mt-1 text-sm text-charcoal/60">Identity, exposure, compliance burden, and breach risk.</p>
                </li>
                <li>
                  <p className="text-base font-semibold text-charcoal">Delayed insight</p>
                  <p className="mt-1 text-sm text-charcoal/60">Slow access to the data needed to improve outcomes.</p>
                </li>
              </ul>
            </div>

            {/* Center: threshold */}
            <div className="hidden relative lg:flex">
              <div className="mx-auto h-full w-px bg-gradient-to-b from-transparent via-blue/30 to-transparent" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-blue/20 bg-white px-3 py-1 text-[11px] font-semibold tracking-wide text-blue shadow-sm">
                Tradeoff removed
              </span>
            </div>

            {/* Right: The new reality */}
            <div className="rounded-r-xl border border-l-0 border-blue/15 bg-[#f8fafd] px-10 py-12">
              <p className="text-sm font-semibold text-blue">The new reality</p>
              <ul className="mt-8 space-y-8">
                <li className="text-[28px] leading-snug text-charcoal">Data can be used where it exists.</li>
                <li className="text-[28px] leading-snug text-charcoal">Identity never enters the system.</li>
              </ul>
              <p className="mt-8 text-base text-charcoal/55">Access and compliance now coexist by design.</p>
            </div>
          </div>
        </Section>

        <Section id="how-it-works" title="How LumkoMDX works" tone="soft">
          <div className="grid gap-10 md:grid-cols-3">
            {steps.map(({ num, title, body }) => (
              <div key={title}>
                <span className="text-sm font-semibold text-blue">{`Step ${num}`}</span>
                <p className="mt-3 text-lg font-semibold text-charcoal">{title}</p>
                <p className="mt-2 text-base text-charcoal/70">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="modules" title="A platform for safe, real-time clinical collaboration">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {modules.map(({ title, body, icon: Icon }) => (
              <article className="rounded-xl border border-transparent bg-soft-gray p-7" key={title}>
                <Icon className="h-4 w-4 text-blue/70" />
                <p className="mt-5 text-xl font-semibold text-charcoal">{title}</p>
                <p className="mt-2 text-base text-charcoal/70">{body}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="relative overflow-hidden border-b border-muted-gray bg-[#021b43]" id="privacy">
          <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_85%_25%,rgba(31,93,153,0.45),transparent_34%),radial-gradient(circle_at_30%_80%,rgba(31,93,153,0.35),transparent_36%)]" />
          <div className="relative mx-auto grid w-full max-w-[1440px] gap-8 px-8 py-[120px] lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
            <h3 className="text-[42px] leading-tight font-semibold text-white">Privacy is not a feature. It is a property of the system.</h3>
            {privacyPoints.map(({ text }, i) => (
              <div className="self-center" key={text}>
                <span className="text-sm font-semibold text-blue">{`0${i + 1}`}</span>
                <p className="mt-3 text-xl leading-relaxed text-white/85">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <Section id="roles" title="Built for every role across the healthcare ecosystem" tone="soft">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-8">
              {[
                { role: "Clinicians", icon: Stethoscope, items: ["Identify cohorts faster", "Collaborate across systems", "Make decisions with broader insight"] },
                { role: "Researchers", icon: Microscope, items: ["Compliant access to population insights", "Real-world data for clinical studies", "Federated queries across institutions"] },
                { role: "Executives", icon: Building2, items: ["System-wide visibility without risk", "Data-driven strategic decisions", "Compliance without operational burden"] },
              ].map(({ role, icon: Icon, items }) => (
                <div className="border-l-2 border-blue/20 pl-6" key={role}>
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-blue" />
                    <p className="text-lg font-semibold text-charcoal">{role}</p>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-base text-charcoal/70">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-muted-gray bg-white p-8">
              <div className="rounded-lg bg-soft-gray p-5 font-mono text-sm text-charcoal/60">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gold/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-charcoal/15" />
                </div>
                <p className="mt-4 text-blue">query</p>
                <p className="text-charcoal/80">cohort.match(</p>
                <p className="pl-4 text-charcoal/80">condition: &quot;type 2 diabetes&quot;,</p>
                <p className="pl-4 text-charcoal/80">region: &quot;Western Cape&quot;,</p>
                <p className="pl-4 text-charcoal/80">age_range: [40, 65]</p>
                <p className="text-charcoal/80">)</p>
                <p className="mt-3 text-charcoal/40">→ 12,847 patients identified</p>
                <p className="text-charcoal/40">→ 0 identities exposed</p>
              </div>
              <p className="mt-6 text-3xl font-semibold text-charcoal">See your data — safely — in minutes.</p>
              <div className="mt-5 flex flex-wrap gap-4">
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
          <div className="mx-auto max-w-[1440px] px-8 py-16 text-center">
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
