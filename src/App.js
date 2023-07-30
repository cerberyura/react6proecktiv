import React from "react";
import './index.scss';

function App() {

  const [count, SetCount] = React.useState(0)
  const onClickPlus = () => {
    SetCount(count + 1)
    console.log(count)
  }
  const onClickMinus = () => {
    if (count > 0) {
      SetCount(count - 1)
    }
    console.log(count)
  }
  return (
    <div className="App">
      <div>
        <h2>Лічильник:</h2>
        <h1>{count}</h1>
        <button onClick={() => onClickMinus()} className="minus">- Мінус</button>
        <button onClick={() => onClickPlus()} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
