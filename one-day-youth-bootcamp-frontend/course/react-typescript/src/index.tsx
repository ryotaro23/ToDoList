import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { request } from "./server";
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { makeStyles } from '@material-ui/styles';
import moment from 'moment';

export type Task = { label: string; isDone: boolean; oneday:string};
// export type Deadline = { date: string; isDone: boolean };
const useStyles = makeStyles((theme:any) => ({
  title: {
    color: 'red',
    fontSize:40,
  },
  subTitle:{
    fontSize:20,
  },
}));


const App: React.VFC = () => {
  // タスクリストを格納する
  const [tasks, setTasks] = useState<Task[]>([]);
  // 追加前のタスクを格納する
  const [newTaskLabel, setNewTaskLabel] = useState<string>('');
  // 期限を格納する
  const [deadline, setDeadline] = useState<string>('');
  // 追加前のタスクを格納する
  const [newDeadline, setNewDeadline] = useState<string|null>(null);


  // ページマウント時にモックAPIからデータを取得
  useEffect(() => {
    request.fetchTasks((payload: Task[]) => setTasks(payload) );
  }, []);

  const classes = useStyles();
  const now = moment();
  const nowFormat = now.format('YYYY-MM-DD HH:mm:ss');

  return (
    <div style={{ width: '700px', margin: '0 auto' }}>
      {/* ヘッダー */}
      <h1 className={classes.title}>Tutorial Works</h1>
      <h2>React Todo List</h2><h3>Today:{nowFormat}</h3>

      {/* 一覧表示 */}
      <TaskList {...{ tasks, setTasks ,deadline ,setDeadline }} />

      {/* タスク追加、削除 */}
      <TaskForm {...{ tasks, setTasks, newTaskLabel, setNewTaskLabel,deadline,setDeadline,newDeadline,setNewDeadline, }} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));