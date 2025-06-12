# Cinematch

Basic movie search application.

## Features

- Displays list of movies
- Search by title
- Basic movie info (poster, year, rating)

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- OMDB API (free tier with limitations)

## Setup

1. Clone repo:
```bash
git clone https://github.com/your-username/cinematch.git
cd cinematch
```

2. Install dependencies:
```bash
npm install
```

3. Add API key to `.env.local`:
```env
NEXT_PUBLIC_OMDB_API_KEY=your_key_here
```

4. Run dev server:
```bash
npm run dev
```

## Limitations

- OMDB free tier has 1000 requests/day limit
- No watch history or favorites
- Basic functionality only

## Troubleshooting

1. Verify API key is set
2. Check if API limit is reached
3. Check browser console errors (F12)

---

Simple movie search app. Nothing fancy.
