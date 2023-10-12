import React, { useState } from 'react';
import Person from './Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [newName, setNewName] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const addPerson = (event) => {
    event.preventDefault();

    // Vérifie si le nom est déjà présent dans la liste
    const nameExists = persons.some(person => person.name === newName);

    if (nameExists) {
      setErrorMessage('Ce nom est déjà dans la liste.');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000); // Efface le message après 5 secondes
    } else {
      const personObject = {
        name: newName,
        id: persons.length + 1,
      };

      setPersons(persons.concat(personObject));
      setNewName('');
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const personsToShow = showAll ? persons : [];

  return (
    <div>
      <h2>Phonebook</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
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
