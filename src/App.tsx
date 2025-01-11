import { useEffect, useState } from 'react';
import './App.css'
import { User } from './Person'

function App() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then((json) => {
        const name: string = json.title;
        console.log(name);
        setName(name);
      });
  }, []);

  return (
    <div>
      {name ? <User name={name} /> : <p>Loading...</p>}
    </div>
  );
  
}

export default App;