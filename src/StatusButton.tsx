import { useState } from 'react'

function StatusButton() {
    const [value, setValue] = useState("notStarted");
    // button that starts gray "Not started" and switches to blue "in progress" then green "completed" onClick
    // styling can be done by updating className i think?

    const updateStatus = () => {
        if (value == "notStarted") {
            setValue("inProgress");
        } else if (value == "inProgress") {
            setValue("completed");
        } else if (value == "completed") {
            setValue("notStarted");
        }
    }

    return <button
    id="selectable"
    className={value}
    onClick={(e) => {
      e.stopPropagation();
      updateStatus();
    }}>{value === "notStarted" ? "Not Started" : value === "inProgress" ? "In Progress" : "Completed"}</button>
}

export default StatusButton;