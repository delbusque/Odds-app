import styles from './App.module.css';
import GamesList from './components/GamesList';

function App() {
  return (
    <div className={styles.app}>
      <GamesList />
    </div>
  );
}

export default App;
