import React from 'react';
import { Task } from '../../interfaces';

interface Props {
  tasks: Task[];
  handleTaskClick: (task: Task) => void;
  handleDelete: (id: number) => void;
}

const ContentList: React.FC<Props> = ({ tasks, handleTaskClick, handleDelete }) => (
  <div className="content-list">
    <ul>
      {tasks.map((task) => (
        <li key={task.id} onClick={() => handleTaskClick(task)}>
          <p className="id">{task.id}</p>
          <p className="field1">{task.description}</p>
          <p className="field2">{task.assignee}</p>
          <p className="field3">{task.status}</p>
          <p className="field4">{task.priority}</p>
          <p className="field5">{task.dueDate.toDateString()}</p>
          <button className="deleteButton" onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ContentList;
