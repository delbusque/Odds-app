import { useEffect, useState } from 'react';
import axios from 'axios';
import GameCard from './GameCard';
import styles from './GamesList.module.css';

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/games');
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading games...</div>;
  }

  return (
    <div className={styles.gamesList}>
      <h1 className={styles.pageTitle}>Soccer Games Betting Odds</h1>
      {games.map((game) => (
        <GameCard key={game._id} game={game} />
      ))}
    </div>
  );
};

export default GamesList;
