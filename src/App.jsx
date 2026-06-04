import './styles/global.css';
import styles from './App.module.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const { isPlaying, toggle, danceStyle, changeDance } = useAnimation();

  return (
    <main className={styles.app}>
      <div className={styles.background} />
      <h1 className={styles.title}>
        <span className={styles.emoji}>🐱</span> 댄싱 고양이
      </h1>
      <p className={styles.subtitle}>
        {isPlaying ? '신나게 춤추는 중!' : '쉬는 중... 시작을 눌러줘!'}
      </p>
      <DancingCat isPlaying={isPlaying} danceStyle={danceStyle} />
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        danceStyle={danceStyle}
        onChangeDance={changeDance}
      />
      <footer className={styles.footer}>Made with ❤️ &amp; CSS keyframes</footer>
    </main>
  );
}
