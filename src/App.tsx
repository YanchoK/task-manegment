
import React, { useState } from 'react';
import './App.css';
import { Task } from './interfaces/Task';
import ContentList from './components/contentList/ContentList';
import ContentDetails from './components/contentDetails/ContentDetails';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import DemoApp from './components/callender/DemoApp';

const App: React.FC = () => {
  const task1: Task = {
    id: 1,
    description: 'Task 1',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: new Date(),
  };
  const task2: Task = {
    id: 2,
    description: 'Task 2',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: new Date(),
  };
  const task3: Task = {
    id: 3,
    description: 'Task 3',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: new Date(),
  };
  const task4: Task = {
    id: 4,
    description: 'Task 1',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: new Date(),
  };
  const task5: Task = {
    id: 5,
    description: 'Task 2',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: new Date(),
  };
  const task6: Task = {
    id: 6,
    description: 'Task 3',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: new Date(),
  };
  const task7: Task = {
    id: 7,
    description: 'Task 1',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: new Date(),
  };
  const task8: Task = {
    id: 8,
    description: 'Task 2',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: new Date(),
  };
  const task9: Task = {
    id: 9,
    description: 'Task 3',
    assignee: 'Yancho',
    status: 'In progress',
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

  let taskInitial = [task1, task2, task3, task4, task5, task6, task7, task8, task9];

  const [tasks, setTasks] = useState(taskInitial);
  const [selectedTask, setTask] = useState<Task>(emptyTask);

  const handleSaveTask = (task: Task) => {
    console.log("handleSaveTask in App")
    let tasksLength = tasks.length + 1;
    task.id = tasksLength;
    let taskArray = [...tasks, task] as Task[];
    setTasks(taskArray);
  };

  const handleTaskUpdate = (task: Task) => {
    console.log("handleTaskUpdate in App")
    let taskIndex = tasks.findIndex((item) => item.id === task.id);
    let taskArr = [...tasks];
    let updatedTask = { ...tasks[taskIndex] };
    updatedTask = task;
    taskArr[taskIndex] = updatedTask;
    setTasks(taskArr);
  };

  const handleTaskSelection = (task: Task) => {
    console.log("handleTaskSelection in App")
    console.log(task)

    const fieldElements = document.querySelectorAll('.field');

    // Loop through each element and add the new class "newClass"
    fieldElements.forEach((element) => {
      element.classList.add('form-input');
    });

    setTask(task);
  };

  const handleTaskDelete = (taskId: number) => {
    console.log("handleTaskDelete in App")
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    const updatedTasksWithNewIds = updatedTasks.map((task, index) => ({
      ...task,
      id: index + 1,
    }));
    setTasks(updatedTasksWithNewIds);
    handleClear()
  };


  const handleClear = () => {
    console.log("handleClear in App")
    console.log(tasks)
    setTask(emptyTask);
  };

  //TODO: If the list item is clicked, and then deleted, the details section form should be cleared.
  // TODO: when task is set done from the box and deleted, the done goes to the next task 

  return (
    <div className='wrapper'>
      <Navbar />
      <div className="container">
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
      </div>
      <div className='calendar-container'>
        <DemoApp />
      </div>
      <Footer />
    </div>
  );
};

export default App;