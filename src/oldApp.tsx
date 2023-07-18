import React, { useState } from 'react';
import './App.css';
import { Task } from './interfaces';

interface Props {
  tasks: Task[];
  handleTaskClick: (task: Task) => void;
}

const ContentList: React.FC<Props> = ({ tasks, handleTaskClick }) => (
  <div className="content-list">
    <ul>
      {tasks.map((task) => (
        <li key={task.id} onClick={() => handleTaskClick(task)}>
          <p className='id'>{task.id}</p>
          <p className='field1'>{task.description}</p>
          <p className='field2'>{task.assignee}</p>
          <p className='field3'>{task.status}</p>
          <p className='field4'>{task.priority}</p>
          <p className='field5'>{task.dueDate.toDateString()}</p>
        </li>
      ))}
    </ul>
  </div>
);

interface FormProps {
  selectedText: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RightSection: React.FC<FormProps> = ({
  selectedText,
  handleInputChange,
  handleSubmit,
}) => (
  <div className="right-section">
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input 1"
        className="input"
        value={selectedText}
        onChange={handleInputChange}
      />
      <input type="text" placeholder="Input 2" className="input" />
      <input type="submit" value="Submit" className="submit-button" />
    </form>
  </div>
);

const App: React.FC = () => {
  const [selectedText, setSelectedText] = useState('');

  const task1: Task = {
    id: 1,
    description: 'Task 1',
    assignee: 'Yancho',
    status: 'Not ready',
    priority: 1,
    dueDate: new Date(),
  };
  const task2: Task = {
    id: 2,
    description: 'Task 2',
    assignee: 'Yancho',
    status: 'Not ready',
    priority: 1,
    dueDate: new Date(),
  };
  const task3: Task = {
    id: 3,
    description: 'Task 3',
    assignee: 'Yancho',
    status: 'Not ready',
    priority: 1,
    dueDate: new Date(),
  };

  const handleTaskClick = (task: Task) => {
    setSelectedText(task.description);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const tasks: Task[] = [task1, task2, task3];

  return (
    <div className="container">
      <ContentList tasks={tasks} handleTaskClick={handleTaskClick} />
      <RightSection
        selectedText={selectedText}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
