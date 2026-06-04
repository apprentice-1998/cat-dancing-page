import catSvg from '../assets/images/cat.svg';
import styles from './DancingCat.module.css';

export default function DancingCat({ isPlaying, danceStyle }) {
  return (
    <div className={styles.stage}>
      <div className={styles.spotlightLeft} />
      <div className={styles.spotlightRight} />
      <div
        className={`${styles.catWrapper} ${isPlaying ? styles[danceStyle] : ''}`}
        role="img"
        aria-label="춤추는 고양이"
      >
        <img src={catSvg} alt="고양이" className={styles.catImage} />
        <div className={styles.shadow} />
      </div>
      <div className={styles.notes}>
        {['♪', '♫', '♩', '♬', '♪'].map((note, i) => (
          <span
            key={i}
            className={`${styles.note} ${isPlaying ? styles.noteFloat : ''}`}
            style={{ animationDelay: `${i * 0.4}s`, left: `${10 + i * 18}%` }}
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}
