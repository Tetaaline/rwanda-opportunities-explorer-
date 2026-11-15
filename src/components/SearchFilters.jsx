
function SearchFilters({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-8">
      <label
        htmlFor="search"
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        Search opportunities
      </label>

      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search by title, category, city or organizer..."
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#007FAF] focus:ring-2 focus:ring-[#007FAF]/20"
      />
    </div>
  )
}

export default SearchFilters
