import StatusButton from "./StatusButton.tsx"
import type { Task } from "./Task.tsx"

type Props = {
  tasks: Task[];
  selectTask: (selectedRow: number | undefined, event: React.MouseEvent) => void;
  selectedIndex: number | undefined;
  openAdd: () => void;
};

function TaskList({ tasks, selectTask, selectedIndex, openAdd }: Props) {

    const selectRow = (event: React.MouseEvent, index : number, selected: boolean) => {
        if (selected) {
            selectTask(undefined, event);
        } else {
            selectTask(index, event);
        }
    }

    const listTable = tasks.map((task, index) => 
        <tr key={index} onClick={(e) => selectRow(e, index, task.selected)} className={selectedIndex === index ? "selected-row" : ""}>
        <td><input type="checkbox" id="selectable" checked={task.selected} /></td>
        <td><StatusButton /></td>
        <td>{task.deadline}</td>
        <td>{task.taskName}</td></tr>);

    return (
        <table>
            <tr>
                <th></th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Task Name</th>
            </ tr>
            {listTable}
            <tr><td onClick={openAdd} id="selectable">+ Add</td></tr>
        </ table>)
}

export default TaskList;