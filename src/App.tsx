import React, {useState} from 'react';
import './App.css';
import List from './components/List'

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
const [people, setPeople] = useState<IState['people']>([
  {
    name: 'LeBron James',
    url: 'https://i.insider.com/5e8f40f48427e93cda69589a?width=1136&format=jpeg',
    age: 36,
    note: 'Allegeric to staying on the same team'
  }
])


  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
