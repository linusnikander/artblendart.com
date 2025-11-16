export default function CoachingPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#e0d0f2' }}>
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-8">
          Kreativt skapande
        </h1>
        <p className="text-xl text-center text-gray-700 mb-4">
          Coaching för dig som vill skapa och bjuda in mer kreativitet i ditt liv
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-light mb-6">
          Vad längtar du efter i ditt skapande?
        </h2>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Vill du börja utforska ditt uttryck, hitta något kreativt och meningsfullt att göra på din fritid,
            ta nästa steg i ett pågående projekt eller fördjupa kontakten med din kreativitet? Kanske har du länge
            burit på idéer som väntat på att få liv, eller fastnat i prestation, självkritik eller osäkerhet kring
            din riktning.
          </p>

          <p>
            Jag erbjuder personlig coaching inom kreativt skapande – en plats för dig som vill utforska, växa och
            skapa på egna villkor. Oavsett om skapandet känns nytt och lite ovant, eller om du redan är igång och
            söker inspiration och vägledning för att ta nästa steg, finns jag här som stöd. Tillsammans utforskar vi
            ditt uttryck, stärker tilliten till din process och låter skapandet bli en källa till mening, energi och
            närvaro.
          </p>

          <p>
            Min coaching utgår från ett brett konstnärligt perspektiv där teknik, tanke, känsla och intuition samspelar.
          </p>

          <p>
            Om du vill, integrerar vi ett holistiskt synsätt – där skapandet blir en del av din personliga utveckling
            och ditt välmående. Det kan handla om att lyssna inåt, skapa balans, och låta intuitionen få en tydligare
            roll för dig.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-light mb-4">
            Välkommen till ett rum där kreativitet, utveckling och mening får mötas
          </h3>
          <p className="text-gray-700 mb-6">
            Den här coachingen är för dig som vill utforska, utvecklas och våga skapa på riktigt – på ditt eget sätt.
          </p>
          <p className="text-gray-700 mb-8">
            Du behöver inte ha ett mål att prestera, bara en vilja att vara nyfiken och närvarande i din process.
          </p>
          <a
            href="/pages/coaching-contact"
            className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            Boka gratis 15-minuters samtal
          </a>
        </div>
      </section>
    </main>
  )
}
