
# Rwanda Opportunities Explorer

A responsive React application that helps people discover workshops, career events, short courses, and community activities across Rwanda.

## Features

- Browse opportunities across Rwanda.
- Search by title, category, city, and organizer.
- Filter opportunities by category and city.
- Sort opportunities by date or title.
- Save and unsave opportunities.
- Add new opportunities using a controlled form.
- Validate required form fields.
- Display an empty state when no opportunities match.
- Responsive layout for different screen sizes.

## Technologies Used

- React
- JavaScript
- Vite
- Tailwind CSS
- HTML

## Getting Started

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Open the project folder:

   ```bash
   cd rwanda-opportunities-explorer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── OpportunityCard.jsx
│   ├── SearchFilters.jsx
│   └── OpportunityForm.jsx
├── data/
│   └── opportunities.js
├── App.jsx
├── index.css
└── main.jsx
```

## Data

The application uses sample opportunity data stored locally in JavaScript. It does not require a backend or external API.

