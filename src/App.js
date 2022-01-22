
import './App.css';
import SearchBar from "./Components/SearchBar";
import {useState} from "react";


function App() {
    const [search,setSearch]=useState('')
  return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} />

    </div>
  );
}

export default App;
