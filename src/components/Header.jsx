
function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="text-xl font-bold text-emerald-800">
          Rwanda<span className="text-orange-600">Connect.</span>
        </a>

        <a
          href="#opportunities"
          className="rounded-full bg-emerald-800 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-900"
        >
          Explore opportunities
        </a>
      </nav>
    </header>
  )
}

export default Header
