# GitHub Profile Visualizer

A full-stack web app to visualize GitHub user profiles, repositories, and contribution stats using the MERN stack.

## Tech Stack

- **MongoDB** – stores cached GitHub data and user preferences
- **Express.js** – REST API server
- **React** – frontend UI with charts and profile cards
- **Node.js** – backend runtime

## Features

- Search any GitHub username and view profile details
- Visualize top repositories by stars, forks, and language
- Display contribution activity and language breakdown charts
- Responsive UI with dark/light mode

## Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- GitHub Personal Access Token (for higher API rate limits)

## Project Structure

```
GitHub_Profile_Visualizer/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # ProfileCard, RepoList, Charts
│       ├── pages/          # Home, Profile
│       ├── hooks/          # useGitHub custom hook
│       └── App.jsx
├── server/                 # Express backend
│   ├── routes/             # /api/github
│   ├── controllers/        # GitHub API logic
│   ├── models/             # Mongoose schemas
│   └── index.js
├── .env.example
└── package.json
```

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/GitHub_Profile_Visualizer.git
cd GitHub_Profile_Visualizer
```

### 2. Setup environment variables

```bash
cp .env.example .env
```

`.env`:
```
GITHUB_TOKEN=<your_github_token>
MONGO_URI=<your_mongodb_connection_string>
PORT=5000
```

### 3. Install dependencies

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 4. Run the app

```bash
# Start backend (from /server)
npm run dev

# Start frontend (from /client)
npm run dev
```

Frontend runs on `http://localhost:5173`, backend on `http://localhost:5000`.

## API Endpoints

| Method | Endpoint                  | Description                  |
|--------|---------------------------|------------------------------|
| GET    | `/api/github/:username`   | Fetch GitHub profile data    |
| GET    | `/api/github/:username/repos` | Fetch user repositories  |

## Key Dependencies

### Backend
- `express` – web framework
- `mongoose` – MongoDB ODM
- `axios` – GitHub API requests
- `dotenv` – environment variables
- `cors` – cross-origin requests

### Frontend
- `react` + `vite` – UI and build tool
- `react-router-dom` – client-side routing
- `recharts` – data visualization charts
- `axios` – API calls

## GitHub API Rate Limits

Without a token: 60 requests/hour  
With a token: 5,000 requests/hour

Generate a token at [GitHub Settings → Developer Settings → Personal Access Tokens (Fine-grained)](https://github.com/settings/tokens).

## License

MIT
