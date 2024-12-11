import './App.css';
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import User from "./components/User/User"

function App() {
  return (
    <div className="App">
      <>
          <MainPage/>
          <AboutPage/>
          <TodosPage/>
          <User/>
      </>
    </div>
  );
}

export default App;
