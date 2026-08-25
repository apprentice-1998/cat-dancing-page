import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

export default function DancingCat({ isPlaying, speed }) {
  return (
    <div
      className={`dancing-cat speed-${speed} ${isPlaying ? 'is-playing' : 'is-paused'}`}
      role="img"
      aria-label={isPlaying ? '춤추는 고양이 애니메이션' : '정지된 고양이'}
    >
      <img src={catSvg} alt="춤추는 고양이" className="dancing-cat__image" />
      <div className="dancing-cat__shadow" />
    </div>
  );
}
