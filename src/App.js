import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Lab5_1 from "./pages/Lab5_1";
import Lab7 from "./pages/Lab7";
import Lab5_2 from "./pages/Lab5_2";
import NavBar from "./components/NavBar";
import Lab4 from "./pages/Lab4";

function App() {
  return (
    <div className="App">
        <Header text={"Laboratory Work №7"}/>
        <NavBar/>
        <Routes>
            <Route path={'/'} element={<Lab4/>}/>
            <Route path={'/task11'} element={<Lab5_1/>}/>
            <Route path={'/task12'} element={<Lab5_2/>}/>
            <Route path={'/task2'} element={<Lab7/>}/>
        </Routes>
    </div>

  );
}

export default App;
