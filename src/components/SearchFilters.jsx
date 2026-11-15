
function SearchFilters({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedCity,
  onCityChange,
  sortOrder,
  onSortChange,
}) {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-4">
      <div>
        <label htmlFor="search" className="mb-2 block text-sm font-semibold text-gray-700">
          Search opportunities
        </label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search opportunities..."
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label htmlFor="category" className="mb-2 block text-sm font-semibold text-gray-700">
          Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        >
          <option value="All">All categories</option>
          <option value="Workshop">Workshop</option>
          <option value="Career Event">Career Event</option>
          <option value="Community Activity">Community Activity</option>
          <option value="Short Course">Short Course</option>
        </select>
      </div>

      <div>
        <label htmlFor="city" className="mb-2 block text-sm font-semibold text-gray-700">
          City
        </label>
        <select
          id="city"
          value={selectedCity}
          onChange={(event) => onCityChange(event.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        >
          <option value="All">All cities</option>
          <option value="Kigali">Kigali</option>
          <option value="Huye">Huye</option>
          <option value="Musanze">Musanze</option>
        </select>
      </div>

      <div>
        <label htmlFor="sort" className="mb-2 block text-sm font-semibold text-gray-700">
          Sort by
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        >
          <option value="earliest">Earliest date</option>
          <option value="latest">Latest date</option>
          <option value="title">Title (A–Z)</option>
        </select>
      </div>
    </div>
  )
}

export default SearchFilters
