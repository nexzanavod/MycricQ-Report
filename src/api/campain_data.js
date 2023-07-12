export const fetchData = async () => {
    try {
      const response = await fetch('https://api.mycricq.com/api/campaigns?populate=leaderboards,wallpaper');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching data:', error);
      return null;
    }
  };
  