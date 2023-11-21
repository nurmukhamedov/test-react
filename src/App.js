import Lesson1 from "./components/Lesson1";
import './App.css';

function App() {
  const myName = 'Muhammadrasul';
  const lastName = 'Nurmukhamedov';
  return (
    <div className="App">
      <Lesson1 name={myName} lname={lastName} />
    </div>
  );
}

export default App;
