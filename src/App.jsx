import User from './components/user'; // Add this line
import { useEffect, useState } from 'react';
import './App.css'
import Counter from './components/counter';

function App() {
const [users, setUsers] = useState([{name: "Agnes", mail: "bla@bla"}]);
console.log(users);

useEffect(() => {
  // fetch data from API 
  fetchUsers();
}, []);

async function fetchUsers() {
  const response = await fetch('https://raw.githubusercontent.com/cederdorff/race/master/data/users.json');
  const data = await response.json();
  setUsers(data);
}

 return (
    <main className="App">
      <h1>Hi users</h1>
      <Counter />
      <User name="Agnes" mail="bla@bla" />
      <User name="Mathias" mail="fla@fla" />
      <section className="grid">
      {users.map(user => (
        <User key={user.id} name={user.name} mail={user.mail} image={user.image}/>
      ))}
      </section>
    </main>
  );
}

export default App
