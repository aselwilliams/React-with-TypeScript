import React, {useState} from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'

 export interface IState {
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
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
