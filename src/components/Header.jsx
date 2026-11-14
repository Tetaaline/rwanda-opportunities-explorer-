
function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="text-xl font-bold text-[#20603D]">
          Rwanda<span className="text-[#00A1DE]">Connect.</span>
        </a>

        <a
          href="#opportunities"
          className="rounded-full bg-[#00A1DE] px-5 py-2 text-sm font-medium text-white hover:bg-[#0088BD]"
        >
          Explore opportunities
        </a>
      </nav>
    </header>
  )
}

export default Header
