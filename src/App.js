import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner+/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <ItemListContainer gretting={"Felices Fiestas !!!"}> </ItemListContainer>
    </div>
  );
}

export default App;
