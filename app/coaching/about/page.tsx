import Image from 'next/image'

export default function CoachingAboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-16">
          Om mig & Hur går det till?
        </h1>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-light mb-6">Om mig</h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Jag heter Therese Parner och är konstnär, kreativ coach, tidigare lärare inom konst och
                kulturarbetare inom offentlig sektor, med magisterexamen i fri konst samt över ett decenniums
                erfarenhet som yrkesverksam konstnär. Genom åren har jag arbetat med många olika uttryck och
                material – från trä och textil till lera, metall och andra oväntade kombinationer. Mina olika
                roller har lärt mig att möta skapande på många sätt och jag kan guida dig både kreativt och konkret.
              </p>

              <p>
                För mig är naturen och utomhus som ett magiskt rum där tid och fantasi möts. Här kan idéer ta form,
                tankarna rensas och skapandeprocessen får egna andetag. Det är en stund utan prestation, där sinnet
                får vandra fritt och oväntade uppslag kan spira – en källa till själslig energi.
              </p>

              <p>
                I coachingen möts lekfull nyfikenhet och handfast guidning. Oavsett om du söker konstnärlig
                fördjupning, ny inspiration eller en trygg plats för skapandeprocessen, finns jag här som
                samtalspartner, handledare och påhejare i ditt kreativa utforskande.
              </p>

              <p className="flex items-center gap-2 text-sm text-gray-600 mt-6">
                <span className="text-red-500">📍</span>
                Coaching sker online, tillgängligt var du än är.
              </p>
            </div>
          </div>

          <div className="md:mt-16">
            <div className="bg-gray-200 aspect-[3/4] rounded-lg flex items-center justify-center text-gray-400">
              {/* Placeholder for Therese's image */}
              <span className="text-sm">[Image: Therese in nature]</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-light mb-8">Hur går det till?</h2>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Vi börjar med en <strong>15 minuters avstämning</strong> på Teams eller telefon. Det är ett kort samtal
            där du får berätta vad du vill få ut av coachningen, och vi tillsammans känner av hur det känns att arbeta
            tillsammans, innan vi bokar in vårt första coachingtillfälle.
          </p>

          <p>
            Min coachning består sedan av samtal, och min erfarenhet är att de flesta behöver minst <strong>tre
            tillfällen</strong> för att få en rättvisande bild av vad coachningen kan ge och känna sig trygga i
            processen. Samtalen är 60 minuter långa.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-light mb-4">Det första samtalet</h3>
            <p>
              Utforskar din nuvarande situation, din längtan och hur jag kan stötta dig vidare. Du får hjälp att
              formulera mål, få nya perspektiv på ditt skapande och redan här verktyg för att komma igång.
            </p>
          </div>

          <p>
            Efter varje samtal får du en <strong>skriftlig sammanfattning</strong> samt inspirerande hemuppgifter –
            praktiska, kreativa eller reflekterande – som gör att ditt arbete fortsätter utvecklas mellan mötena.
            Vi avslutar alltid varje samtal med en kort sammanfattning och en plan för vad du vill fokusera på fram
            till nästa gång.
          </p>

          <p>
            Allt material skickas till dig, så att du har din process dokumenterad – ett personligt verktyg som du
            kan återvända till när du vill.
          </p>

          <p className="text-sm text-gray-600 italic">
            Du behöver inte förbereda dig inför det första samtalet, men om du reflekterar lite över vad du vill få
            ut av coachningen innan vi ses kan vi använda tiden ännu mer effektivt.
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
            Boka ditt första samtal
          </a>
        </div>
      </section>
    </main>
  )
}
