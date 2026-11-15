
import { useState } from 'react'

function OpportunityForm({ onAddOpportunity }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Workshop',
    city: 'Kigali',
    date: '',
    organizer: '',
    description: '',
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    onAddOpportunity({
      id: Date.now(),
      ...formData,
      availability: 'Open',
      featured: false,
    })

    setFormData({
      title: '',
      category: 'Workshop',
      city: 'Kigali',
      date: '',
      organizer: '',
      description: '',
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h3 className="mb-6 text-xl font-bold text-[#20603D]">
        Add an opportunity
      </h3>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="title" className="mb-2 block text-sm font-semibold">
            Opportunity title
          </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
            placeholder="Enter opportunity title"
          />
        </div>

        <div>
          <label htmlFor="category" className="mb-2 block text-sm font-semibold">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          >
            <option>Workshop</option>
            <option>Career Event</option>
            <option>Community Activity</option>
            <option>Short Course</option>
          </select>
        </div>

        <div>
          <label htmlFor="city" className="mb-2 block text-sm font-semibold">
            City
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          >
            <option>Kigali</option>
            <option>Huye</option>
            <option>Musanze</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="mb-2 block text-sm font-semibold">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />
        </div>

        <div>
          <label htmlFor="organizer" className="mb-2 block text-sm font-semibold">
            Organizer
          </label>
          <input
            id="organizer"
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
            placeholder="Enter organizer name"
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-2 block text-sm font-semibold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="3"
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
            placeholder="Describe this opportunity"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg bg-[#20603D] px-6 py-3 font-semibold text-white hover:bg-[#17482D]"
      >
        Add opportunity
      </button>
    </form>
  )
}

export default OpportunityForm
