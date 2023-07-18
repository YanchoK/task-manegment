import React, { useState } from 'react';
import './App.css'
import { Task } from './interfaces';
import ContentList from './components/contentList/ContentList';
import ContentDetails from './components/contentDetails/ContentDetails';

const App: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [formValues, setFormValues] = useState<Partial<Task>>({});

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

  const [tasks, setTasks] = useState<Task[]>([task1, task2, task3]);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setFormValues(task);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedTask) {
      const updatedTask: Task = {
        ...selectedTask,
        ...formValues,
      };
      // Handle form submission logic with the updatedTask
      console.log(updatedTask);
    }
  };

  const handleDelete = (id: number) => {
    // Remove the task with the specified id from the tasks list
    const updatedTasks = tasks.filter((task) => task.id !== id);

    // Update the tasks list with new IDs
    const updatedTasksWithIds = updatedTasks.map((task, index) => ({
      ...task,
      id: index + 1,
    }));

    // Update the tasks list and clear the selected task and form values
    setTasks(updatedTasksWithIds);
    setSelectedTask(null);
    setFormValues({});
  };

  const handleClear=()=>{
    setSelectedTask(null);
    setFormValues({});
  }

  return (
    <div className="container">
      <ContentList tasks={tasks} handleTaskClick={handleTaskClick} handleDelete={handleDelete}/>
      <ContentDetails
        task={selectedTask}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleClear={handleClear}
      />
    </div>
  );
};

export default App;
