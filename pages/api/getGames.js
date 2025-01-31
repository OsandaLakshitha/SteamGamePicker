// pages/api/getGames.js
export default async function handler(req, res) {
    const { steamID } = req.query;
    const apiKey = process.env.STEAM_API_KEY;
  
    if (!steamID || !apiKey) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }
  
    try {
      // First, if the input is a custom URL, resolve it to a Steam64 ID
      let finalSteamID = steamID;
      if (isNaN(steamID)) {
        const resolveResponse = await fetch(
          `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${apiKey}&vanityurl=${steamID}`
        );
        const resolveData = await resolveResponse.json();
        
        if (resolveData.response.success === 1) {
          finalSteamID = resolveData.response.steamid;
        } else {
          return res.status(400).json({ error: 'Could not resolve Steam ID' });
        }
      }
  
      // Now fetch the games with the resolved Steam64 ID
      const gamesResponse = await fetch(
        `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${finalSteamID}&include_appinfo=true&format=json`
      );
      
      if (!gamesResponse.ok) {
        throw new Error(`Steam API returned ${gamesResponse.status}`);
      }
  
      const data = await gamesResponse.json();
      
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching games:', error);
      return res.status(500).json({ error: 'Failed to fetch games' });
    }
  }