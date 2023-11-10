import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todu from "./Components/Todu";
import EditTodo from "./Components/EditTodo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todu />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
