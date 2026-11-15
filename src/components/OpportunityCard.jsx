
function OpportunityCard({ opportunity, isSaved, onToggleSave }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-[#E5F2EA] px-3 py-1 text-sm font-medium text-[#20603D]">
          {opportunity.category}
        </span>

        {opportunity.featured && (
          <span className="rounded-full bg-[#FFF5CC] px-3 py-1 text-xs font-semibold text-[#8A6800]">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900">
        {opportunity.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {opportunity.description}
      </p>

      <div className="mt-5 space-y-2 text-sm text-gray-600">
        <p>📍 {opportunity.city}</p>
        <p>📅 {opportunity.date}</p>
        <p>Organized by: {opportunity.organizer}</p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <span
          className={`text-sm font-semibold ${
            opportunity.availability === 'Full'
              ? 'text-red-600'
              : opportunity.availability === 'Filling Fast'
                ? 'text-[#B58A00]'
                : 'text-[#20603D]'
          }`}
        >
          {opportunity.availability}
        </span>

        <button
          onClick={() => onToggleSave(opportunity.id)}
          className="rounded-lg border border-[#20603D] px-4 py-2 text-sm font-semibold text-[#20603D] hover:bg-[#E5F2EA]"
        >
          {isSaved ? '♥ Saved' : '♡ Save'}
        </button>
      </div>
    </article>
  )
}

export default OpportunityCard
