import './App.css';
import FunctionUp from './components/functionUp/functionUp';
// import Greet from './components/greet/greet';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const arr = [1,2,3]
  // const element = <h1> Привет мир</h1>
  const getNumber = (num)=>{
    console.log(num + 2);
  }
  return (
    <div className="App">
      <FunctionUp getNumber={getNumber} />
      {/* <Greet
      name="vaivi"
      age={18}/>
      <hr />
      <Greet
      kava={arr}
      h1={element}
      name="kava"
      image="https://w-dog.ru/wallpapers/2/8/335605381726183/gorod-gong-kong-vecher-ogni-otrazhenie.jpg"
      age={23}/> */}
    </div>
  );
}

export default App;