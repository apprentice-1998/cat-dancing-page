import styles from './AnimationControls.module.css';

const SPEEDS = [
  { id: 'slow', label: '느리게' },
  { id: 'normal', label: '보통' },
  { id: 'fast', label: '빠르게' },
];

export default function AnimationControls({ isPlaying, onToggle, speed, onSpeedChange }) {
  const handleKeyDown = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      onToggle();
    }
  };

  return (
    <div className={styles.controls}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-pressed={isPlaying}
      >
        {isPlaying ? '⏸ 정지' : '▶ 재생'}
      </button>

      <div className={styles.speedGroup} role="radiogroup" aria-label="애니메이션 속도">
        {SPEEDS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={speed === id}
            className={`${styles.speedButton} ${speed === id ? styles.speedButtonActive : ''}`}
            onClick={() => onSpeedChange(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
