export default function CoachingContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-8">
          Boka ditt samtal
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Första steget är en gratis 15-minuters avstämning där vi känner av hur det känns att arbeta tillsammans.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-gray-50 p-8 rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Namn *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-post *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Berätta lite om vad du vill få ut av coachningen
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Frivilligt, men hjälper oss använda tiden mer effektivt..."
              />
            </div>

            <div>
              <label htmlFor="preference" className="block text-sm font-medium text-gray-700 mb-2">
                Föredrar du Teams eller telefon?
              </label>
              <select
                id="preference"
                name="preference"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option value="">Välj...</option>
                <option value="teams">Teams</option>
                <option value="phone">Telefon</option>
                <option value="either">Spelar ingen roll</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
            >
              Skicka förfrågan
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            Du kan också nå mig direkt på{" "}
            <a href="mailto:therese@artblendart.com" className="underline hover:text-gray-900">
              therese@artblendart.com
            </a>
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <div className="border-t pt-8">
          <h2 className="text-2xl font-light mb-6 text-center">Vad händer sen?</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
                1
              </span>
              <div>
                <p className="font-medium">Jag hör av mig inom 1-2 dagar</p>
                <p className="text-sm text-gray-600">Vi bokar in ett 15-minuters samtal på Teams eller telefon</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
                2
              </span>
              <div>
                <p className="font-medium">Vi pratar och känner av</p>
                <p className="text-sm text-gray-600">Ett kort samtal där du får berätta om dina behov</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
                3
              </span>
              <div>
                <p className="font-medium">Om det känns rätt, bokar vi första coachingsession</p>
                <p className="text-sm text-gray-600">Ingen bindningstid – du bestämmer hur länge vi arbetar tillsammans</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
