# Netflix GPT - Movie Recommendation Platform

A modern Netflix clone built with React that uses AI to provide personalized movie recommendations. The application integrates with TMDB API for movie data and Google's Gemini AI for intelligent search functionality.

## 🚀 Features

- **User Authentication**
  - Email/Password signup and login
  - Firebase authentication integration
  - Protected routes

- **Movie Browsing**
  - Featured movie with auto-playing trailer
  - Multiple movie categories (Now Playing, Popular, Top Rated, Upcoming)
  - Movie cards with hover effects
  - Detailed movie information on click

- **AI-Powered Search**
  - Natural language movie search using Gemini AI
  - Multi-language support (English, Hindi, Spanish)
  - Smart movie recommendations

- **Responsive Design**
  - Mobile-first approach
  - Smooth animations and transitions
  - Modern UI with Tailwind CSS

## 🛠️ Technologies Used

- React 18.3
- Redux Toolkit
- Tailwind CSS
- Firebase Authentication
- Google Gemini AI
- TMDB API
- Vite
- React Router DOM

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/NetflixGPT.git
```

2. Install dependencies:
```bash
cd NetflixGPT
npm install
```

3. Create a `.env` file in the root directory with your API keys:
```properties
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_TMDB_API_KEY=your_tmdb_api_key
```

4. Start the development server:
```bash
npm run dev
```

## 🔑 Environment Variables

The following environment variables are required:

- `VITE_GEMINI_API_KEY`: Google Gemini AI API key
- `VITE_TMDB_API_KEY`: TMDB API key

## 🏗️ Project Structure

```
NetflixGPT/
├── src/
│   ├── components/         # React components
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Helper functions and constants
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Static assets
└── package.json         # Project dependencies
```

## 🔐 Authentication Flow

1. User signs up/logs in
2. Firebase Authentication handles credentials
3. On successful auth, user is redirected to browse page
4. Protected routes ensure authenticated access

## 🎥 Movie Data Flow

1. Fetch movie data from TMDB API
2. Store in Redux for state management
3. Display in various components
4. Update UI based on user interactions

## 🤖 AI Search Integration

1. User enters search query
2. Gemini AI processes natural language input
3. Returns relevant movie suggestions
4. TMDB API fetches detailed movie information
5. Results displayed in movie grid

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.