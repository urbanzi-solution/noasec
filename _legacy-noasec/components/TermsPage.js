export const metadata = {
  title: "Terms of Service | NoaSec",
  description:
    "Read the Terms of Service governing the use of NoaSec website, services, and training programs.",
};

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-20 mt-20">
      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold">
          Terms of Service
        </h1>

        <p>
          By accessing and using this website, you agree to comply with
          these Terms of Service.
        </p>

        <h2 className="text-xl font-semibold">Use of Website</h2>
        <p>
          You agree to use the website only for lawful purposes and in a
          manner that does not violate applicable laws.
        </p>

        <h2 className="text-xl font-semibold">Services</h2>
        <p>
          All cybersecurity training and services are subject to
          availability and agreement.
        </p>

        <h2 className="text-xl font-semibold">Limitation of Liability</h2>
        <p>
          NoaSec is not liable for indirect or consequential damages arising
          from website usage.
        </p>

        <h2 className="text-xl font-semibold">Contact</h2>
        <p>
          Email: Info@noasecsolutions.com
        </p>

      </div>
    </section>
  );
}