import './App.css';
import { IndexCard } from './Components/CardDeck/IndexCard';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <>
     <NavBar/>
        
        <main role="main" className="container">
        
        <IndexCard/>
        
        </main>
    </>
  );
}

export default App;
