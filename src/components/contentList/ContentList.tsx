import React from 'react';
import { Task } from '../../interfaces/Task';

interface Props {
  tasks: Task[];
  onSelectedTask: (data: Task) => void;
  onDeletedTask: (taskId: number) => void;
  onClear: () => void;
}

const ContentList: React.FC<Props> = (props: Props) => {
  const handleClick = (id: number) => {
    let foundTask = props.tasks.find((item) => item.id === id) as Task;
    props.onSelectedTask(foundTask);
  };

  const handleDelete = (id: number) => {
    props.onDeletedTask(id);
  };

  return (
    <div className="content-list">
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id} onClick={() => handleClick(task.id)}>
            <p className="id">{task.id}</p>
            <p className="field1">{task.description}</p>
            <p className="field2">{task.assignee}</p>
            <p className="field3">{task.status}</p>
            <p className="field4">{task.priority}</p>
            <p className="field5">{task.dueDate.toDateString()}</p>
            <button className="deleteButton" onClick={() => handleDelete(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;