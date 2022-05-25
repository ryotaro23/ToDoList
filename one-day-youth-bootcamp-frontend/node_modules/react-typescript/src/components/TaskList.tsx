import React from 'react';
import { Task } from '../';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme:any) => ({
  title: {
    color: 'red',
    fontSize:100,
    fontWeight:'bold',
  },
  subTitle:{
    fontSize:20,
  },
}));

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

  const classes = useStyles();

  return (
    <ul>
      {tasks.map((task, index) => (
        <>
        <List>
          <ListItem key={`todo-${index}`} role={undefined} dense divider >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={task.isDone}
                tabIndex={-1}
                disableRipple
                onChange={(e) => handleCheckBox(e, index)}
              />
            </ListItemIcon>
            <ListItemText className={classes.title} primary={
              task.isDone ? <s>{task.label}{task.oneday}</s> : <i> {task.label}{task.oneday}</i>}/>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
    </List>
            </>
      ))}     
    </ul>
    
  );
};
