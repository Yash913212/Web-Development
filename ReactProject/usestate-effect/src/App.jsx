
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [CompleteData, setCompleteData] = useState([
    { name: "sai" },
    { name: "surya" },
    { name: "sanjay" },
    { name: "kiran" },
    { name: "Dog" }
  ]);

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(CompleteData);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredData(CompleteData);
    } else {
      const arr = CompleteData.filter((ele) =>
        ele.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(arr);
    }
  }, [search, CompleteData]);

  return (
    <>
      <div className="parent1">
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {filteredData.map((ele, idx) => (
          <div className="card" key={idx}>{ele.name}</div>
        ))}
      </div>
    </>
  );
}

export default App
