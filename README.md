#  Streaming Dashboard – Next.js 14 (App Router) + TypeScript

A simplified streaming dashboard (similar to Netflix UI) built using:

- **Next.js 14 (App Router)**
- **TypeScript**
- **Pure CSS / Tailwind (any style as needed)**
- **OMDb Sample API (free, no key required)**
- **Next/Image Optimization**
- **Dynamic Routing**
- **Server Components**

This project displays:

- A **Hero Banner** (featured movie)
- Multiple **Movie Rows**
- Reusable **MovieCard** component
- **Dynamic Movie Detail Page**
- Fully responsive UI
- Ready for **Vercel deployment**

---

##  Features

###  Homepage
- Fetches movies from OMDb sample API:
  - Popular movies (Avengers)
  - Top Rated movies (Batman)
  - Now Playing (Superman)
- Each category is displayed as a **horizontal scroll row**

###  Components
- **HeroBanner** – Large hero section showing featured movie
- **MovieRow** – Scrollable row of movies
- **MovieCard** – Poster thumbnail + title
- **Dynamic Detail Page** – `/movie/[id]`

###  API Integration
Using OMDb sample public API (no auth needed):

https://www.omdbapi.com/?s=avengers&apikey=thewdb
https://www.omdbapi.com/?i={movie_id}&apikey=thewdb

kotlin
Copy code

These endpoints return:

```json
{
  "Title": "Avengers",
  "Year": "2012",
  "Poster": "https://...",
  "imdbID": "tt0848228"
}
 Folder Structure
python
Copy code
frontend/
│  next.config.js
│  package.json
│  README.md
│  
├─ app/
│  ├─ page.tsx
│  ├─ globals.css
│  ├─ movie/
│  │   └─ [id]/
│  │        └─ page.tsx
│  └─ components/
│      ├─ HeroBanner.tsx
│      ├─ MovieRow.tsx
│      └─ MovieCard.tsx
│
├─ lib/
│   └─ movies.ts        # API calls
│
├─ types/
│   └─ movie.ts         # TypeScript types
│
└─ public/
    ├─ placeholder.png
    └─ favicon.ico
 Installation & Setup
1️ Install dependencies
sh
Copy code
npm install
2️ Development server
sh
Copy code
npm run dev
App runs at:

arduino
Copy code
http://localhost:3000
 Deployment (Vercel)
Push your code to GitHub

Go to vercel.com → Add New Project

Import the repository

Build & deploy automatically

Ensure next.config.js contains:

js
Copy code
images: {
  domains: ["m.media-amazon.com"],
},
This allows OMDb poster images to load.

API Functions (lib/movies.ts)
ts
Copy code
const BASE = "https://www.omdbapi.com/?apikey=thewdb";

export async function fetchPopular() {
  const res = await fetch(`${BASE}&s=avengers`);
  const data = await res.json();
  return data.Search || [];
}

export async function fetchTopRated() {
  const res = await fetch(`${BASE}&s=batman`);
  const data = await res.json();
  return data.Search || [];
}

export async function fetchNowPlaying() {
  const res = await fetch(`${BASE}&s=superman`);
  const data = await res.json();
  return data.Search || [];
}

export async function fetchMovieById(id: string) {
  const res = await fetch(`${BASE}&i=${id}`);
  return res.json();
}
 Supported Image Domains
next.config.js
js
Copy code
const nextConfig = {
  images: {
    domains: ["m.media-amazon.com"],
  },
};

module.exports = nextConfig;
 Testing
Open localhost:3000

Verify hero banner and movie rows load

Click any movie → detail page must open

Check console for errors

Ensure placeholder loads when poster is "N/A"

 ### AI Usage (For Your Submission)
This project was partially developed with the help of AI tools such as ChatGPT for:

Generating component boilerplate

Fixing TypeScript errors

Structuring API responses

Debugging Next.js errors

Creating this README file

All design, logic, folder structure, and implementation decisions were finalized manually by the developer.

 ### Credits
OMDb API – Open Movie Database

Next.js – App Router framework

Vercel – Hosting platform

### Final Notes
This project meets all requirements for:

Next.js streaming dashboard

API integration

Dynamic routing

Reusable components

Deployment-ready structure

AI usage transparency
