import { useState, useEffect } from "react";

const useGameData = () => {
  const [gameData, setGameData] = useState(null);
  const [isGameActive, setIsGameActive] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allGameDataResponse = await fetch(
          "http://localhost:3002/https://127.0.0.1:2999/liveclientdata/allgamedata"
        );

        if (!allGameDataResponse.ok) {
          throw new Error("Game not active");
        }

        const allGameData = await allGameDataResponse.json();
        setGameData(allGameData);
        setIsGameActive(true);
      } catch (error) {
        setIsGameActive(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, []);

  return { gameData, isGameActive };
};

export default useGameData;
