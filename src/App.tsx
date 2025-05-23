import { useState } from 'react'
import './App.css'
import type { Task } from "./Task.tsx"
import TaskList from "./TaskList.tsx"
import TaskUpdate from "./TaskUpdate.tsx"
import UpdateMenu from "./UpdateMenu.tsx"

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number } | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addTask = (newTask: Task, index?: number) => {
    if (index !== undefined) {
        // Edit
        setTasks(tasks =>
          tasks.map((t, i) => (i === index ? newTask : t)));
        setSelectedIndex(undefined);
      } else {
        // Add
        setTasks(tasks => [...tasks, newTask]);
      }
      closeForm();
  }

  const selectTask = (selectedRow: number | undefined, event: React.MouseEvent) => {
    setSelectedIndex(selectedRow);
    setTasks(prev =>
        prev.map((task, i) => ({
        ...task,
        selected: i === selectedRow ? true : false
        })));
    console.log("row selected: " + selectedRow);

    if (selectedRow === undefined) {
        setMenuPosition(null);
    } else if (event) {
        setMenuPosition({ x: event.clientX, y: event.clientY });
    }
  }

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setMenuPosition(null);
  };

  return (
    <>
      <div>
          <img src='src/assets/sophia_prof.jpg' className="sophia" alt="Image of me!" style={{width: 250 , height: 250 , borderRadius: 500}}/>
      </div>
      <h1>To-do List</h1>
      <TaskList tasks={tasks} selectTask={selectTask} selectedIndex={selectedIndex} openAdd={openForm} />

      <br /><hr />

    {isFormOpen && (
      <TaskUpdate addTask={addTask} index={selectedIndex}/>
    )}
      {menuPosition && <UpdateMenu x={menuPosition.x} y={menuPosition.y} openEdit={openForm} />}
    </>
  )
}

export default App
