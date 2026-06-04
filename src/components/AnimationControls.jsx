import styles from './AnimationControls.module.css';

const DANCE_STYLES = [
  { id: 'bounce', label: '바운스', emoji: '🎵' },
  { id: 'spin',   label: '스핀',   emoji: '🌀' },
  { id: 'shake',  label: '쉐이크', emoji: '🎸' },
  { id: 'jump',   label: '점프',   emoji: '⬆️' },
];

export default function AnimationControls({ isPlaying, onToggle, danceStyle, onChangeDance }) {
  return (
    <div className={styles.controls}>
      <button
        className={`${styles.playBtn} ${isPlaying ? styles.playing : ''}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>
      <div className={styles.danceMenu} role="group" aria-label="춤 스타일 선택">
        {DANCE_STYLES.map(({ id, label, emoji }) => (
          <button
            key={id}
            className={`${styles.danceBtn} ${danceStyle === id ? styles.active : ''}`}
            onClick={() => onChangeDance(id)}
            aria-pressed={danceStyle === id}
          >
            {emoji} {label}
          </button>
        ))}
      </div>
    </div>
  );
}
