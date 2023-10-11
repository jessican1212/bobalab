import './App.css';
import Delivery from "./Delivery/Delivery.js";
import jobsJSON from "./jobs.json"
import React, {useState} from 'react'

function App() {

  const [visibleJobs, setVisibleJobs] = useState(jobsJSON);
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [total, setTotal] = useState(0);

  const onCheckboxChange = (name, items, cost, distance) => {
    if (selectedJobs.some((job) => job.name === name)) {
      const updatedJobs = selectedJobs.filter((job) => job.name !== name);
      setSelectedJobs(updatedJobs);
    } else {
      const newJob = {
        name: name,
        items: items,
        cost: cost,
        distance: distance
      };
      setSelectedJobs([...selectedJobs, newJob]);
    }
  }

  const handleSubmit = () => {
    let x = 0;
    for (var job of selectedJobs) {
      x += job.cost;
    }
    setTotal(x);
  }

  const sortByDistance = () => {
    const sorted = [...visibleJobs]
    sorted.sort((a, b) => { return a.distance - b.distance })
    setVisibleJobs(sorted);
  }

  const sortByCost = () => {
    const sorted = [...visibleJobs]
    sorted.sort((a, b) => { return a.cost - b.cost })
    setVisibleJobs(sorted);
  }

  const sortByItems = () => {
    const sorted = [...visibleJobs]
    sorted.sort((a, b) => { return a.items - b.items })
    setVisibleJobs(sorted);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Dashboard</h1>
      </div>
      <div id="total"><h2>Total Money Made: ${total}</h2></div>
      <div className="container">
        <div id="btn-container">
          <button className="btn-sort" onClick={sortByDistance}>Sort by Distance</button>
          <button className="btn-sort" onClick={sortByCost}>Sort by Cost</button>
          <button className="btn-sort" onClick={sortByItems}>Sort by Items</button>
        </div>
        <div id="flexbox">
        {visibleJobs.map((job, index) => 
          <Delivery
            key={index}
            name={job.name}
            cost={job.cost}
            items={job.items}
            distance={job.distance}
            onCheckboxChange={onCheckboxChange}
            />)}
        </div>
        <button id="submit" onClick={handleSubmit}>Submit</button>
      </div>
      <div className="container">
        <h1>History</h1>
      </div>
      <div className="container">
        {selectedJobs.map((job, index) => (
          <li key={index}>
          {job.name} | ${job.cost} | {job.items} items | {job.distance} miles
        </li>
        ))}
      </div>
    </div>
  );
}

export default App;
