import React from 'react';
import { Task } from '../'
// import {Deadline} from '../'

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  deadline:string;
  setDeadline:React.Dispatch<React.SetStateAction<string>>;

};
export const TaskList: React.FC<Props> = ({ tasks, setTasks,deadline ,setDeadline }) => {
  // Taskの状態を切り替える
  const handleCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const newTasks = tasks.map((task, _i) => {
      return _i === i ? { ...task, isDone: e.target.checked } : task;
    });
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={`todo-${index}`}>
          {task.isDone ? <s>{task.label}{task.oneday}</s> : <i> {task.label}{task.oneday}</i>}

          <input
            onChange={(e) => handleCheckBox(e, index)}
            type="checkbox"
            checked={task.isDone}
          /> 
        </li>
      ))}
     
    </ul>
  );
};
