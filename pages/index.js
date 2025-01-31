// pages/index.js
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  async function fetchGames() {
    const steamLink = document.getElementById('steamLink').value.trim();
    setLoading(true);
    setError('');
    setResult(null);

    if (!steamLink) {
      setError('Please enter a Steam profile link!');
      setLoading(false);
      return;
    }

    const steamID = extractSteamID(steamLink);
    if (!steamID) {
      setError('Invalid Steam Profile Link! Please make sure you\'re using a valid Steam profile URL.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/getGames?steamID=${steamID}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();

      if (!data.response || !data.response.games || data.response.games.length === 0) {
        setError('No games found in this library! Make sure your game library is public.');
        return;
      }

      const games = data.response.games;
      const randomGame = games[Math.floor(Math.random() * games.length)];
      setResult(randomGame);

    } catch (error) {
      console.error('Error fetching games:', error);
      setError('Something went wrong. Please check your profile link and try again.');
    } finally {
      setLoading(false);
    }
  }

  function extractSteamID(link) {
    const customUrlMatch = link.match(/\/id\/([^\/]+)/);
    const steam64Match = link.match(/\/profiles\/(\d+)/);
    
    if (customUrlMatch) {
      return customUrlMatch[1];
    } else if (steam64Match) {
      return steam64Match[1];
    }
    return null;
  }

  return (
    <>
      <Head>
        <title>Steam Game Picker</title>
        <meta name="description" content="Pick a random game from your Steam library" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        <header>
          <h1>🎮 Steam Game 🎮 <br />🎮 Picker 🎮</h1>
          <p>Stuck deciding what to play? Let us pick a random game from your Steam library!</p>
        </header>
        <main>
          <div className="input-section">
            <input type="text" id="steamLink" placeholder="Paste your Steam Profile Link here..." />
            <button onClick={fetchGames}>Pick a Game!</button>
          </div>
          
          {loading && <div className="loading">Loading your games...</div>}
          
          {error && <div className="error">{error}</div>}
          
          {result && (
            <div className="result">
              <h2>You should play:</h2>
              <img 
                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${result.appid}/header.jpg`}
                alt={result.name}
                onError={(e) => {e.target.src = '/placeholder.png'}}
              />
              <p className="game-title">{result.name}</p>
              <p className="playtime">
                Total playtime: {(result.playtime_forever / 60).toFixed(1)} hours
              </p>
            </div>
          )}
        </main>
        <footer>
          <p>Made with ❤️ by <a href="https://steamcommunity.com/id/GarfieldSL/" target="_blank" rel="noopener noreferrer">GarfieldSL</a> | Powered by Steam API</p>
          <p>Steam Awards are highly appretiated!</p>
          <p>© 2024 Steam Game Picker. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}