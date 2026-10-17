
# 🌤️ WeatherWise — Weather Forecast App

A responsive weather application built with React that lets users search for a city and view its current weather conditions in a clean, modern interface.

## 🚀 Live Demo

[View WeatherWise Live](YOUR_VERCEL_LIVE_LINK)

## ✨ Features

- Search for current weather by city name
- Display temperature in Celsius
- Show weather conditions and weather icons
- Display feels-like temperature, humidity, wind speed, and atmospheric pressure
- Responsive design for mobile, tablet, and desktop
- Loading indicators while fetching weather data
- Error handling for invalid cities and API errors
- Mobile-friendly navigation menu
- Dynamic copyright year

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Axios
- OpenWeatherMap API
- Vite

## 📂 Project Structure

```text
WeatherWise/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Weather.jsx
│   │   └── WeatherDetail.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd WeatherWise
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the API key

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

Get an API key from [OpenWeatherMap](https://openweathermap.org/api).

### 5. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal.

### 6. Build for production

```bash
npm run build
```

## 🌐 API Integration

WeatherWise uses the OpenWeatherMap Current Weather API to retrieve weather data for the requested city.

- **HTTP client:** Axios
- **Request method:** GET
- **Temperature unit:** Celsius
- **Data displayed:** Temperature, weather description, humidity, wind speed, feels-like temperature, and atmospheric pressure.

## 📱 Responsive Design

The application uses Tailwind CSS utility classes to provide a responsive layout across mobile phones, tablets, and desktop screens.

## 🔐 Environment Variables

- Keep your `.env` file out of version control.
- Never commit real API keys to GitHub.
- Variables prefixed with `VITE_` are exposed in the browser. Use a backend or serverless function if the API credential must remain private.

## 👨‍💻 Author

**Sivaraj G**

- GitHub: [sivaraj-bit](https://github.com/sivaraj-bit)
- LinkedIn: [Add your LinkedIn profile URL](YOUR_LINKEDIN_PROFILE_URL)

## 📄 License

This project is created for learning and portfolio purposes.
