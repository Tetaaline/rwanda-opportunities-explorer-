
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-6 py-20">
        
          <p className="mb-4 text-sm font-bold uppercase tracking-widest">
             <span className="text-[#007FAF]">Discover.</span>{' '}
             <span className="text-[#B58A00]">Connect.</span>{' '}
             <span className="text-[#20603D]">Grow.</span>
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Find opportunities to help you take your next step.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Explore workshops, career events, short courses, and community
            activities happening across Rwanda.
          </p>

          <div className="mt-8 h-2 w-32 rounded-full bg-[#FAD201]" />
        </section>

        <section id="opportunities" className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-2xl font-bold text-[#20603D]">
            Explore opportunities
          </h2>
          <p className="mt-2 text-gray-600">
            Find something worth showing up for.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
