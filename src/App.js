import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
<div className="container">
<Weather defaultCity="Jokkmokk"/>
<footer>
This project was coded by Laima Ciselonoka and is {" "} <a href="https://github.com/laimac/weather-project" target="_blank" rel="noreferrer"> open-sourced on GitHub</a>
</footer>
</div>
    </div>
  );
}

export default App;
