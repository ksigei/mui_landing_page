import "./App.css";
import ButtonAppBar from "./components/Header";
import FixedBottomNavigation from "./components/Main";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <div>
        <FixedBottomNavigation />
      </div>
    </div>
  );
}

export default App;
