import Button from '@material-ui/core/Button/Button';
import * as React from 'react';
import { Task } from '../';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import AddCircleIcon from '@material-ui/icons/AddCircle';



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
      <Button
        onClick={handleAddTask}
        variant="contained"
        color="primary"
        endIcon={<AddCircleIcon/>}
      >
        Add
      </Button>
      <br />
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={handleClearTasks}
      >
        Delete
      </Button>
    </>
    
  );
 
};