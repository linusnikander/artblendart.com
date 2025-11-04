export default function CoachingWhoPage() {
  const clients = [
    {
      name: "Den kreativa livsnjutaren",
      persona: "Eva, 59 år",
      description: "Du längtar efter att ge plats åt din kreativitet, kanske för första gången på länge, och vill fylla din fritid med något som ger extra mening. Skapandet är din egen plats att utvecklas på ditt sätt. Här får du stöd att hitta ditt uttryck, skapa utan krav och låta processen bli en källa till glädje, reflektion och balans."
    },
    {
      name: "Den målmedvetna sökaren",
      persona: "Leo, 26 år",
      description: "Du vet att du har något att säga, men behöver hjälp att forma din konstnärliga idé. Tillsammans arbetar vi med uttryck, portfölj, ansökningar eller projekt. Om du vill utforskar vi även ditt varför och bygger tillit till din inre drivkraft."
    },
    {
      name: "Den nyfikna hantverkaren",
      persona: "Erik, 45 år",
      description: "Du skapar redan – i trä, färg, tyg eller ord – men vill förstå mer och utvecklas vidare. Här får du feedback, tips och nya perspektiv som hjälper dig att ta ditt skapande till nästa nivå. Vill du kan vi även väva in ett mer holistiskt perspektiv, där skapandet blir en väg till närvaro och personlig utveckling."
    },
    {
      name: "Den uppvaknande kreatören",
      persona: "Sofia, 38 år",
      description: "Du har alltid haft fullt upp med jobb, vardag och ansvar, och kanske har du tänkt att du \"inte är kreativ\" eller att skapande inte är för dig. Nu känner du allt starkare att du vill ge utrymme åt kreativiteten – som en egen plats utanför yrkesrollen och vardagens måsten. Här får du stöd att börja utforska, experimentera och uttrycka dig på ditt sätt, utan krav, och upptäcka glädjen och friheten som skapandet kan ge."
    }
  ]

  const themes = [
    "Bollplank och feedback på ditt skapande och din process",
    "Hitta ditt steg in i kreativt skapande",
    "Utveckla teknik, material och formspråk",
    "Stöd i skapandevanor och kreativitet i vardagen",
    "Kreativitet som inre resa och självutforskande",
    "Portfolioarbete eller förberedelse för konstskolor"
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-16">
          För vem & Vad vi utforskar
        </h1>
      </section>

      {/* Client Personas */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-light mb-8">Exempel på klienter jag möter</h2>

        <div className="space-y-8">
          {clients.map((client, index) => (
            <div key={index} className="border-l-2 border-gray-300 pl-6 py-2">
              <h3 className="text-xl font-medium mb-2">
                {client.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {client.persona}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Themes Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-light mb-8">Exempel på teman vi kan utforska</h2>

        <ul className="space-y-3 mb-8">
          {themes.map((theme, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <span className="text-gray-400 mt-1">•</span>
              <span>{theme}</span>
            </li>
          ))}
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <p className="text-gray-700 leading-relaxed">
            Varje samtal anpassas helt efter dig – där du befinner dig i livet och i ditt skapande.
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Du behöver inte veta var du skall börja, vi utforskar det tillsammans.</strong>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          <a
            href="/pages/coaching-contact"
            className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Boka gratis konsultation
          </a>
        </div>
      </section>
    </main>
  )
}
