import styles from './GameCard.module.css';

const GameCard = ({ game }) => {
  return (
    <div className={styles.gameCard}>
      <div className={styles.gameCardContent}>
        <div className={styles.gameCardTeam}>
          {game.homeTeam} vs {game.awayTeam}
        </div>
        <div className={styles.oddsContainer}>
          <div className={styles.oddBox}>{game.odds.home}</div>
          <div className={styles.oddBox}>{game.odds.draw}</div>
          <div className={styles.oddBox}>{game.odds.away}</div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
