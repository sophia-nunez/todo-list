import { useState } from 'react'
import type { Task } from "./Task.tsx"


type Props = {
  addTask: (newTask: Task, index?: number) => void;
  index: number | undefined
};


function TaskUpdate( { addTask, index }: Props) {
console.log("Received index:", index);
    const [inputs, setInputs] = useState<Task>({
        taskName: "",
        deadline: "",
        selected: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs(values => ({...values,  [name]: value}))
    }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setInputs({ taskName: '', deadline: '', selected: false});
    if (index === undefined) {
      addTask(inputs)
    } else {
      addTask(inputs, index)};
    console.log("Task added:", inputs);
  }

    return (
      <div>
          <h2>{index === undefined ? "Add Task" : "Edit Task"}</h2>
          <form onSubmit={handleSubmit}>
          <label>Task Name:
          <input 
              type="text" 
              name="taskName" 
              value={inputs.taskName} 
              onChange={handleChange}
          />
          </label>
          <label>Deadline:
              <input 
              type="text" 
              name="deadline" 
              value={inputs.deadline} 
              onChange={handleChange}
              />
              </label>
              <input type="submit" />
          </form>
        </div>
    )
}

export default TaskUpdate;