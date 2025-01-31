<!-- 🎮 Steam Game Picker 🎮 -->

<h1 align="center">Steam Game Picker 🚀</h1>

<p align="center">This web app helps you decide what to play next by randomly selecting a game from your Steam library. Simply paste your Steam profile link, and let the magic happen! ✨</p>

---

## 🌟 Features

✅ **Random Game Selection** 🎲 - Picks a random game from your Steam library.<br>
✅ **Game Details** 🖼️ - Displays the game's title and header image.<br>
✅ **Easy to Use** 🖱️ - Just paste your Steam profile link and click a button!<br>
✅ **Responsive Design** 📱 - Works on all devices.<br>

---

## 🛠️ How It Works

1. **Paste Your Steam Profile Link** 🔗 - Enter your Steam profile link in the input field.
2. **Click "Pick a Game!"** 🎮 - The app fetches your Steam library and selects a random game.
3. **Get Your Game** 🎉 - The selected game's title and image are displayed.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js**: Install it from [here](https://nodejs.org/).
- **Steam API Key**: Get it from [Steam API Key Registration](https://steamcommunity.com/dev/apikey).

### Installation

```bash
git clone https://github.com/OsandaLakshitha/SteamGamePicker.git
cd SteamGamePicker
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root of your project:

```env
STEAM_API_KEY=your_steam_api_key_here
```

Replace `your_steam_api_key_here` with your actual Steam API key.

### Run Locally

```bash
vercel dev
```

Then open your browser and go to:

```
http://localhost:3000
```

---

## 🚀 Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy your project.

---

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Vercel Serverless Functions
- **API**: [Steam Web API](https://developer.valvesoftware.com/wiki/Steam_Web_API)

---

## 📂 Project Structure

```bash
SteamGamePicker/
│
├──pages/
│   └──api/
│   |   └── getGames.js         # Serverless function to fetch Steam games
|   └──_app.js                  
|   └──index.js                 # Main HTML file
├──public/
├──styles/
│    └── globals.css            # Styles for the website
.env                            # Environment variables (not committed to Git)
.gitignore
next.config.js
package-lock.json
package.json
README.md
```


---

## 🤝 Contributing

Contributions are welcome! 🎉 Open an issue or submit a pull request.

```bash
git checkout -b feature/your-feature-name
git commit -m "Add your message here"
git push origin feature/your-feature-name
```

Then open a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Thanks to [Steam](https://store.steampowered.com/) for providing the API.
- Thanks to [Vercel](https://vercel.com/) for making deployment easy.
- Send Awards to my [Steam Account](https://steamcommunity.com/id/GarfieldSL) Appreciate it!

---

<p align="center">Made with ❤️ by <strong>GarfieldSL</strong>. Happy gaming! 🎮</p>
