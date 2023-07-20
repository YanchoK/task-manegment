
import React, { useState } from 'react';
import './App.css';
import { Task } from './interfaces/Task';
import ContentList from './components/contentList/ContentList';
import ContentDetails from './components/contentDetails/ContentDetails';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Calendar from './components/callender/Calendar';

const App: React.FC = () => {

  const addToDate = (days: number) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const nextDay = currentDay + days;
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDay);
    return nextDate;
  }

  const task1: Task = {
    id: 1,
    description: 'Edit',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: new Date(),
  };
  const task2: Task = {
    id: 2,
    description: 'Sellect and clear the task',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 2,
    dueDate: addToDate(1),
  };
  const task3: Task = {
    id: 3,
    description: 'Delete this task',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: addToDate(2),
  };
  const task4: Task = {
    id: 4,
    description: 'Last day',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: addToDate(-1),
  };
  const task5: Task = {
    id: 5,
    description: 'Forgot this one',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: addToDate(-2),
  };
  const task6: Task = {
    id: 6,
    description: 'Go to the fitness',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: addToDate(7),
  };
  const task7: Task = {
    id: 7,
    description: 'Go on a hike',
    assignee: 'Yancho',
    status: 'In progress',
    priority: 1,
    dueDate: addToDate(3),
  };
  // const task8: Task = {
  //   id: 8,
  //   description: 'Task 2',
  //   assignee: 'Yancho',
  //   status: 'In progress',
  //   priority: 1,
  //   dueDate: new Date(),
  // };
  // const task9: Task = {
  //   id: 9,
  //   description: 'Task 3',
  //   assignee: 'Yancho',
  //   status: 'In progress',
  //   priority: 1,
  //   dueDate: new Date(),
  // };

  const emptyTask: Task = {
    id: -1,
    description: '',
    assignee: '',
    status: '',
    priority: 1,
    dueDate: new Date(),
  };

  let taskInitial = [task1, task2, task3, task4, task5, task6, task7];

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

    const fieldElements = document.querySelectorAll('.form-input');

    // Loop through each element and add the new class "newClass"
    fieldElements.forEach((element) => {
      element.classList.add('used');
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

    const fieldElements = document.querySelectorAll('.form-input');

    // Loop through each element and add the new class "newClass"
    fieldElements.forEach((element) => {
      element.classList.remove('used');
    });
  };

  //TODO: If the list item is clicked, and then deleted, the details section form should be cleared.
  // TODO: when task is set done from the box and deleted, the done goes to the next task 

  return (
    <div className='wrapper'>
      <Navbar />
      <section className="container">
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
      </section>
      <section id='calendar' className='calendar-container'>
        <div className='calendar-wrapper'>
          <Calendar
            onSelectedTask={handleTaskSelection}
            tasks={tasks} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;