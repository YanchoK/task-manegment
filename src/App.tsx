// import React, { useState, useEffect } from 'react';

// export interface Task {
//   id: number;
//   description: string;
//   assignee: string;
//   status: string;
//   priority: number;
//   dueDate: Date;
// }

// const initialFormState: Task = {
//   id: 0,
//   description: '',
//   assignee: '',
//   status: '',
//   priority: 0,
//   dueDate: new Date(),
// };

// const TaskList: React.FC = () => {
//   const [tasks, setTasks] = useState<Task[]>([
//     {
//       id: 1,
//       description: 'Task 1',
//       assignee: 'John',
//       status: 'Pending',
//       priority: 1,
//       dueDate: new Date(),
//     },
//     {
//       id: 2,
//       description: 'Task 2',
//       assignee: 'Jane',
//       status: 'Completed',
//       priority: 2,
//       dueDate: new Date(),
//     },
//     {
//       id: 3,
//       description: 'Task 3',
//       assignee: 'Bob',
//       status: 'Pending',
//       priority: 3,
//       dueDate: new Date(),
//     },
//   ]);
//   const [formState, setFormState] = useState<Task>(initialFormState);

//   // const handleDelete = (taskId: number) => {
//   //   const updatedTasks = tasks.filter((task) => task.id !== taskId).map((task, index) => ({
//   //     ...task,
//   //     id: index + 1,
//   //   }));
//   //   setTasks(updatedTasks);
//   // };


//   const handleDelete = (taskId: number) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

//   useEffect(() => {
//     // console.log(tasks);
//   }, [tasks]);  

//   useEffect(() => {
//     if (tasks.find((task) => task.id === formState.id) === undefined) {
//       setFormState(initialFormState);
//       // console.log(tasks);
//     }
//   }, [tasks, formState.id]);


//   const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = event.target;
//     setFormState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleClearForm = () => {
//     setFormState(initialFormState);
//   };

//   const handleSaveTask = () => {
//     if (!formState.description || !formState.assignee || !formState.status) {
//       return;
//     }

//     if (formState.id === 0) {
//       // Adding a new task
//       const newTask: Task = {
//         ...formState,
//         id: tasks.length + 1,
//         dueDate: new Date(formState.dueDate),
//       };

//       setTasks((prevTasks) => [...prevTasks, newTask]);
//     } else {
//       // Editing an existing task
//       const updatedTasks = tasks.map((task) =>
//         task.id === formState.id ? { ...formState } : task
//       );

//       setTasks(updatedTasks);
//     }

//     setFormState(initialFormState);
//   };


//   const handleTaskClick = (task: Task) => {
//     setFormState(task);
//   };

//   return (
//     <div>
//       <h2>Task List</h2>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id} onClick={() => handleTaskClick(task)}>
//             <span>{task.description}</span>
//             <button onClick={() => handleDelete(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Add Task</h2>
//       <form>
//         <label>
//           Description:
//           <input
//             type="text"
//             name="description"
//             value={formState.description}
//             onChange={handleFormChange}
//           />
//         </label>
//         <br />
//         <label>
//           Assignee:
//           <input
//             type="text"
//             name="assignee"
//             value={formState.assignee}
//             onChange={handleFormChange}
//           />
//         </label>
//         <br />
//         <label>
//           Status:
//           <select name="status" value={formState.status} onChange={handleFormChange}>
//             <option value="">-- Select status --</option>
//             <option value="Pending">Pending</option>
//             <option value="Completed">Completed</option>
//           </select>
//         </label>
//         <br />
//         <label>
//           Priority:
//           <input
//             type="number"
//             name="priority"
//             value={formState.priority}
//             onChange={handleFormChange}
//           />
//         </label>
//         <br />
//         <label>
//           Due Date:
//           <input
//             type="date"
//             name="dueDate"
//             value={formState.dueDate.toISOString().slice(0, 10)}
//             onChange={handleFormChange}
//           />
//         </label>
//         <br />
//         <button type="button" onClick={handleSaveTask}>
//           Save
//         </button>
//         <button type="button" onClick={handleClearForm}>
//           Clear
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TaskList;


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
        <Footer />
    </div>
  );
};

export default App;