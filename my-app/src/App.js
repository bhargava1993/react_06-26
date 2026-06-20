import logo from './logo.svg';
import './App.css';
import MyFristComponent from './components/MyFirstComponent';
import EventBinding, {name1,name2,name3} from './components/EventBinding';

function App() {
  return (
    <div className="App">

    <EventBinding />
    {/* <h1>{name1}</h1>
    <h1>{name2}</h1>
    <h1>{name3}</h1> */}
    {/* <h1>This is App component</h1> */}
    {/* props - properties */}
    {/* <MyFristComponent name="My first component" role="admin" fruitsList={["Apple", "Banana", "Orange"]}/> */}
    {/* <MyFristComponent name="Second component" role="manager"/> */}
    {/* <MyFristComponent name="Thread component" role="developer"/> */}
    </div>
  );
}

export default App;
