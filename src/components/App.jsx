import Chessboard from "chessboardjsx";
import "../css/App.css";

function App() {
  return (
    <div className="app">
      <h1>This is the home screen</h1>
      <Chessboard position="start" />
    </div>
  );
}

export default App;
