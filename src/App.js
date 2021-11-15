import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import endPoints from "./services/endpoint";
import axios from "axios";

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function buscarTasks() {
      const response = await axios.get(`${endPoints.getTasks}`);
      setTasks(response.data);
    }

    buscarTasks();
  }, []);


  const deletarTask = async(_id) => {
    axios.delete(`${endPoints.deleteTask}/${_id}`)
    .then((res) => {
      alert('Tarefa excluida com sucesso!')
    })
    setTasks(tasks.filter((task) => task._id !== _id));
  }

  const addTask = async (task) => {
    await axios.post(`${endPoints.createTask}`, task)
    .then((res) => {
      setTasks([...tasks, res.data]);
    })
    .catch((error) => {
      alert(error)
    })
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deletarTask} /> : 'Sem tarefas para exibir'}
    </div>
  );
}

export default App;