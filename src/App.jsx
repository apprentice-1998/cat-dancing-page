import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import useAnimation from './hooks/useAnimation';

function App() {
  const { isPlaying, toggle, speed, setSpeed } = useAnimation(true);

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} speed={speed} />
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        speed={speed}
        onSpeedChange={setSpeed}
      />
    </Layout>
  );
}

export default App;
