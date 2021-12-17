import React from 'react';
import { Task } from '../';
// import {Deadline} from '../'

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  newTaskLabel: string;
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>;
  deadline:string;
  setDeadline:React.Dispatch<React.SetStateAction<string>>;
  newDeadline:string;
  setNewDeadline:React.Dispatch<React.SetStateAction<string>>;
  
};
export const TaskForm: React.FC<Props> = ({
  tasks,
  setTasks,
  newTaskLabel,
  setNewTaskLabel,
  deadline,
  setDeadline,
  newDeadline,
  setNewDeadline
}) => {
  // フォームの値を保持する
  const handleNewTaskLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  };

  const handleNewDeadline = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDeadline(e.target.value);
  };
  console.log(newDeadline);


  // Task・deadlineの登録
  const handleAddTask = () => {
    const newTask = { label: newTaskLabel, isDone: false, oneday:newDeadline }
    setDeadline(newDeadline);
    setNewDeadline('');
    setTasks([...tasks, newTask]);
    setNewTaskLabel('');
  };




  // 完了したTaskを削除する
  const handleClearTasks = () => {
    const newTasks = tasks.filter((task) => !task.isDone);
    setTasks(newTasks);
  };

  return (
    <>
      <input
        onChange={handleNewTaskLabel}
        type="text"
        value={newTaskLabel}
        placeholder="Enter the task"
      /><br/>
         <input
        onChange={handleNewDeadline}
        type="date"
        value={newDeadline}   
      />
      <button onClick={handleAddTask}>Add</button>
      <br />
      <button onClick={handleClearTasks}>Clear</button>
    </>
  );
};