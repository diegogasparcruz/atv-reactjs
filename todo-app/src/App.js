import React, { useState } from 'react';

function App() {

  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){

    e.preventDefault();

    setTodos([ ...todos, description ]);
    
    setDescription('');

  }

  function handleChange(e){
    setDescription(e.target.value);
  }

  return (
    <div className="App">

      <h1> Formulário </h1>

      <form onSubmit={ handleSubmit }>

        <input
          value={ description }
          onChange={ handleChange }
          placeholder="Adicionar Todo"
        />

        <button type="submit"> Adicionar </button>

      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={ index.toString() }> { todo } </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
