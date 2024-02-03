import './App.css';
import WeatherApp from './components/WeatherApp/WeatherApp';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';

function App() {
  return (
    <div className="App">
      <WeatherApp />
      <WeatherForecast />
    </div>
  );
}

export default App;
