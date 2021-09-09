import useStorage from './hooks/storage';
import { useState } from 'react';

function App() {
  const { data, arr, handleRemove } = useStorage({
    init: ["Huyen", "Hoa", "Hung", "Long"]
  })
  const [name, setName] = useState("");
  return (
    <div className="App">
      <h2>学生一覧: [{data.toString()}]</h2>
      <div>削除値をに入力してください。</div>
      <div>
        <input style ={{ "margin-left": "20px" }}  type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div>
        <button style ={{ "margin-left": "200px" }} type="button" onClick={() => handleRemove(name)}>確定</button>
      </div>
      <div>削除する名前: {name}</div>

      <div>新しい一覧: {arr.toString()}</div>
    </div>
  );
}

export default App;
