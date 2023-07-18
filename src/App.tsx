import React, { useState } from 'react';
import './App.css';
import { Task } from './interfaces/Task';
import ContentList from './components/contentList/ContentList';
import ContentDetails from './components/contentDetails/ContentDetails';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
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

  const emptyTask: Task = {
    id: -1,
    description: '',
    assignee: '',
    status: '',
    priority: 1,
    dueDate: new Date(),
  };

  let taskInitial = [task1, task2, task3];

  const [tasks, setTasks] = useState(taskInitial);
  const [selectedTask, setTask] = useState<Task>(emptyTask);

  const handleSaveTask = (task: Task) => {
    let tasksLength = tasks.length + 1;
    task.id = tasksLength;
    let taskArray = [...tasks, task] as Task[];
    setTasks(taskArray);
  };

  const handleTaskUpdate = (task: Task) => {
    let taskIndex = tasks.findIndex((item) => item.id === task.id);
    let taskArr = [...tasks];
    let updatedTask = { ...tasks[taskIndex] };
    updatedTask = task;
    taskArr[taskIndex] = updatedTask;
    setTasks(taskArr);
  };

  const handleTaskSelection = (task: Task) => {
    setTask(task);
  };

  const handleTaskDelete = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    const updatedTasksWithNewIds = updatedTasks.map((task, index) => ({
      ...task,
      id: index + 1,
    }));
    setTasks(updatedTasksWithNewIds);
    setTask(emptyTask);
  };
  

  const handleClear = () => {
    setTask(emptyTask);
  };

  return (
    <div className="container">
      <Navbar/>
      <ContentList
        tasks={tasks}
        onSelectedTask={handleTaskSelection}
        onDeletedTask={handleTaskDelete}
        onClear={handleClear}
      />
      <ContentDetails
        onSave={handleSaveTask}
        onUpdate={handleTaskUpdate}
        selectedTask={selectedTask}
        onClear={handleClear}
      />
      <Footer/>
    </div>
  );
};

export default App;