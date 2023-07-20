import React,{useState} from 'react';
import { Task } from '../../interfaces/Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  tasks: Task[];
  onSelectedTask: (data: Task) => void;
  onDeletedTask: (taskId: number) => void;
  onClear: () => void;
}

const ContentList: React.FC<Props> = (props: Props) => {
  const [selectedTasks, setSelectedTasks] = useState<{ [key: number]: boolean }>({});

  const handleCheckboxChange = (id: number) => {
    setSelectedTasks((prevSelectedTasks) => ({
      ...prevSelectedTasks,
      [id]: !prevSelectedTasks[id], // Toggle the status of the selected task
    }));
  };

  const handleClick = (id: number) => {
    let foundTask = props.tasks.find((item) => item.id === id) as Task;
    props.onSelectedTask(foundTask);
  };

  const handleDelete = (id: number) => {
    console.log("handleDelete in ContentList")
    props.onDeletedTask(id);
  };

  return (
    <div className="content-list">
      <ul>
        {props.tasks.map((task) => (
         <li className='task' key={task.id} onClick={() => handleClick(task.id)}>
            <input
              className='checkbox'
              type="checkbox"
              id={`checkbox-${task.id}`}
              name={`checkbox-${task.id}`}
              value={`checkbox-${task.id}`}
              checked={selectedTasks[task.id]}
              onChange={() => handleCheckboxChange(task.id)}
            />

            <p className="field id">{task.id}</p>
            <p data-content={task.description} className="field check-text field1">{task.description}</p>
            <p className="field field2">{task.assignee}</p>

            <div className={`status ${selectedTasks[task.id] ? 'done' : 'inProgress'}`}>
              <p className="field field3">{selectedTasks[task.id] ? 'Done' : task.status}</p>
            </div>
            <p className="field field4">{task.priority}</p>
            <p className="field field5">{task.dueDate.toDateString()}</p>
            <button className="deleteButton" onClick={() => handleDelete(task.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;