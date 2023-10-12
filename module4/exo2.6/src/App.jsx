import React, { useState } from 'react';
import Person from './Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [newName, setNewName] = useState('');
  const [showAll, setShowAll] = useState(true);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: persons.length + 1,
    };
  
    setPersons(persons.concat(personObject));
    setNewName(''); // Réinitialisation du champ newName
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const personsToShow = showAll ? persons : [];

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(p => (
          <Person key={p.id} persons={p} />
        ))}
      </ul>
    </div>
  );
};

export default App;
