import './App.scss';
import BodyStats from "../src/containers/BodyStats/BodyStats"

function App() {
  return (
    <body>
        <h1>Calorie Calculator</h1>
        <BodyStats/>
    </body>
  );
}

export default App;

// core features
// fetch request to pull calorie information from searched foods
// pull information from restaurants
// calculate tdee and your calories that you want to eat based on bodily stats
// track macro/micronutrients
