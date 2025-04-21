# 🌍 Country Explorer

A lightweight React application that fetches and displays comprehensive country information from the REST Countries API.

![Demo Screenshot](https://via.placeholder.com/800x400?text=Country+Explorer+Demo) 
*(Replace with actual screenshot later)*

## ✨ Features

- 🔍 Interactive search for any country
- 📊 Detailed country information display:
  - 🏛️ Capital city
  - 🌏 Continent
  - 📍 Coordinates (latitude & longitude)
  - 📏 Area in square kilometers
  - 🧑‍🤝‍🧑 Population count
  - 🕒 Timezones
  - 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Flag emoji
- ⚡ Real-time API fetching
- 📱 Responsive design
- ♻️ Custom React hook for clean API handling

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | Frontend framework |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Application logic |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Markup structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Styling |
| ![REST API](https://img.shields.io/badge/REST_API-FF6C37?style=for-the-badge&logo=api&logoColor=white) | Data fetching |

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/web-projects-cp/country-explorer.git
   cd country-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Usage

1. Type a country name in the search box (e.g., "Canada", "Japan")
2. Press Enter or click the Search button
3. View all available country information below
4. Search for another country at any time

## 🌐 API Reference

This project uses the [REST Countries API](https://restcountries.com/):
- Endpoint: `https://restcountries.com/v3.1/name/{name}`
- Returns: Array of country objects matching the name

## 🛠️ Development

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds for production |
| `npm run eject` | Ejects from Create React App |

