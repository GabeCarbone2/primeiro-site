import { useState  } from "react";
function Cadastro() {
    const [input, setInput ]= useState('');
    const [tarefas, setTarefas ]= useState([
        "Pagar conta de luz",
        "Estudar programação",
        "Enviar a tarefa"
    ]);

    function handleRegistro(e){
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
    }

    return (
       <div>
        <h1>Cafastro de Tarefas</h1>

         <form onSubmit={handleRegistro}>
        <label>Nome da Tarefa: </label><br />
        <input placeholder='Digite uma tarefa'
        value={nome}
        onChange={ (e) => setNome(e.target.value)}
        /><br />

      <button type='submit'>Registro</button>
    </form>
    <br /><br />

    <ul>
        {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
        ))}
    </ul>

    </div>
    );
}
   export default Cadastro;