import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="border-b border-muted-gray bg-white/95">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <p className="text-xl font-semibold tracking-tight text-charcoal">LumkoMDX</p>
        <div className="flex items-center gap-3">
          <a className="text-sm font-medium text-blue hover:text-teal" href="#how-it-works">
            Platform
          </a>
          <Button href="#final-cta" variant="primary">
            Request a Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}
