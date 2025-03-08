# Hotel Review App

A React application that displays hotels and their reviews, built with TypeScript, Vite, and Apollo Client.

## Prerequisites

- Node.js (v18.x.x or higher, v20.x.x recommended)
- npm (v9.x.x or higher)

## Getting Started

1. Clone the repository:

```bash
git clone git@github.com:MatthieuStadelmann/holidaypirates.git
cd holidaypirates
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory by copying `.env.example` and fill in your credentials:

```bash
cp .env.example .env
```

Then, update the `.env` file with your Contentful credentials:

```env
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally
